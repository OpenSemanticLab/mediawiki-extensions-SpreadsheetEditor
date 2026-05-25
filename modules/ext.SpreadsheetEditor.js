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

		const available_lang = ['en', 'de', 'zh'];
		var lang = 'en';
		const user_lang = mw.config.get('wgUserLanguage');
		if (available_lang.includes(user_lang)) lang = user_lang;

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
							<a id="${id_prefix}-edit-link-${uid}" href="javascript:void(0)">Edit</a>
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
				label: 'Show labels',
				value: true,
				icon: 'tag'
			});
			$(`#${id_prefix}-buttons-${uid}`).append(labels_button.$element);

			const upload_button = new OO.ui.ButtonWidget({ label: 'Import XLSX', icon: 'upload' });
			$(`#${id_prefix}-buttons-${uid}`).append(upload_button.$element);

			const export_button = new OO.ui.ButtonWidget({ label: 'Export XLSX', icon: 'download' });
			$(`#${id_prefix}-buttons-${uid}`).append(export_button.$element);

			const save_button = new OO.ui.ButtonWidget({ label: 'Save' });
			$(`#${id_prefix}-buttons-${uid}`).append(save_button.$element);

			const close_button = new OO.ui.ButtonWidget({ label: 'Close' });
			$(`#${id_prefix}-buttons-${uid}`).append(close_button.$element);

			let iframe = null;
			let iframeReady = false;
			let editorOpen = false;
			let pendingSaveCallback = null;

			function sendToIframe(msg) {
				if (!iframe || !iframe.contentWindow) return;
				iframe.contentWindow.postMessage(msg, window.location.origin);
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
						sendToIframe({ type: 'init', workbookData: workbookData, locale: lang });
						break;

					case 'labels-needed':
						fetchAndPushLabels(msg.uuids || []);
						break;

					case 'save-response':
						if (pendingSaveCallback) {
							const cb = pendingSaveCallback;
							pendingSaveCallback = null;
							cb(msg);
						}
						break;

					case 'import-success':
						mw.notify(`Imported ${msg.name}`, { type: 'info' });
						break;

					case 'error':
						console.error('SpreadsheetEditor iframe error:', msg.message);
						mw.notify(msg.message, { type: 'error' });
						break;
				}
			});

			$(`#${id_prefix}-edit-link-${uid}`).on('click', function () {
				if (editorOpen) {
					mw.notify('Another editor is currently open.\nPlease save your work and close it first.',
						{ title: 'Warning', type: 'warning' });
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
					mw.notify('Unsupported file type. Please upload .xlsx, .xls or .csv', { type: 'warn' });
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
					mw.notify('Editor not ready', { type: 'warn' });
					return;
				}
				close_button.setDisabled(true);
				pendingSaveCallback = function (response) {
					pageObj.file.content = SpreadsheetEditor.DataAdapter.toStorageFormat(response.data, response.preview);
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
						mw.notify('Error saving spreadsheet: ' + error, { type: 'error' });
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
