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
	if ($('.SpreadsheetEditor').length === 0) return; //only on pages with a WellplateEditor-div
	//const resource_path = "https://cdn.jsdelivr.net/npm/luckysheet@latest/";
	const resource_path = "https://repolab.github.io/Luckysheet/";
	mw.loader.load(resource_path + "dist/plugins/css/pluginsCss.css", 'text/css');
	mw.loader.load(resource_path + "dist/plugins/plugins.css", 'text/css');
	mw.loader.load(resource_path + "dist/css/luckysheet.css", 'text/css');
	mw.loader.load(resource_path + "dist/assets/iconfont/iconfont.css", 'text/css');
	$.when(
		$.getScript(resource_path + "dist/luckysheet.umd.js"),
		$.getScript(resource_path + "dist/plugins/js/plugin.js"),
		$.getScript(resource_path + "dist/luckyexcel.umd.js"),
		//$.getScript( "https://gliffy.github.io/canvas2svg/canvas2svg.js" ),
		$.getScript("https://html2canvas.hertzen.com/dist/html2canvas.min.js"),
		mw.loader.using('oojs-ui-core'),
		//mw.loader.using('ext.mwjson'),
		mw.loader.using('ext.mwjson.util'),
		mw.loader.using('ext.mwjson.api'),
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
				const fileName = $veElement.text().split(';')[0];
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
			const fileName = $element.text().split(';')[0];
			const fileDisplayName = fileName.replace(".svg", "");
			const filePageName = "File:" + fileName;
			const filePage = "/wiki/" + filePageName;
			const fileUrl = "/wiki/Special:Redirect/file/" + fileName;
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
			var options = {
				container: `${id_prefix}-editor-${uid}`, //container id
				lang: lang,
				showinfobar: false,
				showtoolbarConfig: { currencyFormat: false }
			};

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
				if (file_exists) options.data = pageObj.file.content.data;
				luckysheet.create(options);
			});
			new ResizeObserver(() => {
				if (editorOpen) luckysheet.resize();
			}).observe($element[0]);//document.getElementById(`${id_prefix}-editor-${uid}`));


			var $upload = $(`#${id_prefix}-buttons-upload-${uid}`);
			upload_button.on('click', function () {
				$upload.click(); //actual upload input is hidden so we simulate click
			});
			$upload.on("change", function (evt) {
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
				LuckyExcel.transformExcelToLucky(files[0], function (exportJson, luckysheetfile) {
					if (exportJson.sheets === null || exportJson.sheets.length === 0) {
						if (debug) console.log("Failed to read the content of the excel file, currently does not support xls files!");
						return;
					}
					window.luckysheet.destroy();
					options.data = exportJson.sheets;
					options.title = exportJson.info.name;
					options.userInfo = exportJson.info.name.creator;
					window.luckysheet.create(options);
				});
			});

			save_button.on('click', function () {
				close_button.setDisabled(true);
				pageObj.file.content = luckysheet.toJson();

				html2canvas($(`#${id_prefix}-editor-${uid}`).find(".luckysheet-grid-window").get(0), {
					//dpi: 300,
					scale: 4,
				}).then(canvas => {
					pageObj.file.content.preview = canvas.toDataURL('image/jpeg', 0.9);
					pageObj.file.changed = true;
					pageObj.file.contentBlob = new Blob([JSON.stringify(pageObj.file.content)], {
						type: 'application/json'
					});

					mwjson.api.updatePage(pageObj, summary = `Edited with ${id_prefix}`).then((page) => {
						pageObj = page;
						if (debug) console.log(pageObj.file.name + ' has sucessfully uploaded.');
						mw.hook('spreadsheeteditor.file.uploaded').fire({ exists: file_exists, name: pageObj.file.name });
						file_exists = true;
						close_button.setDisabled(false);
					}, (error) => {
						if (debug) console.log(error);
						close_button.setDisabled(false);
					});
				});
			});

			close_button.on('click', function () {
				window.luckysheet.destroy();
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
