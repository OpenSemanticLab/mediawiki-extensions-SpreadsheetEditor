/**
 * Univer Bundle for MediaWiki SpreadsheetEditor
 *
 * This file bundles all necessary Univer packages into a single UMD module
 * compatible with MediaWiki's ResourceLoader system.
 */

// Core
import { Univer, LocaleType, UniverInstanceType } from '@univerjs/core';
import { defaultTheme } from '@univerjs/design';

// Rendering & Formula Engine
import { UniverDocsPlugin } from '@univerjs/docs';
import { UniverDocsUIPlugin } from '@univerjs/docs-ui';
import { UniverRenderEnginePlugin } from '@univerjs/engine-render';
import { UniverFormulaEnginePlugin } from '@univerjs/engine-formula';

// Sheets
import { UniverSheetsPlugin } from '@univerjs/sheets';
import { UniverSheetsUIPlugin } from '@univerjs/sheets-ui';
import { UniverSheetsFormulaPlugin } from '@univerjs/sheets-formula';
import { UniverSheetsNumfmtPlugin } from '@univerjs/sheets-numfmt';

// UI
import { UniverUIPlugin } from '@univerjs/ui';

// Facade for simplified API
import { FUniver } from '@univerjs/facade';

// Locale data - English
import DesignEnUS from '@univerjs/design/locale/en-US';
import UIEnUS from '@univerjs/ui/locale/en-US';
import DocsUIEnUS from '@univerjs/docs-ui/locale/en-US';
import SheetsEnUS from '@univerjs/sheets/locale/en-US';
import SheetsUIEnUS from '@univerjs/sheets-ui/locale/en-US';
import SheetsFormulaEnUS from '@univerjs/sheets-formula/locale/en-US';

// Locale data - German (where available)
let DesignDeDE = {}, UIDeDE = {}, DocsUIDeDE = {}, SheetsDeDE = {}, SheetsUIDeDE = {}, SheetsFormulaDeDE = {};
try { DesignDeDE = require('@univerjs/design/locale/de-DE'); } catch(e) {}
try { UIDeDE = require('@univerjs/ui/locale/de-DE'); } catch(e) {}
try { DocsUIDeDE = require('@univerjs/docs-ui/locale/de-DE'); } catch(e) {}
try { SheetsDeDE = require('@univerjs/sheets/locale/de-DE'); } catch(e) {}
try { SheetsUIDeDE = require('@univerjs/sheets-ui/locale/de-DE'); } catch(e) {}
try { SheetsFormulaDeDE = require('@univerjs/sheets-formula/locale/de-DE'); } catch(e) {}

// Merge locales for each language
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
	SheetsFormulaEnUS
);

const deDE = deepMerge(
	DesignDeDE,
	UIDeDE,
	DocsUIDeDE,
	SheetsDeDE,
	SheetsUIDeDE,
	SheetsFormulaDeDE
);

// Locale registry
const locales = {
	[LocaleType.EN_US]: enUS,
	[LocaleType.DE_DE]: Object.keys(deDE).length > 0 ? deDE : enUS  // Fallback to English
};

// Export for UMD
export {
	// Core
	Univer,
	LocaleType,
	UniverInstanceType,
	defaultTheme,
	locales,

	// Plugins
	UniverDocsPlugin,
	UniverDocsUIPlugin,
	UniverRenderEnginePlugin,
	UniverFormulaEnginePlugin,
	UniverSheetsPlugin,
	UniverSheetsUIPlugin,
	UniverSheetsFormulaPlugin,
	UniverSheetsNumfmtPlugin,
	UniverUIPlugin,

	// Facade
	FUniver
};
