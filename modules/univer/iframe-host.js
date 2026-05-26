/**
 * SpreadsheetEditor — iframe-side host
 *
 * Runs inside the editor iframe. Initializes Univer, renders the
 * spreadsheet, and exchanges messages with the parent window which
 * handles wiki API calls (file load/save, label fetching, etc.).
 *
 * Protocol — messages sent FROM parent:
 *   { type: 'init', workbookData, locale }
 *   { type: 'save-request', summary }
 *   { type: 'import-xlsx', file } | { type: 'import-csv', file }
 *   { type: 'export-xlsx', fileName }
 *   { type: 'labels-update', map: { uuid: label, ... } }
 *
 * Protocol — messages sent FROM iframe:
 *   { type: 'ready' }
 *   { type: 'save-response', data, preview }
 *   { type: 'labels-needed', uuids: [...] }
 *   { type: 'import-success', name } | { type: 'error', message }
 */

(function () {
	'use strict';

	// Force every focus() call inside this iframe to use {preventScroll:true}.
	//
	// Univer programmatically focuses a hidden <input> (the cell editor)
	// every time the user clicks a cell. Firefox's focus handler then runs
	// "scroll the focused element into view" — which, for a same-origin
	// iframe, walks up through the iframe boundary and scrolls the parent
	// wiki page. That's the Firefox "jump" we've been chasing.
	//
	// preventScroll:true tells the browser to focus without scrolling, at
	// the element's level AND in any ancestor scrollable contexts. Chromium
	// is more conservative about focus-scroll anyway, so this is a no-op
	// there. SvgEdit doesn't trip the same wire because its SVG canvas
	// doesn't focus an input on every click.
	const origFocus = HTMLElement.prototype.focus;
	HTMLElement.prototype.focus = function (opts) {
		try {
			return origFocus.call(this, Object.assign({}, opts, { preventScroll: true }));
		} catch (e) {
			return origFocus.call(this);
		}
	};
	// SVG elements have their own focus method on a separate prototype.
	if (typeof SVGElement !== 'undefined' && SVGElement.prototype.focus) {
		const origSvgFocus = SVGElement.prototype.focus;
		SVGElement.prototype.focus = function (opts) {
			try {
				return origSvgFocus.call(this, Object.assign({}, opts, { preventScroll: true }));
			} catch (e) {
				return origSvgFocus.call(this);
			}
		};
	}

	// Stop wheel events from propagating out of the iframe to the parent
	// wiki page. Firefox doesn't reliably honor `overscroll-behavior:
	// contain` across the iframe boundary — when Univer's own wheel
	// handlers don't preventDefault (e.g., over the toolbar/formula bar or
	// at the sheet's scroll edge), the browser then scrolls the iframe's
	// body, finds it can't (overflow:hidden), and chains the scroll up to
	// the parent document.
	//
	// We attach in the bubble phase so Univer's capture/target listeners
	// run first and complete their sheet-scroll logic. After they've had
	// their say, we preventDefault to stop the browser's default-scroll
	// chain. {passive:false} is required for preventDefault on wheel.
	window.addEventListener('wheel', function (e) {
		e.preventDefault();
	}, { passive: false });

	const UB = window.UniverBundle;
	if (!UB) {
		console.error('UniverBundle not loaded');
		return;
	}

	const parent = window.parent;
	let univerInstance = null;
	let univerAPI = null;

	// In-memory label cache (uuid -> label). Filled by parent via
	// 'labels-update' messages and read by the cell-content interceptor.
	const labelCache = new Map();
	// Match cells whose value is a wiki page reference we can look up.
	// Two shapes:
	//   - bare or namespaced OSW UUID: OSW…  /  Item:OSW…  /  Category:OSW…
	//   - human-named pages in OSL's known namespaces: Category:Item,
	//     Property:HasLabel, Template:Foo, etc.
	// We don't accept arbitrary "Foo:Bar" to avoid false positives like cell
	// ranges or random text.
	const OSW_REGEX = /^(?:(?:Category|Property|Item|Template|File|Help|User|Module|MediaWiki|Special):)?[A-Za-z0-9_\-]+$/;
	function isOswId(value) {
		if (typeof value !== 'string') return false;
		// Quick reject: skip plain words / numbers / cell refs (must contain
		// at least one of: a colon namespace OR the literal "OSW" prefix).
		if (!/^OSW[a-f0-9]{32}$/.test(value)
			&& !/^(Category|Property|Item|Template|File|Help|User|Module|MediaWiki|Special):/.test(value)) {
			return false;
		}
		return OSW_REGEX.test(value);
	}
	const requestedLabels = new Set();
	let labelsEnabled = true;  // Toggled via 'labels-enabled' from parent.

	function send(msg) {
		parent.postMessage(msg, '*');
	}

	function refreshSheet() {
		try {
			const wb = univerAPI && univerAPI.getActiveWorkbook();
			const sh = wb && wb.getActiveSheet();
			if (sh && sh.refreshCanvas) sh.refreshCanvas();
		} catch (e) { /* ignore */ }
	}

	function isOswId(value) {
		return typeof value === 'string' && OSW_REGEX.test(value);
	}

	// Collect any UUIDs we haven't asked the parent about yet and request
	// them in one batch via postMessage. Debounced — many cells share UUIDs.
	let requestTimer = null;
	const pendingRequest = new Set();
	function requestLabels(uuid) {
		if (requestedLabels.has(uuid) || labelCache.has(uuid)) return;
		requestedLabels.add(uuid);
		pendingRequest.add(uuid);
		if (requestTimer) return;
		requestTimer = setTimeout(function () {
			requestTimer = null;
			if (pendingRequest.size === 0) return;
			send({ type: 'labels-needed', uuids: Array.from(pendingRequest) });
			pendingRequest.clear();
		}, 30);
	}

	function init(workbookData, locale) {
		// Univer's built-in LocaleType doesn't include DE_DE — for German we
		// use our own string identifier (UB.DE_DE = 'deDE'), registered as a
		// key in UB.locales. LocaleService just looks up by string.
		const localeMap = {
			'en': UB.LocaleType.EN_US,
			'de': UB.DE_DE,
			'zh': UB.LocaleType.ZH_CN
		};
		const univerLocale = localeMap[locale] || UB.LocaleType.EN_US;

		univerInstance = new UB.Univer({
			theme: UB.defaultTheme,
			locale: univerLocale,
			locales: UB.locales
		});

		univerInstance.registerPlugin(UB.UniverRenderEnginePlugin);
		univerInstance.registerPlugin(UB.UniverFormulaEnginePlugin);
		univerInstance.registerPlugin(UB.UniverUIPlugin, { container: 'univer-app' });
		univerInstance.registerPlugin(UB.UniverDocsPlugin);
		univerInstance.registerPlugin(UB.UniverDocsUIPlugin);
		univerInstance.registerPlugin(UB.UniverSheetsPlugin);
		univerInstance.registerPlugin(UB.UniverSheetsUIPlugin);
		univerInstance.registerPlugin(UB.UniverSheetsFormulaPlugin);
		univerInstance.registerPlugin(UB.UniverSheetsFormulaUIPlugin);
		univerInstance.registerPlugin(UB.UniverSheetsNumfmtPlugin);
		univerInstance.registerPlugin(UB.UniverSheetsNumfmtUIPlugin);

		univerAPI = UB.FUniver.newAPI(univerInstance);

		univerInstance.createUnit(UB.UniverInstanceType.UNIVER_SHEET, workbookData);

		// Cell-content interceptor: swap UUIDs for cached labels at render
		// time only. Underlying cell.v stays the UUID.
		try {
			const injector = univerInstance.__getInjector();
			const interceptorService = injector.get(UB.SheetInterceptorService);
			const labelStyle = { it: 1, cl: { rgb: '#1c5aa6' } };
			const labelMarkers = { tl: { color: '#1c5aa6', size: 6 } };

			interceptorService.intercept(UB.INTERCEPTOR_POINT.CELL_CONTENT, {
				effect: UB.InterceptorEffectEnum.Value | UB.InterceptorEffectEnum.Style,
				priority: 100,
				handler: function (cell, location, next) {
					if (labelsEnabled && cell && isOswId(cell.v)) {
						const label = labelCache.get(cell.v);
						if (label) {
							return next(Object.assign({}, cell, {
								v: label,
								interceptorStyle: labelStyle,
								markers: labelMarkers
							}));
						}
						// Ask parent for it (deduped + debounced)
						requestLabels(cell.v);
					}
					return next(cell);
				}
			});

			// CRITICAL: The CELL_CONTENT interceptor above also affects the
			// value the cell editor sees when the user double-clicks a cell.
			// Without these two write-interceptors, opening the editor on a
			// UUID cell shows the label, and pressing Enter overwrites the
			// stored UUID with the label — silent data loss.
			//
			// BEFORE_CELL_EDIT: when the editor opens, give it the raw UUID
			// (from worksheet rawData) instead of the label.
			interceptorService.writeCellInterceptor.intercept(UB.BEFORE_CELL_EDIT, {
				priority: 100,
				handler: function (cell, location, next) {
					try {
						const raw = location.worksheet.getCellRaw(location.row, location.col);
						if (raw && isOswId(raw.v)) {
							return next(Object.assign({}, cell, { v: raw.v, p: null }));
						}
					} catch (e) { /* fall through */ }
					return next(cell);
				}
			});

			// AFTER_CELL_EDIT: defence in depth. If somehow the editor commits
			// with a value equal to the cached label of a UUID cell, restore
			// the original UUID instead of overwriting it.
			interceptorService.writeCellInterceptor.intercept(UB.AFTER_CELL_EDIT, {
				priority: 100,
				handler: function (cell, location, next) {
					try {
						const raw = location.worksheet.getCellRaw(location.row, location.col);
						if (raw && isOswId(raw.v) && labelCache.get(raw.v) === (cell && cell.v)) {
							return next(Object.assign({}, cell, { v: raw.v }));
						}
					} catch (e) { /* fall through */ }
					return next(cell);
				}
			});
		} catch (e) {
			console.warn('Could not register label interceptor:', e);
		}

		// Initial scan of the workbook for UUIDs so we batch a single
		// labels-needed request up front instead of one per cell.
		try {
			const seen = new Set();
			const sheets = (workbookData && workbookData.sheets) || {};
			for (const sheetId in sheets) {
				const cd = sheets[sheetId].cellData || {};
				for (const r in cd) {
					for (const c in cd[r]) {
						const v = cd[r][c] && cd[r][c].v;
						if (isOswId(v)) seen.add(v);
					}
				}
			}
			if (seen.size) {
				seen.forEach(u => requestedLabels.add(u));
				send({ type: 'labels-needed', uuids: Array.from(seen) });
			}
		} catch (e) { /* ignore */ }

		// React to user edits — if they paste/type a UUID, ask for its label.
		try {
			univerAPI.addEvent(univerAPI.Event.SheetValueChanged, function (params) {
				const ranges = params && params.effectedRanges;
				if (!ranges || !ranges.length) return;
				for (const range of ranges) {
					try {
						const values = range.getValues();
						for (const row of values) {
							for (const v of row) {
								if (isOswId(v)) requestLabels(v);
							}
						}
					} catch (e) { /* skip */ }
				}
			});
		} catch (e) { /* ignore */ }
	}

	/**
	 * Capture a JPEG preview by compositing every <canvas> inside the
	 * sheet content area onto one offscreen canvas. Excludes the toolbar
	 * and formula bar. Mirrors what we had in the parent before the
	 * iframe split.
	 */
	function generatePreview() {
		const container = document.querySelector('.univer-app-container-canvas') || document.body;
		const canvases = Array.from(container.querySelectorAll('canvas'));
		if (canvases.length === 0) return '';

		const containerRect = container.getBoundingClientRect();
		let minLeft = Infinity, minTop = Infinity, maxRight = 0, maxBottom = 0;
		const layers = canvases.map(canvas => {
			const rect = canvas.getBoundingClientRect();
			const left = rect.left - containerRect.left;
			const top = rect.top - containerRect.top;
			if (rect.width > 0 && rect.height > 0) {
				minLeft = Math.min(minLeft, left);
				minTop = Math.min(minTop, top);
				maxRight = Math.max(maxRight, left + rect.width);
				maxBottom = Math.max(maxBottom, top + rect.height);
			}
			return { canvas: canvas, left: left, top: top, width: rect.width, height: rect.height };
		});

		if (!isFinite(minLeft)) return '';
		const width = Math.ceil(maxRight - minLeft);
		const height = Math.ceil(maxBottom - minTop);
		if (!width || !height) return '';

		const composite = document.createElement('canvas');
		composite.width = width;
		composite.height = height;
		const ctx = composite.getContext('2d');
		ctx.fillStyle = '#ffffff';
		ctx.fillRect(0, 0, width, height);
		for (const layer of layers) {
			if (!layer.width || !layer.height) continue;
			try {
				ctx.drawImage(layer.canvas, layer.left - minLeft, layer.top - minTop, layer.width, layer.height);
			} catch (e) { /* skip */ }
		}
		try {
			return composite.toDataURL('image/jpeg', 0.85);
		} catch (e) {
			console.warn('Preview generation failed:', e);
			return '';
		}
	}

	function handleSaveRequest() {
		const wb = univerAPI && univerAPI.getActiveWorkbook();
		if (!wb) {
			send({ type: 'error', message: 'No active workbook' });
			return;
		}
		send({
			type: 'save-response',
			data: wb.save(),
			preview: generatePreview()
		});
	}

	function handleImport(file, isCsv) {
		const onSuccess = function (univerData) {
			try {
				if (univerInstance) {
					univerInstance.dispose();
					univerInstance = null;
					univerAPI = null;
				}
				init(univerData, currentLocale);
				send({ type: 'import-success', name: file.name });
			} catch (e) {
				send({ type: 'error', message: 'Failed to load imported data: ' + e.message });
			}
		};
		const onError = function (err) {
			send({ type: 'error', message: 'Import failed: ' + (err.message || err) });
		};
		if (isCsv) {
			UB.LuckyExcel.transformCsvToUniver(file, onSuccess, onError);
		} else {
			UB.LuckyExcel.transformExcelToUniver(file, onSuccess, onError);
		}
	}

	function handleExport(fileName) {
		const wb = univerAPI && univerAPI.getActiveWorkbook();
		if (!wb) {
			send({ type: 'error', message: 'No active workbook to export' });
			return;
		}
		UB.LuckyExcel.transformUniverToExcel({
			snapshot: wb.save(),
			fileName: fileName,
			success: function () { /* download triggered */ },
			error: function (err) {
				send({ type: 'error', message: 'Export failed: ' + (err.message || err) });
			}
		});
	}

	let currentLocale = 'en';

	// Strings localized by the parent and pushed in on `init`. Filled with
	// English defaults so the popup still works if init somehow omits them.
	const popupMessages = {
		popupSearch: 'Search',
		popupNoMatches: 'No matches.',
		popupHint: 'Type to search · press Enter to clear the cell · Esc to cancel'
	};

	// Autocompletion state
	let autocompletions = [];
	let currentPopup = null;
	let queryCounter = 0;
	const pendingQueries = new Map();
	// Tracked separately from SelectionChanged so we can answer the parent's
	// `get-selection` request even before any user interaction.
	let lastSelection = null;  // { startRow, startColumn, endRow, endColumn }

	function colToLetter(col) {
		let s = '';
		let n = col + 1;
		while (n > 0) {
			const r = (n - 1) % 26;
			s = String.fromCharCode(65 + r) + s;
			n = Math.floor((n - 1) / 26);
		}
		return s;
	}

	function selectionToA1(sel) {
		if (!sel) return '';
		const colA = colToLetter(sel.startColumn);
		const rowA = sel.startRow + 1;
		// Whole column? Univer reports endRow as the maximum possible row
		// when the user picks a whole column header.
		if (sel.endRow >= 1000000) {
			const colB = colToLetter(sel.endColumn);
			return colA + ':' + colB;
		}
		if (sel.endRow === sel.startRow && sel.endColumn === sel.startColumn) {
			return colA + rowA;
		}
		return colA + rowA + ':' + colToLetter(sel.endColumn) + (sel.endRow + 1);
	}

	// Detect dark mode by inspecting the parent window's <html> class.
	// Same-origin iframe -> we can read window.parent.document directly,
	// which means the detection is always live (no stale init flag).
	// Mirrors what OSL's darkmode.css keys off (`html.skin-citizen-dark`).
	function detectDarkModeFromParent() {
		try {
			const phtml = window.parent.document.documentElement;
			if (phtml.classList.contains('skin-citizen-dark')) return true;
			if (phtml.getAttribute('data-bs-theme') === 'dark') return true;
			if (phtml.classList.contains('theme-dark')) return true;
			if (phtml.classList.contains('dark')) return true;
			const pbody = window.parent.document.body;
			if (pbody && pbody.classList.contains('dark')) return true;
		} catch (e) { /* cross-origin / unavailable */ }
		return false;
	}

	function applyDarkMode(on) {
		if (on) {
			document.documentElement.classList.add('se-dark');
			document.body && document.body.classList.add('se-dark');
		} else {
			document.documentElement.classList.remove('se-dark');
			document.body && document.body.classList.remove('se-dark');
		}
	}

	// Parse an A1-style range like "B:B" or "B2:B100" into a bounding box.
	// Returns { sStart, cStart, rEnd, cEnd } in 0-indexed coords, with
	// Infinity meaning "unbounded".
	function parseRange(range) {
		const m = (range || '').toUpperCase().match(/^([A-Z]+)(\d*):([A-Z]+)(\d*)$/);
		if (!m) return null;
		const colToIdx = function (c) {
			let n = 0;
			for (let i = 0; i < c.length; i++) n = n * 26 + (c.charCodeAt(i) - 64);
			return n - 1;
		};
		return {
			rStart: m[2] ? parseInt(m[2], 10) - 1 : 0,
			cStart: colToIdx(m[1]),
			rEnd: m[4] ? parseInt(m[4], 10) - 1 : Infinity,
			cEnd: colToIdx(m[3])
		};
	}

	function findAutocompletionFor(sheetId, row, col) {
		for (const cfg of autocompletions) {
			if (cfg.sheetId && cfg.sheetId !== sheetId) continue;
			const r = parseRange(cfg.range);
			if (!r) continue;
			if (row >= r.rStart && row <= r.rEnd && col >= r.cStart && col <= r.cEnd) {
				return cfg;
			}
		}
		return null;
	}

	function closePopup() {
		if (currentPopup) {
			currentPopup.remove();
			currentPopup = null;
		}
	}

	function ensurePopupStyles() {
		if (document.getElementById('se-ac-styles')) return;
		const s = document.createElement('style');
		s.id = 'se-ac-styles';
		s.textContent = `
			.se-ac-popup { position: absolute; z-index: 10000; background: #fff;
				border: 1px solid #b8b8b8; box-shadow: 0 4px 16px rgba(0,0,0,0.15);
				border-radius: 4px; min-width: 280px; max-width: 480px;
				font-family: sans-serif; font-size: 13px; }
			.se-ac-popup-header { padding: 6px 10px; border-bottom: 1px solid #eee;
				background: #fafafa; }
			.se-ac-popup-header input { width: 100%; box-sizing: border-box;
				padding: 4px 6px; border: 1px solid #ccc; border-radius: 3px;
				background: #fff; color: #222; }
			.se-ac-popup-list { max-height: 280px; overflow-y: auto; }
			.se-ac-popup-row { padding: 8px 10px; border-bottom: 1px solid #f0f0f0;
				cursor: pointer; }
			.se-ac-popup-row:hover, .se-ac-popup-row.selected { background: #eef4ff; }
			.se-ac-popup-row b { display: block; color: #1c5aa6; }
			.se-ac-popup-row .desc { color: #555; font-size: 12px; }
			.se-ac-popup-row .type { color: #888; font-size: 11px; font-style: italic; }
			.se-ac-popup-empty { padding: 10px; color: #888; font-style: italic; }

			html.se-dark .se-ac-popup, body.se-dark .se-ac-popup {
				background: #1f1f1f; color: #e8e8e8; border-color: #444;
				box-shadow: 0 4px 16px rgba(0,0,0,0.6); }
			html.se-dark .se-ac-popup-header, body.se-dark .se-ac-popup-header {
				background: #2a2a2a; border-color: #3a3a3a; }
			html.se-dark .se-ac-popup-header input, body.se-dark .se-ac-popup-header input {
				background: #2a2a2a; color: #eee; border-color: #555; }
			html.se-dark .se-ac-popup-row, body.se-dark .se-ac-popup-row {
				border-color: #2a2a2a; }
			html.se-dark .se-ac-popup-row:hover, body.se-dark .se-ac-popup-row:hover,
			html.se-dark .se-ac-popup-row.selected, body.se-dark .se-ac-popup-row.selected {
				background: #2d4a6f; }
			html.se-dark .se-ac-popup-row b, body.se-dark .se-ac-popup-row b {
				color: #6ab0f3; }
			html.se-dark .se-ac-popup-row .desc, body.se-dark .se-ac-popup-row .desc {
				color: #bbb; }
			html.se-dark .se-ac-popup-empty, body.se-dark .se-ac-popup-empty {
				color: #888; }
		`;
		document.head.appendChild(s);
	}

	function writeCellValue(row, col, value) {
		try {
			const wb = univerAPI && univerAPI.getActiveWorkbook();
			const sh = wb && wb.getActiveSheet();
			if (sh) {
				sh.getRange(row, col).setValue(value);
			}
		} catch (e) {
			console.warn('writeCellValue failed:', e);
		}
	}

	function requestQuery(queryTemplate, userInput) {
		queryCounter++;
		const queryId = 'q' + queryCounter;
		return new Promise(function (resolve) {
			pendingQueries.set(queryId, resolve);
			send({ type: 'autocomplete-query', queryId: queryId, queryTemplate: queryTemplate, userInput: userInput });
		});
	}

	function openPopupForCell(cfg, cellRow, cellCol, anchorEl) {
		closePopup();
		ensurePopupStyles();
		// Re-check parent dark mode every time the popup opens so theme
		// toggles between editor sessions are picked up correctly.
		applyDarkMode(detectDarkModeFromParent());

		const popup = document.createElement('div');
		popup.className = 'se-ac-popup';
		const placeholder = (cfg.label || popupMessages.popupSearch) + '…';
		popup.innerHTML = `
			<div class="se-ac-popup-header">
				<input type="text" />
			</div>
			<div class="se-ac-popup-list"></div>
		`;
		popup.querySelector('input').placeholder = placeholder;
		document.body.appendChild(popup);
		currentPopup = popup;

		// Position the popup directly under the active cell. Univer exposes
		// the cell's pixel rect via fRange.getCellRect(); fall back to a
		// fixed corner if the API isn't available or returns invalid coords.
		let positioned = false;
		try {
			const wb = univerAPI && univerAPI.getActiveWorkbook();
			const sh = wb && wb.getActiveSheet();
			if (sh) {
				const rect = sh.getRange(cellRow, cellCol).getCellRect();
				if (rect && rect.width > 0) {
					// Place under the cell by default. If that would overflow
					// the viewport bottom, flip above the cell instead.
					const popupH = 280;  // rough estimate; the list is scrollable
					const popupW = 320;
					let top = rect.bottom + 2;
					if (top + popupH > window.innerHeight && rect.top - popupH - 2 > 0) {
						top = rect.top - popupH - 2;
					}
					let left = rect.left;
					if (left + popupW > window.innerWidth) {
						left = Math.max(0, window.innerWidth - popupW - 4);
					}
					popup.style.top = top + 'px';
					popup.style.left = left + 'px';
					positioned = true;
				}
			}
		} catch (e) { /* fall through to default position */ }
		if (!positioned) {
			popup.style.top = '60px';
			popup.style.left = '20px';
		}

		const input = popup.querySelector('input');
		const list = popup.querySelector('.se-ac-popup-list');
		let debounceTimer = null;
		let fireSeq = 0;
		let lastSeq = 0;
		let selectedIdx = -1;
		let currentRows = [];

		function escapeHtml(s) {
			return String(s).replace(/[&<>"']/g, c => ({
				'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
			}[c]));
		}

		function render(rows) {
			list.innerHTML = '';
			selectedIdx = -1;
			if (!rows.length) {
				// Empty-state copy is different depending on whether the user
				// has typed: empty input + Enter is the "clear cell" gesture,
				// so we hint at that. Strings are localized by the parent.
				const text = input.value === '' ? popupMessages.popupHint : popupMessages.popupNoMatches;
				const div = document.createElement('div');
				div.className = 'se-ac-popup-empty';
				div.textContent = text;
				list.appendChild(div);
				return;
			}
			rows.forEach(function (resultRow, idx) {
				const item = document.createElement('div');
				item.className = 'se-ac-popup-row';
				item.dataset.idx = idx;
				const desc = resultRow.description
					? `<div class="desc">${escapeHtml(resultRow.description.substring(0, 140))}${resultRow.description.length > 140 ? '…' : ''}</div>`
					: '';
				const type = resultRow.type ? `<div class="type">${escapeHtml(resultRow.type)}</div>` : '';
				item.innerHTML = `<b>${escapeHtml(resultRow.label || resultRow.displaytitle)}</b>${desc}${type}`;
				item.addEventListener('mousedown', function (e) {
					e.preventDefault();
					commit(resultRow);
				});
				list.appendChild(item);
			});
		}

		function fire(userInput) {
			if (debounceTimer) clearTimeout(debounceTimer);
			debounceTimer = setTimeout(function () {
				const mySeq = ++fireSeq;
				lastSeq = mySeq;
				// Resolve {{{cell:X}}} / {{{col:X}}} refs against the workbook
				// BEFORE shipping the query off to the parent. The parent only
				// substitutes {{{user_input}}}, it can't see other cells.
				const resolved = substituteCellRefs(cfg.queryTemplate, cellRow);
				requestQuery(resolved, userInput).then(function (rows) {
					if (lastSeq !== mySeq) return;
					currentRows = rows;
					render(rows);
				});
			}, 150);
		}

		function commit(resultRow) {
			writeCellValue(cellRow, cellCol, resultRow.uuid);
			closePopup();
		}

		// If the cell already holds a UUID we have a label for, pre-fill the
		// input with that label so the user starts from where they were.
		const currentValue = readCellRaw(cellRow, cellCol);
		let initialInput = '';
		if (currentValue && OSW_REGEX.test(currentValue)) {
			initialInput = labelCache.get(currentValue) || currentValue;
		} else if (currentValue) {
			initialInput = currentValue;
		}
		input.value = initialInput;

		input.addEventListener('input', function () { fire(input.value); });
		input.addEventListener('keydown', function (e) {
			if (e.key === 'Escape') { closePopup(); return; }
			if (e.key === 'ArrowDown') {
				e.preventDefault();
				selectedIdx = Math.min(currentRows.length - 1, selectedIdx + 1);
				updateSelection();
			} else if (e.key === 'ArrowUp') {
				e.preventDefault();
				selectedIdx = Math.max(0, selectedIdx - 1);
				updateSelection();
			} else if (e.key === 'Enter') {
				e.preventDefault();
				// Empty input + Enter clears the cell. Otherwise commit
				// the highlighted result if there is one.
				if (input.value === '') {
					writeCellValue(cellRow, cellCol, '');
					closePopup();
				} else if (selectedIdx >= 0 && currentRows[selectedIdx]) {
					commit(currentRows[selectedIdx]);
				}
			}
		});
		function updateSelection() {
			const items = list.querySelectorAll('.se-ac-popup-row');
			items.forEach(function (el, idx) {
				el.classList.toggle('selected', idx === selectedIdx);
				if (idx === selectedIdx) el.scrollIntoView({ block: 'nearest' });
			});
		}

		// Close on click outside the popup.
		setTimeout(function () {
			const onDocClick = function (e) {
				if (!popup.contains(e.target)) {
					closePopup();
					document.removeEventListener('mousedown', onDocClick, true);
				}
			};
			document.addEventListener('mousedown', onDocClick, true);
		}, 0);

		input.focus();
		input.select();  // pre-select so the user can just type to replace
		fire(input.value);  // initial query uses current label / value if any
	}

	let selectionListenerInstalled = false;
	function setupAutocompletionListener() {
		if (!univerAPI || selectionListenerInstalled) return;
		try {
			// Listen for selection changes; if the new active cell falls
			// inside an autocompletion range, open the popup.
			// Univer's ISelectionEventParams: { selections: IRange[] } where
			// each IRange has startRow / endRow / startColumn / endColumn.
			univerAPI.addEvent(univerAPI.Event.SelectionChanged, function (params) {
				const range = params && params.selections && params.selections[0];
				if (!range) return;
				// Stash the latest selection so the parent can ask for it
				// later (e.g. to pre-fill the config dialog's Range field).
				lastSelection = range;
				if (currentPopup) return;  // popup already open for this cell
				try {
					const wb = univerAPI.getActiveWorkbook();
					const sh = wb && wb.getActiveSheet();
					if (!sh) return;
					const sheetId = sh.getSheetId ? sh.getSheetId() : null;
					const row = range.startRow;
					const col = range.startColumn;
					// Only fire on single-cell selection — not while the user
					// is dragging out a range.
					if (range.endRow !== row || range.endColumn !== col) return;
					const cfg = findAutocompletionFor(sheetId, row, col);
					if (cfg) {
						// Anchor element refinement (to position popup at the
						// cell's screen rect) is a follow-up; for now the
						// popup falls back to a fixed offset in the iframe.
						openPopupForCell(cfg, row, col, null);
					}
				} catch (e) { /* ignore */ }
			});
			selectionListenerInstalled = true;
		} catch (e) {
			console.warn('Could not register selection listener for autocompletion:', e);
		}
	}

	// Read a cell's RAW value, bypassing the cell-content interceptor that
	// rewrites UUIDs to labels. The facade's getRange().getValue() goes
	// through interceptors — for cell-reference substitution in queries we
	// need the original stored value (the UUID), not the displayed label.
	function readCellRaw(row, col) {
		try {
			const wb = univerAPI && univerAPI.getActiveWorkbook();
			const fSheet = wb && wb.getActiveSheet();
			// _worksheet is the internal Worksheet object exposing getCellRaw,
			// which reads the underlying snapshot without the interceptor.
			const ws = fSheet && fSheet._worksheet;
			if (ws && typeof ws.getCellRaw === 'function') {
				const cell = ws.getCellRaw(row, col);
				if (cell && cell.v != null) return String(cell.v);
				return '';
			}
			// Fallback for older facade shapes — still goes through the
			// interceptor but better than nothing.
			if (fSheet) {
				const v = fSheet.getRange(row, col).getValue();
				return v == null ? '' : String(v);
			}
		} catch (e) { /* ignore */ }
		return '';
	}

	// Substitute {{{cell:A1}}} and {{{col:A}}} placeholders in a query template
	// with values read from the workbook. `currentRow` is the row of the cell
	// the popup is editing (used for {{{col:X}}} same-row references).
	function substituteCellRefs(template, currentRow) {
		return template
			.replace(/\{\{\{cell:([A-Z]+)(\d+)\}\}\}/g, function (_, col, row) {
				let n = 0;
				for (let i = 0; i < col.length; i++) n = n * 26 + (col.charCodeAt(i) - 64);
				return readCellRaw(parseInt(row, 10) - 1, n - 1);
			})
			.replace(/\{\{\{col:([A-Z]+)\}\}\}/g, function (_, col) {
				let n = 0;
				for (let i = 0; i < col.length; i++) n = n * 26 + (col.charCodeAt(i) - 64);
				return readCellRaw(currentRow, n - 1);
			});
	}

	window.addEventListener('message', function (event) {
		const msg = event.data;
		if (!msg || typeof msg !== 'object') return;
		switch (msg.type) {
			case 'init':
				currentLocale = msg.locale || 'en';
				applyDarkMode(!!msg.darkMode);
				if (msg.messages) Object.assign(popupMessages, msg.messages);
				init(msg.workbookData, currentLocale);
				break;
			case 'set-dark-mode':
				applyDarkMode(!!msg.darkMode);
				break;
			case 'get-selection':
				// Parent wants the current A1 selection (e.g. to pre-fill
				// the autocompletion config dialog's Range field).
				send({ type: 'selection-response', range: selectionToA1(lastSelection) });
				break;
			case 'apply-default-value':
				// Fill every empty cell in `range` with `value`. Used when the
				// user adds an autocompletion config with a default selected.
				try {
					const r = parseRange(msg.range);
					if (r) {
						const wb = univerAPI && univerAPI.getActiveWorkbook();
						const sh = wb && wb.getActiveSheet();
						if (sh) {
							const maxRow = (r.rEnd === Infinity) ? Math.min(999, sh.getMaxRows() - 1) : r.rEnd;
							for (let row = r.rStart; row <= maxRow; row++) {
								for (let col = r.cStart; col <= r.cEnd; col++) {
									const current = sh.getRange(row, col).getValue();
									if (current == null || current === '') {
										sh.getRange(row, col).setValue(msg.value);
									}
								}
							}
						}
					}
				} catch (e) {
					console.warn('apply-default-value failed:', e);
				}
				break;
			case 'save-request':
				handleSaveRequest();
				break;
			case 'import-xlsx':
				handleImport(msg.file, false);
				break;
			case 'import-csv':
				handleImport(msg.file, true);
				break;
			case 'export-xlsx':
				handleExport(msg.fileName || 'spreadsheet.xlsx');
				break;
			case 'labels-update':
				if (msg.map && typeof msg.map === 'object') {
					for (const uuid in msg.map) {
						if (msg.map[uuid]) labelCache.set(uuid, msg.map[uuid]);
					}
					refreshSheet();
				}
				break;
			case 'labels-enabled':
				labelsEnabled = !!msg.enabled;
				refreshSheet();
				break;
			case 'set-autocompletions':
				autocompletions = Array.isArray(msg.configs) ? msg.configs : [];
				// (Re)attach the selection listener — safe to call multiple
				// times since Univer dedupes listener registration internally.
				setupAutocompletionListener();
				break;
			case 'autocomplete-results':
				const resolve = pendingQueries.get(msg.queryId);
				if (resolve) {
					pendingQueries.delete(msg.queryId);
					resolve(Array.isArray(msg.rows) ? msg.rows : []);
				}
				break;
		}
	});

	send({ type: 'ready' });
})();
