/**
 * SpreadsheetEditor Data Adapter
 *
 * Handles data format transformation between:
 * - Lucksheet (legacy) format
 * - Univer (current) format
 * - Excel files (via SheetJS)
 *
 * @author Simon Stier
 * @license AGPL-3.0
 */

(function () {
	'use strict';

	const DataAdapter = {
		/**
		 * Detect file format version
		 * @param {Object} content - File content from MwJson
		 * @returns {number} Version (1=lucksheet, 2=univer)
		 */
		detectVersion: function (content) {
			if (!content || typeof content !== 'object') {
				return 1; // Default to legacy
			}

			if (content.version === 2 && content.engine === 'univer') {
				return 2;
			}

			// Lucksheet format has data array
			if (content.data && Array.isArray(content.data)) {
				return 1;
			}

			return 1; // Default to legacy
		},

		/**
		 * Transform Lucksheet format to Univer format
		 * @param {Object} luckysheetData - Lucksheet data structure
		 * @returns {Object} Univer IWorkbookData
		 */
		transformToUniver: function (luckysheetData) {
			if (!luckysheetData || !Array.isArray(luckysheetData)) {
				console.warn('Invalid lucksheet data, creating empty workbook');
				return this.createEmptyWorkbook();
			}

			const workbook = {
				id: 'workbook-' + Date.now(),
				locale: 'en-US',
				name: 'Spreadsheet',
				sheetOrder: [],
				styles: {},
				sheets: {}
			};

			luckysheetData.forEach((luckySheet, index) => {
				const sheetId = 'sheet-' + index;
				workbook.sheetOrder.push(sheetId);

				const sheet = {
					id: sheetId,
					name: luckySheet.name || ('Sheet' + (index + 1)),
					tabColor: luckySheet.color || '',
					hidden: luckySheet.hide === 1 ? 1 : 0,
					rowCount: luckySheet.row || 100,
					columnCount: luckySheet.column || 26,
					zoomRatio: luckySheet.zoomRatio || 1,
					scrollTop: luckySheet.scrollTop || 0,
					scrollLeft: luckySheet.scrollLeft || 0,
					defaultColumnWidth: luckySheet.defaultColWidth || 73,
					defaultRowHeight: luckySheet.defaultRowHeight || 19,
					cellData: {}
				};

				// Transform celldata array to Univer's cellData object
				if (luckySheet.celldata && Array.isArray(luckySheet.celldata)) {
					luckySheet.celldata.forEach(cell => {
						const row = cell.r;
						const col = cell.c;
						const value = cell.v;

						if (!sheet.cellData[row]) {
							sheet.cellData[row] = {};
						}

						sheet.cellData[row][col] = {
							v: value && value.v !== undefined ? value.v : value,
							// TODO: Transform styles, formulas, etc.
							// This is a basic transformation - enhance as needed
						};

						if (value && value.f) {
							sheet.cellData[row][col].f = value.f;
						}
					});
				}

				workbook.sheets[sheetId] = sheet;
			});

			return workbook;
		},

		/**
		 * Create an empty Univer workbook
		 * @returns {Object} Empty IWorkbookData
		 */
		createEmptyWorkbook: function () {
			return {
				id: 'workbook-' + Date.now(),
				locale: 'en-US',
				name: 'Spreadsheet',
				sheetOrder: ['sheet-0'],
				styles: {},
				sheets: {
					'sheet-0': {
						id: 'sheet-0',
						name: 'Sheet1',
						hidden: 0,
						rowCount: 100,
						columnCount: 26,
						defaultColumnWidth: 73,
						defaultRowHeight: 19,
						cellData: {}
					}
				}
			};
		},

		/**
		 * Transform Univer workbook to storage format
		 * @param {Object} univerData - Univer IWorkbookData
		 * @param {string} preview - Base64 preview image
		 * @returns {Object} Storage format with version marker
		 */
		toStorageFormat: function (univerData, preview) {
			return {
				version: 2,
				engine: 'univer',
				created: new Date().toISOString(),
				modified: new Date().toISOString(),
				data: univerData,
				metadata: {},
				preview: preview || ''
			};
		},

		/**
		 * Load file content and return Univer-compatible data
		 * @param {Object} fileContent - Content from MwJson API
		 * @returns {Object} Univer IWorkbookData
		 */
		loadFromFile: function (fileContent) {
			const version = this.detectVersion(fileContent);

			if (version === 2) {
				// Already Univer format
				return fileContent.data;
			} else {
				// Legacy lucksheet format - transform
				console.log('Migrating legacy lucksheet format to Univer');
				return this.transformToUniver(fileContent.data);
			}
		},

		// Excel/CSV I/O is handled by UniverBundle.LuckyExcel (the
		// @mertdeveci55/univer-import-export package). Call those directly
		// from the editor's import/export button handlers.
	};

	// Export to global scope for use by other modules
	window.SpreadsheetEditor = window.SpreadsheetEditor || {};
	window.SpreadsheetEditor.DataAdapter = DataAdapter;

	// Also export as MediaWiki ResourceLoader module
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = DataAdapter;
	}
})();
