<?php
/**
 * Hooks for SpreadsheetEditor extension
 *
 * @file
 * @ingroup Extensions
 */

class SpreadsheetEditorHooks {

	public static function onParserFirstCallInit( Parser &$parser ) {
		$parser->setFunctionHook( 'spreadsheeteditor', 'SpreadsheetEditorHooks::spreadsheeteditor' );
	}

	public static function spreadsheeteditor( Parser &$parser )
	{
		// Called in MW text like this: {{#spreadsheeteditor: }}

		// For named parameters like {{#something: foo=bar | apple=orange | banana }}
		// See: https://www.mediawiki.org/wiki/Manual:Parser_functions#Named_parameters

		return "This text will be shown when calling this in MW text.";
	}

	public static function onBeforePageDisplay( $out ) {

		$out->addModules( 'ext.SpreadsheetEditor' );

		return true;

	}
}
