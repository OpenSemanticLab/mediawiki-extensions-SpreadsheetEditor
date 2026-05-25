/*@nomin*/

(function () {

	/**
	 * @class mw.SpreadsheetEditor
	 * @singleton
	 */
	mw.SpreadsheetEditor = {
	};

}());

$(document).ready(function () {
	if ($('.SpreadsheetEditor').length === 0) return; //only on pages with a SpreadsheetEditor-div
	$.when(
		mw.loader.using('oojs-ui-core'),
		mw.loader.using('ext.mwjson.util'),
		mw.loader.using('ext.mwjson.api'),
		mw.loader.using('ext.SpreadsheetEditor.univer'),
		mw.loader.using('ext.SpreadsheetEditor.adapter'),
		mw.loader.using('ext.SpreadsheetEditor.utils'),
		$.Deferred(function (deferred) {
			$(deferred.resolve);
		})
	).done(function () {
		const debug = false;
		if (debug) console.log("SpreadsheetEditor init with jquery " + jQuery.fn.jquery);
		if (debug) console.log("MwJson version " + mwjson.version);
		var editorOpen = false;
		var visualEditor = false;
		var selector = ".SpreadsheetEditor";
		mw.hook('ve.activationComplete').add(function () {
			console.log('ve.activationComplete in SpreadSheetEditor');
			$('.ve-ui-surface').find('.SpreadsheetEditor').each(function () {
				var $veElement = $(this);
				const config = $veElement.data('config') ? $veElement.data('config') : {};
				const fileName = config.file_title ? config.file_title : $veElement.text().split(';')[0];
				if (debug) console.log("Found " + fileName);
				var $element = $('.mw-parser-output').find(`div[data-filename="${fileName}"]`);
				if ($element.length) {
					if (debug) console.log("Found rendered image");
					moveElementToVeElement($element, $veElement);
				}
				visualEditor = true;
			});

			//$('.ve-ui-context').find('.oo-ui-popupWidget-popup').each(function(){
			/*$('.ve-ui-context').each(function(){
				console.log('add ve popup observer');
				const $targetNode = $(this);
				var editButton = new OO.ui.ButtonWidget({ label: 'Edit content' });
				var popup = new OO.ui.PopupWidget( { $content: $(`<div id="spreadsheet-editor-popup">Test</div>`), padded: true, width: 1000, height: 500, anchor: false});
				$( document.body ).append( popup.$element );
				var editorIndex = -1;
				editButton.on('click', function() {
					console.log("Edit button click");
					if (editorIndex > -1) {
						editorList[editorIndex].element.remove();
						//editorList[editorIndex].veElement.append(popup.$element);
						popup.$element.offset(editorList[editorIndex].veElement.offset());
						$('#spreadsheet-editor-popup').append(editorList[editorIndex].element.detach());
						popup.toggle( true );
						popup.$element.removeClass('oo-ui-element-hidden');
					}
				});
				var observer = new MutationObserver(function(){
					$dialog = $targetNode.find('.oo-ui-popupWidget-popup');
					
					if($dialog.is(":visible")) {
						console.log('popup visible');
						if ($dialog.find('.ve-ui-linearContextItem-body').first().text().includes("ELN/Editor/Spreadsheet")) {
							$dialog.find('.oo-ui-buttonGroupWidget').append(editButton.$element);
							editorList.forEach((editor, index) => {
								const yDiff = $dialog.offset().top - editor.veElement.offset().top;
								console.log("yDiff:" + yDiff);
								if (yDiff < 50) editorIndex = index;
							});
						}
					}
					else {
						console.log('popup not visible');
						editButton.$element.remove();
					}
				});
				observer.observe(this, { attributes: true});	
			});*/

		});

		var editorList = [];

		/**
		 * Generate preview image from Univer's rendered canvases.
		 * Univer uses multiple stacked canvas layers (background, cells, text,
		 * selection, headers). We composite them in DOM order onto a single
		 * canvas to capture the complete rendered view.
		 *
		 * Targets `.univer-app-container-canvas` to exclude the toolbar and
		 * formula bar — the preview should show only the sheet content.
		 */
		function generateCanvasPreview(containerId) {
			const editor = document.getElementById(containerId);
			if (!editor) return '';

			// Prefer the sheet-only container (no toolbar/formula bar).
			// Fall back to the editor itself if Univer's DOM structure changes.
			const container = editor.querySelector('.univer-app-container-canvas') || editor;

			const canvases = Array.from(container.querySelectorAll('canvas'));
			if (canvases.length === 0) return '';

			// Find the bounding box that covers all visible canvases
			const containerRect = container.getBoundingClientRect();
			let minLeft = Infinity, minTop = Infinity, maxRight = 0, maxBottom = 0;

			const layers = canvases.map(canvas => {
				const rect = canvas.getBoundingClientRect();
				const left = rect.left - containerRect.left;
				const top = rect.top - containerRect.top;
				const right = left + rect.width;
				const bottom = top + rect.height;
				if (rect.width > 0 && rect.height > 0) {
					minLeft = Math.min(minLeft, left);
					minTop = Math.min(minTop, top);
					maxRight = Math.max(maxRight, right);
					maxBottom = Math.max(maxBottom, bottom);
				}
				return { canvas: canvas, left: left, top: top, width: rect.width, height: rect.height };
			});

			if (!isFinite(minLeft)) return '';

			const width = Math.ceil(maxRight - minLeft);
			const height = Math.ceil(maxBottom - minTop);
			if (width === 0 || height === 0) return '';

			// Create composite canvas
			const composite = document.createElement('canvas');
			composite.width = width;
			composite.height = height;
			const ctx = composite.getContext('2d');

			// Fill white background (canvas is transparent by default)
			ctx.fillStyle = '#ffffff';
			ctx.fillRect(0, 0, width, height);

			// Draw each canvas layer in DOM order
			for (const layer of layers) {
				if (layer.width === 0 || layer.height === 0) continue;
				try {
					ctx.drawImage(
						layer.canvas,
						layer.left - minLeft,
						layer.top - minTop,
						layer.width,
						layer.height
					);
				} catch (e) {
					console.warn('Skipping canvas layer:', e);
				}
			}

			try {
				return composite.toDataURL('image/jpeg', 0.85);
			} catch (e) {
				console.warn('Failed to generate preview:', e);
				return '';
			}
		}

		function moveElementToVeElement($element, $veElement) {
			console.log("Found ve element at ");
			console.log($veElement.offset());
			$img = $element.find('img');
			if ($img.length) {
				console.log("move copy of img");
				$img_copy = $img.clone();
				$img_copy.attr('id', $img.attr('id') + "_copy");
				$veElement.text("");
				$img_copy.appendTo($veElement);
				$veElement.parent().removeClass('ve-hidden');
				editorList.push({ element: $element, veElement: $veElement });
			}
			//$veElement.append($(`#${id_prefix}-img-${uid}`));
			//$element.appendTo($veElement); //works, but VE is blocking user interaction
			$('.ve-ce-focusableNode').each(function () {
				var $overlay = $(this);
				if ($overlay.offset().top == $veElement.offset().top) {
					console.log("Found ve overlay at ");
					console.log($overlay.offset());
					$overlay.on('click', function (e) { console.log("Overlay clicked"); });
				}
			});
		}

		$('.SpreadsheetEditor').each(function () {
			var $element = $(this);
			if (visualEditor) console.log("Target VE");
			const config = $element.data('config') ? $element.data('config') : {};
			const fileName = config.file_title ? config.file_title : $element.text().split(';')[0];
			const fileDisplayName = config.file_label ? config.file_label : fileName.replace(".svg", "");
			const filePageName = "File:" + fileName;
			const filePage = mw.util.getUrl(filePageName);
			const fileUrl = mw.util.getUrl("Special:Redirect/file/" + fileName);
			var file_exists = false;
			$element.text("");
			$element.show();

			const uid = mwjson.util.getShortUid();//(performance.now().toString(36) + Math.random().toString(36)).replace(/\./g, "");
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
              <div id="${id_prefix}-placeholder-${uid}" class="DrawioEditorInfoBox" style="display:none;"><b>${fileDisplayName}</b><br>empty ${id_prefix} drawing</div>
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
              <div id="${id_prefix}-editor-${uid}" class="${id_prefix}-editor" style="width:100%; height:90%;"></div>
            </div>`;
			$element.css('max-width', '100%');
			$element.append(element_img_box_html);
			$element.append(element_editor_html);

			var pageObj = { exists: false, file: { exists: false, name: fileName } };
			mwjson.api.getFilePage(fileName).then((page) => {
				if (debug) console.log("File exists: " + page.exists);
				pageObj = page;

				if (page.exists && page.file.exists) {
					file_exists = true;
					pageObj.file.content = JSON.parse(pageObj.file.content);
					$(`#${id_prefix}-img-box-${uid}`).append(element_img_html);
					if (debug) console.log(page.file.content);
					$(`#${id_prefix}-img-${uid}`).attr('src', pageObj.file.content.preview);
					if (visualEditor) {
						$veElement = $('.ve-ui-surface').find(`.SpreadsheetEditor:contains(${pageObj.file.name})`);
						if ($veElement.length) {
							moveElementToVeElement($element, $veElement);
						}
					}
				}
				else $(`#${id_prefix}-placeholder-${uid}`).show();
			}, (error) => {
				if (debug) console.log(error);
				$(`#${id_prefix}-placeholder-${uid}`).show();
			});

			var upload_button = new OO.ui.ButtonWidget({
				label: 'Import XSLX',
				icon: 'upload'
			});
			$(`#${id_prefix}-buttons-${uid}`).append(upload_button.$element);

			var save_button = new OO.ui.ButtonWidget({
				label: 'Save'
			});
			$(`#${id_prefix}-buttons-${uid}`).append(save_button.$element);
			var close_button = new OO.ui.ButtonWidget({
				label: 'Close'
			});
			$(`#${id_prefix}-buttons-${uid}`).append(close_button.$element);

			const available_lang = ['en', 'de', 'zh'];
			var lang = 'en';
			const user_lang = mw.config.get('wgUserLanguage');
			if (available_lang.includes(user_lang)) lang = user_lang;

			// Map MediaWiki locale to Univer locale
			const localeMap = {
				'en': UniverBundle.LocaleType.EN_US,
				'de': UniverBundle.LocaleType.DE_DE,
				'zh': UniverBundle.LocaleType.ZH_CN
			};
			const univerLocale = localeMap[lang] || UniverBundle.LocaleType.EN_US;

			// Store Univer instance and API
			var univerInstance = null;
			var univerAPI = null;

			$(`#${id_prefix}-edit-link-${uid}`).on('click', function () {
				if (editorOpen) {
					mw.notify('Another editor is currently open. \nPlease save your work and close it first.', { title: 'Warning', type: 'warning' });
					return;
				}
				editorOpen = true;
				console.log($element);
				$element.css('resize', 'both');
				$element.css('overflow', 'auto');
				$(`#${id_prefix}-img-box-${uid}`).hide();
				$(`#${id_prefix}-box-${uid}`).show();

				// Initialize Univer with theme and locales
				univerInstance = new UniverBundle.Univer({
					theme: UniverBundle.defaultTheme,
					locale: univerLocale,
					locales: UniverBundle.locales
				});

				// Register plugins (order matters!)
				univerInstance.registerPlugin(UniverBundle.UniverRenderEnginePlugin);
				univerInstance.registerPlugin(UniverBundle.UniverFormulaEnginePlugin);
				univerInstance.registerPlugin(UniverBundle.UniverUIPlugin, {
					container: `${id_prefix}-editor-${uid}`
				});
				univerInstance.registerPlugin(UniverBundle.UniverDocsPlugin);
				univerInstance.registerPlugin(UniverBundle.UniverDocsUIPlugin);
				univerInstance.registerPlugin(UniverBundle.UniverSheetsPlugin);
				univerInstance.registerPlugin(UniverBundle.UniverSheetsUIPlugin);
				univerInstance.registerPlugin(UniverBundle.UniverSheetsFormulaPlugin);
				univerInstance.registerPlugin(UniverBundle.UniverSheetsNumfmtPlugin);

				// Get Facade API
				univerAPI = UniverBundle.FUniver.newAPI(univerInstance);

				// Load data using DataAdapter
				var workbookData;
				if (file_exists && pageObj.file.content) {
					workbookData = SpreadsheetEditor.DataAdapter.loadFromFile(pageObj.file.content);
				} else {
					workbookData = SpreadsheetEditor.DataAdapter.createEmptyWorkbook();
				}

				// Create workbook
				univerInstance.createUnit(UniverBundle.UniverInstanceType.UNIVER_SHEET, workbookData);
			});

			new ResizeObserver(() => {
				// Univer handles resize automatically via its container
				// No manual resize call needed
			}).observe($element[0]);


			var $upload = $(`#${id_prefix}-buttons-upload-${uid}`);
			upload_button.on('click', function () {
				// TODO: Implement Excel import using SheetJS (xlsx library)
				mw.notify('Excel import will be available in a future update. For now, please create spreadsheets directly in the editor.', {
					title: 'Feature Coming Soon',
					type: 'info'
				});
				// $upload.click(); // Temporarily disabled
			});
			// Excel import will be implemented with SheetJS in a future update
			/*$upload.on("change", function (evt) {
				var files = evt.target.files;
				if (files === null || files.length === 0) {
					if (debug) console.log("No files wait for import");
					return;
				}

				let name = files[0].name;
				if (debug) console.log("File upload: " + name);
				let suffixArr = name.split("."), suffix = suffixArr[suffixArr.length - 1];
				if (suffix != "xlsx") {
					if (debug) console.log("Currently only supports the import of xlsx files");
					return;
				}

				// TODO: Use SheetJS (xlsx) to read Excel file
				// TODO: Convert to Univer format using DataAdapter.excelToUniver()
				// TODO: Recreate Univer instance with new data
			});*/

			save_button.on('click', function () {
				close_button.setDisabled(true);

				// Get workbook data from Univer
				const activeWorkbook = univerAPI.getActiveWorkbook();
				if (!activeWorkbook) {
					mw.notify('No active workbook found', { type: 'error' });
					close_button.setDisabled(false);
					return;
				}

				const univerData = activeWorkbook.save();

				// Generate preview image directly from Univer's canvas
				// Univer renders to native <canvas> elements - capture the main one
				const preview = generateCanvasPreview(`${id_prefix}-editor-${uid}`);

				// Convert to storage format using DataAdapter
				pageObj.file.content = SpreadsheetEditor.DataAdapter.toStorageFormat(univerData, preview);
				pageObj.file.changed = true;
				pageObj.file.contentBlob = new Blob([JSON.stringify(pageObj.file.content)], {
					type: 'application/json'
				});

				mwjson.api.updatePage(pageObj, summary = `Edited with ${id_prefix}`).then((page) => {
					pageObj = page;
					if (debug) console.log(pageObj.file.name + ' has successfully uploaded.');
					mw.hook('spreadsheeteditor.file.uploaded').fire({ exists: file_exists, name: pageObj.file.name, label: fileDisplayName });
					file_exists = true;
					close_button.setDisabled(false);
				}, (error) => {
					if (debug) console.log(error);
					mw.notify('Error saving spreadsheet: ' + error, { type: 'error' });
					close_button.setDisabled(false);
				});
			});

			close_button.on('click', function () {
				// Dispose Univer instance
				if (univerInstance) {
					univerInstance.dispose();
					univerInstance = null;
					univerAPI = null;
				}

				$(`#${id_prefix}-img-box-${uid}`).show();
				$(`#${id_prefix}-box-${uid}`).hide();
				$element.css('resize', 'none');
				if (file_exists) {
					$(`#${id_prefix}-placeholder-${uid}`).hide();
					$(`#${id_prefix}-img-${uid}`).remove(); //prevent duplicates
					$(`#${id_prefix}-img-box-${uid}`).append(element_img_html);
					//force reload image
					$(`#${id_prefix}-img-${uid}`).attr('src', pageObj.file.content.preview);

				} else {
					//nothing to do here
				}
				if (debug) console.log("Close ");
				editorOpen = false;
			});
		});
		//});
	});
});
