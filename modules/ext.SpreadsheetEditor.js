/*@nomin*/

/**
 * SpreadsheetEditor — parent-side controller.
 *
 * Univer itself runs inside an iframe (modules/univer/index.html) for
 * full CSS / focus / scroll isolation. This file:
 *   - finds .SpreadsheetEditor placeholders on the page
 *   - shows the saved preview image + Edit button
 *   - on edit, opens the iframe and exchanges messages with it
 *   - handles all MediaWiki API calls (file load/save, label fetching)
 */

(function () {

	mw.SpreadsheetEditor = {};

}());

$(document).ready(function () {
	if ($('.SpreadsheetEditor').length === 0) return;

	$.when(
		mw.loader.using('oojs-ui-core'),
		mw.loader.using('ext.mwjson.util'),
		mw.loader.using('ext.mwjson.api'),
		mw.loader.using('ext.SpreadsheetEditor.adapter'),
		$.Deferred(function (deferred) { $(deferred.resolve); })
	).done(function () {
		const debug = false;
		if (debug) console.log("SpreadsheetEditor (iframe mode) init");

		var visualEditor = false;
		var editorList = [];

		mw.hook('ve.activationComplete').add(function () {
			$('.ve-ui-surface').find('.SpreadsheetEditor').each(function () {
				var $veElement = $(this);
				const config = $veElement.data('config') ? $veElement.data('config') : {};
				const fileName = config.file_title ? config.file_title : $veElement.text().split(';')[0];
				var $element = $('.mw-parser-output').find(`div[data-filename="${fileName}"]`);
				if ($element.length) moveElementToVeElement($element, $veElement);
				visualEditor = true;
			});
		});

		function moveElementToVeElement($element, $veElement) {
			const $img = $element.find('img');
			if ($img.length) {
				const $img_copy = $img.clone();
				$img_copy.attr('id', $img.attr('id') + "_copy");
				$veElement.text("");
				$img_copy.appendTo($veElement);
				$veElement.parent().removeClass('ve-hidden');
				editorList.push({ element: $element, veElement: $veElement });
			}
		}

		// Match wgUserLanguage against our supported set. Accept regional
		// variants too — e.g. `de-formal`, `de-DE`, `de-AT` all map to `de`.
		const available_lang = ['en', 'de', 'zh'];
		var lang = 'en';
		const user_lang = mw.config.get('wgUserLanguage') || '';
		const user_lang_prefix = user_lang.split('-')[0].toLowerCase();
		if (available_lang.includes(user_lang_prefix)) lang = user_lang_prefix;

		// Base path for our iframe — served as a static file by Apache,
		// no ResourceLoader involved.
		const iframeBase = mw.config.get('wgExtensionAssetsPath') +
			'/SpreadsheetEditor/modules/univer/index.html';

		$('.SpreadsheetEditor').each(function () {
			var $element = $(this);
			const config = $element.data('config') || {};
			const fileName = config.file_title ? config.file_title : $element.text().split(';')[0];
			const fileDisplayName = config.file_label ? config.file_label : fileName.replace(".json", "");
			const filePageName = "File:" + fileName;
			const filePage = mw.util.getUrl(filePageName);
			var file_exists = false;

			$element.text("");
			$element.show();

			const uid = mwjson.util.getShortUid();
			const id_prefix = "spreadsheet-editor";

			const element_img_box_html = `
				<div id="${id_prefix}-img-box-${uid}">
					<div align="right">
						<span class="mw-${id_prefix}">
							<span class="mw-editsection-bracket">[</span>
							<a id="${id_prefix}-edit-link-${uid}" href="javascript:void(0)">${mw.html.escape(mw.msg('spreadsheeteditor-button-edit'))}</a>
							<span class="mw-editsection-bracket">]</span>
						</span>
					</div>
					<div id="${id_prefix}-placeholder-${uid}" class="DrawioEditorInfoBox" style="display:none;">
						<b>${fileDisplayName}</b><br>empty ${id_prefix} drawing
					</div>
				</div>`;

			const element_img_html = `
				<a id="${id_prefix}-img-href-${uid}" href="${filePage}">
					<img id="${id_prefix}-img-${uid}" src="" title="${fileName}" alt="${fileName}" style="max-width:100%; max-height:${$element.css('height')}">
				</a>`;

			const element_editor_html = `
				<div id="${id_prefix}-box-${uid}" style="display:none; width:100%; height:100%;">
					<div id="${id_prefix}-buttons-${uid}" class="${id_prefix}-buttons" align="right">
						<input style="display:none;" type="file" id="${id_prefix}-buttons-upload-${uid}" name="spreadsheet-upload-${uid}"/>
					</div>
					<div id="${id_prefix}-iframe-box-${uid}" style="width:100%; height:90%;"></div>
				</div>`;

			$element.css('max-width', '100%');
			$element.append(element_img_box_html);
			$element.append(element_editor_html);

			var pageObj = { exists: false, file: { exists: false, name: fileName } };
			mwjson.api.getFilePage(fileName).then(function (page) {
				pageObj = page;
				if (page.exists && page.file.exists) {
					file_exists = true;
					pageObj.file.content = JSON.parse(pageObj.file.content);
					$(`#${id_prefix}-img-box-${uid}`).append(element_img_html);
					$(`#${id_prefix}-img-${uid}`).attr('src', pageObj.file.content.preview);
					if (visualEditor) {
						const $veElement = $('.ve-ui-surface').find(`.SpreadsheetEditor:contains(${pageObj.file.name})`);
						if ($veElement.length) moveElementToVeElement($element, $veElement);
					}
				} else {
					$(`#${id_prefix}-placeholder-${uid}`).show();
				}
			}, function (error) {
				if (debug) console.log(error);
				$(`#${id_prefix}-placeholder-${uid}`).show();
			});

			// Toggle the label-overlay on/off. When off, cells display raw
			// UUIDs (and the formula bar matches). When on (default), labels
			// are shown with italic blue styling and a corner marker.
			const labels_button = new OO.ui.ToggleButtonWidget({
				label: mw.msg('spreadsheeteditor-button-show-labels'),
				value: true,
				icon: 'tag'
			});
			$(`#${id_prefix}-buttons-${uid}`).append(labels_button.$element);

			const autocompletion_button = new OO.ui.ButtonWidget({
				label: mw.msg('spreadsheeteditor-button-autocompletion'),
				icon: 'search'
			});
			$(`#${id_prefix}-buttons-${uid}`).append(autocompletion_button.$element);

			const upload_button = new OO.ui.ButtonWidget({
				label: mw.msg('spreadsheeteditor-button-import-xlsx'),
				icon: 'upload'
			});
			$(`#${id_prefix}-buttons-${uid}`).append(upload_button.$element);

			const export_button = new OO.ui.ButtonWidget({
				label: mw.msg('spreadsheeteditor-button-export-xlsx'),
				icon: 'download'
			});
			$(`#${id_prefix}-buttons-${uid}`).append(export_button.$element);

			const save_button = new OO.ui.ButtonWidget({
				label: mw.msg('spreadsheeteditor-button-save')
			});
			$(`#${id_prefix}-buttons-${uid}`).append(save_button.$element);

			const close_button = new OO.ui.ButtonWidget({
				label: mw.msg('spreadsheeteditor-button-close')
			});
			$(`#${id_prefix}-buttons-${uid}`).append(close_button.$element);

			let iframe = null;
			let iframeReady = false;
			let editorOpen = false;
			let pendingSaveCallback = null;

			function sendToIframe(msg) {
				if (!iframe || !iframe.contentWindow) return;
				iframe.contentWindow.postMessage(msg, window.location.origin);
			}

			// Detect parent dark mode by checking <html>/<body> classes that
			// OSL extensions also key off (e.g. OpenSemanticLab's darkmode.css
			// uses `html.skin-citizen-dark` as its selector). Following the
			// same convention keeps the popup in sync with the rest of OSL.
			//
			// In Citizen's `skin-citizen-auto` mode the wiki may render dark
			// via OS preference, but OSL's own dark CSS doesn't kick in, so
			// we treat that as "light" too — staying visually consistent with
			// the OSL UI rather than the surrounding Citizen chrome.
			function detectDarkMode() {
				try {
					const html = document.documentElement;
					if (html.classList.contains('skin-citizen-dark')) return true;
					if (html.getAttribute('data-bs-theme') === 'dark') return true;
					if (html.classList.contains('theme-dark')) return true;
					if (html.classList.contains('dark')) return true;
					if (document.body && document.body.classList.contains('dark')) return true;
				} catch (e) { /* ignore */ }
				return false;
			}

			// Ask the iframe for its current cell selection in A1 notation.
			// Returns a promise that resolves with the string (or "").
			let pendingSelectionResolver = null;
			function requestSelectionFromIframe() {
				return new Promise(function (resolve) {
					pendingSelectionResolver = resolve;
					sendToIframe({ type: 'get-selection' });
					// Don't wait forever
					setTimeout(function () {
						if (pendingSelectionResolver === resolve) {
							pendingSelectionResolver = null;
							resolve('');
						}
					}, 500);
				});
			}

			// Fetch labels for the given UUIDs via SMW and push them into the
			// iframe. Coalescing and chunking happen here so the iframe stays
			// a thin client.
			const CHUNK = 30;
			function fetchAndPushLabels(uuids) {
				const unique = Array.from(new Set(uuids));
				if (unique.length === 0) return;
				const chunks = [];
				for (let i = 0; i < unique.length; i += CHUNK) {
					chunks.push(unique.slice(i, i + CHUNK));
				}
				Promise.all(chunks.map(c =>
					Promise.resolve(mwjson.api.getLabels(c)).catch(e => {
						console.warn('getLabels failed:', e);
						return {};
					})
				)).then(function (results) {
					const map = {};
					for (const part of results) {
						for (const key in part) {
							if (part[key]) map[key] = part[key];
						}
					}
					if (Object.keys(map).length) sendToIframe({ type: 'labels-update', map: map });
				});
			}

			// Autocompletion configs live in metadata.autocompletions[] on the
			// saved file. The iframe asks for fresh query results on every
			// keystroke; we run the SMW ask query here (mwjson handles auth /
			// cookies / etc.) and push the rows back.
			let autocompletions = [];

			function runAutocompleteQuery(queryTemplate, userInput) {
				// MwJson's autocomplete convention substitutes the user's input
				// into the `{{{user_input}}}` placeholder. SMW's :like operator
				// is case-sensitive, and HasNormalizedLabel stores values
				// lowercase — lowercase the input here so "Device" matches
				// the normalized label "device".
				const raw = userInput || '';
				const safeInput = raw.replace(/[\[\]|]/g, '').toLowerCase();
				const query = queryTemplate.replace(/\{\{\{user_input\}\}\}/g, safeInput);
				const url = mw.config.get('wgScriptPath') + '/api.php?action=ask&format=json&query=' +
					encodeURIComponent(query);
				return fetch(url, { credentials: 'same-origin' })
					.then(r => r.json())
					.then(data => parseAskResults(data));
			}

			function parseAskResults(askJson) {
				const out = [];
				const results = askJson && askJson.query && askJson.query.results;
				if (!results) return out;
				for (const key in results) {
					const r = results[key];
					const printouts = r.printouts || {};
					// label / description are stored as multilang records:
					// printouts.label[0].Text.item[0]
					const pickMultilang = function (field) {
						const arr = printouts[field];
						if (!arr || !arr.length) return '';
						const first = arr[0];
						if (first && first.Text && first.Text.item && first.Text.item.length) {
							return first.Text.item[0];
						}
						return typeof first === 'string' ? first : '';
					};
					out.push({
						uuid: r.fulltext || key,
						url: r.fullurl || '',
						displaytitle: r.displaytitle || r.fulltext,
						label: pickMultilang('label') || r.displaytitle || r.fulltext,
						description: pickMultilang('description'),
						type: (printouts.type && printouts.type[0]) || '',
						image: (printouts.image && printouts.image[0] && printouts.image[0].fulltext) || ''
					});
				}
				return out;
			}

			// Plain-DOM overlay dialog for managing autocompletion configs.
			function openAutocompletionDialog(prefilledRange) {
				const isDark = detectDarkMode();
				const $overlay = $('<div class="spreadsheet-editor-ac-overlay"></div>');
				const $dialog = $('<div class="spreadsheet-editor-ac-dialog"></div>');
				if (isDark) $dialog.addClass('dark');
				const $header = $('<div class="spreadsheet-editor-ac-header"></div>');
				$header.append($('<h3></h3>').text(mw.msg('spreadsheeteditor-ac-title')));
				const $closeX = $('<button class="spreadsheet-editor-ac-close-x" title="Close">×</button>');
				$header.append($closeX);
				const $list = $('<div class="spreadsheet-editor-ac-list"></div>');
				const $form = $('<div class="spreadsheet-editor-ac-form"></div>');
				const $footer = $('<div class="spreadsheet-editor-ac-footer"></div>');

				function rerender() {
					$list.empty();
					if (autocompletions.length === 0) {
						$list.append($('<p><em></em></p>').find('em').text(mw.msg('spreadsheeteditor-ac-empty-list')).end());
					}
					autocompletions.forEach(function (cfg, idx) {
						const $row = $('<div class="spreadsheet-editor-ac-item"></div>');
						const $title = $('<div></div>');
						$title.append($('<strong></strong>').text(cfg.label || '(unnamed)'));
						$title.append(' ');
						$title.append($('<code></code>').text(cfg.range));
						const $q = $('<div class="spreadsheet-editor-ac-query"></div>').text(cfg.queryTemplate);
						const $del = $('<button class="spreadsheet-editor-ac-del"></button>').text(mw.msg('spreadsheeteditor-ac-remove'));
						$del.on('click', function () {
							autocompletions.splice(idx, 1);
							sendToIframe({ type: 'set-autocompletions', configs: autocompletions });
							rerender();
						});
						$row.append($title).append($q).append($del);
						$list.append($row);
					});
				}
				rerender();

				const rangeInput = new OO.ui.TextInputWidget({
					placeholder: mw.msg('spreadsheeteditor-ac-range-placeholder'),
					value: prefilledRange || ''
				});
				const labelInput = new OO.ui.TextInputWidget({
					placeholder: mw.msg('spreadsheeteditor-ac-label-placeholder')
				});

				// Category quick-pick: typing here autocompletes a category
				// page; selecting one rebuilds the query template.
				const categoryInput = $('<input type="text" class="spreadsheet-editor-ac-category" />')
					.attr('placeholder', mw.msg('spreadsheeteditor-ac-category-placeholder'));
				createInlineAutocomplete(
					categoryInput,
					// `[[:Category:+]]` targets pages in the Category namespace
					// itself (the leading colon is the SMW syntax to specify
					// the namespace as the subject, not a categorization).
					'[[:Category:+]][[HasNormalizedLabel::like:*{{{user_input}}}*]]|?HasLabel=label|?HasImage=image|?HasDescription=description|limit=10',
					function (row) {
						queryInput.setValue(buildQueryTemplateForCategory(row.uuid));
						if (!labelInput.getValue()) labelInput.setValue(row.label || row.displaytitle);
					}
				);

				// Pre-fill the query template with a sensible default the user
				// can keep verbatim or tweak in place — not just a placeholder
				// hint, which would vanish on focus and force them to retype.
				const defaultQueryTemplate = '[[:Category:+]][[HasNormalizedLabel::like:*{{{user_input}}}*]]|?HasLabel=label|?HasImage=image|?HasDescription=description|?HasType.Display_title_of=type|limit=10';
				const queryInput = new OO.ui.MultilineTextInputWidget({
					value: defaultQueryTemplate,
					rows: 4
				});

				// Default-value picker: also uses an inline autocomplete, but
				// its options depend on the current query template (with
				// {{{user_input}}} replaced by empty string for an open list).
				const defaultInput = $('<input type="text" class="spreadsheet-editor-ac-default" />')
					.attr('placeholder', mw.msg('spreadsheeteditor-ac-default-placeholder'));
				createInlineAutocomplete(
					defaultInput,
					'',  // placeholder — we replace just-in-time below
					function () { /* set via data-uuid */ }
				);
				// Patch focus to use the current query template
				defaultInput.on('focus', function () {
					$(this).data('queryTemplate', queryInput.getValue());
				});
				// Override input handler — we need a dynamic template
				defaultInput.off('input').on('input', function () {
					const tmpl = queryInput.getValue();
					if (!tmpl) return;
					const v = $(this).val();
					runAutocompleteQuery(tmpl, v).then(function (rows) {
						const $existing = $('.spreadsheet-editor-ac-inline-drop');
						$existing.remove();
						const $dropdown = $('<div class="spreadsheet-editor-ac-inline-drop"></div>');
						if (isDark) $dropdown.addClass('dark');
						if (rows.length === 0) {
							$dropdown.append('<div class="empty"><em>No matches</em></div>');
						} else {
							rows.forEach(function (r) {
								const $row = $('<div class="row"></div>');
								$row.append($('<b></b>').text(r.label || r.displaytitle));
								if (r.type) $row.append($('<i></i>').text(' (' + r.type + ')'));
								$row.on('mousedown', function (e) {
									e.preventDefault();
									defaultInput.val(r.label || r.displaytitle).data('uuid', r.uuid);
									$dropdown.remove();
								});
								$dropdown.append($row);
							});
						}
						const rect = defaultInput[0].getBoundingClientRect();
						$dropdown.css({
							position: 'fixed',
							top: rect.bottom,
							left: rect.left,
							width: rect.width
						});
						$('body').append($dropdown);
					});
				});

				const addBtn = new OO.ui.ButtonWidget({
					label: mw.msg('spreadsheeteditor-ac-add'),
					flags: ['primary', 'progressive']
				});
				addBtn.on('click', function () {
					const range = (rangeInput.getValue() || '').trim();
					const queryTemplate = (queryInput.getValue() || '').trim();
					if (!range || !queryTemplate) {
						mw.notify(mw.msg('spreadsheeteditor-ac-range-required'), { type: 'warn' });
						return;
					}
					const cfg = {
						id: mwjson.util.getShortUid(),
						range: range,
						label: (labelInput.getValue() || '').trim(),
						queryTemplate: queryTemplate
					};
					const defaultUuid = defaultInput.data('uuid');
					if (defaultUuid) {
						cfg.defaultValue = defaultUuid;
					}
					autocompletions.push(cfg);
					sendToIframe({ type: 'set-autocompletions', configs: autocompletions });
					if (cfg.defaultValue) {
						sendToIframe({
							type: 'apply-default-value',
							range: cfg.range,
							value: cfg.defaultValue
						});
					}
					rangeInput.setValue('');
					labelInput.setValue('');
					queryInput.setValue(defaultQueryTemplate);
					categoryInput.val('');
					defaultInput.val('').removeData('uuid');
					rerender();
				});

				$form
					.append($('<label></label>').text(mw.msg('spreadsheeteditor-ac-range'))).append(rangeInput.$element)
					.append($('<label></label>').text(mw.msg('spreadsheeteditor-ac-label'))).append(labelInput.$element)
					.append($('<label></label>').text(mw.msg('spreadsheeteditor-ac-category'))).append(categoryInput)
					.append($('<p class="hint"></p>').text(mw.msg('spreadsheeteditor-ac-category-hint')))
					.append($('<label></label>').text(mw.msg('spreadsheeteditor-ac-query'))).append(queryInput.$element)
					// query-hint contains <code> markup so we use .html() with
					// the message text (translators are aware these tags exist)
					.append($('<p class="hint"></p>').html(mw.message('spreadsheeteditor-ac-query-hint').parse()))
					.append($('<label></label>').text(mw.msg('spreadsheeteditor-ac-default'))).append(defaultInput)
					.append($('<p class="hint"></p>').text(mw.msg('spreadsheeteditor-ac-default-hint')))
					.append(addBtn.$element);

				const doneBtn = new OO.ui.ButtonWidget({
					label: mw.msg('spreadsheeteditor-ac-done'),
					flags: ['primary']
				});
				$footer.append(doneBtn.$element);

				function close() {
					$('.spreadsheet-editor-ac-inline-drop').remove();
					$overlay.remove();
				}
				doneBtn.on('click', close);
				$closeX.on('click', close);
				$overlay.on('click', function (e) {
					if (e.target === $overlay[0]) close();
				});

				$dialog.append($header).append($list).append('<hr>').append($form).append($footer);
				$overlay.append($dialog);
				$('body').append($overlay);
			}

			autocompletion_button.on('click', function () {
				requestSelectionFromIframe().then(function (currentSelection) {
					openAutocompletionDialog(currentSelection);
				});
			});

			// Standard SMW query template used when the user picks a category
			// via the quick-pick. Substitutes {{{user_input}}} per keystroke.
			function buildQueryTemplateForCategory(categoryFullText) {
				return '[[' + categoryFullText + ']]' +
					'[[HasNormalizedLabel::like:*{{{user_input}}}*]]' +
					'|?HasLabel=label|?HasImage=image|?HasDescription=description' +
					'|?HasType.Display_title_of=type|limit=10';
			}

			// Tiny inline autocompletion widget used inside the config dialog
			// (e.g. for the category quick-pick or the default-value picker).
			// Reuses the same SMW-query flow as the in-cell popup. The dropdown
			// gets a `.dark` class when the parent is in dark mode — it lives
			// at body level (positioned absolutely) so it can't inherit the
			// dialog's class.
			function createInlineAutocomplete($input, queryTemplate, onSelect) {
				let $dropdown = null;
				let debounceTimer = null;
				const isDark = detectDarkMode();

				function close() {
					if ($dropdown) { $dropdown.remove(); $dropdown = null; }
				}
				function show(rows) {
					close();
					$dropdown = $('<div class="spreadsheet-editor-ac-inline-drop"></div>');
					if (isDark) $dropdown.addClass('dark');
					if (rows.length === 0) {
						$dropdown.append('<div class="empty"><em>No matches</em></div>');
					} else {
						rows.forEach(function (r) {
							const $row = $('<div class="row"></div>');
							$row.append($('<b></b>').text(r.label || r.displaytitle));
							if (r.type) $row.append($('<i></i>').text(' (' + r.type + ')'));
							$row.on('mousedown', function (e) {
								e.preventDefault();
								$input.val(r.label || r.displaytitle).data('uuid', r.uuid);
								close();
								onSelect(r);
							});
							$dropdown.append($row);
						});
					}
					// position:fixed matches the dialog (also fixed) so the
					// dropdown lands directly under the input regardless of
					// page scroll. getBoundingClientRect gives us viewport
					// coords that pair correctly with position:fixed.
					const rect = $input[0].getBoundingClientRect();
					$dropdown.css({
						position: 'fixed',
						top: rect.bottom,
						left: rect.left,
						width: rect.width
					});
					$('body').append($dropdown);
				}
				$input.on('input focus', function () {
					if (debounceTimer) clearTimeout(debounceTimer);
					const v = $input.val();
					debounceTimer = setTimeout(function () {
						runAutocompleteQuery(queryTemplate, v).then(show).catch(function () { close(); });
					}, 150);
				});
				$input.on('blur', function () { setTimeout(close, 200); });
			}

			window.addEventListener('message', function (event) {
				if (!iframe || event.source !== iframe.contentWindow) return;
				const msg = event.data;
				if (!msg || typeof msg !== 'object') return;
				switch (msg.type) {
					case 'ready':
						iframeReady = true;
						const workbookData = (file_exists && pageObj.file.content)
							? SpreadsheetEditor.DataAdapter.loadFromFile(pageObj.file.content)
							: SpreadsheetEditor.DataAdapter.createEmptyWorkbook();
						autocompletions = (pageObj.file.content
							&& pageObj.file.content.metadata
							&& Array.isArray(pageObj.file.content.metadata.autocompletions))
							? pageObj.file.content.metadata.autocompletions.slice()
							: [];
						sendToIframe({
							type: 'init',
							workbookData: workbookData,
							locale: lang,
							darkMode: detectDarkMode(),
							// Pass the localized popup strings — the iframe
							// doesn't have access to mw.msg directly.
							messages: {
								popupSearch: mw.msg('spreadsheeteditor-popup-search'),
								popupNoMatches: mw.msg('spreadsheeteditor-popup-no-matches'),
								popupHint: mw.msg('spreadsheeteditor-popup-hint')
							}
						});
						sendToIframe({ type: 'set-autocompletions', configs: autocompletions });
						break;

					case 'selection-response':
						if (pendingSelectionResolver) {
							const r = pendingSelectionResolver;
							pendingSelectionResolver = null;
							r(msg.range || '');
						}
						break;

					case 'labels-needed':
						fetchAndPushLabels(msg.uuids || []);
						break;

					case 'autocomplete-query':
						// iframe wants results for a query+userInput. Run it
						// and ship the rows back, tagged with the queryId so
						// the iframe matches it to the correct popup.
						runAutocompleteQuery(msg.queryTemplate, msg.userInput).then(function (rows) {
							sendToIframe({ type: 'autocomplete-results', queryId: msg.queryId, rows: rows });
							// Feed labels for the option UUIDs into the cache
							// so the cells (and the popup itself) can show
							// human-readable labels.
							const labelMap = {};
							for (const row of rows) {
								if (row.uuid && row.label) labelMap[row.uuid] = row.label;
							}
							if (Object.keys(labelMap).length) {
								sendToIframe({ type: 'labels-update', map: labelMap });
							}
						}).catch(function (err) {
							console.warn('autocomplete query failed:', err);
							sendToIframe({ type: 'autocomplete-results', queryId: msg.queryId, rows: [] });
						});
						break;

					case 'save-response':
						if (pendingSaveCallback) {
							const cb = pendingSaveCallback;
							pendingSaveCallback = null;
							cb(msg);
						}
						break;

					case 'import-success':
						mw.notify(mw.msg('spreadsheeteditor-notify-imported', msg.name), { type: 'info' });
						break;

					case 'error':
						console.error('SpreadsheetEditor iframe error:', msg.message);
						mw.notify(msg.message, { type: 'error' });
						break;
				}
			});

			$(`#${id_prefix}-edit-link-${uid}`).on('click', function () {
				if (editorOpen) {
					mw.notify(mw.msg('spreadsheeteditor-notify-editor-open'),
						{ type: 'warn' });
					return;
				}
				editorOpen = true;
				$element.css('resize', 'both');
				$element.css('overflow', 'hidden');
				$(`#${id_prefix}-img-box-${uid}`).hide();
				$(`#${id_prefix}-box-${uid}`).show();

				const $iframeBox = $(`#${id_prefix}-iframe-box-${uid}`);
				$iframeBox.empty();
				iframe = document.createElement('iframe');
				iframe.id = `${id_prefix}-iframe-${uid}`;
				iframe.src = iframeBase + '?v=' + mw.config.get('wgVersion');
				iframe.style.width = '100%';
				iframe.style.height = '100%';
				iframe.style.border = 'none';
				$iframeBox.append(iframe);
				iframeReady = false;
			});

			const $upload = $(`#${id_prefix}-buttons-upload-${uid}`);
			upload_button.on('click', function () { $upload.click(); });
			$upload.on('change', function (evt) {
				const files = evt.target.files;
				if (!files || !files.length) return;
				const file = files[0];
				const suffix = file.name.split('.').pop().toLowerCase();
				const isCsv = suffix === 'csv';
				if (suffix !== 'xlsx' && suffix !== 'xls' && !isCsv) {
					mw.notify(mw.msg('spreadsheeteditor-notify-unsupported-file'), { type: 'warn' });
					return;
				}
				sendToIframe({ type: isCsv ? 'import-csv' : 'import-xlsx', file: file });
				$upload.val('');
			});

			export_button.on('click', function () {
				const fileName = (fileDisplayName || 'spreadsheet').replace(/\.(json|xlsx|xls)$/i, '') + '.xlsx';
				sendToIframe({ type: 'export-xlsx', fileName: fileName });
			});

			labels_button.on('change', function (value) {
				sendToIframe({ type: 'labels-enabled', enabled: !!value });
			});

			save_button.on('click', function () {
				if (!iframeReady) {
					mw.notify(mw.msg('spreadsheeteditor-notify-not-ready'), { type: 'warn' });
					return;
				}
				close_button.setDisabled(true);
				pendingSaveCallback = function (response) {
					pageObj.file.content = SpreadsheetEditor.DataAdapter.toStorageFormat(response.data, response.preview);
					// Persist autocompletion configs alongside the workbook.
					pageObj.file.content.metadata = pageObj.file.content.metadata || {};
					pageObj.file.content.metadata.autocompletions = autocompletions;
					pageObj.file.changed = true;
					pageObj.file.contentBlob = new Blob([JSON.stringify(pageObj.file.content)], {
						type: 'application/json'
					});

					mwjson.api.updatePage(pageObj, `Edited with ${id_prefix}`).then(function (page) {
						pageObj = page;
						mw.hook('spreadsheeteditor.file.uploaded').fire({
							exists: file_exists,
							name: pageObj.file.name,
							label: fileDisplayName
						});
						file_exists = true;
						close_button.setDisabled(false);
					}, function (error) {
						mw.notify(mw.msg('spreadsheeteditor-notify-save-error', String(error)), { type: 'error' });
						close_button.setDisabled(false);
					});
				};
				sendToIframe({ type: 'save-request' });
			});

			close_button.on('click', function () {
				if (iframe) {
					$(iframe).remove();
					iframe = null;
				}
				iframeReady = false;
				pendingSaveCallback = null;

				$(`#${id_prefix}-img-box-${uid}`).show();
				$(`#${id_prefix}-box-${uid}`).hide();
				$element.css('resize', 'none');
				if (file_exists) {
					$(`#${id_prefix}-placeholder-${uid}`).hide();
					$(`#${id_prefix}-img-${uid}`).remove();
					$(`#${id_prefix}-img-box-${uid}`).append(element_img_html);
					$(`#${id_prefix}-img-${uid}`).attr('src', pageObj.file.content.preview);
				}
				editorOpen = false;
			});
		});
	});
});
