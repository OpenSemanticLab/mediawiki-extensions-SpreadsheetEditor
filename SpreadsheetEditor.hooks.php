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

		// The Univer bundle is ~12MB after terser minification — far larger
		// than ResourceLoader's JavaScriptMinifier can handle. Past a certain
		// size the minifier silently truncates the output, corrupting a regex
		// literal mid-pattern and producing a SyntaxError at load time.
		//
		// Workaround: serve the bundle directly via a <script src=...> tag
		// (bypassing ResourceLoader minification entirely) and its CSS via
		// a <link rel=stylesheet>. Other modules continue to flow through RL.
		$config = MediaWiki\MediaWikiServices::getInstance()->getMainConfig();
		$extAssetsPath = $config->get( 'ExtensionAssetsPath' );
		$base = $extAssetsPath . '/SpreadsheetEditor/modules/univer';
		$out->addHeadItem(
			'ext.SpreadsheetEditor.univer.css',
			'<link rel="stylesheet" href="' . htmlspecialchars( $base . '/univer.css' ) . '">'
		);
		$out->addScriptFile( $base . '/univer.umd.js' );

		$out->addModules( 'ext.SpreadsheetEditor' );

		return true;

	}
}
