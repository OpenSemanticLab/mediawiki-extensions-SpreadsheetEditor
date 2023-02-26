<?php

if ( function_exists( 'wfLoadExtension' ) ) {
	wfLoadExtension( 'SpreadsheetEditor' );
	// Keep i18n globals so mergeMessageFileList.php doesn't break
	$wgMessagesDirs['SpreadsheetEditor'] = __DIR__ . '/i18n';
	$wgExtensionMessagesFiles['SpreadsheetEditorAlias'] = __DIR__ . '/SpreadsheetEditor.i18n.alias.php';
	$wgExtensionMessagesFiles['SpreadsheetEditorMagic'] = __DIR__ . '/SpreadsheetEditor.i18n.magic.php';
	wfWarn(
		'Deprecated PHP entry point used for SpreadsheetEditor extension. Please use wfLoadExtension ' .
		'instead, see https://www.mediawiki.org/wiki/Extension_registration for more details.'
	);
	return true;
} else {
	die( 'This version of the SpreadsheetEditor extension requires MediaWiki 1.25+' );
}
