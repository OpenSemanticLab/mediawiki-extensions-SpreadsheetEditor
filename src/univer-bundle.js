/**
 * Univer Bundle for MediaWiki SpreadsheetEditor
 *
 * Bundles Univer + community Excel I/O library into a single UMD module
 * compatible with MediaWiki's ResourceLoader.
 */

// Core
import { Univer, LocaleType, UniverInstanceType, merge } from '@univerjs/core';
import { defaultTheme } from '@univerjs/themes';

// Rendering & Formula Engine
import { UniverDocsPlugin } from '@univerjs/docs';
import { UniverDocsUIPlugin } from '@univerjs/docs-ui';
import { UniverRenderEnginePlugin } from '@univerjs/engine-render';
import { UniverFormulaEnginePlugin } from '@univerjs/engine-formula';

// Sheets
import {
	UniverSheetsPlugin,
	SheetInterceptorService,
	INTERCEPTOR_POINT,
	BEFORE_CELL_EDIT,
	AFTER_CELL_EDIT
} from '@univerjs/sheets';
import { UniverSheetsUIPlugin } from '@univerjs/sheets-ui';
import { UniverSheetsFormulaPlugin } from '@univerjs/sheets-formula';
import { UniverSheetsFormulaUIPlugin } from '@univerjs/sheets-formula-ui';
import { UniverSheetsNumfmtPlugin } from '@univerjs/sheets-numfmt';
import { UniverSheetsNumfmtUIPlugin } from '@univerjs/sheets-numfmt-ui';

// Interceptor effect enum (used to scope which parts of rendering an
// interceptor influences: Value, Style, or both).
import { InterceptorEffectEnum } from '@univerjs/core';

// UI
import { UniverUIPlugin } from '@univerjs/ui';

// Facade for simplified API (moved into @univerjs/core/facade in 0.6+)
import { FUniver } from '@univerjs/core/facade';

// Plugin facade extensions — side-effect imports that register
// methods like getActiveWorkbook(), save(), etc. on the FUniver instance.
import '@univerjs/sheets/facade';
import '@univerjs/sheets-ui/facade';
import '@univerjs/sheets-formula/facade';
import '@univerjs/sheets-numfmt/facade';
import '@univerjs/docs-ui/facade';
import '@univerjs/ui/facade';

// Excel/CSV import & export (ExcelJS-based, full format preservation)
import LuckyExcel from '@mertdeveci55/univer-import-export';

// Locale data - English
import DesignEnUS from '@univerjs/design/locale/en-US';
import UIEnUS from '@univerjs/ui/locale/en-US';
import DocsUIEnUS from '@univerjs/docs-ui/locale/en-US';
import SheetsEnUS from '@univerjs/sheets/locale/en-US';
import SheetsUIEnUS from '@univerjs/sheets-ui/locale/en-US';
import SheetsFormulaEnUS from '@univerjs/sheets-formula/locale/en-US';
import SheetsFormulaUIEnUS from '@univerjs/sheets-formula-ui/locale/en-US';
import SheetsNumfmtUIEnUS from '@univerjs/sheets-numfmt-ui/locale/en-US';

// German overlay (Univer does not ship a DE locale). Layered on top of
// the English locale via deepMerge — missing keys fall through to EN.
import deDEOverlay from './locales/de-DE.js';

// Merge locale fragments into a single per-language bundle
function deepMerge(...sources) {
	const result = {};
	for (const source of sources) {
		if (!source) continue;
		for (const key in source) {
			if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
				result[key] = deepMerge(result[key] || {}, source[key]);
			} else {
				result[key] = source[key];
			}
		}
	}
	return result;
}

const enUS = deepMerge(
	DesignEnUS,
	UIEnUS,
	DocsUIEnUS,
	SheetsEnUS,
	SheetsUIEnUS,
	SheetsFormulaEnUS,
	SheetsFormulaUIEnUS,
	SheetsNumfmtUIEnUS
);

// German = English baseline + our DE overlay on top.
const deDE = deepMerge(enUS, deDEOverlay);

// Univer's LocaleType enum doesn't include DE_DE — they only ship a fixed
// set (EN_US / FR_FR / ZH_CN / …). The LocaleService just looks up the
// locale by string key though, so we register our own identifier.
const DE_DE = 'deDE';

const locales = {
	[LocaleType.EN_US]: enUS,
	[DE_DE]: deDE
};

// Export for UMD
export {
	// Core
	Univer,
	LocaleType,
	UniverInstanceType,
	defaultTheme,
	locales,
	merge,
	DE_DE,

	// Plugins
	UniverDocsPlugin,
	UniverDocsUIPlugin,
	UniverRenderEnginePlugin,
	UniverFormulaEnginePlugin,
	UniverSheetsPlugin,
	UniverSheetsUIPlugin,
	UniverSheetsFormulaPlugin,
	UniverSheetsFormulaUIPlugin,
	UniverSheetsNumfmtPlugin,
	UniverSheetsNumfmtUIPlugin,
	UniverUIPlugin,

	// Services / constants for cell-content interceptors
	SheetInterceptorService,
	INTERCEPTOR_POINT,
	BEFORE_CELL_EDIT,
	AFTER_CELL_EDIT,
	InterceptorEffectEnum,

	// Facade
	FUniver,

	// Excel/CSV I/O
	LuckyExcel
};
