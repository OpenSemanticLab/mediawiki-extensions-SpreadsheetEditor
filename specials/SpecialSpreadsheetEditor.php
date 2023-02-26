<?php
/**
 * SpreadsheetEditor SpecialPage for SpreadsheetEditor extension
 *
 * @file
 * @ingroup Extensions
 */

class SpecialSpreadsheetEditor extends SpecialPage {
	public function __construct() {
		parent::__construct( 'SpreadsheetEditor' );
	}

	/**
	 * Show the page to the user
	 *
	 * @param string $sub The subpage string argument (if any).
	 *  [[Special:SpreadsheetEditor/subpage]].
	 */
	public function execute( $sub ) {
		$out = $this->getOutput();

		$out->setPageTitle( $this->msg( 'spreadsheeteditor-helloworld' ) );

		$out->addHelpLink( 'How to become a MediaWiki hacker' );

		$out->addWikiMsg( 'spreadsheeteditor-helloworld-intro' );

		$formDescriptor = [
			'myfield1' => [
				'section' => 'section1/subsection',
				'label-message' => 'testform-myfield1',
				'type' => 'text',
				'default' => 'Meep',
			],
			'myfield2' => [
				'section' => 'section1',
				'label-message' => 'testform-myfield2',
				'class' => 'HTMLTextField', // same as type 'text'
			],
			'myfield3' => [
				'class' => 'HTMLTextField',
				'label' => 'Foo bar baz',
			],
			'myfield4' => [
				'class' => 'HTMLCheckField',
				'label' => 'This be a pirate checkbox',
				'default' => true,
			],
			'omgaselectbox' => [
				'class' => 'HTMLSelectField',
				'label' => 'Select an oooption',
				'options' => [
					'pirate' => 'Pirates',
					'ninja' => 'Ninjas',
					'ninjars' => 'Back to the NINJAR!'
				],
			],
			'omgmultiselect' => [
				'class' => 'HTMLMultiSelectField',
				'label' => 'Weapons to use',
				'options' => [ 'Cannons' => 'cannon', 'Swords' => 'sword' ],
				'default' => [ 'sword' ],
			],
			'radiolol' => [
				'class' => 'HTMLRadioField',
				'label' => 'Who do you like?',
				'options' => [
					'pirates' => 'Pirates',
					'ninjas' => 'Ninjas',
					'both' => 'Both'
				],
				'default' => 'pirates',
			],
		];

		// $htmlForm = new HTMLForm( $formDescriptor, $this->getContext(), 'testform' );
		$htmlForm = HTMLForm::factory( 'ooui', $formDescriptor, $this->getContext(), 'testform' );

		$htmlForm->setSubmitText( 'Foo submit' );
		$htmlForm->setSubmitCallback( [ 'SpecialSpreadsheetEditor', 'trySubmit' ] );

		$htmlForm->show();
	}

	static function trySubmit( $formData ) {
		if ( $formData['myfield1'] == 'Fleep' ) {
			return true;
		}

		return 'HAHA FAIL';
	}

	protected function getGroupName() {
		return 'other';
	}
}

