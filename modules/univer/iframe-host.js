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
	const OSW_REGEX = /^(?:[A-Z][a-zA-Z]+:)?OSW[a-f0-9]{32}$/;
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
		const localeMap = {
			'en': UB.LocaleType.EN_US,
			'de': UB.LocaleType.DE_DE,
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

	window.addEventListener('message', function (event) {
		const msg = event.data;
		if (!msg || typeof msg !== 'object') return;
		switch (msg.type) {
			case 'init':
				currentLocale = msg.locale || 'en';
				init(msg.workbookData, currentLocale);
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
		}
	});

	send({ type: 'ready' });
})();
