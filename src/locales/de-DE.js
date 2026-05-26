/**
 * German (de-DE) translation overlay for Univer UI strings.
 *
 * Univer ships English plus several Asian and Romance languages, but no
 * German locale. This file mirrors the merged structure of all eight
 * @univerjs en-US locales and provides German equivalents.
 *
 * Loaded by src/univer-bundle.js, where it is layered on top of the
 * English locale via deepMerge — any key that remains untranslated
 * here falls through to the English baseline.
 *
 * Translation conventions:
 *  - Excel/Office German UI terms (Zelle, Zeile, Spalte, Tabellenblatt,
 *    Arbeitsmappe, Summe, Mittelwert, Anzahl, Schriftart, …).
 *  - Formula function identifiers (SUM, IF, VLOOKUP, …) stay in
 *    English because Univer parses formulas with English names;
 *    translating the names would break formula entry.
 *  - Function descriptions and abstracts are translated.
 *  - Function parameter `name` fields (e.g. "logical_test") stay as
 *    English identifiers — they appear in the function-tip popup as
 *    parameter labels but are tied to Univer's internal parameter
 *    handling.
 *  - Placeholders (`{0}`, `${total}`) are preserved exactly.
 *
 * Mostly hand-written; the structure mirrors @univerjs en-US locales
 * at the version pinned in package.json. When Univer is upgraded and
 * new strings appear, extend this file by hand — anything missing
 * here automatically falls back to English through deepMerge.
 */

const deDE = {
  design: {
    Confirm: {
      cancel: 'abbrechen',
      confirm: 'OK'
    },
    CascaderList: {
      empty: 'Keine'
    },
    Calendar: {
      year: '',
      weekDays: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
      months: [
        'Jan',
        'Feb',
        'Mär',
        'Apr',
        'Mai',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Okt',
        'Nov',
        'Dez'
      ]
    },
    Select: {
      empty: 'Keine'
    },
    ColorPicker: {
      more: 'Weitere Farben',
      cancel: 'abbrechen',
      confirm: 'OK'
    },
    GradientColorPicker: {
      linear: 'Linear',
      radial: 'Radial',
      angular: 'Winkelförmig',
      diamond: 'Raute',
      offset: 'Versatz',
      angle: 'Winkel',
      flip: 'Spiegeln',
      delete: 'Löschen'
    }
  },
  toolbar: {
    heading: {
      "1": 'Überschrift 1',
      "2": 'Überschrift 2',
      "3": 'Überschrift 3',
      "4": 'Überschrift 4',
      "5": 'Überschrift 5',
      "6": 'Überschrift 6',
      normal: 'Standard',
      title: 'Titel',
      subTitle: 'Untertitel',
      tooltip: 'Überschrift festlegen'
    },
    undo: 'Rückgängig',
    redo: 'Wiederherstellen',
    font: 'Schriftart',
    fontSize: 'Schriftgröße',
    bold: 'Fett',
    italic: 'Kursiv',
    strikethrough: 'Durchgestrichen',
    subscript: 'Tiefgestellt',
    superscript: 'Hochgestellt',
    underline: 'Unterstrichen',
    textColor: {
      main: 'Textfarbe',
      right: 'Farbe wählen'
    },
    fillColor: {
      main: 'Füllfarbe',
      right: 'Farbe wählen'
    },
    table: {
      main: 'Tabelle',
      insert: 'Tabelle einfügen',
      colCount: 'Spaltenanzahl',
      rowCount: 'Zeilenanzahl'
    },
    resetColor: 'Zurücksetzen',
    order: 'Nummerierte Liste',
    unorder: 'Aufzählungsliste',
    checklist: 'Aufgabenliste',
    documentFlavor: 'Moderner Modus',
    alignLeft: 'Linksbündig',
    alignCenter: 'Zentriert',
    alignRight: 'Rechtsbündig',
    alignJustify: 'Blocksatz',
    horizontalLine: 'Horizontale Linie',
    headerFooter: 'Kopf- und Fußzeile',
    pageSetup: 'Seite einrichten',
    formatPainter: 'Format übertragen',
    fontSizeIncrease: 'Schriftgröße erhöhen',
    fontSizeDecrease: 'Schriftgröße verringern',
    border: {
      main: 'Rahmen',
      right: 'Rahmenstil'
    },
    mergeCell: {
      main: 'Zellen verbinden',
      right: 'Art wählen'
    },
    horizontalAlignMode: {
      main: 'Horizontale Ausrichtung',
      right: 'Ausrichtung'
    },
    verticalAlignMode: {
      main: 'Vertikale Ausrichtung',
      right: 'Ausrichtung'
    },
    textWrapMode: {
      main: 'Textumbruch',
      right: 'Umbruchmodus'
    },
    textRotateMode: {
      main: 'Textdrehung',
      right: 'Drehmodus'
    },
    more: 'Mehr',
    toggleGridlines: 'Gitternetzlinien umschalten',
    textToNumber: 'Text in Zahl'
  },
  ribbon: {
    start: 'Start',
    startDesc: 'Tabellenblatt initialisieren und Grundeinstellungen festlegen.',
    insert: 'Einfügen',
    insertDesc: 'Zeilen, Spalten, Diagramme und weitere Elemente einfügen.',
    formulas: 'Formeln',
    formulasDesc: 'Funktionen und Formeln für Berechnungen verwenden.',
    data: 'Daten',
    dataDesc: 'Daten verwalten, z. B. importieren, sortieren und filtern.',
    view: 'Ansicht',
    viewDesc: 'Ansichten wechseln und Darstellung anpassen.',
    others: 'Sonstiges',
    othersDesc: 'Weitere Funktionen und Einstellungen.',
    more: 'Mehr'
  },
  fontFamily: {
    "not-supported": 'Schriftart nicht im System gefunden, Standardschrift wird verwendet.',
    arial: 'Arial',
    "times-new-roman": 'Times New Roman',
    tahoma: 'Tahoma',
    verdana: 'Verdana',
    "microsoft-yahei": 'Microsoft YaHei',
    simsun: 'SimSun',
    simhei: 'SimHei',
    kaiti: 'Kaiti',
    fangsong: 'FangSong',
    nsimsun: 'NSimSun',
    stxinwei: 'STXinwei',
    stxingkai: 'STXingkai',
    stliti: 'STLiti'
  },
  "shortcut-panel": {
    title: 'Tastenkürzel'
  },
  shortcut: {
    undo: 'Rückgängig',
    redo: 'Wiederherstellen',
    cut: 'Ausschneiden',
    copy: 'Kopieren',
    paste: 'Einfügen',
    "shortcut-panel": 'Tastenkürzel-Bereich umschalten',
    sheet: {
      "zoom-in": 'Vergrößern',
      "zoom-out": 'Verkleinern',
      "reset-zoom": 'Zoom zurücksetzen',
      "select-below-cell": 'Zelle unterhalb auswählen',
      "select-up-cell": 'Zelle oberhalb auswählen',
      "select-left-cell": 'Zelle links auswählen',
      "select-right-cell": 'Zelle rechts auswählen',
      "select-next-cell": 'Nächste Zelle auswählen',
      "select-previous-cell": 'Vorherige Zelle auswählen',
      "select-up-value-cell": 'Nächste Zelle mit Wert oberhalb auswählen',
      "select-below-value-cell": 'Nächste Zelle mit Wert unterhalb auswählen',
      "select-left-value-cell": 'Nächste Zelle mit Wert links auswählen',
      "select-right-value-cell": 'Nächste Zelle mit Wert rechts auswählen',
      "expand-selection-down": 'Auswahl nach unten erweitern',
      "expand-selection-up": 'Auswahl nach oben erweitern',
      "expand-selection-left": 'Auswahl nach links erweitern',
      "expand-selection-right": 'Auswahl nach rechts erweitern',
      "expand-selection-to-left-gap": 'Auswahl bis zur linken Lücke erweitern',
      "expand-selection-to-below-gap": 'Auswahl bis zur unteren Lücke erweitern',
      "expand-selection-to-right-gap": 'Auswahl bis zur rechten Lücke erweitern',
      "expand-selection-to-up-gap": 'Auswahl bis zur oberen Lücke erweitern',
      "select-all": 'Alles auswählen',
      "toggle-editing": 'Bearbeitung umschalten',
      "delete-and-start-editing": 'Leeren und Bearbeitung starten',
      "abort-editing": 'Bearbeitung abbrechen',
      "break-line": 'Zeilenumbruch',
      "set-bold": 'Fett umschalten',
      "start-editing": 'Bearbeitung starten (Auswahl in den Editor)',
      "set-italic": 'Kursiv umschalten',
      "set-underline": 'Unterstreichen umschalten',
      "set-strike-through": 'Durchstreichen umschalten'
    },
    "sheets-formula-ui": {
      "quick-sum": 'Schnellsumme'
    }
  },
  "common-edit": 'Bearbeitungs-Tastenkürzel',
  "toggle-shortcut-panel": 'Tastenkürzel-Bereich umschalten',
  clipboard: {
    authentication: {
      title: 'Zugriff verweigert',
      content: 'Bitte erlauben Sie Univer den Zugriff auf die Zwischenablage.'
    },
    paste: {
      exceedMaxCells: 'Die Anzahl eingefügter Zellen überschreitet das Maximum',
      overlappingMergedCells: 'Der Einfügebereich überschneidet sich mit verbundenen Zellen'
    },
    shortCutNotify: {
      title: 'Bitte mit Tastenkürzeln einfügen.',
      useShortCutInstead: 'Excel-Inhalt erkannt. Bitte mit Tastenkürzel einfügen.'
    }
  },
  textEditor: {
    formulaError: 'Bitte eine gültige Formel eingeben, z. B. =SUMME(A1)',
    rangeError: 'Bitte einen gültigen Bereich eingeben, z. B. A1:B10'
  },
  rangeSelector: {
    title: 'Datenbereich auswählen',
    addAnotherRange: 'Bereich hinzufügen',
    buttonTooltip: 'Datenbereich auswählen',
    placeHolder: 'Bereich auswählen oder eingeben.',
    confirm: 'Bestätigen',
    cancel: 'Abbrechen',
    placeholder: 'Bereich auswählen oder Wert eingeben',
    tooltip: 'Bereich auswählen'
  },
  "global-shortcut": 'Globales Tastenkürzel',
  "zoom-slider": {
    resetTo: 'Zurücksetzen auf'
  },
  table: {
    insert: 'Einfügen',
    insertRowAbove: 'Zeile darüber einfügen',
    insertRowBelow: 'Zeile darunter einfügen',
    insertColumnLeft: 'Spalte links einfügen',
    insertColumnRight: 'Spalte rechts einfügen',
    delete: 'Tabelle löschen',
    deleteRows: 'Zeile löschen',
    deleteColumns: 'Spalte löschen',
    deleteTable: 'Tabelle löschen'
  },
  headerFooter: {
    header: 'Kopfzeile',
    footer: 'Fußzeile',
    panel: 'Einstellungen für Kopf- und Fußzeile',
    firstPageCheckBox: 'Erste Seite anders',
    oddEvenCheckBox: 'Gerade und ungerade Seiten unterschiedlich',
    headerTopMargin: 'Oberer Abstand der Kopfzeile (px)',
    footerBottomMargin: 'Unterer Abstand der Fußzeile (px)',
    closeHeaderFooter: 'Kopf- und Fußzeile schließen',
    disableText: 'Einstellungen für Kopf- und Fußzeile sind deaktiviert'
  },
  doc: {
    menu: {
      paragraphSetting: 'Absatzeinstellungen'
    },
    slider: {
      paragraphSetting: 'Absatzeinstellungen'
    },
    paragraphSetting: {
      alignment: 'Ausrichtung',
      indentation: 'Einzug',
      left: 'Links',
      right: 'Rechts',
      firstLine: 'Erste Zeile',
      hanging: 'Hängend',
      spacing: 'Abstand',
      before: 'Vor',
      after: 'Nach',
      lineSpace: 'Zeilenabstand',
      multiSpace: 'Mehrfach',
      fixedValue: 'Fester Wert (px)'
    }
  },
  rightClick: {
    copy: 'Kopieren',
    cut: 'Ausschneiden',
    paste: 'Einfügen',
    delete: 'Löschen',
    bulletList: 'Aufzählungsliste',
    orderList: 'Nummerierte Liste',
    checkList: 'Aufgabenliste',
    insertBellow: 'Darunter einfügen',
    copySpecial: 'Spezial kopieren',
    pasteSpecial: 'Inhalte einfügen',
    pasteValue: 'Werte einfügen',
    pasteFormat: 'Format einfügen',
    pasteColWidth: 'Spaltenbreite einfügen',
    pasteBesidesBorder: 'Einfügen ohne Rahmen',
    insert: 'Einfügen',
    insertRow: 'Zeile einfügen',
    insertRowBefore: 'Zeile darüber einfügen',
    insertRowsAfter: 'Einfügen',
    insertRowsAbove: 'Einfügen',
    insertRowsAfterSuffix: 'Zeilen darunter',
    insertRowsAboveSuffix: 'Zeilen darüber',
    insertColumn: 'Spalte einfügen',
    insertColumnBefore: 'Spalte davor einfügen',
    insertColsLeft: 'Einfügen',
    insertColsRight: 'Einfügen',
    insertColsLeftSuffix: 'Spalten links',
    insertColsRightSuffix: 'Spalten rechts',
    deleteCell: 'Zelle löschen',
    insertCell: 'Zelle einfügen',
    deleteSelected: 'Ausgewählte löschen ',
    hide: 'Ausblenden',
    hideSelected: 'Ausgewählte ausblenden ',
    showHide: 'Verborgene anzeigen',
    toTopAdd: 'Oben hinzufügen',
    toBottomAdd: 'Unten hinzufügen',
    toLeftAdd: 'Links hinzufügen',
    toRightAdd: 'Rechts hinzufügen',
    deleteSelectedRow: 'Ausgewählte Zeile löschen',
    deleteSelectedColumn: 'Ausgewählte Spalte löschen',
    hideSelectedRow: 'Zeile ausblenden',
    showHideRow: 'Zeile einblenden',
    rowHeight: 'Zeilenhöhe',
    hideSelectedColumn: 'Spalte ausblenden',
    showHideColumn: 'Spalte einblenden',
    columnWidth: 'Spaltenbreite',
    moveLeft: 'Nach links verschieben',
    moveUp: 'Nach oben verschieben',
    moveRight: 'Nach rechts verschieben',
    moveDown: 'Nach unten verschieben',
    add: 'Hinzufügen',
    row: 'Zeile',
    column: 'Spalte',
    confirm: 'Bestätigen',
    clearSelection: 'Leeren',
    clearContent: 'Inhalt löschen',
    clearFormat: 'Formate löschen',
    clearAll: 'Alles löschen',
    root: 'Wurzel',
    log: 'Logarithmus',
    delete0: 'Nullen an beiden Enden entfernen',
    removeDuplicate: 'Duplikate entfernen',
    byRow: 'Nach Zeile',
    byCol: 'Nach Spalte',
    generateNewMatrix: 'Neue Matrix erzeugen',
    fitContent: 'An Inhalt anpassen',
    freeze: 'Fixieren',
    freezeCell: 'Bis zur aktiven Zelle fixieren ({0} Zeile {1} Spalte)',
    freezeCol: 'Bis Spalte {0} fixieren',
    freezeRow: 'Bis Zeile {0} fixieren',
    freezeFirstCol: 'Erste Spalte fixieren',
    freezeFirstRow: 'Erste Zeile fixieren',
    cancelFreeze: 'Fixierung aufheben',
    deleteAllRowsAlert: 'Es können nicht alle Zeilen des Tabellenblatts gelöscht werden',
    deleteAllColumnsAlert: 'Es können nicht alle Spalten des Tabellenblatts gelöscht werden',
    hideAllRowsAlert: 'Es können nicht alle Zeilen ausgeblendet werden',
    hideAllColumnsAlert: 'Es können nicht alle Spalten ausgeblendet werden',
    protectRange: 'Zeilen und Spalten schützen',
    editProtectRange: 'Schutzbereich festlegen',
    removeProtectRange: 'Schutzbereich entfernen',
    turnOnProtectRange: 'Schutzbereich hinzufügen',
    viewAllProtectArea: 'Alle geschützten Bereiche anzeigen',
    textToNumber: 'Text in Zahl'
  },
  "page-settings": {
    "document-setting": 'Dokumenteinstellungen',
    "paper-size": 'Papierformat',
    "page-size": {
      main: 'Papierformat',
      a4: 'A4',
      a3: 'A3',
      a5: 'A5',
      b4: 'B4',
      b5: 'B5',
      letter: 'Letter',
      legal: 'Legal',
      tabloid: 'Tabloid',
      statement: 'Statement',
      executive: 'Executive',
      folio: 'Folio'
    },
    orientation: 'Ausrichtung',
    portrait: 'Hochformat',
    landscape: 'Querformat',
    "custom-paper-size": 'Benutzerdefiniertes Papierformat',
    top: 'Oben',
    bottom: 'Unten',
    left: 'Links',
    right: 'Rechts',
    cancel: 'Abbrechen',
    confirm: 'Bestätigen'
  },
  sheets: {
    tabs: {
      sheetCopy: '(Kopie{0})',
      sheet: 'Blatt'
    },
    info: {
      overlappingSelections: 'Dieser Befehl kann nicht auf überlappende Auswahlen angewendet werden',
      acrossMergedCell: 'Über eine verbundene Zelle hinweg',
      partOfCell: 'Nur ein Teil einer verbundenen Zelle ist ausgewählt',
      hideSheet: 'Nach dem Ausblenden bleibt kein sichtbares Tabellenblatt übrig'
    }
  },
  spreadsheetLabel: 'Tabelle',
  spreadsheetRightLabel: 'weitere Tabellen',
  align: {
    left: 'links',
    center: 'zentriert',
    right: 'rechts',
    top: 'oben',
    middle: 'Mitte',
    bottom: 'unten'
  },
  button: {
    confirm: 'OK',
    cancel: 'Abbrechen',
    close: 'Schließen',
    update: 'Aktualisieren',
    delete: 'Löschen',
    insert: 'Einfügen',
    prevPage: 'Zurück',
    nextPage: 'Weiter',
    total: 'gesamt:'
  },
  punctuation: {
    tab: 'Tab',
    semicolon: 'Semikolon',
    comma: 'Komma',
    space: 'Leerzeichen'
  },
  colorPicker: {
    collapse: 'Einklappen',
    customColor: 'BENUTZERDEFINIERT',
    change: 'Ändern',
    confirmColor: 'OK',
    cancelColor: 'Abbrechen'
  },
  borderLine: {
    borderTop: 'Rahmen oben',
    borderBottom: 'Rahmen unten',
    borderLeft: 'Rahmen links',
    borderRight: 'Rahmen rechts',
    borderNone: 'Kein Rahmen',
    borderAll: 'Alle Rahmen',
    borderOutside: 'Außenrahmen',
    borderInside: 'Innenrahmen',
    borderHorizontal: 'Horizontale Rahmen',
    borderVertical: 'Vertikale Rahmen',
    borderColor: 'Rahmenfarbe',
    borderSize: 'Rahmenstärke',
    borderType: 'Rahmenart'
  },
  merge: {
    all: 'Alle verbinden',
    vertical: 'Vertikal verbinden',
    horizontal: 'Horizontal verbinden',
    cancel: 'Verbindung aufheben',
    overlappingError: 'Überlappende Bereiche können nicht verbunden werden',
    partiallyError: 'Dieser Vorgang ist auf teilweise verbundenen Zellen nicht möglich',
    confirm: {
      title: 'Beim Verbinden bleibt nur der Wert der oberen linken Zelle erhalten, andere Werte gehen verloren. Wirklich fortfahren?',
      cancel: 'Verbinden abbrechen',
      confirm: 'Verbinden fortsetzen',
      warning: 'Warnung',
      dismantleMergeCellWarning: 'Dadurch werden einige verbundene Zellen getrennt. Möchten Sie fortfahren?'
    }
  },
  filter: {
    confirm: {
      error: 'Es ist ein Problem aufgetreten',
      notAllowedToInsertRange: 'Zellen können nicht hierher verschoben werden, solange der Filter aktiv ist'
    }
  },
  textWrap: {
    overflow: 'Überlauf',
    wrap: 'Umbrechen',
    clip: 'Abschneiden'
  },
  textRotate: {
    none: 'Keine',
    angleUp: 'Nach oben kippen',
    angleDown: 'Nach unten kippen',
    vertical: 'Vertikal stapeln',
    rotationUp: 'Nach oben drehen',
    rotationDown: 'Nach unten drehen'
  },
  sheetConfig: {
    delete: 'Löschen',
    copy: 'Kopieren',
    rename: 'Umbenennen',
    changeColor: 'Farbe ändern',
    hide: 'Ausblenden',
    unhide: 'Einblenden',
    moveLeft: 'Nach links verschieben',
    moveRight: 'Nach rechts verschieben',
    resetColor: 'Farbe zurücksetzen',
    cancelText: 'Abbrechen',
    chooseText: 'Farbe bestätigen',
    tipNameRepeat: 'Der Tabellenname darf nicht doppelt vergeben sein. Bitte ändern',
    noMoreSheet: 'Die Arbeitsmappe muss mindestens ein sichtbares Tabellenblatt enthalten. Zum Löschen bitte ein neues einfügen oder ein verstecktes einblenden.',
    confirmDelete: 'Wirklich löschen?',
    redoDelete: 'Mit Strg+Z rückgängig machbar',
    noHide: 'Kann nicht ausgeblendet werden, mindestens ein Blatt muss sichtbar bleiben',
    chartEditNoOpt: 'Dieser Vorgang ist im Diagramm-Bearbeitungsmodus nicht erlaubt!',
    sheetNameErrorTitle: 'Es ist ein Problem aufgetreten',
    sheetNameSpecCharError: 'Der Name darf höchstens 31 Zeichen lang sein, nicht mit \' beginnen oder enden und keines dieser Zeichen enthalten: [ ] : \\ ? * /',
    sheetNameCannotIsEmptyError: 'Der Tabellenname darf nicht leer sein.',
    sheetNameAlreadyExistsError: 'Der Tabellenname existiert bereits. Bitte einen anderen Namen wählen.',
    deleteSheet: 'Tabellenblatt löschen',
    deleteSheetContent: 'Dieses Tabellenblatt wirklich löschen?',
    deleteLargeSheetContent: 'Dieses Tabellenblatt wirklich löschen? Es kann nach dem Löschen nicht wiederhergestellt werden. Sind Sie sicher?',
    addProtectSheet: 'Tabellenblatt schützen',
    removeProtectSheet: 'Schutz aufheben',
    changeSheetPermission: 'Berechtigungen ändern',
    viewAllProtectArea: 'Alle geschützten Bereiche anzeigen'
  },
  info: {
    tooltip: 'Tooltip',
    error: 'Fehler',
    notChangeMerge: 'Verbundene Zellen können nicht teilweise geändert werden',
    detailUpdate: 'Neu geöffnet',
    detailSave: 'Lokaler Cache wiederhergestellt',
    row: '',
    column: '',
    loading: 'Wird geladen...',
    copy: 'Kopieren',
    return: 'Beenden',
    rename: 'Umbenennen',
    tips: 'Umbenennen',
    noName: 'Unbenannte Tabelle',
    wait: 'Warten auf Aktualisierung',
    add: 'Hinzufügen',
    addLast: 'weitere Zeilen unten',
    backTop: 'Zurück zum Anfang',
    pageInfo: 'Gesamt ${total}, ${totalPage} Seiten, aktuelle ${currentPage}',
    nextPage: 'Weiter',
    tipInputNumber: 'Bitte eine Zahl eingeben',
    tipInputNumberLimit: 'Der Wertebereich für die Erhöhung liegt zwischen 1 und 100',
    tipRowHeightLimit: 'Die Zeilenhöhe muss zwischen 0 und 545 liegen',
    tipColumnWidthLimit: 'Die Spaltenbreite muss zwischen 0 und 2038 liegen',
    pageInfoFull: 'Gesamt ${total}, ${totalPage} Seiten, alle Daten angezeigt',
    problem: 'Es ist ein Problem aufgetreten',
    forceStringInfo: 'Zahl als Text gespeichert'
  },
  statusbar: {
    sum: 'Summe',
    average: 'Mittelwert',
    min: 'Min',
    max: 'Max',
    count: 'Zahlenanzahl',
    countA: 'Anzahl',
    clickToCopy: 'Zum Kopieren klicken',
    copied: 'Kopiert'
  },
  autoFill: {
    copy: 'Zelle kopieren',
    series: 'Reihe ausfüllen',
    formatOnly: 'Nur Format',
    noFormat: 'Kein Format'
  },
  "sheet-view": 'Tabellenansicht',
  "sheet-edit": 'Tabelle bearbeiten',
  definedName: {
    managerTitle: 'Namens-Manager',
    managerDescription: 'Definieren Sie einen Namen, indem Sie Zellen oder Formeln auswählen und den gewünschten Namen im Textfeld eingeben.',
    addButton: 'Definierten Namen hinzufügen',
    featureTitle: 'Definierte Namen',
    ratioRange: 'Bereich',
    ratioFormula: 'Formel',
    confirm: 'Bestätigen',
    cancel: 'Abbrechen',
    scopeWorkbook: 'Arbeitsmappe',
    inputNamePlaceholder: 'Bitte einen Namen eingeben (keine Leerzeichen erlaubt)',
    inputCommentPlaceholder: 'Bitte einen Kommentar eingeben',
    inputRangePlaceholder: 'Bitte einen Bereich eingeben (keine Leerzeichen erlaubt)',
    inputFormulaPlaceholder: 'Bitte eine Formel eingeben (keine Leerzeichen erlaubt)',
    nameEmpty: 'Der Name darf nicht leer sein',
    nameDuplicate: 'Der Name existiert bereits',
    formulaOrRefStringEmpty: 'Formel oder Bezug darf nicht leer sein',
    formulaOrRefStringInvalid: 'Ungültige Formel oder ungültiger Bezug',
    defaultName: 'DefinierterName',
    updateButton: 'Aktualisieren',
    deleteButton: 'Löschen',
    deleteConfirmText: 'Diesen definierten Namen wirklich löschen?',
    nameConflict: 'Der Name kollidiert mit einem Funktionsnamen',
    nameInvalid: 'Der Name ist ungültig',
    nameSheetConflict: 'Der Name kollidiert mit dem Tabellenblattnamen'
  },
  uploadLoading: {
    loading: 'Wird geladen..., verbleibend',
    error: 'Fehler'
  },
  permission: {
    toolbarMenu: 'Schutz',
    panel: {
      title: 'Zeilen und Spalten schützen',
      name: 'Name',
      protectedRange: 'Geschützter Bereich',
      permissionDirection: 'Beschreibung der Berechtigung',
      permissionDirectionPlaceholder: 'Beschreibung der Berechtigung eingeben',
      editPermission: 'Bearbeitungsrechte',
      onlyICanEdit: 'Nur ich kann bearbeiten',
      designedUserCanEdit: 'Bestimmte Benutzer können bearbeiten',
      viewPermission: 'Anzeigerechte',
      othersCanView: 'Andere können ansehen',
      noOneElseCanView: 'Niemand sonst kann ansehen',
      designedPerson: 'Bestimmte Personen',
      addPerson: 'Person hinzufügen',
      canEdit: 'Kann bearbeiten',
      canView: 'Kann ansehen',
      delete: 'Löschen',
      currentSheet: 'Aktuelles Tabellenblatt',
      allSheet: 'Alle Tabellenblätter',
      edit: 'Bearbeiten',
      Print: 'Drucken',
      Comment: 'Kommentar',
      Copy: 'Kopieren',
      SetCellStyle: 'Zellenformat festlegen',
      SetCellValue: 'Zellenwert festlegen',
      SetHyperLink: 'Hyperlink festlegen',
      Sort: 'Sortieren',
      Filter: 'Filtern',
      PivotTable: 'Pivot-Tabelle',
      FloatImage: 'Schwebendes Bild',
      RowHeightColWidth: 'Zeilenhöhe und Spaltenbreite',
      RowHeightColWidthReadonly: 'Zeilenhöhe und Spaltenbreite (schreibgeschützt)',
      FilterReadonly: 'Filter (schreibgeschützt)',
      nameError: 'Der Name darf nicht leer sein',
      created: 'Erstellt',
      iCanEdit: 'Ich kann bearbeiten',
      iCanNotEdit: 'Ich kann nicht bearbeiten',
      iCanView: 'Ich kann ansehen',
      iCanNotView: 'Ich kann nicht ansehen',
      emptyRangeError: 'Der Bereich darf nicht leer sein',
      rangeOverlapError: 'Bereiche dürfen sich nicht überlappen',
      rangeOverlapOverPermissionError: 'Bereiche mit gleichen Berechtigungen dürfen sich nicht überlappen',
      InsertHyperlink: 'Hyperlink einfügen',
      SetRowStyle: 'Zeilenformat festlegen',
      SetColumnStyle: 'Spaltenformat festlegen',
      InsertColumn: 'Spalte einfügen',
      InsertRow: 'Zeile einfügen',
      DeleteRow: 'Zeile löschen',
      DeleteColumn: 'Spalte löschen',
      EditExtraObject: 'Zusätzliches Objekt bearbeiten'
    },
    dialog: {
      allowUserToEdit: 'Benutzer das Bearbeiten erlauben',
      allowedPermissionType: 'Erlaubte Berechtigungstypen',
      setCellValue: 'Zellenwert festlegen',
      setCellStyle: 'Zellenformat festlegen',
      copy: 'Kopieren',
      alert: 'Hinweis',
      search: 'Suchen',
      ownerInherit: 'Dokumenteigentümer, Berechtigungsvererbung aktiviert',
      ownerWithoutInherit: 'Dokumenteigentümer, Berechtigungsvererbung nicht aktiviert',
      alertContent: 'Dieser Bereich ist geschützt und es bestehen derzeit keine Bearbeitungsrechte. Wenden Sie sich zum Bearbeiten an den Ersteller.',
      userEmpty: 'Keine bestimmten Personen festgelegt. Teilen Sie den Link, um bestimmte Personen einzuladen.',
      listEmpty: 'Sie haben noch keine Bereiche oder Tabellenblätter als geschützt eingerichtet.',
      commonErr: 'Der Bereich ist geschützt und Sie haben für diesen Vorgang keine Berechtigung. Wenden Sie sich zum Bearbeiten an den Ersteller.',
      editErr: 'Der Bereich ist geschützt und Sie haben keine Bearbeitungsberechtigung. Wenden Sie sich zum Bearbeiten an den Ersteller.',
      pasteErr: 'Der Bereich ist geschützt und Sie haben keine Einfügeberechtigung. Wenden Sie sich zum Einfügen an den Ersteller.',
      setStyleErr: 'Der Bereich ist geschützt und Sie haben keine Berechtigung zum Festlegen von Formatierungen. Wenden Sie sich an den Ersteller.',
      copyErr: 'Der Bereich ist geschützt und Sie haben keine Kopierberechtigung. Wenden Sie sich zum Kopieren an den Ersteller.',
      workbookCopyErr: 'Die Arbeitsmappe ist geschützt und Sie haben keine Kopierberechtigung. Wenden Sie sich zum Kopieren an den Ersteller.',
      setRowColStyleErr: 'Der Bereich ist geschützt und Sie haben keine Berechtigung, Zeilen- und Spaltenformate festzulegen. Wenden Sie sich an den Ersteller.',
      moveRowColErr: 'Der Bereich ist geschützt und Sie haben keine Berechtigung, Zeilen und Spalten zu verschieben. Wenden Sie sich an den Ersteller.',
      moveRangeErr: 'Der Bereich ist geschützt und Sie haben keine Berechtigung, die Auswahl zu verschieben. Wenden Sie sich an den Ersteller.',
      insertRowColErr: 'Der Bereich ist geschützt und Sie haben keine Berechtigung, Zeilen oder Spalten einzufügen. Wenden Sie sich an den Ersteller.',
      removeRowColErr: 'Der Bereich ist geschützt und Sie haben keine Berechtigung, Zeilen oder Spalten zu löschen. Wenden Sie sich an den Ersteller.',
      autoFillErr: 'Der Bereich ist geschützt und Sie haben keine Berechtigung zum automatischen Ausfüllen. Wenden Sie sich an den Ersteller.',
      filterErr: 'Der Bereich ist geschützt und Sie haben keine Filterberechtigung. Wenden Sie sich zum Filtern an den Ersteller.',
      operatorSheetErr: 'Das Tabellenblatt ist geschützt und Sie haben keine Berechtigung, es zu bearbeiten. Wenden Sie sich an den Ersteller.',
      insertOrDeleteMoveRangeErr: 'Der eingefügte oder gelöschte Bereich überschneidet sich mit dem geschützten Bereich; dieser Vorgang wird derzeit nicht unterstützt.',
      printErr: 'Das Tabellenblatt ist geschützt und Sie haben keine Druckberechtigung. Wenden Sie sich zum Drucken an den Ersteller.',
      formulaErr: 'Der Bereich oder der referenzierte Bereich ist geschützt und Sie haben keine Bearbeitungsberechtigung. Wenden Sie sich an den Ersteller.',
      hyperLinkErr: 'Der Bereich ist geschützt und Sie haben keine Berechtigung, Hyperlinks festzulegen. Wenden Sie sich an den Ersteller.',
      commentErr: 'Der Bereich ist geschützt und Sie haben keine Berechtigung zu kommentieren. Wenden Sie sich an den Ersteller.'
    },
    button: {
      confirm: 'Bestätigen',
      cancel: 'Abbrechen',
      addNewPermission: 'Neue Berechtigung hinzufügen'
    }
  },
  formula: {
    progress: {
      analyzing: 'Wird analysiert',
      calculating: 'Wird berechnet',
      "array-analysis": 'Array-Analyse',
      "array-calculation": 'Array-Berechnung',
      done: 'Fertig'
    },
    insert: {
      tooltip: 'Funktionen',
      common: 'Häufige Funktionen'
    },
    functionList: {
      ACCRINT: {
        description: 'Gibt die aufgelaufenen Zinsen eines Wertpapiers mit periodischen Zinszahlungen zurück.',
        abstract: 'Aufgelaufene Zinsen (periodisch).',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/accrint-function-fe45d089-6722-4fb3-9379-e1f911d8dc74'
          }
        ],
        functionParameter: {
          issue: {
            name: 'issue',
            detail: 'The security\'s issue date.'
          },
          firstInterest: {
            name: 'first_interest',
            detail: 'The security\'s first interest date.'
          },
          settlement: {
            name: 'settlement',
            detail: 'The security\'s maturity date.'
          },
          rate: {
            name: 'rate',
            detail: 'The security\'s annual coupon rate.'
          },
          par: {
            name: 'par',
            detail: 'The security\'s par value.'
          },
          frequency: {
            name: 'frequency',
            detail: 'The number of coupon payments per year.'
          },
          basis: {
            name: 'basis',
            detail: 'The type of day count basis to use.'
          },
          calcMethod: {
            name: 'calc_method',
            detail: 'Is a logical value: interest accrues from the issue date = TRUE or ignored; interest accrues from the last coupon payment date = FALSE.'
          }
        }
      },
      ACCRINTM: {
        description: 'Gibt die aufgelaufenen Zinsen eines Wertpapiers zurück, dessen Zinsen am Fälligkeitstag ausgezahlt werden.',
        abstract: 'Aufgelaufene Zinsen (Fälligkeit).',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/accrintm-function-f62f01f9-5754-4cc4-805b-0e70199328a7'
          }
        ],
        functionParameter: {
          issue: {
            name: 'issue',
            detail: 'The security\'s issue date.'
          },
          settlement: {
            name: 'settlement',
            detail: 'The security\'s maturity date.'
          },
          rate: {
            name: 'rate',
            detail: 'The security\'s annual coupon rate.'
          },
          par: {
            name: 'par',
            detail: 'The security\'s par value.'
          },
          basis: {
            name: 'basis',
            detail: 'The type of day count basis to use.'
          }
        }
      },
      AMORDEGRC: {
        description: 'Gibt die Abschreibung für die einzelnen Buchungsperioden mittels eines Abschreibungskoeffizienten zurück.',
        abstract: 'Degressive Abschreibung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/amordegrc-function-a14d0ca1-64a4-42eb-9b3d-b0dededf9e51'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'first'
          },
          number2: {
            name: 'number2',
            detail: 'second'
          }
        }
      },
      AMORLINC: {
        description: 'Gibt die Abschreibung für die einzelnen Buchungsperioden zurück.',
        abstract: 'Lineare Abschreibung pro Periode.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/amorlinc-function-7d417b45-f7f5-4dba-a0a5-3451a81079a8'
          }
        ],
        functionParameter: {
          cost: {
            name: 'cost',
            detail: 'The cost of the asset.'
          },
          datePurchased: {
            name: 'date_purchased',
            detail: 'The date of the purchase of the asset.'
          },
          firstPeriod: {
            name: 'first_period',
            detail: 'The date of the end of the first period.'
          },
          salvage: {
            name: 'salvage',
            detail: 'The salvage value at the end of the life of the asset.'
          },
          period: {
            name: 'period',
            detail: 'The period.'
          },
          rate: {
            name: 'rate',
            detail: 'The rate of depreciation.'
          },
          basis: {
            name: 'basis',
            detail: 'The year basis to be used.'
          }
        }
      },
      COUPDAYBS: {
        description: 'Gibt die Anzahl der Tage vom Anfang des Zinszahlungszeitraums bis zum Abrechnungstermin zurück.',
        abstract: 'Tage vom Zeitraumbeginn bis Abrechnung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/coupdaybs-function-eb9a8dfb-2fb2-4c61-8e5d-690b320cf872'
          }
        ],
        functionParameter: {
          settlement: {
            name: 'settlement',
            detail: 'The security\'s settlement date.'
          },
          maturity: {
            name: 'maturity',
            detail: 'The security\'s maturity date.'
          },
          frequency: {
            name: 'frequency',
            detail: 'The number of coupon payments per year.'
          },
          basis: {
            name: 'basis',
            detail: 'The type of day count basis to use.'
          }
        }
      },
      COUPDAYS: {
        description: 'Gibt die Anzahl der Tage im Zinszahlungszeitraum zurück, der den Abrechnungstermin enthält.',
        abstract: 'Tage im Zinszeitraum mit Abrechnung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/coupdays-function-cc64380b-315b-4e7b-950c-b30b0a76f671'
          }
        ],
        functionParameter: {
          settlement: {
            name: 'settlement',
            detail: 'The security\'s settlement date.'
          },
          maturity: {
            name: 'maturity',
            detail: 'The security\'s maturity date.'
          },
          frequency: {
            name: 'frequency',
            detail: 'The number of coupon payments per year.'
          },
          basis: {
            name: 'basis',
            detail: 'The type of day count basis to use.'
          }
        }
      },
      COUPDAYSNC: {
        description: 'Gibt die Anzahl der Tage vom Abrechnungstermin bis zum nächsten Zinstermin zurück.',
        abstract: 'Tage von Abrechnung bis nächster Zinstermin.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/coupdaysnc-function-5ab3f0b2-029f-4a8b-bb65-47d525eea547'
          }
        ],
        functionParameter: {
          settlement: {
            name: 'settlement',
            detail: 'The security\'s settlement date.'
          },
          maturity: {
            name: 'maturity',
            detail: 'The security\'s maturity date.'
          },
          frequency: {
            name: 'frequency',
            detail: 'The number of coupon payments per year.'
          },
          basis: {
            name: 'basis',
            detail: 'The type of day count basis to use.'
          }
        }
      },
      COUPNCD: {
        description: 'Gibt den nächsten Zinstermin nach dem Abrechnungstermin zurück.',
        abstract: 'Nächster Zinstermin nach Abrechnung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/coupncd-function-fd962fef-506b-4d9d-8590-16df5393691f'
          }
        ],
        functionParameter: {
          settlement: {
            name: 'settlement',
            detail: 'The security\'s settlement date.'
          },
          maturity: {
            name: 'maturity',
            detail: 'The security\'s maturity date.'
          },
          frequency: {
            name: 'frequency',
            detail: 'The number of coupon payments per year.'
          },
          basis: {
            name: 'basis',
            detail: 'The type of day count basis to use.'
          }
        }
      },
      COUPNUM: {
        description: 'Gibt die Anzahl der Zinstermine zwischen Abrechnungs- und Fälligkeitsdatum zurück.',
        abstract: 'Anzahl Zinstermine.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/coupnum-function-a90af57b-de53-4969-9c99-dd6139db2522'
          }
        ],
        functionParameter: {
          settlement: {
            name: 'settlement',
            detail: 'The security\'s settlement date.'
          },
          maturity: {
            name: 'maturity',
            detail: 'The security\'s maturity date.'
          },
          frequency: {
            name: 'frequency',
            detail: 'The number of coupon payments per year.'
          },
          basis: {
            name: 'basis',
            detail: 'The type of day count basis to use.'
          }
        }
      },
      COUPPCD: {
        description: 'Gibt den letzten Zinstermin vor dem Abrechnungstermin zurück.',
        abstract: 'Letzter Zinstermin vor Abrechnung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/couppcd-function-2eb50473-6ee9-4052-a206-77a9a385d5b3'
          }
        ],
        functionParameter: {
          settlement: {
            name: 'settlement',
            detail: 'The security\'s settlement date.'
          },
          maturity: {
            name: 'maturity',
            detail: 'The security\'s maturity date.'
          },
          frequency: {
            name: 'frequency',
            detail: 'The number of coupon payments per year.'
          },
          basis: {
            name: 'basis',
            detail: 'The type of day count basis to use.'
          }
        }
      },
      CUMIPMT: {
        description: 'Gibt die zwischen zwei Perioden gezahlten kumulierten Zinsen zurück.',
        abstract: 'Kumulierte Zinsen.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/cumipmt-function-61067bb0-9016-427d-b95b-1a752af0e606'
          }
        ],
        functionParameter: {
          rate: {
            name: 'rate',
            detail: 'The interest rate.'
          },
          nper: {
            name: 'nper',
            detail: 'The total number of payment periods.'
          },
          pv: {
            name: 'pv',
            detail: 'The present value.'
          },
          startPeriod: {
            name: 'start_period',
            detail: 'The first period in the calculation. Payment periods are numbered beginning with 1.'
          },
          endPeriod: {
            name: 'end_period',
            detail: 'The last period in the calculation.'
          },
          type: {
            name: 'type',
            detail: 'The timing of the payment.'
          }
        }
      },
      CUMPRINC: {
        description: 'Gibt die zwischen zwei Perioden gezahlte kumulierte Tilgung eines Kredits zurück.',
        abstract: 'Kumulierte Tilgung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/cumprinc-function-94a4516d-bd65-41a1-bc16-053a6af4c04d'
          }
        ],
        functionParameter: {
          rate: {
            name: 'rate',
            detail: 'The interest rate.'
          },
          nper: {
            name: 'nper',
            detail: 'The total number of payment periods.'
          },
          pv: {
            name: 'pv',
            detail: 'The present value.'
          },
          startPeriod: {
            name: 'start_period',
            detail: 'The first period in the calculation. Payment periods are numbered beginning with 1.'
          },
          endPeriod: {
            name: 'end_period',
            detail: 'The last period in the calculation.'
          },
          type: {
            name: 'type',
            detail: 'The timing of the payment.'
          }
        }
      },
      DB: {
        description: 'Gibt die Abschreibung eines Anlagegegenstands für eine bestimmte Periode unter Verwendung der geometrisch degressiven Abschreibung zurück.',
        abstract: 'Geometrisch-degressive Abschreibung (DB).',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/db-function-354e7d28-5f93-4ff1-8a52-eb4ee549d9d7'
          }
        ],
        functionParameter: {
          cost: {
            name: 'cost',
            detail: 'The initial cost of the asset.'
          },
          salvage: {
            name: 'salvage',
            detail: 'The value at the end of the depreciation (sometimes called the salvage value of the asset).'
          },
          life: {
            name: 'life',
            detail: 'The number of periods over which the asset is being depreciated (sometimes called the useful life of the asset).'
          },
          period: {
            name: 'period',
            detail: 'The period for which you want to calculate the depreciation.'
          },
          month: {
            name: 'month',
            detail: 'The number of months in the first year. If month is omitted, it is assumed to be 12.'
          }
        }
      },
      DDB: {
        description: 'Gibt die Abschreibung eines Anlagegegenstands für eine bestimmte Periode mit der arithmetisch-degressiven Doppelraten-Abschreibung zurück.',
        abstract: 'Doppelte degressive Abschreibung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/ddb-function-519a7a37-8772-4c96-85c0-ed2c209717a5'
          }
        ],
        functionParameter: {
          cost: {
            name: 'cost',
            detail: 'The initial cost of the asset.'
          },
          salvage: {
            name: 'salvage',
            detail: 'The value at the end of the depreciation (sometimes called the salvage value of the asset).'
          },
          life: {
            name: 'life',
            detail: 'The number of periods over which the asset is being depreciated (sometimes called the useful life of the asset).'
          },
          period: {
            name: 'period',
            detail: 'The period for which you want to calculate the depreciation.'
          },
          factor: {
            name: 'factor',
            detail: 'The rate at which the balance declines. If factor is omitted, it is assumed to be 2 (the double-declining balance method).'
          }
        }
      },
      DISC: {
        description: 'Gibt den Abzinsungssatz eines Wertpapiers zurück.',
        abstract: 'Abzinsungssatz.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/disc-function-71fce9f3-3f05-4acf-a5a3-eac6ef4daa53'
          }
        ],
        functionParameter: {
          settlement: {
            name: 'settlement',
            detail: 'The security\'s settlement date.'
          },
          maturity: {
            name: 'maturity',
            detail: 'The security\'s maturity date.'
          },
          pr: {
            name: 'pr',
            detail: 'The security\'s price per $100 face value.'
          },
          redemption: {
            name: 'redemption',
            detail: 'The security\'s redemption value per $100 face value.'
          },
          basis: {
            name: 'basis',
            detail: 'The type of day count basis to use.'
          }
        }
      },
      DOLLARDE: {
        description: 'Wandelt einen als Bruch dargestellten Dollarpreis in einen als Dezimalzahl dargestellten Dollarpreis um.',
        abstract: 'Bruchpreis in Dezimalpreis.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/dollarde-function-db85aab0-1677-428a-9dfd-a38476693427'
          }
        ],
        functionParameter: {
          fractionalDollar: {
            name: 'fractional_dollar',
            detail: 'A number expressed as an integer part and a fraction part, separated by a decimal symbol.'
          },
          fraction: {
            name: 'fraction',
            detail: 'The integer to use in the denominator of the fraction.'
          }
        }
      },
      DOLLARFR: {
        description: 'Wandelt einen als Dezimalzahl dargestellten Dollarpreis in einen als Bruch dargestellten Dollarpreis um.',
        abstract: 'Dezimalpreis in Bruchpreis.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/dollarfr-function-0835d163-3023-4a33-9824-3042c5d4f495'
          }
        ],
        functionParameter: {
          decimalDollar: {
            name: 'decimal_dollar',
            detail: 'A decimal number.'
          },
          fraction: {
            name: 'fraction',
            detail: 'The integer to use in the denominator of the fraction.'
          }
        }
      },
      DURATION: {
        description: 'Gibt die jährliche Macauley-Duration eines Wertpapiers mit periodischen Zinszahlungen zurück.',
        abstract: 'Macauley-Duration.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/duration-function-b254ea57-eadc-4602-a86a-c8e369334038'
          }
        ],
        functionParameter: {
          settlement: {
            name: 'settlement',
            detail: 'The security\'s settlement date.'
          },
          maturity: {
            name: 'maturity',
            detail: 'The security\'s maturity date.'
          },
          coupon: {
            name: 'coupon',
            detail: 'The security\'s annual coupon rate.'
          },
          yld: {
            name: 'yld',
            detail: 'The security\'s annual yield.'
          },
          frequency: {
            name: 'frequency',
            detail: 'The number of coupon payments per year.'
          },
          basis: {
            name: 'basis',
            detail: 'The type of day count basis to use.'
          }
        }
      },
      EFFECT: {
        description: 'Gibt den effektiven Jahreszinssatz zurück.',
        abstract: 'Effektiver Jahreszins.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/effect-function-910d4e4c-79e2-4009-95e6-507e04f11bc4'
          }
        ],
        functionParameter: {
          nominalRate: {
            name: 'nominal_rate',
            detail: 'The nominal interest rate.'
          },
          npery: {
            name: 'npery',
            detail: 'The number of compounding periods per year.'
          }
        }
      },
      FV: {
        description: 'Gibt den zukünftigen Wert einer Investition zurück.',
        abstract: 'Zukünftiger Wert (Endwert).',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/fv-function-2eef9f44-a084-4c61-bdd8-4fe4bb1b71b3'
          }
        ],
        functionParameter: {
          rate: {
            name: 'rate',
            detail: 'The interest rate per period.'
          },
          nper: {
            name: 'nper',
            detail: 'The total number of payment periods in an annuity.'
          },
          pmt: {
            name: 'pmt',
            detail: 'The payment made each period; it cannot change over the life of the annuity.'
          },
          pv: {
            name: 'pv',
            detail: 'The present value, or the lump-sum amount that a series of future payments is worth right now.'
          },
          type: {
            name: 'type',
            detail: 'The number 0 or 1 and indicates when payments are due.'
          }
        }
      },
      FVSCHEDULE: {
        description: 'Gibt den künftigen Wert eines Anfangskapitals nach Anwendung einer Reihe variabler Zinssätze zurück.',
        abstract: 'Endwert bei variablen Zinssätzen.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/fvschedule-function-bec29522-bd87-4082-bab9-a241f3fb251d'
          }
        ],
        functionParameter: {
          principal: {
            name: 'principal',
            detail: 'The present value.'
          },
          schedule: {
            name: 'schedule',
            detail: 'An array of interest rates to apply.'
          }
        }
      },
      INTRATE: {
        description: 'Gibt den Zinssatz eines voll investierten Wertpapiers zurück.',
        abstract: 'Zinssatz voll investiert.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/intrate-function-5cb34dde-a221-4cb6-b3eb-0b9e55e1316f'
          }
        ],
        functionParameter: {
          settlement: {
            name: 'settlement',
            detail: 'The security\'s settlement date.'
          },
          maturity: {
            name: 'maturity',
            detail: 'The security\'s maturity date.'
          },
          investment: {
            name: 'investment',
            detail: 'The amount invested in the security.'
          },
          redemption: {
            name: 'redemption',
            detail: 'The amount to be received at maturity.'
          },
          basis: {
            name: 'basis',
            detail: 'The type of day count basis to use.'
          }
        }
      },
      IPMT: {
        description: 'Gibt die Zinszahlung einer Investition für eine bestimmte Periode zurück.',
        abstract: 'Zinszahlung pro Periode.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/ipmt-function-5cce0ad6-8402-4a41-8d29-61a0b054cb6f'
          }
        ],
        functionParameter: {
          rate: {
            name: 'rate',
            detail: 'The interest rate per period.'
          },
          per: {
            name: 'per',
            detail: 'The period for which you want to find the interest and must be in the range 1 to nper.'
          },
          nper: {
            name: 'nper',
            detail: 'The total number of payment periods in an annuity.'
          },
          pv: {
            name: 'pv',
            detail: 'The present value, or the lump-sum amount that a series of future payments is worth right now.'
          },
          fv: {
            name: 'fv',
            detail: 'The future value, or a cash balance you want to attain after the last payment is made.'
          },
          type: {
            name: 'type',
            detail: 'The number 0 or 1 and indicates when payments are due.'
          }
        }
      },
      IRR: {
        description: 'Gibt den internen Zinsfuß einer Reihe von Zahlungen zurück.',
        abstract: 'Interner Zinsfuß.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/irr-function-64925eaa-9988-495b-b290-3ad0c163c1bc'
          }
        ],
        functionParameter: {
          values: {
            name: 'values',
            detail: 'An array or a reference to cells that contain numbers for which you want to calculate the internal rate of return.\n1.Values must contain at least one positive value and one negative value to calculate the internal rate of return.\n2.IRR uses the order of values to interpret the order of cash flows. Be sure to enter your payment and income values in the sequence you want.\n3.If an array or reference argument contains text, logical values, or empty cells, those values are ignored.'
          },
          guess: {
            name: 'guess',
            detail: 'A number that you guess is close to the result of IRR.'
          }
        }
      },
      ISPMT: {
        description: 'Berechnet die während einer bestimmten Periode einer Investition gezahlten Zinsen.',
        abstract: 'Zinsbetrag einer Periode (Sonderform).',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/ispmt-function-fa58adb6-9d39-4ce0-8f43-75399cea56cc'
          }
        ],
        functionParameter: {
          rate: {
            name: 'rate',
            detail: 'The interest rate for the investment.'
          },
          per: {
            name: 'per',
            detail: 'The period for which you want to find the interest, and must be between 1 and Nper.'
          },
          nper: {
            name: 'nper',
            detail: 'The total number of payment periods for the investment.'
          },
          pv: {
            name: 'pv',
            detail: 'The present value of the investment. For a loan, Pv is the loan amount.'
          }
        }
      },
      MDURATION: {
        description: 'Gibt die geänderte Macauley-Duration eines Wertpapiers mit einem angenommenen Nennwert von 100 EUR zurück.',
        abstract: 'Modifizierte Duration.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/mduration-function-b3786a69-4f20-469a-94ad-33e5b90a763c'
          }
        ],
        functionParameter: {
          settlement: {
            name: 'settlement',
            detail: 'The security\'s settlement date.'
          },
          maturity: {
            name: 'maturity',
            detail: 'The security\'s maturity date.'
          },
          coupon: {
            name: 'coupon',
            detail: 'The security\'s annual coupon rate.'
          },
          yld: {
            name: 'yld',
            detail: 'The security\'s annual yield.'
          },
          frequency: {
            name: 'frequency',
            detail: 'The number of coupon payments per year.'
          },
          basis: {
            name: 'basis',
            detail: 'The type of day count basis to use.'
          }
        }
      },
      MIRR: {
        description: 'Gibt den modifizierten internen Zinsfuß zurück.',
        abstract: 'Modifizierter interner Zinsfuß.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/mirr-function-b020f038-7492-4fb4-93c1-35c345b53524'
          }
        ],
        functionParameter: {
          values: {
            name: 'values',
            detail: 'An array or a reference to cells that contain numbers. These numbers represent a series of payments (negative values) and income (positive values) occurring at regular periods.\n1.Values must contain at least one positive value and one negative value to calculate the modified internal rate of return. Otherwise, MIRR returns the #DIV/0! error value.\n2.If an array or reference argument contains text, logical values, or empty cells, those values are ignored; however, cells with the value zero are included.'
          },
          financeRate: {
            name: 'finance_rate',
            detail: 'The interest rate you pay on the money used in the cash flows.'
          },
          reinvestRate: {
            name: 'reinvest_rate',
            detail: 'The interest rate you receive on the cash flows as you reinvest them.'
          }
        }
      },
      NOMINAL: {
        description: 'Gibt den nominellen Jahreszinssatz zurück.',
        abstract: 'Nomineller Jahreszins.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/nominal-function-7f1ae29b-6b92-435e-b950-ad8b190ddd2b'
          }
        ],
        functionParameter: {
          effectRate: {
            name: 'effect_rate',
            detail: 'The effective interest rate.'
          },
          npery: {
            name: 'npery',
            detail: 'The number of compounding periods per year.'
          }
        }
      },
      NPER: {
        description: 'Gibt die Anzahl der Zahlungsperioden einer Investition zurück.',
        abstract: 'Anzahl der Zahlungsperioden.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/nper-function-240535b5-6653-4d2d-bfcf-b6a38151d815'
          }
        ],
        functionParameter: {
          rate: {
            name: 'rate',
            detail: 'The interest rate per period.'
          },
          pmt: {
            name: 'pmt',
            detail: 'The payment made each period; it cannot change over the life of the annuity.'
          },
          pv: {
            name: 'pv',
            detail: 'The present value, or the lump-sum amount that a series of future payments is worth right now.'
          },
          fv: {
            name: 'fv',
            detail: 'The future value, or a cash balance you want to attain after the last payment is made.'
          },
          type: {
            name: 'type',
            detail: 'The number 0 or 1 and indicates when payments are due.'
          }
        }
      },
      NPV: {
        description: 'Gibt den Nettobarwert einer Investition basierend auf einer Reihe periodischer Zahlungen und einem Abzinsungsfaktor zurück.',
        abstract: 'Nettobarwert.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/npv-function-8672cb67-2576-4d07-b67b-ac28acf2a568'
          }
        ],
        functionParameter: {
          rate: {
            name: 'rate',
            detail: 'The rate of discount over the length of one period.'
          },
          value1: {
            name: 'value1',
            detail: '1 to 254 arguments representing the payments and income.'
          },
          value2: {
            name: 'value2',
            detail: '1 to 254 arguments representing the payments and income.'
          }
        }
      },
      ODDFPRICE: {
        description: 'Gibt den Kurs einer Anleihe mit einem unregelmäßigen ersten Zinstermin zurück.',
        abstract: 'Kurs bei unregelmäßigem ersten Zinstermin.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/oddfprice-function-d7d664a8-34df-4233-8d2b-922bcf6a69e1'
          }
        ],
        functionParameter: {
          settlement: {
            name: 'settlement',
            detail: 'The security\'s settlement date.'
          },
          maturity: {
            name: 'maturity',
            detail: 'The security\'s maturity date.'
          },
          issue: {
            name: 'issue',
            detail: 'The security\'s issue date.'
          },
          firstCoupon: {
            name: 'first_coupon',
            detail: 'The security\'s first coupon date.'
          },
          rate: {
            name: 'rate',
            detail: 'The security\'s interest rate.'
          },
          yld: {
            name: 'yld',
            detail: 'The security\'s annual yield.'
          },
          redemption: {
            name: 'redemption',
            detail: 'The security\'s redemption value per $100 face value.'
          },
          frequency: {
            name: 'frequency',
            detail: 'The number of coupon payments per year. For annual payments, frequency = 1; for semiannual, frequency = 2; for quarterly, frequency = 4.'
          },
          basis: {
            name: 'basis',
            detail: 'The type of day count basis to use.'
          }
        }
      },
      ODDFYIELD: {
        description: 'Gibt die Rendite einer Anleihe mit einem unregelmäßigen ersten Zinstermin zurück.',
        abstract: 'Rendite bei unregelmäßigem ersten Zinstermin.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/oddfyield-function-66bc8b7b-6501-4c93-9ce3-2fd16220fe37'
          }
        ],
        functionParameter: {
          settlement: {
            name: 'settlement',
            detail: 'The security\'s settlement date.'
          },
          maturity: {
            name: 'maturity',
            detail: 'The security\'s maturity date.'
          },
          issue: {
            name: 'issue',
            detail: 'The security\'s issue date.'
          },
          firstCoupon: {
            name: 'first_coupon',
            detail: 'The security\'s first coupon date.'
          },
          rate: {
            name: 'rate',
            detail: 'The security\'s interest rate.'
          },
          pr: {
            name: 'pr',
            detail: 'The security\'s price.'
          },
          redemption: {
            name: 'redemption',
            detail: 'The security\'s redemption value per $100 face value.'
          },
          frequency: {
            name: 'frequency',
            detail: 'The number of coupon payments per year. For annual payments, frequency = 1; for semiannual, frequency = 2; for quarterly, frequency = 4.'
          },
          basis: {
            name: 'basis',
            detail: 'The type of day count basis to use.'
          }
        }
      },
      ODDLPRICE: {
        description: 'Gibt den Kurs einer Anleihe mit einem unregelmäßigen letzten Zinstermin zurück.',
        abstract: 'Kurs bei unregelmäßigem letzten Zinstermin.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/oddlprice-function-fb657749-d200-4902-afaf-ed5445027fc4'
          }
        ],
        functionParameter: {
          settlement: {
            name: 'settlement',
            detail: 'The security\'s settlement date.'
          },
          maturity: {
            name: 'maturity',
            detail: 'The security\'s maturity date.'
          },
          lastInterest: {
            name: 'last_interest',
            detail: 'The security\'s last coupon date.'
          },
          rate: {
            name: 'rate',
            detail: 'The security\'s interest rate.'
          },
          yld: {
            name: 'yld',
            detail: 'The security\'s annual yield.'
          },
          redemption: {
            name: 'redemption',
            detail: 'The security\'s redemption value per $100 face value.'
          },
          frequency: {
            name: 'frequency',
            detail: 'The number of coupon payments per year. For annual payments, frequency = 1; for semiannual, frequency = 2; for quarterly, frequency = 4.'
          },
          basis: {
            name: 'basis',
            detail: 'The type of day count basis to use.'
          }
        }
      },
      ODDLYIELD: {
        description: 'Gibt die Rendite einer Anleihe mit einem unregelmäßigen letzten Zinstermin zurück.',
        abstract: 'Rendite bei unregelmäßigem letzten Zinstermin.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/oddlyield-function-c873d088-cf40-435f-8d41-c8232fee9238'
          }
        ],
        functionParameter: {
          settlement: {
            name: 'settlement',
            detail: 'The security\'s settlement date.'
          },
          maturity: {
            name: 'maturity',
            detail: 'The security\'s maturity date.'
          },
          lastInterest: {
            name: 'last_interest',
            detail: 'The security\'s last coupon date.'
          },
          rate: {
            name: 'rate',
            detail: 'The security\'s interest rate.'
          },
          pr: {
            name: 'pr',
            detail: 'The security\'s price.'
          },
          redemption: {
            name: 'redemption',
            detail: 'The security\'s redemption value per $100 face value.'
          },
          frequency: {
            name: 'frequency',
            detail: 'The number of coupon payments per year. For annual payments, frequency = 1; for semiannual, frequency = 2; for quarterly, frequency = 4.'
          },
          basis: {
            name: 'basis',
            detail: 'The type of day count basis to use.'
          }
        }
      },
      PDURATION: {
        description: 'Gibt die Anzahl der Perioden zurück, die eine Investition benötigt, um einen angegebenen Wert zu erreichen.',
        abstract: 'Perioden bis Zielwert.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/pduration-function-44f33460-5be5-4c90-b857-22308892adaf'
          }
        ],
        functionParameter: {
          rate: {
            name: 'rate',
            detail: 'Rate is the interest rate per period.'
          },
          pv: {
            name: 'pv',
            detail: 'Pv is the present value of the investment.'
          },
          fv: {
            name: 'fv',
            detail: 'Fv is the desired future value of the investment.'
          }
        }
      },
      PMT: {
        description: 'Gibt die periodische Zahlung einer Annuität zurück.',
        abstract: 'Periodische Zahlung (Annuität).',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/pmt-function-0214da64-9a63-4996-bc20-214433fa6441'
          }
        ],
        functionParameter: {
          rate: {
            name: 'rate',
            detail: 'The interest rate per period.'
          },
          nper: {
            name: 'nper',
            detail: 'The total number of payment periods in an annuity.'
          },
          pv: {
            name: 'pv',
            detail: 'The present value, or the lump-sum amount that a series of future payments is worth right now.'
          },
          fv: {
            name: 'fv',
            detail: 'The future value, or a cash balance you want to attain after the last payment is made.'
          },
          type: {
            name: 'type',
            detail: 'The number 0 or 1 and indicates when payments are due.'
          }
        }
      },
      PPMT: {
        description: 'Gibt den Kapitalanteil einer Zahlung für eine bestimmte Periode einer Investition zurück.',
        abstract: 'Tilgungsanteil pro Periode.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/ppmt-function-c370d9e3-7749-4ca4-beea-b06c6ac95e1b'
          }
        ],
        functionParameter: {
          rate: {
            name: 'rate',
            detail: 'The interest rate per period.'
          },
          per: {
            name: 'per',
            detail: 'The period for which you want to find the interest and must be in the range 1 to nper.'
          },
          nper: {
            name: 'nper',
            detail: 'The total number of payment periods in an annuity.'
          },
          pv: {
            name: 'pv',
            detail: 'The present value, or the lump-sum amount that a series of future payments is worth right now.'
          },
          fv: {
            name: 'fv',
            detail: 'The future value, or a cash balance you want to attain after the last payment is made.'
          },
          type: {
            name: 'type',
            detail: 'The number 0 or 1 and indicates when payments are due.'
          }
        }
      },
      PRICE: {
        description: 'Gibt den Kurs einer Anleihe mit periodischen Zinszahlungen je 100 EUR Nennwert zurück.',
        abstract: 'Anleihekurs.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/price-function-3ea9deac-8dfa-436f-a7c8-17ea02c21b0a'
          }
        ],
        functionParameter: {
          settlement: {
            name: 'settlement',
            detail: 'The security\'s settlement date.'
          },
          maturity: {
            name: 'maturity',
            detail: 'The security\'s maturity date.'
          },
          rate: {
            name: 'rate',
            detail: 'The security\'s interest rate.'
          },
          yld: {
            name: 'yld',
            detail: 'The security\'s annual yield.'
          },
          redemption: {
            name: 'redemption',
            detail: 'The security\'s redemption value per $100 face value.'
          },
          frequency: {
            name: 'frequency',
            detail: 'The number of coupon payments per year. For annual payments, frequency = 1; for semiannual, frequency = 2; for quarterly, frequency = 4.'
          },
          basis: {
            name: 'basis',
            detail: 'The type of day count basis to use.'
          }
        }
      },
      PRICEDISC: {
        description: 'Gibt den Kurs einer unverzinslichen Anleihe je 100 EUR Nennwert zurück.',
        abstract: 'Kurs einer abgezinsten Anleihe.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/pricedisc-function-d06ad7c1-380e-4be7-9fd9-75e3079acfd3'
          }
        ],
        functionParameter: {
          settlement: {
            name: 'settlement',
            detail: 'The security\'s settlement date.'
          },
          maturity: {
            name: 'maturity',
            detail: 'The security\'s maturity date.'
          },
          discount: {
            name: 'discount',
            detail: 'The security\'s discount rate.'
          },
          redemption: {
            name: 'redemption',
            detail: 'The security\'s redemption value per $100 face value.'
          },
          basis: {
            name: 'basis',
            detail: 'The type of day count basis to use.'
          }
        }
      },
      PRICEMAT: {
        description: 'Gibt den Kurs einer Anleihe je 100 EUR Nennwert zurück, deren Zinsen am Fälligkeitstag gezahlt werden.',
        abstract: 'Kurs bei Zinszahlung am Fälligkeitstag.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/pricemat-function-52c3b4da-bc7e-476a-989f-a95f675cae77'
          }
        ],
        functionParameter: {
          settlement: {
            name: 'settlement',
            detail: 'The security\'s settlement date.'
          },
          maturity: {
            name: 'maturity',
            detail: 'The security\'s maturity date.'
          },
          issue: {
            name: 'issue',
            detail: 'The security\'s issue date.'
          },
          rate: {
            name: 'rate',
            detail: 'The security\'s interest rate.'
          },
          yld: {
            name: 'yld',
            detail: 'The security\'s annual yield.'
          },
          basis: {
            name: 'basis',
            detail: 'The type of day count basis to use.'
          }
        }
      },
      PV: {
        description: 'Gibt den Barwert einer Investition zurück.',
        abstract: 'Barwert.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/pv-function-23879d31-0e02-4321-be01-da16e8168cbd'
          }
        ],
        functionParameter: {
          rate: {
            name: 'rate',
            detail: 'The interest rate per period.'
          },
          nper: {
            name: 'nper',
            detail: 'The total number of payment periods in an annuity.'
          },
          pmt: {
            name: 'pmt',
            detail: 'The payment made each period; it cannot change over the life of the annuity.'
          },
          fv: {
            name: 'fv',
            detail: 'The future value, or a cash balance you want to attain after the last payment is made.'
          },
          type: {
            name: 'type',
            detail: 'The number 0 or 1 and indicates when payments are due.'
          }
        }
      },
      RATE: {
        description: 'Gibt den Zinssatz pro Periode einer Annuität zurück.',
        abstract: 'Zinssatz pro Periode.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/rate-function-9f665657-4a7e-4bb7-a030-83fc59e748ce'
          }
        ],
        functionParameter: {
          nper: {
            name: 'nper',
            detail: 'The total number of payment periods in an annuity.'
          },
          pmt: {
            name: 'pmt',
            detail: 'The payment made each period; it cannot change over the life of the annuity.'
          },
          pv: {
            name: 'pv',
            detail: 'The present value, or the lump-sum amount that a series of future payments is worth right now.'
          },
          fv: {
            name: 'fv',
            detail: 'The future value, or a cash balance you want to attain after the last payment is made.'
          },
          type: {
            name: 'type',
            detail: 'The number 0 or 1 and indicates when payments are due.'
          },
          guess: {
            name: 'guess',
            detail: 'Your guess for what the rate will be.'
          }
        }
      },
      RECEIVED: {
        description: 'Gibt den am Fälligkeitstermin gezahlten Betrag eines voll investierten Wertpapiers zurück.',
        abstract: 'Auszahlungsbetrag bei Fälligkeit.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/received-function-7a3f8b93-6611-4f81-8576-828312c9b5e5'
          }
        ],
        functionParameter: {
          settlement: {
            name: 'settlement',
            detail: 'The security\'s settlement date.'
          },
          maturity: {
            name: 'maturity',
            detail: 'The security\'s maturity date.'
          },
          investment: {
            name: 'investment',
            detail: 'The amount invested in the security.'
          },
          discount: {
            name: 'discount',
            detail: 'The security\'s discount rate.'
          },
          basis: {
            name: 'basis',
            detail: 'The type of day count basis to use.'
          }
        }
      },
      RRI: {
        description: 'Gibt einen äquivalenten Zinssatz für das Wachstum einer Investition zurück.',
        abstract: 'Äquivalenter Zinssatz.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/rri-function-6f5822d8-7ef1-4233-944c-79e8172930f4'
          }
        ],
        functionParameter: {
          nper: {
            name: 'nper',
            detail: 'Nper is the number of periods for the investment.'
          },
          pv: {
            name: 'pv',
            detail: 'Pv is the present value of the investment.'
          },
          fv: {
            name: 'fv',
            detail: 'Fv is the future value of the investment.'
          }
        }
      },
      SLN: {
        description: 'Gibt die lineare Abschreibung eines Anlagegegenstands für eine Periode zurück.',
        abstract: 'Lineare Abschreibung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/sln-function-cdb666e5-c1c6-40a7-806a-e695edc2f1c8'
          }
        ],
        functionParameter: {
          cost: {
            name: 'cost',
            detail: 'The initial cost of the asset.'
          },
          salvage: {
            name: 'salvage',
            detail: 'The value at the end of the depreciation (sometimes called the salvage value of the asset).'
          },
          life: {
            name: 'life',
            detail: 'The number of periods over which the asset is depreciated (sometimes called the useful life of the asset).'
          }
        }
      },
      SYD: {
        description: 'Gibt die arithmetisch-degressive Abschreibung eines Anlagegegenstands für eine bestimmte Periode zurück.',
        abstract: 'Arithmetisch-degressive Abschreibung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/syd-function-069f8106-b60b-4ca2-98e0-2a0f206bdb27'
          }
        ],
        functionParameter: {
          cost: {
            name: 'cost',
            detail: 'The initial cost of the asset.'
          },
          salvage: {
            name: 'salvage',
            detail: 'The value at the end of the depreciation (sometimes called the salvage value of the asset).'
          },
          life: {
            name: 'life',
            detail: 'The number of periods over which the asset is depreciated (sometimes called the useful life of the asset).'
          },
          per: {
            name: 'per',
            detail: 'The period and must use the same units as life.'
          }
        }
      },
      TBILLEQ: {
        description: 'Gibt die Rendite eines Schatzwechsels entsprechend einer Anleihe zurück.',
        abstract: 'Schatzwechsel-Rendite (anleiheäquivalent).',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/tbilleq-function-2ab72d90-9b4d-4efe-9fc2-0f81f2c19c8c'
          }
        ],
        functionParameter: {
          settlement: {
            name: 'settlement',
            detail: 'The Treasury bill\'s settlement date.'
          },
          maturity: {
            name: 'maturity',
            detail: 'The Treasury bill\'s maturity date.'
          },
          discount: {
            name: 'discount',
            detail: 'The Treasury bill\'s discount rate.'
          }
        }
      },
      TBILLPRICE: {
        description: 'Gibt den Kurs eines Schatzwechsels je 100 EUR Nennwert zurück.',
        abstract: 'Schatzwechsel-Kurs.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/tbillprice-function-eacca992-c29d-425a-9eb8-0513fe6035a2'
          }
        ],
        functionParameter: {
          settlement: {
            name: 'settlement',
            detail: 'The Treasury bill\'s settlement date.'
          },
          maturity: {
            name: 'maturity',
            detail: 'The Treasury bill\'s maturity date.'
          },
          discount: {
            name: 'discount',
            detail: 'The Treasury bill\'s discount rate.'
          }
        }
      },
      TBILLYIELD: {
        description: 'Gibt die Rendite eines Schatzwechsels zurück.',
        abstract: 'Schatzwechsel-Rendite.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/tbillyield-function-6d381232-f4b0-4cd5-8e97-45b9c03468ba'
          }
        ],
        functionParameter: {
          settlement: {
            name: 'settlement',
            detail: 'The Treasury bill\'s settlement date.'
          },
          maturity: {
            name: 'maturity',
            detail: 'The Treasury bill\'s maturity date.'
          },
          pr: {
            name: 'pr',
            detail: 'The Treasury bill\'s price per $100 face value.'
          }
        }
      },
      VDB: {
        description: 'Gibt die Abschreibung eines Anlagegegenstands für eine bestimmte oder Teilperiode unter Verwendung einer degressiven Abschreibung zurück.',
        abstract: 'Variable degressive Abschreibung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/vdb-function-dde4e207-f3fa-488d-91d2-66d55e861d73'
          }
        ],
        functionParameter: {
          cost: {
            name: 'cost',
            detail: 'The initial cost of the asset.'
          },
          salvage: {
            name: 'salvage',
            detail: 'The value at the end of the depreciation (sometimes called the salvage value of the asset).'
          },
          life: {
            name: 'life',
            detail: 'The number of periods over which the asset is being depreciated (sometimes called the useful life of the asset).'
          },
          startPeriod: {
            name: 'start_period',
            detail: 'The starting period for which you want to calculate the depreciation.'
          },
          endPeriod: {
            name: 'end_period',
            detail: 'The ending period for which you want to calculate the depreciation.'
          },
          factor: {
            name: 'factor',
            detail: 'The rate at which the balance declines. If factor is omitted, it is assumed to be 2 (the double-declining balance method).'
          },
          noSwitch: {
            name: 'no_switch',
            detail: 'A logical value specifying whether to switch to straight-line depreciation when depreciation is greater than the declining balance calculation.'
          }
        }
      },
      XIRR: {
        description: 'Gibt den internen Zinsfuß einer Reihe nicht periodischer Zahlungen zurück.',
        abstract: 'Interner Zinsfuß (nicht periodisch).',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/xirr-function-de1242ec-6477-445b-b11b-a303ad9adc9d'
          }
        ],
        functionParameter: {
          values: {
            name: 'values',
            detail: 'A series of cash flows that corresponds to a schedule of payments in dates. The first payment is optional and corresponds to a cost or payment that occurs at the beginning of the investment. If the first value is a cost or payment, it must be a negative value. All succeeding payments are discounted based on a 365-day year. The series of values must contain at least one positive and one negative value.'
          },
          dates: {
            name: 'dates',
            detail: 'A schedule of payment dates that corresponds to the cash flow payments. Dates may occur in any order.'
          },
          guess: {
            name: 'guess',
            detail: 'A number that you guess is close to the result of XIRR.'
          }
        }
      },
      XNPV: {
        description: 'Gibt den Nettobarwert einer Reihe nicht periodischer Zahlungen zurück.',
        abstract: 'Nettobarwert (nicht periodisch).',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/xnpv-function-1b42bbf6-370f-4532-a0eb-d67c16b664b7'
          }
        ],
        functionParameter: {
          rate: {
            name: 'rate',
            detail: 'The discount rate to apply to the cash flows.'
          },
          values: {
            name: 'values',
            detail: 'A series of cash flows that corresponds to a schedule of payments in dates. The first payment is optional and corresponds to a cost or payment that occurs at the beginning of the investment. If the first value is a cost or payment, it must be a negative value. All succeeding payments are discounted based on a 365-day year. The series of values must contain at least one positive and one negative value.'
          },
          dates: {
            name: 'dates',
            detail: 'A schedule of payment dates that corresponds to the cash flow payments. Dates may occur in any order.'
          }
        }
      },
      YIELD: {
        description: 'Gibt die Rendite einer Anleihe mit periodischen Zinszahlungen zurück.',
        abstract: 'Anleihe-Rendite.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/yield-function-f5f5ca43-c4bd-434f-8bd2-ed3c9727a4fe'
          }
        ],
        functionParameter: {
          settlement: {
            name: 'settlement',
            detail: 'The security\'s settlement date.'
          },
          maturity: {
            name: 'maturity',
            detail: 'The security\'s maturity date.'
          },
          rate: {
            name: 'rate',
            detail: 'The security\'s interest rate.'
          },
          pr: {
            name: 'pr',
            detail: 'The security\'s price per $100 face value.'
          },
          redemption: {
            name: 'redemption',
            detail: 'The security\'s redemption value per $100 face value.'
          },
          frequency: {
            name: 'frequency',
            detail: 'The number of coupon payments per year. For annual payments, frequency = 1; for semiannual, frequency = 2; for quarterly, frequency = 4.'
          },
          basis: {
            name: 'basis',
            detail: 'The type of day count basis to use.'
          }
        }
      },
      YIELDDISC: {
        description: 'Gibt die jährliche Rendite einer unverzinslichen Anleihe zurück.',
        abstract: 'Rendite einer abgezinsten Anleihe.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/yielddisc-function-a9dbdbae-7dae-46de-b995-615faffaaed7'
          }
        ],
        functionParameter: {
          settlement: {
            name: 'settlement',
            detail: 'The security\'s settlement date.'
          },
          maturity: {
            name: 'maturity',
            detail: 'The security\'s maturity date.'
          },
          pr: {
            name: 'pr',
            detail: 'The security\'s price per $100 face value.'
          },
          redemption: {
            name: 'redemption',
            detail: 'The security\'s redemption value per $100 face value.'
          },
          basis: {
            name: 'basis',
            detail: 'The type of day count basis to use.'
          }
        }
      },
      YIELDMAT: {
        description: 'Gibt die jährliche Rendite einer Anleihe zurück, deren Zinsen am Fälligkeitstermin gezahlt werden.',
        abstract: 'Rendite bei Zinszahlung am Fälligkeitstag.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/yieldmat-function-ba7d1809-0d33-4bcb-96c7-6c56ec62ef6f'
          }
        ],
        functionParameter: {
          settlement: {
            name: 'settlement',
            detail: 'The security\'s settlement date.'
          },
          maturity: {
            name: 'maturity',
            detail: 'The security\'s maturity date.'
          },
          issue: {
            name: 'issue',
            detail: 'The security\'s issue date.'
          },
          rate: {
            name: 'rate',
            detail: 'The security\'s interest rate.'
          },
          pr: {
            name: 'pr',
            detail: 'The security\'s price per $100 face value.'
          },
          basis: {
            name: 'basis',
            detail: 'The type of day count basis to use.'
          }
        }
      },
      DATE: {
        description: 'Gibt die fortlaufende Zahl eines bestimmten Datums zurück.',
        abstract: 'Gibt die fortlaufende Zahl eines Datums zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/date-function-e36c0c8c-4104-49da-ab83-82328b832349'
          }
        ],
        functionParameter: {
          year: {
            name: 'year',
            detail: 'The value of the year argument can include one to four digits. Excel interprets the year argument according to the date system your computer is using. By default, Univer uses the 1900 date system, which means the first date is January 1, 1900.'
          },
          month: {
            name: 'month',
            detail: 'A positive or negative integer representing the month of the year from 1 to 12 (January to December).'
          },
          day: {
            name: 'day',
            detail: 'A positive or negative integer representing the day of the month from 1 to 31.'
          }
        }
      },
      DATEDIF: {
        description: 'Berechnet die Anzahl von Tagen, Monaten oder Jahren zwischen zwei Daten. Diese Funktion ist nützlich, wenn ein Alter berechnet werden soll.',
        abstract: 'Anzahl von Tagen, Monaten oder Jahren zwischen zwei Daten.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/datedif-function-25dba1a4-2812-480b-84dd-8b32a451b35c'
          }
        ],
        functionParameter: {
          startDate: {
            name: 'start_date',
            detail: 'A date that represents the first, or starting date of a given period.'
          },
          endDate: {
            name: 'end_date',
            detail: 'A date that represents the last, or ending, date of the period.'
          },
          method: {
            name: 'method',
            detail: 'The type of information that you want returned.'
          }
        }
      },
      DATEVALUE: {
        description: 'Wandelt ein als Text dargestelltes Datum in eine fortlaufende Zahl um.',
        abstract: 'Wandelt ein Datumstext in eine fortlaufende Zahl um.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/datevalue-function-df8b07d4-7761-4a93-bc33-b7471bbff252'
          }
        ],
        functionParameter: {
          dateText: {
            name: 'date_text',
            detail: 'Text that represents a date in an Excel date format, or a reference to a cell that contains text that represents a date in an Excel date format. For example, "1/30/2008" or "30-Jan-2008" are text strings within quotation marks that represent dates.\nUsing the default date system in Microsoft Excel for Windows, the date_text argument must represent a date between January 1, 1900 and December 31, 9999. The DATEVALUE function returns the #VALUE! error value if the value of the date_text argument falls outside of this range.\nIf the year portion of the date_text argument is omitted, the DATEVALUE function uses the current year from your computer\'s built-in clock. Time information in the date_text argument is ignored.'
          }
        }
      },
      DAY: {
        description: 'Gibt den Tag eines Datums zurück, dargestellt als fortlaufende Zahl. Der Tag wird als ganze Zahl zwischen 1 und 31 zurückgegeben.',
        abstract: 'Wandelt eine fortlaufende Zahl in einen Tag des Monats um.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/day-function-8a7d1cbb-6c7d-4ba1-8aea-25c134d03101'
          }
        ],
        functionParameter: {
          serialNumber: {
            name: 'serial_number',
            detail: 'The date of the day you are trying to find. Dates should be entered by using the DATE function, or as results of other formulas or functions. For example, use DATE(2008,5,23) for the 23rd day of May, 2008.'
          }
        }
      },
      DAYS: {
        description: 'Gibt die Anzahl der Tage zwischen zwei Daten zurück.',
        abstract: 'Anzahl der Tage zwischen zwei Daten.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/days-function-57740535-d549-4395-8728-0f07bff0b9df'
          }
        ],
        functionParameter: {
          endDate: {
            name: 'end_date',
            detail: 'Start_date and End_date are the two dates between which you want to know the number of days.'
          },
          startDate: {
            name: 'start_date',
            detail: 'Start_date and End_date are the two dates between which you want to know the number of days.'
          }
        }
      },
      DAYS360: {
        description: 'Berechnet die Anzahl der Tage zwischen zwei Daten ausgehend von einem 360-Tage-Jahr.',
        abstract: 'Tage zwischen zwei Daten (360-Tage-Jahr).',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/days360-function-b9a509fd-49ef-407e-94df-0cbda5718c2a'
          }
        ],
        functionParameter: {
          startDate: {
            name: 'start_date',
            detail: 'Start_date and End_date are the two dates between which you want to know the number of days.'
          },
          endDate: {
            name: 'end_date',
            detail: 'Start_date and End_date are the two dates between which you want to know the number of days.'
          },
          method: {
            name: 'method',
            detail: 'A logical value that specifies whether to use the U.S. or European method in the calculation.'
          }
        }
      },
      EDATE: {
        description: 'Gibt die fortlaufende Zahl des Datums zurück, das eine bestimmte Anzahl von Monaten vor oder nach dem Startdatum liegt.',
        abstract: 'Datum eine bestimmte Anzahl von Monaten vor/nach dem Startdatum.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/edate-function-3c920eb2-6e66-44e7-a1f5-753ae47ee4f5'
          }
        ],
        functionParameter: {
          startDate: {
            name: 'start_date',
            detail: 'A date that represents the start date. Dates should be entered by using the DATE function, or as results of other formulas or functions. For example, use DATE(2008,5,23) for the 23rd day of May, 2008. Problems can occur if dates are entered as text.'
          },
          months: {
            name: 'months',
            detail: 'The number of months before or after start_date. A positive value for months yields a future date; a negative value yields a past date.'
          }
        }
      },
      EOMONTH: {
        description: 'Gibt die fortlaufende Zahl des letzten Tages des Monats vor oder nach einer angegebenen Anzahl von Monaten zurück.',
        abstract: 'Letzter Tag des Monats vor/nach einer Anzahl Monate.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/eomonth-function-7314ffa1-2bc9-4005-9d66-f49db127d628'
          }
        ],
        functionParameter: {
          startDate: {
            name: 'start_date',
            detail: 'A date that represents the starting date.'
          },
          months: {
            name: 'months',
            detail: 'The number of months before or after start_date.'
          }
        }
      },
      EPOCHTODATE: {
        description: 'Wandelt einen Unix-Epochen-Zeitstempel in Sekunden, Millisekunden oder Mikrosekunden in ein Datum/Uhrzeit um.',
        abstract: 'Wandelt einen Unix-Zeitstempel in ein Datum um.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.google.com/docs/answer/13193461?hl=en'
          }
        ],
        functionParameter: {
          timestamp: {
            name: 'timestamp',
            detail: 'A Unix epoch timestamp, in seconds, milliseconds, or microseconds.'
          },
          unit: {
            name: 'unit',
            detail: 'The unit of time in which the timestamp is expressed. 1 by default: \n1 indicates the time unit is seconds. \n2 indicates the time unit is milliseconds.\n3 indicates the time unit is microseconds.'
          }
        }
      },
      HOUR: {
        description: 'Wandelt eine fortlaufende Zahl in eine Stunde um.',
        abstract: 'Wandelt eine fortlaufende Zahl in eine Stunde um.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/hour-function-a3afa879-86cb-4339-b1b5-2dd2d7310ac7'
          }
        ],
        functionParameter: {
          serialNumber: {
            name: 'serial_number',
            detail: 'The date of the day you are trying to find. Dates should be entered by using the DATE function, or as results of other formulas or functions. For example, use DATE(2008,5,23) for the 23rd day of May, 2008.'
          }
        }
      },
      ISOWEEKNUM: {
        description: 'Gibt die ISO-Kalenderwoche zu einem Datum zurück.',
        abstract: 'ISO-Kalenderwoche eines Datums.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/isoweeknum-function-1c2d0afe-d25b-4ab1-8894-8d0520e90e0e'
          }
        ],
        functionParameter: {
          date: {
            name: 'date',
            detail: 'Date is the date-time code used by Excel for date and time calculation.'
          }
        }
      },
      MINUTE: {
        description: 'Wandelt eine fortlaufende Zahl in eine Minute um.',
        abstract: 'Wandelt eine fortlaufende Zahl in eine Minute um.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/minute-function-af728df0-05c4-4b07-9eed-a84801a60589'
          }
        ],
        functionParameter: {
          serialNumber: {
            name: 'serial_number',
            detail: 'The date of the day you are trying to find. Dates should be entered by using the DATE function, or as results of other formulas or functions. For example, use DATE(2008,5,23) for the 23rd day of May, 2008.'
          }
        }
      },
      MONTH: {
        description: 'Wandelt eine fortlaufende Zahl in einen Monat um.',
        abstract: 'Wandelt eine fortlaufende Zahl in einen Monat um.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/month-function-579a2881-199b-48b2-ab90-ddba0eba86e8'
          }
        ],
        functionParameter: {
          serialNumber: {
            name: 'serial_number',
            detail: 'The date of the month you are trying to find. Dates should be entered by using the DATE function, or as results of other formulas or functions. For example, use DATE(2008,5,23) for the 23rd day of May, 2008.'
          }
        }
      },
      NETWORKDAYS: {
        description: 'Gibt die Anzahl der ganzen Arbeitstage zwischen zwei Datumswerten zurück.',
        abstract: 'Anzahl der Arbeitstage zwischen zwei Datumswerten.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/networkdays-function-48e717bf-a7a3-495f-969e-5005e3eb18e7'
          }
        ],
        functionParameter: {
          startDate: {
            name: 'start_date',
            detail: 'A date that represents the start date.'
          },
          endDate: {
            name: 'end_date',
            detail: 'A date that represents the end date.'
          },
          holidays: {
            name: 'holidays',
            detail: 'An optional range of one or more dates to exclude from the working calendar, such as state and federal holidays and floating holidays'
          }
        }
      },
      NETWORKDAYS_INTL: {
        description: 'Gibt die Anzahl der ganzen Arbeitstage zwischen zwei Datumswerten mit benutzerdefinierten Wochenenden zurück.',
        abstract: 'Arbeitstage mit benutzerdefinierten Wochenenden.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/networkdays-intl-function-a9b26239-4f20-46a1-9ab8-4e925bfd5e28'
          }
        ],
        functionParameter: {
          startDate: {
            name: 'start_date',
            detail: 'A date that represents the start date.'
          },
          endDate: {
            name: 'end_date',
            detail: 'A date that represents the end date.'
          },
          weekend: {
            name: 'weekend',
            detail: 'is a weekend number or string that specifies when weekends occur.'
          },
          holidays: {
            name: 'holidays',
            detail: 'An optional range of one or more dates to exclude from the working calendar, such as state and federal holidays and floating holidays.'
          }
        }
      },
      NOW: {
        description: 'Gibt die fortlaufende Zahl des aktuellen Datums und der aktuellen Uhrzeit zurück.',
        abstract: 'Aktuelles Datum und aktuelle Uhrzeit.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/now-function-3337fd29-145a-4347-b2e6-20c904739c46'
          }
        ],
        functionParameter: {}
      },
      SECOND: {
        description: 'Wandelt eine fortlaufende Zahl in eine Sekunde um.',
        abstract: 'Wandelt eine fortlaufende Zahl in eine Sekunde um.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/second-function-740d1cfc-553c-4099-b668-80eaa24e8af1'
          }
        ],
        functionParameter: {
          serialNumber: {
            name: 'serial_number',
            detail: 'The date of the day you are trying to find. Dates should be entered by using the DATE function, or as results of other formulas or functions. For example, use DATE(2008,5,23) for the 23rd day of May, 2008.'
          }
        }
      },
      TIME: {
        description: 'Gibt die fortlaufende Zahl einer bestimmten Uhrzeit zurück.',
        abstract: 'Gibt die fortlaufende Zahl einer Uhrzeit zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/time-function-9a5aff99-8f7d-4611-845e-747d0b8d5457'
          }
        ],
        functionParameter: {
          hour: {
            name: 'hour',
            detail: 'A number from 0 (zero) to 32767 representing the hour. Any value greater than 23 will be divided by 24 and the remainder will be treated as the hour value. For example, TIME(27,0,0) = TIME(3,0,0) = .125 or 3:00 AM.'
          },
          minute: {
            name: 'minute',
            detail: 'A number from 0 to 32767 representing the minute. Any value greater than 59 will be converted to hours and minutes. For example, TIME(0,750,0) = TIME(12,30,0) = .520833 or 12:30 PM.'
          },
          second: {
            name: 'second',
            detail: 'A number from 0 to 32767 representing the second. Any value greater than 59 will be converted to hours, minutes, and seconds. For example, TIME(0,0,2000) = TIME(0,33,22) = .023148 or 12:33:20 AM.'
          }
        }
      },
      TIMEVALUE: {
        description: 'Wandelt eine als Text vorliegende Uhrzeit in eine fortlaufende Zahl um.',
        abstract: 'Wandelt einen Uhrzeit-Text in eine fortlaufende Zahl um.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/timevalue-function-0b615c12-33d8-4431-bf3d-f3eb6d186645'
          }
        ],
        functionParameter: {
          timeText: {
            name: 'time_text',
            detail: 'A text string that represents a time in any one of the Microsoft Excel time formats; for example, "6:45 PM" and "18:45" text strings within quotation marks that represent time.'
          }
        }
      },
      TO_DATE: {
        description: 'Wandelt eine Zahl in ein Datum um.',
        abstract: 'In Datum umwandeln.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.google.com/docs/answer/3094239?hl=en&sjid=2155433538747546473-AP'
          }
        ],
        functionParameter: {
          value: {
            name: 'value',
            detail: 'The argument or reference to a cell to be converted to a date.'
          }
        }
      },
      TODAY: {
        description: 'Gibt die fortlaufende Zahl des aktuellen Datums zurück.',
        abstract: 'Aktuelles Datum.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/today-function-5eb3078d-a82c-4736-8930-2f51a028fdd9'
          }
        ],
        functionParameter: {}
      },
      WEEKDAY: {
        description: 'Wandelt eine fortlaufende Zahl in einen Wochentag um.',
        abstract: 'Wochentag einer fortlaufenden Zahl.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/weekday-function-60e44483-2ed1-439f-8bd0-e404c190949a'
          }
        ],
        functionParameter: {
          serialNumber: {
            name: 'serial_number',
            detail: 'A sequential number that represents the date of the day you are trying to find.'
          },
          returnType: {
            name: 'return_type',
            detail: 'A number that determines the type of return value.'
          }
        }
      },
      WEEKNUM: {
        description: 'Wandelt eine fortlaufende Zahl in eine Zahl um, die angibt, in welche Woche des Jahres das Datum fällt.',
        abstract: 'Kalenderwoche eines Datums.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/weeknum-function-e5c43a03-b4ab-426c-b411-b18c13c75340'
          }
        ],
        functionParameter: {
          serialNumber: {
            name: 'serial_number',
            detail: 'A date within the week.'
          },
          returnType: {
            name: 'return_type',
            detail: 'A number that determines on which day the week begins. The default is 1.'
          }
        }
      },
      WORKDAY: {
        description: 'Gibt die fortlaufende Zahl des Datums zurück, das vor oder nach einer bestimmten Anzahl von Arbeitstagen liegt.',
        abstract: 'Arbeitstag vor/nach einem Datum.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/workday-function-f764a5b7-05fc-4494-9486-60d494efbf33'
          }
        ],
        functionParameter: {
          startDate: {
            name: 'start_date',
            detail: 'A date that represents the start date.'
          },
          days: {
            name: 'days',
            detail: 'The number of nonweekend and nonholiday days before or after start_date. A positive value for days yields a future date; a negative value yields a past date.'
          },
          holidays: {
            name: 'holidays',
            detail: 'An optional range of one or more dates to exclude from the working calendar, such as state and federal holidays and floating holidays.'
          }
        }
      },
      WORKDAY_INTL: {
        description: 'Gibt die fortlaufende Zahl des Datums vor oder nach einer Anzahl von Arbeitstagen mit benutzerdefinierten Wochenend-Parametern zurück.',
        abstract: 'Arbeitstag mit benutzerdefinierten Wochenenden.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/workday-intl-function-a378391c-9ba7-4678-8a39-39611a9bf81d'
          }
        ],
        functionParameter: {
          startDate: {
            name: 'start_date',
            detail: 'A date that represents the start date.'
          },
          days: {
            name: 'days',
            detail: 'The number of nonweekend and nonholiday days before or after start_date. A positive value for days yields a future date; a negative value yields a past date.'
          },
          weekend: {
            name: 'weekend',
            detail: 'is a weekend number or string that specifies when weekends occur.'
          },
          holidays: {
            name: 'holidays',
            detail: 'An optional range of one or more dates to exclude from the working calendar, such as state and federal holidays and floating holidays.'
          }
        }
      },
      YEAR: {
        description: 'Wandelt eine fortlaufende Zahl in ein Jahr um.',
        abstract: 'Wandelt eine fortlaufende Zahl in ein Jahr um.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/year-function-c64f017a-1354-490d-981f-578e8ec8d3b9'
          }
        ],
        functionParameter: {
          serialNumber: {
            name: 'serial_number',
            detail: 'The date of the year you want to find. Dates should be entered by using the DATE function, or as results of other formulas or functions. For example, use DATE(2008,5,23) for the 23rd day of May, 2008. Problems can occur if dates are entered as text.'
          }
        }
      },
      YEARFRAC: {
        description: 'Gibt den Bruchteil des Jahres zurück, der durch die Anzahl ganzer Tage zwischen Anfangsdatum und Enddatum dargestellt wird.',
        abstract: 'Bruchteil eines Jahres zwischen zwei Daten.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/yearfrac-function-3844141e-c76d-4143-82b6-208454ddc6a8'
          }
        ],
        functionParameter: {
          startDate: {
            name: 'start_date',
            detail: 'A date that represents the start date.'
          },
          endDate: {
            name: 'end_date',
            detail: 'A date that represents the end date.'
          },
          basis: {
            name: 'basis',
            detail: 'The type of day count basis to use.'
          }
        }
      },
      ABS: {
        description: 'Gibt den Absolutwert einer Zahl zurück.',
        abstract: 'Absolutwert.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/abs-function-3420200f-5628-4e8c-99da-c99d7c87713c'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The real number of which you want the absolute value.'
          }
        }
      },
      ACOS: {
        description: 'Gibt den Arkuskosinus einer Zahl zurück.',
        abstract: 'Arkuskosinus.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/acos-function-cb73173f-d089-4582-afa1-76e5524b5d5b'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The cosine of the angle you want and must be from -1 to 1.'
          }
        }
      },
      ACOSH: {
        description: 'Gibt den umgekehrten hyperbolischen Kosinus einer Zahl zurück.',
        abstract: 'ARCOSH.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/acosh-function-e3992cc1-103f-4e72-9f04-624b9ef5ebfe'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'Any real number equal to or greater than 1.'
          }
        }
      },
      ACOT: {
        description: 'Gibt den Arkuskotangens einer Zahl zurück.',
        abstract: 'Arkuskotangens.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/acot-function-dc7e5008-fe6b-402e-bdd6-2eea8383d905'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'Number is the cotangent of the angle you want. This must be a real number.'
          }
        }
      },
      ACOTH: {
        description: 'Gibt den umgekehrten hyperbolischen Kotangens einer Zahl zurück.',
        abstract: 'ARCCOTH.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/acoth-function-cc49480f-f684-4171-9fc5-73e4e852300f'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The absolute value of Number must be greater than 1.'
          }
        }
      },
      AGGREGATE: {
        description: 'Gibt eine Aggregation in einer Liste oder Datenbank zurück.',
        abstract: 'AGGREGAT.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/aggregate-function-43b9278e-6aa7-4f17-92b6-e19993fa26df'
          }
        ],
        functionParameter: {
          functionNum: {
            name: 'function_num',
            detail: 'A number 1 to 19 that specifies which function to use.'
          },
          options: {
            name: 'options',
            detail: 'A numerical value that determines which values to ignore in the evaluation range for the function.'
          },
          ref1: {
            name: 'ref1',
            detail: 'The first numeric argument for functions that take multiple numeric arguments for which you want the aggregate value.'
          },
          ref2: {
            name: 'ref2',
            detail: 'Numeric arguments 2 to 252 for which you want the aggregate value.'
          }
        }
      },
      ARABIC: {
        description: 'Wandelt eine römische Zahl in eine arabische Zahl um.',
        abstract: 'Römisch in arabisch.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/arabic-function-9a8da418-c17b-4ef9-a657-9370a30a674f'
          }
        ],
        functionParameter: {
          text: {
            name: 'text',
            detail: 'A string enclosed in quotation marks, an empty string (""), or a reference to a cell containing text.'
          }
        }
      },
      ASIN: {
        description: 'Gibt den Arkussinus einer Zahl zurück.',
        abstract: 'Arkussinus.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/asin-function-81fb95e5-6d6f-48c4-bc45-58f955c6d347'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The sine of the angle you want and must be from -1 to 1.'
          }
        }
      },
      ASINH: {
        description: 'Gibt den umgekehrten hyperbolischen Sinus einer Zahl zurück.',
        abstract: 'ARSINH.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/asinh-function-4e00475a-067a-43cf-926a-765b0249717c'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'Any real number.'
          }
        }
      },
      ATAN: {
        description: 'Gibt den Arkustangens einer Zahl zurück.',
        abstract: 'Arkustangens.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/atan-function-50746fa8-630a-406b-81d0-4a2aed395543'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The tangent of the angle you want.'
          }
        }
      },
      ATAN2: {
        description: 'Gibt den Arkustangens basierend auf einer x- und y-Koordinate zurück.',
        abstract: 'ATAN2.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/atan2-function-c04592ab-b9e3-4908-b428-c96b3a565033'
          }
        ],
        functionParameter: {
          xNum: {
            name: 'x_num',
            detail: 'The x-coordinate of the point.'
          },
          yNum: {
            name: 'y_num',
            detail: 'The y-coordinate of the point.'
          }
        }
      },
      ATANH: {
        description: 'Gibt den umgekehrten hyperbolischen Tangens einer Zahl zurück.',
        abstract: 'ARTANH.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/atanh-function-3cd65768-0de7-4f1d-b312-d01c8c930d90'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'Any real number between 1 and -1.'
          }
        }
      },
      BASE: {
        description: 'Wandelt eine Zahl in eine Textdarstellung in der angegebenen Basis um.',
        abstract: 'Zahl in Textbasis.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/base-function-2ef61411-aee9-4f29-a811-1c42456c6342'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The number that you want to convert. Must be an integer greater than or equal to 0 and less than 2^53.'
          },
          radix: {
            name: 'radix',
            detail: 'The base radix that you want to convert the number into. Must be an integer greater than or equal to 2 and less than or equal to 36.'
          },
          minLength: {
            name: 'min_length',
            detail: 'The minimum length of the returned string. Must be an integer greater than or equal to 0.'
          }
        }
      },
      CEILING: {
        description: 'Rundet eine Zahl auf das nächste Vielfache eines angegebenen Wertes auf.',
        abstract: 'Aufrunden auf Vielfaches.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/ceiling-function-0a5cd7c8-0720-4f0a-bd2c-c943e510899f'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The value you want to round.'
          },
          significance: {
            name: 'significance',
            detail: 'The multiple to which you want to round.'
          }
        }
      },
      CEILING_MATH: {
        description: 'Rundet eine Zahl auf die nächste ganze Zahl oder das nächste signifikante Vielfache.',
        abstract: 'OBERGRENZE.MATHEMATIK.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/ceiling-math-function-80f95d2f-b499-4eee-9f16-f795a8e306c8'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The value you want to round.'
          },
          significance: {
            name: 'significance',
            detail: 'The multiple to which you want to round.'
          },
          mode: {
            name: 'mode',
            detail: 'For negative numbers, controls whether Number is rounded toward or away from zero.'
          }
        }
      },
      CEILING_PRECISE: {
        description: 'Rundet eine Zahl auf die nächste ganze Zahl oder das nächste signifikante Vielfache (positiv).',
        abstract: 'OBERGRENZE.GENAU.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/ceiling-precise-function-f366a774-527a-4c92-ba49-af0a196e66cb'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The value you want to round.'
          },
          significance: {
            name: 'significance',
            detail: 'The multiple to which you want to round.'
          }
        }
      },
      COMBIN: {
        description: 'Gibt die Anzahl Kombinationen für eine bestimmte Anzahl Objekte zurück.',
        abstract: 'Kombinationen.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/combin-function-12a3f276-0a21-423a-8de6-06990aaf638a'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The number of items.'
          },
          numberChosen: {
            name: 'number_chosen',
            detail: 'The number of items in each combination.'
          }
        }
      },
      COMBINA: {
        description: 'Gibt die Anzahl Kombinationen mit Wiederholungen zurück.',
        abstract: 'Kombinationen mit Wdh.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/combina-function-efb49eaa-4f4c-4cd2-8179-0ddfcf9d035d'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The number of items.'
          },
          numberChosen: {
            name: 'number_chosen',
            detail: 'The number of items in each combination.'
          }
        }
      },
      COS: {
        description: 'Gibt den Kosinus einer Zahl zurück.',
        abstract: 'Kosinus.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/cos-function-0fb808a5-95d6-4553-8148-22aebdce5f05'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The angle in radians for which you want the cosine.'
          }
        }
      },
      COSH: {
        description: 'Gibt den hyperbolischen Kosinus einer Zahl zurück.',
        abstract: 'Cosh.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/cosh-function-e460d426-c471-43e8-9540-a57ff3b70555'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'Any real number for which you want to find the hyperbolic cosine.'
          }
        }
      },
      COT: {
        description: 'Gibt den Kotangens eines Winkels zurück.',
        abstract: 'Kotangens.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/cot-function-c446f34d-6fe4-40dc-84f8-cf59e5f5e31a'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The angle in radians for which you want the cotangent.'
          }
        }
      },
      COTH: {
        description: 'Gibt den hyperbolischen Kotangens einer Zahl zurück.',
        abstract: 'Coth.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/coth-function-2e0b4cb6-0ba0-403e-aed4-deaa71b49df5'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'Any real number for which you want to find the hyperbolic cotangent.'
          }
        }
      },
      CSC: {
        description: 'Gibt den Kosekans eines Winkels zurück.',
        abstract: 'Kosekans.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/csc-function-07379361-219a-4398-8675-07ddc4f135c1'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The angle in radians for which you want the cosecant.'
          }
        }
      },
      CSCH: {
        description: 'Gibt den hyperbolischen Kosekans eines Winkels zurück.',
        abstract: 'Csch.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/csch-function-f58f2c22-eb75-4dd6-84f4-a503527f8eeb'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The angle in radians for which you want the hyperbolic cosecant.'
          }
        }
      },
      DECIMAL: {
        description: 'Wandelt eine Textdarstellung einer Zahl in einer gegebenen Basis in eine Dezimalzahl um.',
        abstract: 'Text in Dezimalzahl.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/decimal-function-ee554665-6176-46ef-82de-0a283658da2e'
          }
        ],
        functionParameter: {
          text: {
            name: 'text',
            detail: 'The string length of Text must be less than or equal to 255 characters.'
          },
          radix: {
            name: 'radix',
            detail: 'The base radix that you want to convert the number into. Must be an integer greater than or equal to 2 and less than or equal to 36.'
          }
        }
      },
      DEGREES: {
        description: 'Wandelt Bogenmaß in Grad um.',
        abstract: 'Bogenmaß in Grad.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/degrees-function-4d6ec4db-e694-4b94-ace0-1cc3f61f9ba1'
          }
        ],
        functionParameter: {
          angle: {
            name: 'angle',
            detail: 'The angle in radians that you want to convert.'
          }
        }
      },
      EVEN: {
        description: 'Rundet eine Zahl auf die nächste gerade ganze Zahl auf.',
        abstract: 'Auf gerade Zahl runden.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/even-function-197b5f06-c795-4c1e-8696-3c3b8a646cf9'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The value to round.'
          }
        }
      },
      EXP: {
        description: 'Gibt e potenziert mit der angegebenen Zahl zurück.',
        abstract: 'e hoch x.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/exp-function-c578f034-2c45-4c37-bc8c-329660a63abe'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The exponent applied to the base e.'
          }
        }
      },
      FACT: {
        description: 'Gibt die Fakultät einer Zahl zurück.',
        abstract: 'Fakultät.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/fact-function-ca8588c2-15f2-41c0-8e8c-c11bd471a4f3'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The nonnegative number for which you want the factorial. If number is not an integer, it is truncated.'
          }
        }
      },
      FACTDOUBLE: {
        description: 'Gibt die Doppelfakultät einer Zahl zurück.',
        abstract: 'Doppelfakultät.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/factdouble-function-e67697ac-d214-48eb-b7b7-cce2589ecac8'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The nonnegative number for which you want the double factorial. If number is not an integer, it is truncated.'
          }
        }
      },
      FLOOR: {
        description: 'Rundet eine Zahl auf das nächste Vielfache eines angegebenen Wertes ab.',
        abstract: 'Abrunden auf Vielfaches.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/floor-function-14bb497c-24f2-4e04-b327-b0b4de5a8886'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The value you want to round.'
          },
          significance: {
            name: 'significance',
            detail: 'The multiple to which you want to round.'
          }
        }
      },
      FLOOR_MATH: {
        description: 'Rundet eine Zahl auf die nächste ganze Zahl oder das nächste signifikante Vielfache ab.',
        abstract: 'UNTERGRENZE.MATHEMATIK.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/floor-math-function-c302b599-fbdb-4177-ba19-2c2b1249a2f5'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The value you want to round.'
          },
          significance: {
            name: 'significance',
            detail: 'The multiple to which you want to round.'
          },
          mode: {
            name: 'mode',
            detail: 'For negative numbers, controls whether Number is rounded toward or away from zero.'
          }
        }
      },
      FLOOR_PRECISE: {
        description: 'Rundet eine Zahl auf die nächste ganze Zahl oder das nächste signifikante Vielfache ab (positiv).',
        abstract: 'UNTERGRENZE.GENAU.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/floor-precise-function-f769b468-1452-4617-8dc3-02f842a0702e'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The value you want to round.'
          },
          significance: {
            name: 'significance',
            detail: 'The multiple to which you want to round.'
          }
        }
      },
      GCD: {
        description: 'Gibt den größten gemeinsamen Teiler zurück.',
        abstract: 'GGT.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/gcd-function-d5107a51-69e3-461f-8e4c-ddfc21b5073a'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'To find the first number of the greatest common divisor, you can also use a single array or a reference to an array instead of the comma-separated parameters.'
          },
          number2: {
            name: 'number2',
            detail: 'The second number whose greatest common divisor is to be found. Up to 255 numbers can be specified in this way.'
          }
        }
      },
      INT: {
        description: 'Rundet eine Zahl auf die nächste ganze Zahl ab.',
        abstract: 'GANZZAHL.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/int-function-a6c4af9e-356d-4369-ab6a-cb1fd9d343ef'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The real number you want to round down to an integer.'
          }
        }
      },
      ISO_CEILING: {
        description: 'Rundet eine Zahl auf die nächste ganze Zahl oder das nächste signifikante Vielfache auf.',
        abstract: 'ISO.OBERGRENZE.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/iso-ceiling-function-e587bb73-6cc2-4113-b664-ff5b09859a83'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'first'
          },
          number2: {
            name: 'number2',
            detail: 'second'
          }
        }
      },
      LCM: {
        description: 'Gibt das kleinste gemeinsame Vielfache zurück.',
        abstract: 'KGV.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/lcm-function-7152b67a-8bb5-4075-ae5c-06ede5563c94'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'To find the first number of the least common multiple, you can also use a single array or a reference to an array instead of the comma-separated parameters.'
          },
          number2: {
            name: 'number2',
            detail: 'The second number whose least common multiple is to be found. Up to 255 numbers can be specified in this way.'
          }
        }
      },
      LET: {
        description: 'Weist Berechnungsergebnissen Namen zu.',
        abstract: 'Namen zu Werten zuweisen.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/let-function-34842dd8-b92b-4d3f-b325-b8b8f9908999'
          }
        ],
        functionParameter: {
          name1: {
            name: 'name1',
            detail: 'The first name to assign. Must start with a letter. Cannot be the output of a formula or conflict with range syntax.'
          },
          nameValue1: {
            name: 'name_value1',
            detail: 'The value that is assigned to name1.'
          },
          calculationOrName2: {
            name: 'calculation_or_name2',
            detail: 'One of the following:\n1.A calculation that uses all names within the LET function. This must be the last argument in the LET function.\n2.A second name to assign to a second name_value. If a name is specified, name_value2 and calculation_or_name3 become required.'
          },
          nameValue2: {
            name: 'name_value2',
            detail: 'The value that is assigned to calculation_or_name2.'
          },
          calculationOrName3: {
            name: 'calculation_or_name3',
            detail: 'One of the following:\n1.A calculation that uses all names within the LET function. The last argument in the LET function must be a calculation.\n2.A third name to assign to a third name_value. If a name is specified, name_value3 and calculation_or_name4 become required.'
          }
        }
      },
      LN: {
        description: 'Gibt den natürlichen Logarithmus einer Zahl zurück.',
        abstract: 'Natürlicher Logarithmus.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/ln-function-81fe1ed7-dac9-4acd-ba1d-07a142c6118f'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The positive real number for which you want the natural logarithm.'
          }
        }
      },
      LOG: {
        description: 'Gibt den Logarithmus einer Zahl zur angegebenen Basis zurück.',
        abstract: 'Logarithmus.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/log-function-4e82f196-1ca9-4747-8fb0-6c4a3abb3280'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The positive real number for which you want the logarithm.'
          },
          base: {
            name: 'base',
            detail: 'The base of the logarithm. If base is omitted, it is assumed to be 10.'
          }
        }
      },
      LOG10: {
        description: 'Gibt den dekadischen Logarithmus einer Zahl zurück.',
        abstract: 'Log10.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/log10-function-c75b881b-49dd-44fb-b6f4-37e3486a0211'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The positive real number for which you want the base-10 logarithm.'
          }
        }
      },
      MDETERM: {
        description: 'Gibt die Determinante einer Matrix zurück.',
        abstract: 'Matrix-Determinante.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/mdeterm-function-e7bfa857-3834-422b-b871-0ffd03717020'
          }
        ],
        functionParameter: {
          array: {
            name: 'array',
            detail: 'A numeric array with an equal number of rows and columns.'
          }
        }
      },
      MINVERSE: {
        description: 'Gibt die Inverse einer Matrix zurück.',
        abstract: 'Matrix-Inverse.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/minverse-function-11f55086-adde-4c9f-8eb9-59da2d72efc6'
          }
        ],
        functionParameter: {
          array: {
            name: 'array',
            detail: 'A numeric array with an equal number of rows and columns.'
          }
        }
      },
      MMULT: {
        description: 'Gibt das Produkt zweier Matrizen zurück.',
        abstract: 'Matrixprodukt.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/mmult-function-40593ed7-a3cd-4b6b-b9a3-e4ad3c7245eb'
          }
        ],
        functionParameter: {
          array1: {
            name: 'array1',
            detail: 'The arrays you want to multiply.'
          },
          array2: {
            name: 'array2',
            detail: 'The arrays you want to multiply.'
          }
        }
      },
      MOD: {
        description: 'Gibt den Rest einer Division zurück.',
        abstract: 'Rest.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/mod-function-9b6cd169-b6ee-406a-a97b-edf2a9dc24f3'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The number for which you want to find the remainder.'
          },
          divisor: {
            name: 'divisor',
            detail: 'The number by which you want to divide number'
          }
        }
      },
      MROUND: {
        description: 'Rundet auf das gewünschte Vielfache.',
        abstract: 'Auf Vielfaches runden.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/mround-function-c299c3b0-15a5-426d-aa4b-d2d5b3baf427'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The value to round.'
          },
          multiple: {
            name: 'multiple',
            detail: 'The multiple to which you want to round number.'
          }
        }
      },
      MULTINOMIAL: {
        description: 'Gibt den Polynomialkoeffizienten einer Gruppe von Zahlen zurück.',
        abstract: 'Polynomialkoeffizient.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/multinomial-function-6fa6373c-6533-41a2-a45e-a56db1db1bf6'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'The first value or range to use in the calculation.'
          },
          number2: {
            name: 'number2',
            detail: 'Additional values ​​or ranges to use in calculations.'
          }
        }
      },
      MUNIT: {
        description: 'Gibt die Einheitsmatrix in der angegebenen Größe zurück.',
        abstract: 'Einheitsmatrix.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/munit-function-c9fe916a-dc26-4105-997d-ba22799853a3'
          }
        ],
        functionParameter: {
          dimension: {
            name: 'dimension',
            detail: 'Dimension is an integer specifying the dimension of the unit matrix that you want to return. It returns an array. The dimension has to be greater than zero.'
          }
        }
      },
      ODD: {
        description: 'Rundet eine Zahl auf die nächste ungerade ganze Zahl auf.',
        abstract: 'Auf ungerade Zahl runden.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/odd-function-deae64eb-e08a-4c88-8b40-6d0b42575c98'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The value to round.'
          }
        }
      },
      PI: {
        description: 'Gibt den Wert von Pi zurück.',
        abstract: 'Pi.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/pi-function-264199d0-a3ba-46b8-975a-c4a04608989b'
          }
        ],
        functionParameter: {}
      },
      POWER: {
        description: 'Gibt das Ergebnis einer potenzierten Zahl zurück.',
        abstract: 'Potenz.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/power-function-d3f2908b-56f4-4c3f-895a-07fb519c362a'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The base number. It can be any real number.'
          },
          power: {
            name: 'power',
            detail: 'The exponent to which the base number is raised.'
          }
        }
      },
      PRODUCT: {
        description: 'Multipliziert seine Argumente.',
        abstract: 'Produkt.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/product-function-8e6b5b24-90ee-4650-aeec-80982a0512ce'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'The first number or range that you want to multiply.'
          },
          number2: {
            name: 'number2',
            detail: 'Additional numbers or ranges that you want to multiply, up to a maximum of 255 arguments.'
          }
        }
      },
      QUOTIENT: {
        description: 'Gibt den ganzzahligen Anteil einer Division zurück.',
        abstract: 'Ganzzahliger Quotient.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/quotient-function-9f7bf099-2a18-4282-8fa4-65290cc99dee'
          }
        ],
        functionParameter: {
          numerator: {
            name: 'numerator',
            detail: 'The dividend.'
          },
          denominator: {
            name: 'denominator',
            detail: 'The divisor.'
          }
        }
      },
      RADIANS: {
        description: 'Wandelt Grad in Bogenmaß um.',
        abstract: 'Grad in Bogenmaß.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/radians-function-ac409508-3d48-45f5-ac02-1497c92de5bf'
          }
        ],
        functionParameter: {
          angle: {
            name: 'angle',
            detail: 'An angle in degrees that you want to convert.'
          }
        }
      },
      RAND: {
        description: 'Gibt eine Zufallszahl zwischen 0 und 1 zurück.',
        abstract: 'Zufallszahl.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/rand-function-4cbfa695-8869-4788-8d90-021ea9f5be73'
          }
        ],
        functionParameter: {}
      },
      RANDARRAY: {
        description: 'Gibt ein Array von Zufallszahlen zwischen 0 und 1 zurück.',
        abstract: 'Zufallsarray.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/randarray-function-21261e55-3bec-4885-86a6-8b0a47fd4d33'
          }
        ],
        functionParameter: {
          rows: {
            name: 'rows',
            detail: 'The number of rows to be returned'
          },
          columns: {
            name: 'columns',
            detail: 'The number of columns to be returned'
          },
          min: {
            name: 'min',
            detail: 'The minimum number you would like returned'
          },
          max: {
            name: 'max',
            detail: 'The maximum number you would like returned'
          },
          wholeNumber: {
            name: 'whole_number',
            detail: 'Return a whole number or a decimal value'
          }
        }
      },
      RANDBETWEEN: {
        description: 'Gibt eine Zufallszahl zwischen den angegebenen Werten zurück.',
        abstract: 'Zufall zwischen.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/randbetween-function-4cc7f0d1-87dc-4eb7-987f-a469ab381685'
          }
        ],
        functionParameter: {
          bottom: {
            name: 'bottom',
            detail: 'The smallest integer RANDBETWEEN will return.'
          },
          top: {
            name: 'top',
            detail: 'The largest integer RANDBETWEEN will return.'
          }
        }
      },
      ROMAN: {
        description: 'Wandelt eine arabische Zahl in eine römische Zahl (als Text) um.',
        abstract: 'In römische Zahl.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/roman-function-d6b0b99e-de46-4704-a518-b45a0f8b56f5'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The Arabic numeral you want converted.'
          },
          form: {
            name: 'form',
            detail: 'A number specifying the type of roman numeral you want. The roman numeral style ranges from Classic to Simplified, becoming more concise as the value of form increases.'
          }
        }
      },
      ROUND: {
        description: 'Rundet eine Zahl auf eine angegebene Stellenzahl.',
        abstract: 'Runden.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/round-function-c018c5d8-40fb-4053-90b1-b3e7f61a213c'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The number that you want to round.'
          },
          numDigits: {
            name: 'num_digits',
            detail: 'The number of digits to which you want to round the number argument.'
          }
        }
      },
      ROUNDBANK: {
        description: 'Rundet eine Zahl nach der Bankrundungs-Regel.',
        abstract: 'Kaufmännisch runden.',
        links: [
          {
            title: 'Anleitung',
            url: ''
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The number that you want to round in banker\'s rounding.'
          },
          numDigits: {
            name: 'num_digits',
            detail: 'The number of digits to which you want to round in banker\'s rounding.'
          }
        }
      },
      ROUNDDOWN: {
        description: 'Rundet eine Zahl Richtung Null ab.',
        abstract: 'Abrunden Richtung 0.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/rounddown-function-2ec94c73-241f-4b01-8c6f-17e6d7968f53'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The number that you want to round.'
          },
          numDigits: {
            name: 'num_digits',
            detail: 'The number of digits to which you want to round the number argument.'
          }
        }
      },
      ROUNDUP: {
        description: 'Rundet eine Zahl von Null weg auf.',
        abstract: 'Aufrunden von 0 weg.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/roundup-function-f8bc9b23-e795-47db-8703-db171d0c42a7'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The number that you want to round.'
          },
          numDigits: {
            name: 'num_digits',
            detail: 'The number of digits to which you want to round the number argument.'
          }
        }
      },
      SEC: {
        description: 'Gibt den Sekans eines Winkels zurück.',
        abstract: 'Sekans.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/sec-function-ff224717-9c87-4170-9b58-d069ced6d5f7'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'Number is the angle in radians for which you want the secant.'
          }
        }
      },
      SECH: {
        description: 'Gibt den hyperbolischen Sekans eines Winkels zurück.',
        abstract: 'Sech.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/sech-function-e05a789f-5ff7-4d7f-984a-5edb9b09556f'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'Number is the angle in radians for which you want the hyperbolic secant.'
          }
        }
      },
      SERIESSUM: {
        description: 'Gibt die Summe einer Potenzreihe zurück.',
        abstract: 'Summe Potenzreihe.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/seriessum-function-a3ab25b5-1093-4f5b-b084-96c49087f637'
          }
        ],
        functionParameter: {
          x: {
            name: 'x',
            detail: 'The input value to the power series.'
          },
          n: {
            name: 'n',
            detail: 'The initial power to which you want to raise x.'
          },
          m: {
            name: 'm',
            detail: 'The step by which to increase n for each term in the series.'
          },
          coefficients: {
            name: 'coefficients',
            detail: 'A set of coefficients by which each successive power of x is multiplied.'
          }
        }
      },
      SEQUENCE: {
        description: 'Erzeugt eine Liste fortlaufender Zahlen in einem Array, z. B. 1, 2, 3, 4.',
        abstract: 'Folge erzeugen.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/sequence-function-57467a98-57e0-4817-9f14-2eb78519ca90'
          }
        ],
        functionParameter: {
          rows: {
            name: 'rows',
            detail: 'The number of rows to return.'
          },
          columns: {
            name: 'columns',
            detail: 'The number of columns to return.'
          },
          start: {
            name: 'start',
            detail: 'The first number in the sequence.'
          },
          step: {
            name: 'step',
            detail: 'The amount to increment each subsequent value in the array.'
          }
        }
      },
      SIGN: {
        description: 'Gibt das Vorzeichen einer Zahl zurück.',
        abstract: 'Vorzeichen.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/sign-function-109c932d-fcdc-4023-91f1-2dd0e916a1d8'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'Any real number.'
          }
        }
      },
      SIN: {
        description: 'Gibt den Sinus einer Zahl zurück.',
        abstract: 'Sinus.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/sin-function-cf0e3432-8b9e-483c-bc55-a76651c95602'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The angle in radians for which you want the sine.'
          }
        }
      },
      SINH: {
        description: 'Gibt den hyperbolischen Sinus einer Zahl zurück.',
        abstract: 'Sinh.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/sinh-function-1e4e8b9f-2b65-43fc-ab8a-0a37f4081fa7'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'Any real number.'
          }
        }
      },
      SQRT: {
        description: 'Gibt die Quadratwurzel einer Zahl zurück.',
        abstract: 'Quadratwurzel.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/sqrt-function-654975c2-05c4-4831-9a24-2c65e4040fdf'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The number for which you want the square root.'
          }
        }
      },
      SQRTPI: {
        description: 'Gibt die Quadratwurzel von (Zahl * Pi) zurück.',
        abstract: 'Wurzel(Zahl·π).',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/sqrtpi-function-1fb4e63f-9b51-46d6-ad68-b3e7a8b519b4'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The number by which pi is multiplied.'
          }
        }
      },
      SUBTOTAL: {
        description: 'Gibt ein Teilergebnis einer Liste oder Datenbank zurück.',
        abstract: 'Teilergebnis.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/subtotal-function-7b027003-f060-4ade-9040-e478765b9939'
          }
        ],
        functionParameter: {
          functionNum: {
            name: 'function_num',
            detail: 'The number 1-11 or 101-111 that specifies the function to use for the subtotal. 1-11 includes manually-hidden rows, while 101-111 excludes them; filtered-out cells are always excluded.'
          },
          ref1: {
            name: 'ref1',
            detail: 'The first named range or reference for which you want the subtotal.'
          },
          ref2: {
            name: 'ref2',
            detail: 'Named ranges or references 2 to 254 for which you want the subtotal.'
          }
        }
      },
      SUM: {
        description: 'Addiert seine Argumente.',
        abstract: 'Summe.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/sum-function-043e1c7d-7726-4e80-8f32-07b23e057f89'
          }
        ],
        functionParameter: {
          number1: {
            name: 'Number 1',
            detail: 'The first number you want to add. The number can be like 4, a cell reference like B6, or a cell range like B2:B8.'
          },
          number2: {
            name: 'Number 2',
            detail: 'This is the second number you want to add. You can specify up to 255 numbers in this way.'
          }
        }
      },
      SUMIF: {
        description: 'Addiert die Zellen, die mit einer Bedingung übereinstimmen.',
        abstract: 'SUMMEWENN.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/sumif-function-169b8c99-c05c-4483-a712-1697a653039b'
          }
        ],
        functionParameter: {
          range: {
            name: 'range',
            detail: 'The range of cells that you want evaluated by criteria.'
          },
          criteria: {
            name: 'criteria',
            detail: 'The criteria in the form of a number, expression, a cell reference, text, or a function that defines which cells will be added. Wildcard characters can be included - a question mark (?) to match any single character, an asterisk (*) to match any sequence of characters. If you want to find an actual question mark or asterisk, type a tilde (~) preceding the character.'
          },
          sumRange: {
            name: 'sum_range',
            detail: 'The actual cells to add, if you want to add cells other than those specified in the range argument. If the sum_range argument is omitted, Excel adds the cells that are specified in the range argument (the same cells to which the criteria is applied).'
          }
        }
      },
      SUMIFS: {
        description: 'Addiert die Zellen, die mit mehreren Bedingungen übereinstimmen.',
        abstract: 'SUMMEWENNS.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/sumifs-function-c9e748f5-7ea7-455d-9406-611cebce642b'
          }
        ],
        functionParameter: {
          sumRange: {
            name: 'sum_range',
            detail: 'The range of cells to sum.'
          },
          criteriaRange1: {
            name: 'criteria_range1',
            detail: 'The range that is tested using criteria1. criteria_range1 and criteria1 set up a search pair whereby a range is searched for specific criteria. Once items in the range are found, their corresponding values in sum_range are added.'
          },
          criteria1: {
            name: 'criteria1',
            detail: 'The criteria that defines which cells in criteria_range1 will be added. For example, criteria can be entered as 32, ">32", B4, "apples", or "32".'
          },
          criteriaRange2: {
            name: 'criteriaRange2',
            detail: 'Additional ranges. You can enter up to 127 range pairs.'
          },
          criteria2: {
            name: 'criteria2',
            detail: 'Additional associated criteria. You can enter up to 127 criteria pairs.'
          }
        }
      },
      SUMPRODUCT: {
        description: 'Gibt die Summe der Produkte einander entsprechender Komponenten der Arrays zurück.',
        abstract: 'Summenprodukt.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/sumproduct-function-16753e75-9f68-4874-94ac-4d2145a2fd2e'
          }
        ],
        functionParameter: {
          array1: {
            name: 'array',
            detail: 'The first array argument whose components you want to multiply and then add.'
          },
          array2: {
            name: 'array',
            detail: 'Array arguments 2 to 255 whose components you want to multiply and then add.'
          }
        }
      },
      SUMSQ: {
        description: 'Gibt die Summe der Quadrate seiner Argumente zurück.',
        abstract: 'Summe Quadrate.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/sumsq-function-e3313c02-51cc-4963-aae6-31442d9ec307'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'To square and find the first number, you can also use a single array or a reference to an array instead of comma-separated parameters.'
          },
          number2: {
            name: 'number2',
            detail: 'The second number to be squared and summed. Up to 255 numbers can be specified in this way.'
          }
        }
      },
      SUMX2MY2: {
        description: 'Gibt die Summe der Differenzen der Quadrate zwischen zwei Arrays zurück.',
        abstract: 'Summe x²-y².',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/sumx2my2-function-9e599cc5-5399-48e9-a5e0-e37812dfa3e9'
          }
        ],
        functionParameter: {
          arrayX: {
            name: 'array_x',
            detail: 'The first array or range of values.'
          },
          arrayY: {
            name: 'array_y',
            detail: 'The second array or range of values.'
          }
        }
      },
      SUMX2PY2: {
        description: 'Gibt die Summe der Quadratsummen zwischen zwei Arrays zurück.',
        abstract: 'Summe x²+y².',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/sumx2py2-function-826b60b4-0aa2-4e5e-81d2-be704d3d786f'
          }
        ],
        functionParameter: {
          arrayX: {
            name: 'array_x',
            detail: 'The first array or range of values.'
          },
          arrayY: {
            name: 'array_y',
            detail: 'The second array or range of values.'
          }
        }
      },
      SUMXMY2: {
        description: 'Gibt die Summe der quadrierten Differenzen zwischen zwei Arrays zurück.',
        abstract: 'Summe (x-y)².',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/sumxmy2-function-9d144ac1-4d79-43de-b524-e2ecee23b299'
          }
        ],
        functionParameter: {
          arrayX: {
            name: 'array_x',
            detail: 'The first array or range of values.'
          },
          arrayY: {
            name: 'array_y',
            detail: 'The second array or range of values.'
          }
        }
      },
      TAN: {
        description: 'Gibt den Tangens einer Zahl zurück.',
        abstract: 'Tangens.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/tan-function-08851a40-179f-4052-b789-d7f699447401'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The angle in radians for which you want the tangent.'
          }
        }
      },
      TANH: {
        description: 'Gibt den hyperbolischen Tangens einer Zahl zurück.',
        abstract: 'Tanh.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/tanh-function-017222f0-a0c3-4f69-9787-b3202295dc6c'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'Any real number.'
          }
        }
      },
      TRUNC: {
        description: 'Schneidet die Nachkommastellen einer Zahl ab.',
        abstract: 'Abschneiden.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/trunc-function-8b86a64c-3127-43db-ba14-aa5ceb292721'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The number you want to truncate.'
          },
          numDigits: {
            name: 'num_digits',
            detail: 'A number specifying the precision of the truncation. The default value for num_digits is 0 (zero).'
          }
        }
      },
      AVEDEV: {
        description: 'Gibt die durchschnittliche absolute Abweichung der Datenpunkte vom Mittelwert zurück.',
        abstract: 'Mittlere absolute Abweichung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/avedev-function-58fe8d65-2a84-4dc7-8052-f3f87b5c6639'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'The first number, cell reference, or range for which you want the average.'
          },
          number2: {
            name: 'number2',
            detail: 'Additional numbers, cell references or ranges for which you want the average, up to a maximum of 255.'
          }
        }
      },
      AVERAGE: {
        description: 'Gibt den Mittelwert seiner Argumente zurück.',
        abstract: 'Mittelwert.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/average-function-047bac88-d466-426c-a32b-8f33eb960cf6'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'The first number, cell reference, or range for which you want the average.'
          },
          number2: {
            name: 'number2',
            detail: 'Additional numbers, cell references or ranges for which you want the average, up to a maximum of 255.'
          }
        }
      },
      AVERAGE_WEIGHTED: {
        description: 'Gibt den gewichteten Mittelwert einer Wertereihe und ihrer Gewichte zurück.',
        abstract: 'Gewichteter Mittelwert.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.google.com/docs/answer/9084098?hl=en&ref_topic=3105600&sjid=2155433538747546473-AP'
          }
        ],
        functionParameter: {
          values: {
            name: 'values',
            detail: 'The values to be averaged.'
          },
          weights: {
            name: 'weights',
            detail: 'The corresponding list of weights to apply.'
          },
          additionalValues: {
            name: 'additional_values',
            detail: 'Additional values to average.'
          },
          additionalWeights: {
            name: 'additional_weights',
            detail: 'Additional weights to apply.'
          }
        }
      },
      AVERAGEA: {
        description: 'Gibt den Mittelwert seiner Argumente zurück, inklusive Zahlen, Text und Wahrheitswerten.',
        abstract: 'Mittelwert A.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/averagea-function-f5f84098-d453-4f4c-bbba-3d2c66356091'
          }
        ],
        functionParameter: {
          value1: {
            name: 'value1',
            detail: 'The first number, cell reference, or range for which you want the average.'
          },
          value2: {
            name: 'value2',
            detail: 'Additional numbers, cell references or ranges for which you want the average, up to a maximum of 255.'
          }
        }
      },
      AVERAGEIF: {
        description: 'Gibt den Mittelwert der Zellen zurück, die mit einer Bedingung übereinstimmen.',
        abstract: 'MITTELWERTWENN.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/averageif-function-faec8e2e-0dec-4308-af69-f5576d8ac642'
          }
        ],
        functionParameter: {
          range: {
            name: 'range',
            detail: 'One or more cells to average, including numbers or names, arrays, or references that contain numbers.'
          },
          criteria: {
            name: 'criteria',
            detail: 'The criteria in the form of a number, expression, cell reference, or text that defines which cells are averaged. For example, criteria can be expressed as 32, "32", ">32", "apples", or B4.'
          },
          averageRange: {
            name: 'average_range',
            detail: 'The actual set of cells to average. If omitted, range is used.'
          }
        }
      },
      AVERAGEIFS: {
        description: 'Gibt den Mittelwert der Zellen zurück, die mit mehreren Bedingungen übereinstimmen.',
        abstract: 'MITTELWERTWENNS.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/averageifs-function-48910c45-1fc0-4389-a028-f7c5c3001690'
          }
        ],
        functionParameter: {
          averageRange: {
            name: 'average_range',
            detail: 'One or more cells to average, including numbers or names, arrays, or references that contain numbers.'
          },
          criteriaRange1: {
            name: 'criteria_range1',
            detail: 'Is the set of cells to evaluate with the criteria.'
          },
          criteria1: {
            name: 'criteria1',
            detail: 'Used to define the cells for which the average will be calculated. For example, the criteria can be expressed as 32, "32", ">32", "apple", or B4'
          },
          criteriaRange2: {
            name: 'criteria_range2',
            detail: 'Additional ranges. You can enter up to 127 range.'
          },
          criteria2: {
            name: 'criteria2',
            detail: 'Additional associated criteria. You can enter up to 127 criteria.'
          }
        }
      },
      BETA_DIST: {
        description: 'Gibt die Verteilungsfunktion einer Beta-Verteilung zurück.',
        abstract: 'Beta-Verteilung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/beta-dist-function-11188c9c-780a-42c7-ba43-9ecb5a878d31'
          }
        ],
        functionParameter: {
          x: {
            name: 'x',
            detail: 'The value between A and B at which to evaluate the function.'
          },
          alpha: {
            name: 'alpha',
            detail: 'A parameter of the distribution.'
          },
          beta: {
            name: 'beta',
            detail: 'A parameter of the distribution.'
          },
          cumulative: {
            name: 'cumulative',
            detail: 'A logical value that determines the form of the function. If cumulative is TRUE, BETA.DIST returns the cumulative distribution function; if FALSE, it returns the probability density function.'
          },
          A: {
            name: 'A',
            detail: 'A lower bound to the interval of x.'
          },
          B: {
            name: 'B',
            detail: 'An upper bound to the interval of x.'
          }
        }
      },
      BETA_INV: {
        description: 'Gibt die Umkehrfunktion der Verteilungsfunktion einer angegebenen Beta-Verteilung zurück.',
        abstract: 'Umkehrung Beta-Verteilung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/beta-inv-function-e84cb8aa-8df0-4cf6-9892-83a341d252eb'
          }
        ],
        functionParameter: {
          probability: {
            name: 'probability',
            detail: 'A probability associated with the beta distribution.'
          },
          alpha: {
            name: 'alpha',
            detail: 'A parameter of the distribution.'
          },
          beta: {
            name: 'beta',
            detail: 'A parameter of the distribution.'
          },
          A: {
            name: 'A',
            detail: 'A lower bound to the interval of x.'
          },
          B: {
            name: 'B',
            detail: 'An upper bound to the interval of x.'
          }
        }
      },
      BINOM_DIST: {
        description: 'Gibt die Wahrscheinlichkeiten einer binomialverteilten Zufallsvariablen zurück.',
        abstract: 'Binomialverteilung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/binom-dist-function-c5ae37b6-f39c-4be2-94c2-509a1480770c'
          }
        ],
        functionParameter: {
          numberS: {
            name: 'number_s',
            detail: 'The number of successes in trials.'
          },
          trials: {
            name: 'trials',
            detail: 'The number of independent trials.'
          },
          probabilityS: {
            name: 'probability_s',
            detail: 'The probability of success on each trial.'
          },
          cumulative: {
            name: 'cumulative',
            detail: 'A logical value that determines the form of the function. If cumulative is TRUE, BINOM.DIST returns the cumulative distribution function; if FALSE, it returns the probability density function.'
          }
        }
      },
      BINOM_DIST_RANGE: {
        description: 'Gibt die Wahrscheinlichkeit eines Versuchsergebnisses zurück, das mit einer Binomialverteilung erstellt wird.',
        abstract: 'Binomialverteilung im Bereich.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/binom-dist-range-function-17331329-74c7-4053-bb4c-6653a7421595'
          }
        ],
        functionParameter: {
          trials: {
            name: 'trials',
            detail: 'The number of independent trials.'
          },
          probabilityS: {
            name: 'probability_s',
            detail: 'The probability of success on each trial.'
          },
          numberS: {
            name: 'number_s',
            detail: 'The number of successes in trials.'
          },
          numberS2: {
            name: 'number_s2',
            detail: 'If provided, returns the probability that the number of successful trials will fall between number_s and number_s2.'
          }
        }
      },
      BINOM_INV: {
        description: 'Gibt den kleinsten Wert zurück, für den die kumulierten Wahrscheinlichkeiten der Binomialverteilung größer oder gleich einer Wahrscheinlichkeit sind.',
        abstract: 'Umkehrung Binomialverteilung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/binom-inv-function-80a0370c-ada6-49b4-83e7-05a91ba77ac9'
          }
        ],
        functionParameter: {
          trials: {
            name: 'trials',
            detail: 'The number of Bernoulli trials.'
          },
          probabilityS: {
            name: 'probability_s',
            detail: 'The probability of success on each trial.'
          },
          alpha: {
            name: 'alpha',
            detail: 'The criterion value.'
          }
        }
      },
      CHISQ_DIST: {
        description: 'Gibt die Wahrscheinlichkeitsverteilung der Chi-Quadrat-Verteilung zurück.',
        abstract: 'Chi-Quadrat-Verteilung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/chisq-dist-function-8486b05e-5c05-4942-a9ea-f6b341518732'
          }
        ],
        functionParameter: {
          x: {
            name: 'x',
            detail: 'The value at which you want to evaluate the distribution.'
          },
          degFreedom: {
            name: 'deg_freedom',
            detail: 'The number of degrees of freedom.'
          },
          cumulative: {
            name: 'cumulative',
            detail: 'A logical value that determines the form of the function. If cumulative is TRUE, CHISQ.DIST returns the cumulative distribution function; if FALSE, it returns the probability density function.'
          }
        }
      },
      CHISQ_DIST_RT: {
        description: 'Gibt die rechtsseitige Wahrscheinlichkeit der Chi-Quadrat-Verteilung zurück.',
        abstract: 'Chi-Quadrat-Verteilung rechtsseitig.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/chisq-dist-rt-function-dc4832e8-ed2b-49ae-8d7c-b28d5804c0f2'
          }
        ],
        functionParameter: {
          x: {
            name: 'x',
            detail: 'The value at which you want to evaluate the distribution.'
          },
          degFreedom: {
            name: 'deg_freedom',
            detail: 'The number of degrees of freedom.'
          }
        }
      },
      CHISQ_INV: {
        description: 'Gibt die Umkehrfunktion der linksseitigen Chi-Quadrat-Verteilung zurück.',
        abstract: 'Umkehrung Chi-Quadrat-Verteilung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/chisq-inv-function-400db556-62b3-472d-80b3-254723e7092f'
          }
        ],
        functionParameter: {
          probability: {
            name: 'probability',
            detail: 'A probability associated with the chi-squared distribution.'
          },
          degFreedom: {
            name: 'deg_freedom',
            detail: 'The number of degrees of freedom.'
          }
        }
      },
      CHISQ_INV_RT: {
        description: 'Gibt die Umkehrfunktion der rechtsseitigen Chi-Quadrat-Verteilung zurück.',
        abstract: 'Umkehrung rechtsseitige Chi-Quadrat-Verteilung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/chisq-inv-rt-function-435b5ed8-98d5-4da6-823f-293e2cbc94fe'
          }
        ],
        functionParameter: {
          probability: {
            name: 'probability',
            detail: 'A probability associated with the chi-squared distribution.'
          },
          degFreedom: {
            name: 'deg_freedom',
            detail: 'The number of degrees of freedom.'
          }
        }
      },
      CHISQ_TEST: {
        description: 'Gibt den Test für die Unabhängigkeit zurück.',
        abstract: 'Chi-Quadrat-Test.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/chisq-test-function-2e8a7861-b14a-4985-aa93-fb88de3f260f'
          }
        ],
        functionParameter: {
          actualRange: {
            name: 'actual_range',
            detail: 'The range of data that contains observations to test against expected values.'
          },
          expectedRange: {
            name: 'expected_range',
            detail: 'The range of data that contains the ratio of the product of row totals and column totals to the grand total.'
          }
        }
      },
      CONFIDENCE_NORM: {
        description: 'Gibt das Konfidenzintervall für den Erwartungswert einer Zufallsvariablen bei Normalverteilung zurück.',
        abstract: 'Konfidenz Normalverteilung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/confidence-norm-function-7cec58a6-85bb-488d-91c3-63828d4fbfd4'
          }
        ],
        functionParameter: {
          alpha: {
            name: 'alpha',
            detail: 'The significance level used to compute the confidence level. The confidence level equals 100*(1 - alpha)%, or in other words, an alpha of 0.05 indicates a 95 percent confidence level.'
          },
          standardDev: {
            name: 'standard_dev',
            detail: 'The population standard deviation for the data range and is assumed to be known.'
          },
          size: {
            name: 'size',
            detail: 'The sample size.'
          }
        }
      },
      CONFIDENCE_T: {
        description: 'Gibt das Konfidenzintervall für den Erwartungswert basierend auf einer T-Verteilung zurück.',
        abstract: 'Konfidenz t-Verteilung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/confidence-t-function-e8eca395-6c3a-4ba9-9003-79ccc61d3c53'
          }
        ],
        functionParameter: {
          alpha: {
            name: 'alpha',
            detail: 'The significance level used to compute the confidence level. The confidence level equals 100*(1 - alpha)%, or in other words, an alpha of 0.05 indicates a 95 percent confidence level.'
          },
          standardDev: {
            name: 'standard_dev',
            detail: 'The population standard deviation for the data range and is assumed to be known.'
          },
          size: {
            name: 'size',
            detail: 'The sample size.'
          }
        }
      },
      CORREL: {
        description: 'Gibt den Korrelationskoeffizienten zweier Datenbereiche zurück.',
        abstract: 'Korrelation.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/correl-function-995dcef7-0c0a-4bed-a3fb-239d7b68ca92'
          }
        ],
        functionParameter: {
          array1: {
            name: 'array1',
            detail: 'A first range of cell values.'
          },
          array2: {
            name: 'array2',
            detail: 'A second range of cell values.'
          }
        }
      },
      COUNT: {
        description: 'Zählt die Zahlen in einer Argumentliste.',
        abstract: 'Anzahl (Zahlen).',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/count-function-a59cd7fc-b623-4d93-87a4-d23bf411294c'
          }
        ],
        functionParameter: {
          value1: {
            name: 'value 1',
            detail: 'The first item, cell reference, or range within which you want to count numbers.'
          },
          value2: {
            name: 'value 2',
            detail: 'Up to 255 additional items, cell references, or ranges within which you want to count numbers.'
          }
        }
      },
      COUNTA: {
        description: 'Zählt die nicht leeren Werte in einer Argumentliste.',
        abstract: 'Anzahl2.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/counta-function-7dc98875-d5c1-46f1-9a82-53f3219e2509'
          }
        ],
        functionParameter: {
          number1: {
            name: 'value1',
            detail: 'The first argument representing the values that you want to count.'
          },
          number2: {
            name: 'value2',
            detail: 'Additional arguments representing the values that you want to count, up to a maximum of 255 arguments.'
          }
        }
      },
      COUNTBLANK: {
        description: 'Zählt die leeren Zellen in einem Bereich.',
        abstract: 'Anzahl leerer Zellen.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/countblank-function-6a92d772-675c-4bee-b346-24af6bd3ac22'
          }
        ],
        functionParameter: {
          range: {
            name: 'range',
            detail: 'The range from which you want to count the blank cells.'
          }
        }
      },
      COUNTIF: {
        description: 'Zählt die Zellen, die einer Bedingung entsprechen.',
        abstract: 'ZÄHLENWENN.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/countif-function-e0de10c6-f885-4e71-abb4-1f464816df34'
          }
        ],
        functionParameter: {
          range: {
            name: 'range',
            detail: 'The group of cells you want to count. Range can contain numbers, arrays, a named range, or references that contain numbers. Blank and text values are ignored.'
          },
          criteria: {
            name: 'criteria',
            detail: 'A number, expression, cell reference, or text string that determines which cells will be counted.\nFor example, you can use a number like 32, a comparison like ">32", a cell like B4, or a word like "apples".\nCOUNTIF uses only a single criteria. Use COUNTIFS if you want to use multiple criteria.'
          }
        }
      },
      COUNTIFS: {
        description: 'Zählt die Zellen, die mehreren Bedingungen entsprechen.',
        abstract: 'ZÄHLENWENNS.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/countifs-function-dda3dc6e-f74e-4aee-88bc-aa8c2a866842'
          }
        ],
        functionParameter: {
          criteriaRange1: {
            name: 'criteria_range1',
            detail: 'The first range in which to evaluate the associated criteria.'
          },
          criteria1: {
            name: 'criteria1',
            detail: 'The criteria in the form of a number, expression, cell reference, or text that define which cells will be counted. For example, criteria can be expressed as 32, ">32", B4, "apples", or "32".'
          },
          criteriaRange2: {
            name: 'criteria_range2',
            detail: 'Additional ranges. You can enter up to 127 range.'
          },
          criteria2: {
            name: 'criteria2',
            detail: 'Additional associated criteria. You can enter up to 127 criteria.'
          }
        }
      },
      COVARIANCE_P: {
        description: 'Gibt die Kovarianz einer Grundgesamtheit zurück.',
        abstract: 'Kovarianz (Grundgesamtheit).',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/covariance-p-function-6f0e1e6d-956d-4e4b-9943-cfef0bf9edfc'
          }
        ],
        functionParameter: {
          array1: {
            name: 'array1',
            detail: 'A first range of cell values.'
          },
          array2: {
            name: 'array2',
            detail: 'A second range of cell values.'
          }
        }
      },
      COVARIANCE_S: {
        description: 'Gibt die Kovarianz einer Stichprobe zurück.',
        abstract: 'Kovarianz (Stichprobe).',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/covariance-s-function-0a539b74-7371-42aa-a18f-1f5320314977'
          }
        ],
        functionParameter: {
          array1: {
            name: 'array1',
            detail: 'A first range of cell values.'
          },
          array2: {
            name: 'array2',
            detail: 'A second range of cell values.'
          }
        }
      },
      DEVSQ: {
        description: 'Gibt die Summe der quadrierten Abweichungen zurück.',
        abstract: 'Summe quadrierter Abweichungen.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/devsq-function-8b739616-8376-4df5-8bd0-cfe0a6caf444'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'The fist argument for which you want to calculate the sum of squared deviations.'
          },
          number2: {
            name: 'number2',
            detail: 'The 2 to 255 arguments for which you want to calculate the sum of squared deviations.'
          }
        }
      },
      EXPON_DIST: {
        description: 'Gibt die Exponentialverteilung zurück.',
        abstract: 'Exponentialverteilung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/expon-dist-function-4c12ae24-e563-4155-bf3e-8b78b6ae140e'
          }
        ],
        functionParameter: {
          x: {
            name: 'x',
            detail: 'The value at which you want to evaluate the distribution.'
          },
          lambda: {
            name: 'lambda',
            detail: 'The parameter value.'
          },
          cumulative: {
            name: 'cumulative',
            detail: 'A logical value that determines the form of the function. If cumulative is TRUE, EXPON.DIST returns the cumulative distribution function; if FALSE, it returns the probability density function.'
          }
        }
      },
      F_DIST: {
        description: 'Gibt die F-Verteilung zurück.',
        abstract: 'F-Verteilung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/f-dist-function-a887efdc-7c8e-46cb-a74a-f884cd29b25d'
          }
        ],
        functionParameter: {
          x: {
            name: 'x',
            detail: 'The value at which to evaluate the function.'
          },
          degFreedom1: {
            name: 'deg_freedom1',
            detail: 'The numerator degrees of freedom.'
          },
          degFreedom2: {
            name: 'deg_freedom2',
            detail: 'The denominator degrees of freedom.'
          },
          cumulative: {
            name: 'cumulative',
            detail: 'A logical value that determines the form of the function. If cumulative is TRUE, F.DIST returns the cumulative distribution function; if FALSE, it returns the probability density function.'
          }
        }
      },
      F_DIST_RT: {
        description: 'Gibt die rechtsseitige F-Verteilung zurück.',
        abstract: 'F-Verteilung rechtsseitig.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/f-dist-rt-function-d74cbb00-6017-4ac9-b7d7-6049badc0520'
          }
        ],
        functionParameter: {
          x: {
            name: 'x',
            detail: 'The value at which to evaluate the function.'
          },
          degFreedom1: {
            name: 'deg_freedom1',
            detail: 'The numerator degrees of freedom.'
          },
          degFreedom2: {
            name: 'deg_freedom2',
            detail: 'The denominator degrees of freedom.'
          }
        }
      },
      F_INV: {
        description: 'Gibt die Umkehrfunktion der F-Verteilung zurück.',
        abstract: 'Umkehrung F-Verteilung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/f-inv-function-0dda0cf9-4ea0-42fd-8c3c-417a1ff30dbe'
          }
        ],
        functionParameter: {
          probability: {
            name: 'probability',
            detail: 'A probability associated with the F cumulative distribution.'
          },
          degFreedom1: {
            name: 'deg_freedom1',
            detail: 'The numerator degrees of freedom.'
          },
          degFreedom2: {
            name: 'deg_freedom2',
            detail: 'The denominator degrees of freedom.'
          }
        }
      },
      F_INV_RT: {
        description: 'Gibt die Umkehrfunktion der rechtsseitigen F-Verteilung zurück.',
        abstract: 'Umkehrung F-Verteilung rechtsseitig.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/f-inv-rt-function-d371aa8f-b0b1-40ef-9cc2-496f0693ac00'
          }
        ],
        functionParameter: {
          probability: {
            name: 'probability',
            detail: 'A probability associated with the F cumulative distribution.'
          },
          degFreedom1: {
            name: 'deg_freedom1',
            detail: 'The numerator degrees of freedom.'
          },
          degFreedom2: {
            name: 'deg_freedom2',
            detail: 'The denominator degrees of freedom.'
          }
        }
      },
      F_TEST: {
        description: 'Gibt das Ergebnis eines F-Tests zurück.',
        abstract: 'F-Test.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/f-test-function-100a59e7-4108-46f8-8443-78ffacb6c0a7'
          }
        ],
        functionParameter: {
          array1: {
            name: 'array1',
            detail: 'The first array or range of data.'
          },
          array2: {
            name: 'array2',
            detail: 'The second array or range of data.'
          }
        }
      },
      FISHER: {
        description: 'Gibt die Fisher-Transformation zurück.',
        abstract: 'Fisher.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/fisher-function-d656523c-5076-4f95-b87b-7741bf236c69'
          }
        ],
        functionParameter: {
          x: {
            name: 'x',
            detail: 'A numeric value for which you want the transformation.'
          }
        }
      },
      FISHERINV: {
        description: 'Gibt die Umkehrung der Fisher-Transformation zurück.',
        abstract: 'Umkehrung Fisher.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/fisherinv-function-62504b39-415a-4284-a285-19c8e82f86bb'
          }
        ],
        functionParameter: {
          y: {
            name: 'y',
            detail: 'The value for which you want to perform the inverse of the transformation.'
          }
        }
      },
      FORECAST: {
        description: 'Gibt einen Vorhersagewert über einen Trend zurück.',
        abstract: 'Schätzwert.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/forecast-and-forecast-linear-functions-50ca49c9-7b40-4892-94e4-7ad38bbeda99'
          }
        ],
        functionParameter: {
          x: {
            name: 'x',
            detail: 'The data point for which you want to predict a value.'
          },
          knownYs: {
            name: 'known_y\'s',
            detail: 'The dependent array or range of data.'
          },
          knownXs: {
            name: 'known_x\'s',
            detail: 'The independent array or range of data.'
          }
        }
      },
      FORECAST_ETS: {
        description: 'Gibt einen zukünftigen Wert auf Basis einer Saisonprognose zurück.',
        abstract: 'ETS-Prognose.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/forecasting-functions-reference-897a2fe9-6595-4680-a0b0-93e0308d5f6e#_FORECAST.ETS'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'first'
          },
          number2: {
            name: 'number2',
            detail: 'second'
          }
        }
      },
      FORECAST_ETS_CONFINT: {
        description: 'Gibt ein Konfidenzintervall für einen prognostizierten Wert zurück.',
        abstract: 'ETS-Konfidenzintervall.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/forecasting-functions-reference-897a2fe9-6595-4680-a0b0-93e0308d5f6e#_FORECAST.ETS.CONFINT'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'first'
          },
          number2: {
            name: 'number2',
            detail: 'second'
          }
        }
      },
      FORECAST_ETS_SEASONALITY: {
        description: 'Gibt die Länge eines wiederkehrenden Musters in einer Zeitreihe zurück.',
        abstract: 'ETS-Saisonalität.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/forecasting-functions-reference-897a2fe9-6595-4680-a0b0-93e0308d5f6e#_FORECAST.ETS.SEASONALITY'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'first'
          },
          number2: {
            name: 'number2',
            detail: 'second'
          }
        }
      },
      FORECAST_ETS_STAT: {
        description: 'Gibt einen statistischen Wert als Ergebnis einer Zeitreihenprognose zurück.',
        abstract: 'ETS-Statistik.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/forecasting-functions-reference-897a2fe9-6595-4680-a0b0-93e0308d5f6e#_FORECAST.ETS.STAT'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'first'
          },
          number2: {
            name: 'number2',
            detail: 'second'
          }
        }
      },
      FORECAST_LINEAR: {
        description: 'Gibt einen zukünftigen Wert auf Basis eines linearen Trends zurück.',
        abstract: 'Lineare Prognose.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/forecast-and-forecast-linear-functions-50ca49c9-7b40-4892-94e4-7ad38bbeda99'
          }
        ],
        functionParameter: {
          x: {
            name: 'x',
            detail: 'The data point for which you want to predict a value.'
          },
          knownYs: {
            name: 'known_y\'s',
            detail: 'The dependent array or range of data.'
          },
          knownXs: {
            name: 'known_x\'s',
            detail: 'The independent array or range of data.'
          }
        }
      },
      FREQUENCY: {
        description: 'Gibt eine Häufigkeitsverteilung als vertikales Array zurück.',
        abstract: 'Häufigkeit.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/frequency-function-44e3be2b-eca0-42cd-a3f7-fd9ea898fdb9'
          }
        ],
        functionParameter: {
          dataArray: {
            name: 'data_array',
            detail: 'An array of or reference to a set of values for which you want to count frequencies. If data_array contains no values, FREQUENCY returns an array of zeros.'
          },
          binsArray: {
            name: 'bins_array',
            detail: 'An array of or reference to intervals into which you want to group the values in data_array. If bins_array contains no values, FREQUENCY returns the number of elements in data_array.'
          }
        }
      },
      GAMMA: {
        description: 'Gibt den Wert der Gamma-Funktion zurück.',
        abstract: 'Gamma-Funktion.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/gamma-function-ce1702b1-cf55-471d-8307-f83be0fc5297'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'Input value to the gamma function.'
          }
        }
      },
      GAMMA_DIST: {
        description: 'Gibt die Gamma-Verteilung zurück.',
        abstract: 'Gamma-Verteilung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/gamma-dist-function-9b6f1538-d11c-4d5f-8966-21f6a2201def'
          }
        ],
        functionParameter: {
          x: {
            name: 'x',
            detail: 'The value for which you want the distribution.'
          },
          alpha: {
            name: 'alpha',
            detail: 'A parameter of the distribution.'
          },
          beta: {
            name: 'beta',
            detail: 'A parameter of the distribution.'
          },
          cumulative: {
            name: 'cumulative',
            detail: 'A logical value that determines the form of the function. If cumulative is TRUE, GAMMA.DIST returns the cumulative distribution function; if FALSE, it returns the probability density function.'
          }
        }
      },
      GAMMA_INV: {
        description: 'Gibt die Umkehrfunktion der Gamma-Verteilung zurück.',
        abstract: 'Umkehrung Gamma-Verteilung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/gamma-inv-function-74991443-c2b0-4be5-aaab-1aa4d71fbb18'
          }
        ],
        functionParameter: {
          probability: {
            name: 'probability',
            detail: 'A probability associated with the gamma distribution.'
          },
          alpha: {
            name: 'alpha',
            detail: 'A parameter of the distribution.'
          },
          beta: {
            name: 'beta',
            detail: 'A parameter of the distribution.'
          }
        }
      },
      GAMMALN: {
        description: 'Gibt den natürlichen Logarithmus der Gamma-Funktion zurück.',
        abstract: 'ln(Gamma).',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/gammaln-function-b838c48b-c65f-484f-9e1d-141c55470eb9'
          }
        ],
        functionParameter: {
          x: {
            name: 'x',
            detail: 'The value for which you want to calculate GAMMALN.'
          }
        }
      },
      GAMMALN_PRECISE: {
        description: 'Gibt den natürlichen Logarithmus der Gamma-Funktion präzise zurück.',
        abstract: 'ln(Gamma) präzise.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/gammaln-precise-function-5cdfe601-4e1e-4189-9d74-241ef1caa599'
          }
        ],
        functionParameter: {
          x: {
            name: 'x',
            detail: 'The value for which you want to calculate GAMMALN.PRECISE.'
          }
        }
      },
      GAUSS: {
        description: 'Gibt die Wahrscheinlichkeit zurück, dass ein Element einer Standardnormalverteilung zwischen dem Mittelwert und z Standardabweichungen vom Mittelwert liegt.',
        abstract: 'Gauß.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/gauss-function-069f1b4e-7dee-4d6a-a71f-4b69044a6b33'
          }
        ],
        functionParameter: {
          z: {
            name: 'z',
            detail: 'The value for which you want the distribution.'
          }
        }
      },
      GEOMEAN: {
        description: 'Gibt das geometrische Mittel zurück.',
        abstract: 'Geometrisches Mittel.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/geomean-function-db1ac48d-25a5-40a0-ab83-0b38980e40d5'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'The first number, cell reference, or range for which you want the geometric mean.'
          },
          number2: {
            name: 'number2',
            detail: 'Additional numbers, cell references or ranges for which you want the geometric mean, up to a maximum of 255.'
          }
        }
      },
      GROWTH: {
        description: 'Gibt Werte für einen exponentiellen Trend zurück.',
        abstract: 'Exponentielles Wachstum.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/growth-function-541a91dc-3d5e-437d-b156-21324e68b80d'
          }
        ],
        functionParameter: {
          knownYs: {
            name: 'known_y\'s',
            detail: 'The set of y-values you already know in the relationship y = b*m^x.'
          },
          knownXs: {
            name: 'known_x\'s',
            detail: 'The set of x-values you already know in the relationship y = b*m^x.'
          },
          newXs: {
            name: 'new_x\'s',
            detail: 'Are new x-values for which you want GROWTH to return corresponding y-values.'
          },
          constb: {
            name: 'const',
            detail: 'A logical value specifying whether to force the constant b to equal 1.'
          }
        }
      },
      HARMEAN: {
        description: 'Gibt das harmonische Mittel zurück.',
        abstract: 'Harmonisches Mittel.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/harmean-function-5efd9184-fab5-42f9-b1d3-57883a1d3bc6'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'The first number, cell reference, or range for which you want the harmonic mean.'
          },
          number2: {
            name: 'number2',
            detail: 'Additional numbers, cell references or ranges for which you want the harmonic mean, up to a maximum of 255.'
          }
        }
      },
      HYPGEOM_DIST: {
        description: 'Gibt die hypergeometrische Verteilung zurück.',
        abstract: 'Hypergeometrische Verteilung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/hypgeom-dist-function-6dbd547f-1d12-4b1f-8ae5-b0d9e3d22fbf'
          }
        ],
        functionParameter: {
          sampleS: {
            name: 'sample_s',
            detail: 'The number of successes in the sample.'
          },
          numberSample: {
            name: 'number_sample',
            detail: 'The size of the sample.'
          },
          populationS: {
            name: 'population_s',
            detail: 'The number of successes in the population.'
          },
          numberPop: {
            name: 'number_pop',
            detail: 'The population size.'
          },
          cumulative: {
            name: 'cumulative',
            detail: 'A logical value that determines the form of the function. If cumulative is TRUE, HYPGEOM.DIST returns the cumulative distribution function; if FALSE, it returns the probability density function.'
          }
        }
      },
      INTERCEPT: {
        description: 'Gibt den Schnittpunkt der linearen Regressionsgeraden mit der y-Achse zurück.',
        abstract: 'Achsenabschnitt.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/intercept-function-2a9b74e2-9d47-4772-b663-3bca70bf63ef'
          }
        ],
        functionParameter: {
          knownYs: {
            name: 'known_y\'s',
            detail: 'The dependent array or range of data.'
          },
          knownXs: {
            name: 'known_x\'s',
            detail: 'The independent array or range of data.'
          }
        }
      },
      KURT: {
        description: 'Gibt die Kurtosis (Wölbung) einer Datengruppe zurück.',
        abstract: 'Kurtosis.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/kurt-function-bc3a265c-5da4-4dcb-b7fd-c237789095ab'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'The first number, cell reference, or range for which you want the kurtosis.'
          },
          number2: {
            name: 'number2',
            detail: 'Additional numbers, cell references or ranges for which you want the kurtosis, up to a maximum of 255.'
          }
        }
      },
      LARGE: {
        description: 'Gibt den k-größten Wert in einer Datengruppe zurück.',
        abstract: 'k-Größter Wert.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/large-function-3af0af19-1190-42bb-bb8b-01672ec00a64'
          }
        ],
        functionParameter: {
          array: {
            name: 'array',
            detail: 'The array or range of data for which you want to determine the k-th largest value.'
          },
          k: {
            name: 'k',
            detail: 'The position (from the largest) in the array or cell range of data to return.'
          }
        }
      },
      LINEST: {
        description: 'Gibt die Parameter eines linearen Trends zurück.',
        abstract: 'Lineare Regression.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/linest-function-84d7d0d9-6e50-4101-977a-fa7abf772b6d'
          }
        ],
        functionParameter: {
          knownYs: {
            name: 'known_y\'s',
            detail: 'The set of y-values you already know in the relationship y = m*x+b.'
          },
          knownXs: {
            name: 'known_x\'s',
            detail: 'The set of x-values you already know in the relationship y = m*x+b.'
          },
          constb: {
            name: 'const',
            detail: 'A logical value specifying whether to force the constant b to equal 0.'
          },
          stats: {
            name: 'stats',
            detail: 'A logical value specifying whether to return additional regression statistics.'
          }
        }
      },
      LOGEST: {
        description: 'Gibt die Parameter eines exponentiellen Trends zurück.',
        abstract: 'Exponentielle Regression.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/logest-function-f27462d8-3657-4030-866b-a272c1d18b4b'
          }
        ],
        functionParameter: {
          knownYs: {
            name: 'known_y\'s',
            detail: 'The set of y-values you already know in the relationship y = b*m^x.'
          },
          knownXs: {
            name: 'known_x\'s',
            detail: 'The set of x-values you already know in the relationship y = b*m^x.'
          },
          constb: {
            name: 'const',
            detail: 'A logical value specifying whether to force the constant b to equal 1.'
          },
          stats: {
            name: 'stats',
            detail: 'A logical value specifying whether to return additional regression statistics.'
          }
        }
      },
      LOGNORM_DIST: {
        description: 'Gibt die kumulierte logarithmische Normalverteilung zurück.',
        abstract: 'Logarithmische Normalverteilung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/lognorm-dist-function-eb60d00b-48a9-4217-be2b-6074aee6b070'
          }
        ],
        functionParameter: {
          x: {
            name: 'x',
            detail: 'The value for which you want the distribution.'
          },
          mean: {
            name: 'mean',
            detail: 'The arithmetic mean of the distribution.'
          },
          standardDev: {
            name: 'standard_dev',
            detail: 'The standard deviation of the distribution.'
          },
          cumulative: {
            name: 'cumulative',
            detail: 'A logical value that determines the form of the function. If cumulative is TRUE, LOGNORM.DIST returns the cumulative distribution function; if FALSE, it returns the probability density function.'
          }
        }
      },
      LOGNORM_INV: {
        description: 'Gibt die Umkehrung der logarithmischen Normalverteilung zurück.',
        abstract: 'Umkehrung logn. Normalverteilung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/lognorm-inv-function-fe79751a-f1f2-4af8-a0a1-e151b2d4f600'
          }
        ],
        functionParameter: {
          probability: {
            name: 'probability',
            detail: 'A probability corresponding to the lognormal distribution.'
          },
          mean: {
            name: 'mean',
            detail: 'The arithmetic mean of the distribution.'
          },
          standardDev: {
            name: 'standard_dev',
            detail: 'The standard deviation of the distribution.'
          }
        }
      },
      MARGINOFERROR: {
        description: 'Berechnet die Fehlerspanne aus einem Wertebereich und einem Konfidenzniveau.',
        abstract: 'Fehlerspanne.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.google.com/docs/answer/12487850?hl=en&sjid=11250989209896695200-AP'
          }
        ],
        functionParameter: {
          range: {
            name: 'range',
            detail: 'The range of values used to calculate the margin of error.'
          },
          confidence: {
            name: 'confidence',
            detail: 'The desired confidence level between (0, 1).'
          }
        }
      },
      MAX: {
        description: 'Gibt den größten Wert in einer Argumentliste zurück.',
        abstract: 'MAX.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/max-function-e0012414-9ac8-4b34-9a47-73e662c08098'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'The first number, cell reference, or range to calculate the maximum value from.'
          },
          number2: {
            name: 'number2',
            detail: 'Additional numbers, cell references or ranges to calculate the maximum value from, up to a maximum of 255.'
          }
        }
      },
      MAXA: {
        description: 'Gibt den größten Wert in einer Argumentliste zurück, inklusive Zahlen, Text und Wahrheitswerten.',
        abstract: 'MAXA.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/maxa-function-814bda1e-3840-4bff-9365-2f59ac2ee62d'
          }
        ],
        functionParameter: {
          value1: {
            name: 'value1',
            detail: 'The first number argument for which you want to find the largest value.'
          },
          value2: {
            name: 'value2',
            detail: 'Number arguments 2 to 255 for which you want to find the largest value.'
          }
        }
      },
      MAXIFS: {
        description: 'Gibt den Maximalwert der Zellen zurück, die mehreren Bedingungen entsprechen.',
        abstract: 'MAXWENNS.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/maxifs-function-dfd611e6-da2c-488a-919b-9b6376b28883'
          }
        ],
        functionParameter: {
          maxRange: {
            name: 'sum_range',
            detail: 'The range of cells to max.'
          },
          criteriaRange1: {
            name: 'criteria_range1',
            detail: 'Is the set of cells to evaluate with the criteria.'
          },
          criteria1: {
            name: 'criteria1',
            detail: 'Is the criteria in the form of a number, expression, or text that defines which cells will be evaluated as maximum. '
          },
          criteriaRange2: {
            name: 'criteriaRange2',
            detail: 'Additional ranges. You can enter up to 127 ranges.'
          },
          criteria2: {
            name: 'criteria2',
            detail: 'Additional associated criteria. You can enter up to 127 criteria.'
          }
        }
      },
      MEDIAN: {
        description: 'Gibt den Median zurück.',
        abstract: 'Median.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/median-function-d0916313-4753-414c-8537-ce85bdd967d2'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'The first number, cell reference, or range for which you want the given numbers.'
          },
          number2: {
            name: 'number2',
            detail: 'Additional numbers, cell references or ranges for which you want the given numbers, up to a maximum of 255.'
          }
        }
      },
      MIN: {
        description: 'Gibt den kleinsten Wert in einer Argumentliste zurück.',
        abstract: 'MIN.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/min-function-61635d12-920f-4ce2-a70f-96f202dcc152'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'The first number, cell reference, or range to calculate the minimum value from.'
          },
          number2: {
            name: 'number2',
            detail: 'Additional numbers, cell references or ranges to calculate the minimum value from, up to a maximum of 255.'
          }
        }
      },
      MINA: {
        description: 'Gibt den kleinsten Wert in einer Argumentliste zurück, inklusive Zahlen, Text und Wahrheitswerten.',
        abstract: 'MINA.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/mina-function-245a6f46-7ca5-4dc7-ab49-805341bc31d3'
          }
        ],
        functionParameter: {
          value1: {
            name: 'value1',
            detail: 'The first number, cell reference, or range to calculate the minimum value from.'
          },
          value2: {
            name: 'value2',
            detail: 'Additional numbers, cell references or ranges to calculate the minimum value from, up to a maximum of 255.'
          }
        }
      },
      MINIFS: {
        description: 'Gibt den Minimalwert der Zellen zurück, die mehreren Bedingungen entsprechen.',
        abstract: 'MINWENNS.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/minifs-function-6ca1ddaa-079b-4e74-80cc-72eef32e6599'
          }
        ],
        functionParameter: {
          minRange: {
            name: 'min_range',
            detail: 'The actual range of cells in which the minimum value will be determined.'
          },
          criteriaRange1: {
            name: 'criteria_range1',
            detail: 'Is the set of cells to evaluate with the criteria.'
          },
          criteria1: {
            name: 'criteria1',
            detail: 'Is the criteria in the form of a number, expression, or text that defines which cells will be evaluated as minimum. The same set of criteria works for the MAXIFS, SUMIFS and AVERAGEIFS functions.'
          },
          criteriaRange2: {
            name: 'criteria_range2',
            detail: 'Additional ranges. You can enter up to 127 range.'
          },
          criteria2: {
            name: 'criteria2',
            detail: 'Additional associated criteria. You can enter up to 127 criteria.'
          }
        }
      },
      MODE_MULT: {
        description: 'Gibt ein vertikales Array der am häufigsten auftretenden oder sich wiederholenden Werte zurück.',
        abstract: 'Mehrere Modi.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/mode-mult-function-50fd9464-b2ba-4191-b57a-39446689ae8c'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'The first number, cell reference, or range for which you want calculate the mode.'
          },
          number2: {
            name: 'number2',
            detail: 'Additional numbers, cell references or ranges for which you want calculate the mode, up to a maximum of 255.'
          }
        }
      },
      MODE_SNGL: {
        description: 'Gibt den am häufigsten auftretenden Wert zurück.',
        abstract: 'Modalwert.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/mode-sngl-function-f1267c16-66c6-4386-959f-8fba5f8bb7f8'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'The first number, cell reference, or range for which you want calculate the mode.'
          },
          number2: {
            name: 'number2',
            detail: 'Additional numbers, cell references or ranges for which you want calculate the mode, up to a maximum of 255.'
          }
        }
      },
      NEGBINOM_DIST: {
        description: 'Gibt die negative Binomialverteilung zurück.',
        abstract: 'Negative Binomialverteilung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/negbinom-dist-function-c8239f89-c2d0-45bd-b6af-172e570f8599'
          }
        ],
        functionParameter: {
          numberF: {
            name: 'number_f',
            detail: 'The number of failures.'
          },
          numberS: {
            name: 'number_s',
            detail: 'The threshold number of successes.'
          },
          probabilityS: {
            name: 'probability_s',
            detail: 'The probability of a success.'
          },
          cumulative: {
            name: 'cumulative',
            detail: 'A logical value that determines the form of the function. If cumulative is TRUE, NEGBINOM.DIST returns the cumulative distribution function; if FALSE, it returns the probability density function.'
          }
        }
      },
      NORM_DIST: {
        description: 'Gibt die Normalverteilung zurück.',
        abstract: 'Normalverteilung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/norm-dist-function-edb1cc14-a21c-4e53-839d-8082074c9f8d'
          }
        ],
        functionParameter: {
          x: {
            name: 'x',
            detail: 'The value for which you want the distribution.'
          },
          mean: {
            name: 'mean',
            detail: 'The arithmetic mean of the distribution.'
          },
          standardDev: {
            name: 'standard_dev',
            detail: 'The standard deviation of the distribution.'
          },
          cumulative: {
            name: 'cumulative',
            detail: 'A logical value that determines the form of the function. If cumulative is TRUE, NORM.DIST returns the cumulative distribution function; if FALSE, it returns the probability density function.'
          }
        }
      },
      NORM_INV: {
        description: 'Gibt die Umkehrung der Normalverteilung zurück.',
        abstract: 'Umkehrung Normalverteilung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/norm-inv-function-54b30935-fee7-493c-bedb-2278a9db7e13'
          }
        ],
        functionParameter: {
          probability: {
            name: 'probability',
            detail: 'A probability corresponding to the normal distribution.'
          },
          mean: {
            name: 'mean',
            detail: 'The arithmetic mean of the distribution.'
          },
          standardDev: {
            name: 'standard_dev',
            detail: 'The standard deviation of the distribution.'
          }
        }
      },
      NORM_S_DIST: {
        description: 'Gibt die Standardnormalverteilung zurück.',
        abstract: 'Standardnormalverteilung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/norm-s-dist-function-1e787282-3832-4520-a9ae-bd2a8d99ba88'
          }
        ],
        functionParameter: {
          z: {
            name: 'z',
            detail: 'The value for which you want the distribution.'
          },
          cumulative: {
            name: 'cumulative',
            detail: 'A logical value that determines the form of the function. If cumulative is TRUE, NORM.DIST returns the cumulative distribution function; if FALSE, it returns the probability density function.'
          }
        }
      },
      NORM_S_INV: {
        description: 'Gibt die Umkehrung der Standardnormalverteilung zurück.',
        abstract: 'Umkehrung Standardnormalverteilung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/norm-s-inv-function-d6d556b4-ab7f-49cd-b526-5a20918452b1'
          }
        ],
        functionParameter: {
          probability: {
            name: 'probability',
            detail: 'A probability corresponding to the normal distribution.'
          }
        }
      },
      PEARSON: {
        description: 'Gibt den Pearson-Korrelationskoeffizienten zurück.',
        abstract: 'Pearson-Korrelation.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/pearson-function-0c3e30fc-e5af-49c4-808a-3ef66e034c18'
          }
        ],
        functionParameter: {
          array1: {
            name: 'array1',
            detail: 'The dependent array or range of data.'
          },
          array2: {
            name: 'array2',
            detail: 'The independent array or range of data.'
          }
        }
      },
      PERCENTILE_EXC: {
        description: 'Gibt das k-Quantil eines Datenbereichs zurück (k von 0 bis 1, ausschließlich).',
        abstract: 'Quantil (exklusiv).',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/percentile-exc-function-bbaa7204-e9e1-4010-85bf-c31dc5dce4ba'
          }
        ],
        functionParameter: {
          array: {
            name: 'array',
            detail: 'The array or range of data that defines relative standing.'
          },
          k: {
            name: 'k',
            detail: 'The percentile value in the range 0 and 1 (Excludes 0 and 1).'
          }
        }
      },
      PERCENTILE_INC: {
        description: 'Gibt das k-Quantil eines Datenbereichs zurück (k von 0 bis 1, einschließlich).',
        abstract: 'Quantil (inklusiv).',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/percentile-inc-function-680f9539-45eb-410b-9a5e-c1355e5fe2ed'
          }
        ],
        functionParameter: {
          array: {
            name: 'array',
            detail: 'The array or range of data that defines relative standing.'
          },
          k: {
            name: 'k',
            detail: 'The percentile value in the range 0 and 1 (Includes 0 and 1).'
          }
        }
      },
      PERCENTRANK_EXC: {
        description: 'Gibt den prozentualen Rang eines Wertes innerhalb eines Datensatzes (ausschließlich) zurück.',
        abstract: 'Prozentrang exklusiv.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/percentrank-exc-function-d8afee96-b7e2-4a2f-8c01-8fcdedaa6314'
          }
        ],
        functionParameter: {
          array: {
            name: 'array',
            detail: 'The array or range of data that defines relative standing.'
          },
          x: {
            name: 'x',
            detail: 'The value for which you want to know the rank.'
          },
          significance: {
            name: 'significance',
            detail: 'A value that identifies the number of significant digits for the returned percentage value. If omitted, PERCENTRANK.EXC uses three digits (0.xxx).'
          }
        }
      },
      PERCENTRANK_INC: {
        description: 'Gibt den prozentualen Rang eines Wertes innerhalb eines Datensatzes (inklusiv) zurück.',
        abstract: 'Prozentrang inklusiv.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/percentrank-inc-function-149592c9-00c0-49ba-86c1-c1f45b80463a'
          }
        ],
        functionParameter: {
          array: {
            name: 'array',
            detail: 'The array or range of data that defines relative standing.'
          },
          x: {
            name: 'x',
            detail: 'The value for which you want to know the rank.'
          },
          significance: {
            name: 'significance',
            detail: 'A value that identifies the number of significant digits for the returned percentage value. If omitted, PERCENTRANK.INC uses three digits (0.xxx).'
          }
        }
      },
      PERMUT: {
        description: 'Gibt die Anzahl möglicher Permutationen für eine bestimmte Anzahl Objekte zurück.',
        abstract: 'Variationen.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/permut-function-3bd1cb9a-2880-41ab-a197-f246a7a602d3'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The number of items.'
          },
          numberChosen: {
            name: 'number_chosen',
            detail: 'The number of items in each permutations.'
          }
        }
      },
      PERMUTATIONA: {
        description: 'Gibt die Anzahl der Permutationen mit Wiederholungen für eine angegebene Anzahl von Objekten zurück.',
        abstract: 'Variationen mit Wdh.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/permutationa-function-6c7d7fdc-d657-44e6-aa19-2857b25cae4e'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The number of items.'
          },
          numberChosen: {
            name: 'number_chosen',
            detail: 'The number of items in each permutations.'
          }
        }
      },
      PHI: {
        description: 'Gibt den Wert der Dichtefunktion einer Standardnormalverteilung zurück.',
        abstract: 'Phi.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/phi-function-23e49bc6-a8e8-402d-98d3-9ded87f6295c'
          }
        ],
        functionParameter: {
          x: {
            name: 'x',
            detail: 'X is the number for which you want the density of the standard normal distribution.'
          }
        }
      },
      POISSON_DIST: {
        description: 'Gibt die Poisson-Verteilung zurück.',
        abstract: 'Poisson-Verteilung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/poisson-dist-function-8fe148ff-39a2-46cb-abf3-7772695d9636'
          }
        ],
        functionParameter: {
          x: {
            name: 'x',
            detail: 'The value for which you want the distribution.'
          },
          mean: {
            name: 'mean',
            detail: 'The arithmetic mean of the distribution.'
          },
          cumulative: {
            name: 'cumulative',
            detail: 'A logical value that determines the form of the function. If cumulative is TRUE, POISSON.DIST returns the cumulative distribution function; if FALSE, it returns the probability density function.'
          }
        }
      },
      PROB: {
        description: 'Gibt die Wahrscheinlichkeit für ein durch Werte eingegrenztes Ereignis zurück.',
        abstract: 'Wahrscheinlichkeit.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/prob-function-9ac30561-c81c-4259-8253-34f0a238fc49'
          }
        ],
        functionParameter: {
          xRange: {
            name: 'x_range',
            detail: 'The range of numeric values of x with which there are associated probabilities.'
          },
          probRange: {
            name: 'prob_range',
            detail: 'A set of probabilities associated with values in x_range.'
          },
          lowerLimit: {
            name: 'lower_limit',
            detail: 'The lower bound on the value for which you want a probability.'
          },
          upperLimit: {
            name: 'upper_limit',
            detail: 'The upper bound on the value for which you want a probability.'
          }
        }
      },
      QUARTILE_EXC: {
        description: 'Gibt das Quartil eines Datenbereichs auf Basis von Perzentilwerten von 0 bis 1 (ausschließlich) zurück.',
        abstract: 'Quartil exklusiv.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/quartile-exc-function-5a355b7a-840b-4a01-b0f1-f538c2864cad'
          }
        ],
        functionParameter: {
          array: {
            name: 'array',
            detail: 'The array or range of data for which you want quartile values.'
          },
          quart: {
            name: 'quart',
            detail: 'The quartile value to return.'
          }
        }
      },
      QUARTILE_INC: {
        description: 'Gibt das Quartil eines Datensatzes zurück.',
        abstract: 'Quartil inklusiv.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/quartile-inc-function-1bbacc80-5075-42f1-aed6-47d735c4819d'
          }
        ],
        functionParameter: {
          array: {
            name: 'array',
            detail: 'The array or range of data for which you want quartile values.'
          },
          quart: {
            name: 'quart',
            detail: 'The quartile value to return.'
          }
        }
      },
      RANK_AVG: {
        description: 'Gibt den Rang einer Zahl in einer Liste zurück; bei Mehrfachwerten den Durchschnittsrang.',
        abstract: 'Rang Durchschnitt.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/rank-avg-function-bd406a6f-eb38-4d73-aa8e-6d1c3c72e83a'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The number whose rank you want to find.'
          },
          ref: {
            name: 'ref',
            detail: 'A reference to a list of numbers. Nonnumeric values in ref are ignored.'
          },
          order: {
            name: 'order',
            detail: 'A number specifying how to rank number. If order is 0 (zero) or omitted, Microsoft Excel ranks number as if ref were a list sorted in descending order. If order is any nonzero value, Microsoft Excel ranks number as if ref were a list sorted in ascending order.'
          }
        }
      },
      RANK_EQ: {
        description: 'Gibt den Rang einer Zahl in einer Liste zurück; bei Mehrfachwerten den höchsten Rang.',
        abstract: 'Rang gleich.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/rank-eq-function-284858ce-8ef6-450e-b662-26245be04a40'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The number whose rank you want to find.'
          },
          ref: {
            name: 'ref',
            detail: 'A reference to a list of numbers. Nonnumeric values in ref are ignored.'
          },
          order: {
            name: 'order',
            detail: 'A number specifying how to rank number. If order is 0 (zero) or omitted, Microsoft Excel ranks number as if ref were a list sorted in descending order. If order is any nonzero value, Microsoft Excel ranks number as if ref were a list sorted in ascending order.'
          }
        }
      },
      RSQ: {
        description: 'Gibt das Quadrat des Pearson-Korrelationskoeffizienten zurück.',
        abstract: 'Bestimmtheitsmaß R².',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/rsq-function-d7161715-250d-4a01-b80d-a8364f2be08f'
          }
        ],
        functionParameter: {
          array1: {
            name: 'array1',
            detail: 'The dependent array or range of data.'
          },
          array2: {
            name: 'array2',
            detail: 'The independent array or range of data.'
          }
        }
      },
      SKEW: {
        description: 'Gibt die Schiefe einer Verteilung zurück.',
        abstract: 'Schiefe.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/skew-function-bdf49d86-b1ef-4804-a046-28eaea69c9fa'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'The first number, cell reference, or range for which you want the skewness.'
          },
          number2: {
            name: 'number2',
            detail: 'Additional numbers, cell references or ranges for which you want the skewness, up to a maximum of 255.'
          }
        }
      },
      SKEW_P: {
        description: 'Gibt die Schiefe einer Verteilung anhand der Grundgesamtheit zurück.',
        abstract: 'Schiefe Grundgesamtheit.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/skew-p-function-76530a5c-99b9-48a1-8392-26632d542fcb'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'The first number, cell reference, or range for which you want the skewness.'
          },
          number2: {
            name: 'number2',
            detail: 'Additional numbers, cell references or ranges for which you want the skewness, up to a maximum of 255.'
          }
        }
      },
      SLOPE: {
        description: 'Gibt die Steigung einer linearen Regressionsgeraden zurück.',
        abstract: 'Steigung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/slope-function-11fb8f97-3117-4813-98aa-61d7e01276b9'
          }
        ],
        functionParameter: {
          knownYs: {
            name: 'known_y\'s',
            detail: 'The dependent array or range of data.'
          },
          knownXs: {
            name: 'known_x\'s',
            detail: 'The independent array or range of data.'
          }
        }
      },
      SMALL: {
        description: 'Gibt den k-kleinsten Wert in einer Datengruppe zurück.',
        abstract: 'k-kleinster Wert.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/small-function-17da8222-7c82-42b2-961b-14c45384df07'
          }
        ],
        functionParameter: {
          array: {
            name: 'array',
            detail: 'The array or range of data for which you want to determine the k-th smallest value.'
          },
          k: {
            name: 'k',
            detail: 'The position (from the smallest) in the array or cell range of data to return.'
          }
        }
      },
      STANDARDIZE: {
        description: 'Gibt einen standardisierten Wert zurück.',
        abstract: 'Standardisieren.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/standardize-function-81d66554-2d54-40ec-ba83-6437108ee775'
          }
        ],
        functionParameter: {
          x: {
            name: 'x',
            detail: 'The value you want to normalize.'
          },
          mean: {
            name: 'mean',
            detail: 'The arithmetic mean of the distribution.'
          },
          standardDev: {
            name: 'standard_dev',
            detail: 'The standard deviation of the distribution.'
          }
        }
      },
      STDEV_P: {
        description: 'Gibt die Standardabweichung der Grundgesamtheit zurück.',
        abstract: 'STABW Grundgesamtheit.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/stdev-p-function-6e917c05-31a0-496f-ade7-4f4e7462f285'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'The first number argument corresponding to a population.'
          },
          number2: {
            name: 'number2',
            detail: 'Number arguments 2 to 254 corresponding to a population. You can also use a single array or a reference to an array instead of arguments separated by commas.'
          }
        }
      },
      STDEV_S: {
        description: 'Schätzt die Standardabweichung anhand einer Stichprobe.',
        abstract: 'STABW Stichprobe.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/stdev-s-function-7d69cf97-0c1f-4acf-be27-f3e83904cc23'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'The first number argument corresponding to a sample of a population. You can also use a single array or a reference to an array instead of arguments separated by commas.'
          },
          number2: {
            name: 'number2',
            detail: 'Number arguments 2 to 254 corresponding to a sample of a population. You can also use a single array or a reference to an array instead of arguments separated by commas.'
          }
        }
      },
      STDEVA: {
        description: 'Schätzt die Standardabweichung anhand einer Stichprobe, inklusive Zahlen, Text und Wahrheitswerten.',
        abstract: 'STABWA.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/stdeva-function-5ff38888-7ea5-48de-9a6d-11ed73b29e9d'
          }
        ],
        functionParameter: {
          value1: {
            name: 'value1',
            detail: 'The first value argument corresponding to a sample of a population. You can also use a single array or a reference to an array instead of arguments separated by commas.'
          },
          value2: {
            name: 'value2',
            detail: 'Value arguments 2 to 254 corresponding to a sample of a population. You can also use a single array or a reference to an array instead of arguments separated by commas.'
          }
        }
      },
      STDEVPA: {
        description: 'Berechnet die Standardabweichung der Grundgesamtheit, inklusive Zahlen, Text und Wahrheitswerten.',
        abstract: 'STABWNA.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/stdevpa-function-5578d4d6-455a-4308-9991-d405afe2c28c'
          }
        ],
        functionParameter: {
          value1: {
            name: 'value1',
            detail: 'The first value argument corresponding to a population.'
          },
          value2: {
            name: 'value2',
            detail: 'Value arguments 2 to 254 corresponding to a population. You can also use a single array or a reference to an array instead of arguments separated by commas.'
          }
        }
      },
      STEYX: {
        description: 'Gibt den Standardfehler der geschätzten y-Werte zurück.',
        abstract: 'Standardfehler y.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/steyx-function-6ce74b2c-449d-4a6e-b9ac-f9cef5ba48ab'
          }
        ],
        functionParameter: {
          knownYs: {
            name: 'known_y\'s',
            detail: 'The dependent array or range of data.'
          },
          knownXs: {
            name: 'known_x\'s',
            detail: 'The independent array or range of data.'
          }
        }
      },
      T_DIST: {
        description: 'Gibt die t-Verteilung zurück.',
        abstract: 't-Verteilung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/t-dist-function-4329459f-ae91-48c2-bba8-1ead1c6c21b2'
          }
        ],
        functionParameter: {
          x: {
            name: 'x',
            detail: 'The numeric value at which to evaluate the distribution'
          },
          degFreedom: {
            name: 'degFreedom',
            detail: 'An integer indicating the number of degrees of freedom.'
          },
          cumulative: {
            name: 'cumulative',
            detail: 'A logical value that determines the form of the function. If cumulative is TRUE, T.DIST returns the cumulative distribution function; if FALSE, it returns the probability density function.'
          }
        }
      },
      T_DIST_2T: {
        description: 'Gibt die zweiseitige t-Verteilung zurück.',
        abstract: 't-Verteilung zweiseitig.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/t-dist-2t-function-198e9340-e360-4230-bd21-f52f22ff5c28'
          }
        ],
        functionParameter: {
          x: {
            name: 'x',
            detail: 'The numeric value at which to evaluate the distribution'
          },
          degFreedom: {
            name: 'degFreedom',
            detail: 'An integer indicating the number of degrees of freedom.'
          }
        }
      },
      T_DIST_RT: {
        description: 'Gibt die rechtsseitige t-Verteilung zurück.',
        abstract: 't-Verteilung rechtsseitig.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/t-dist-rt-function-20a30020-86f9-4b35-af1f-7ef6ae683eda'
          }
        ],
        functionParameter: {
          x: {
            name: 'x',
            detail: 'The numeric value at which to evaluate the distribution'
          },
          degFreedom: {
            name: 'degFreedom',
            detail: 'An integer indicating the number of degrees of freedom.'
          }
        }
      },
      T_INV: {
        description: 'Gibt die Umkehrung der t-Verteilung zurück.',
        abstract: 'Umkehrung t-Verteilung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/t-inv-function-2908272b-4e61-4942-9df9-a25fec9b0e2e'
          }
        ],
        functionParameter: {
          probability: {
            name: 'probability',
            detail: 'The probability associated with the Student\'s t-distribution.'
          },
          degFreedom: {
            name: 'degFreedom',
            detail: 'An integer indicating the number of degrees of freedom.'
          }
        }
      },
      T_INV_2T: {
        description: 'Gibt die Umkehrung der zweiseitigen t-Verteilung zurück.',
        abstract: 'Umkehrung zweiseitige t-Verteilung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/t-inv-2t-function-ce72ea19-ec6c-4be7-bed2-b9baf2264f17'
          }
        ],
        functionParameter: {
          probability: {
            name: 'probability',
            detail: 'The probability associated with the Student\'s t-distribution.'
          },
          degFreedom: {
            name: 'degFreedom',
            detail: 'An integer indicating the number of degrees of freedom.'
          }
        }
      },
      T_TEST: {
        description: 'Gibt die Wahrscheinlichkeit eines t-Tests zurück.',
        abstract: 't-Test.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/t-test-function-d4e08ec3-c545-485f-962e-276f7cbed055'
          }
        ],
        functionParameter: {
          array1: {
            name: 'array1',
            detail: 'The first array or range of data.'
          },
          array2: {
            name: 'array2',
            detail: 'The second array or range of data.'
          },
          tails: {
            name: 'tails',
            detail: 'Specifies the number of distribution tails. If tails = 1, T.TEST uses the one-tailed distribution. If tails = 2, T.TEST uses the two-tailed distribution.'
          },
          type: {
            name: 'type',
            detail: 'The kind of t-Test to perform.'
          }
        }
      },
      TREND: {
        description: 'Gibt Werte für einen linearen Trend zurück.',
        abstract: 'Trend.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/trend-function-e2f135f0-8827-4096-9873-9a7cf7b51ef1'
          }
        ],
        functionParameter: {
          knownYs: {
            name: 'known_y\'s',
            detail: 'The set of y-values you already know in the relationship y = m*x+b.'
          },
          knownXs: {
            name: 'known_x\'s',
            detail: 'The set of x-values you already know in the relationship y = m*x+b.'
          },
          newXs: {
            name: 'new_x\'s',
            detail: 'Are new x-values for which you want TREND to return corresponding y-values.'
          },
          constb: {
            name: 'const',
            detail: 'A logical value specifying whether to force the constant b to equal 0.'
          }
        }
      },
      TRIMMEAN: {
        description: 'Gibt den Mittelwert eines Datensatzes ohne Randwerte zurück.',
        abstract: 'Getrimmter Mittelwert.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/trimmean-function-d90c9878-a119-4746-88fa-63d988f511d3'
          }
        ],
        functionParameter: {
          array: {
            name: 'array',
            detail: 'The array or range of values to trim and average.'
          },
          percent: {
            name: 'percent',
            detail: 'The fractional number of data points to exclude from the calculation.'
          }
        }
      },
      VAR_P: {
        description: 'Berechnet die Varianz anhand der Grundgesamtheit.',
        abstract: 'Varianz Grundgesamtheit.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/var-p-function-73d1285c-108c-4843-ba5d-a51f90656f3a'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'The first number argument corresponding to a population.'
          },
          number2: {
            name: 'number2',
            detail: 'Number arguments 2 to 254 corresponding to a population.'
          }
        }
      },
      VAR_S: {
        description: 'Schätzt die Varianz anhand einer Stichprobe.',
        abstract: 'Varianz Stichprobe.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/var-s-function-913633de-136b-449d-813e-65a00b2b990b'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'The first number argument corresponding to a sample of a population.'
          },
          number2: {
            name: 'number2',
            detail: 'Number arguments 2 to 254 corresponding to a sample of a population.'
          }
        }
      },
      VARA: {
        description: 'Schätzt die Varianz anhand einer Stichprobe, inklusive Zahlen, Text und Wahrheitswerten.',
        abstract: 'VARIANZA.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/vara-function-3de77469-fa3a-47b4-85fd-81758a1e1d07'
          }
        ],
        functionParameter: {
          value1: {
            name: 'value1',
            detail: 'The value number argument corresponding to a sample of a population.'
          },
          value2: {
            name: 'value2',
            detail: 'Value arguments 2 to 254 corresponding to a sample of a population.'
          }
        }
      },
      VARPA: {
        description: 'Berechnet die Varianz anhand der Grundgesamtheit, inklusive Zahlen, Text und Wahrheitswerten.',
        abstract: 'VARIANZNA.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/varpa-function-59a62635-4e89-4fad-88ac-ce4dc0513b96'
          }
        ],
        functionParameter: {
          value1: {
            name: 'value1',
            detail: 'The first value argument corresponding to a population.'
          },
          value2: {
            name: 'value2',
            detail: 'Value arguments 2 to 254 corresponding to a population.'
          }
        }
      },
      WEIBULL_DIST: {
        description: 'Gibt die Weibull-Verteilung zurück.',
        abstract: 'Weibull-Verteilung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/weibull-dist-function-4e783c39-9325-49be-bbc9-a83ef82b45db'
          }
        ],
        functionParameter: {
          x: {
            name: 'x',
            detail: 'The value for which you want the distribution.'
          },
          alpha: {
            name: 'alpha',
            detail: 'A parameter of the distribution.'
          },
          beta: {
            name: 'beta',
            detail: 'A parameter of the distribution.'
          },
          cumulative: {
            name: 'cumulative',
            detail: 'A logical value that determines the form of the function. If cumulative is TRUE, WEIBULL.DIST returns the cumulative distribution function; if FALSE, it returns the probability density function.'
          }
        }
      },
      Z_TEST: {
        description: 'Gibt den einseitigen Wahrscheinlichkeitswert eines Gauß-Tests zurück.',
        abstract: 'Gauß-Test.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/z-test-function-d633d5a3-2031-4614-a016-92180ad82bee'
          }
        ],
        functionParameter: {
          array: {
            name: 'array',
            detail: 'The array or range of data against which to test x.'
          },
          x: {
            name: 'x',
            detail: 'The value to test.'
          },
          sigma: {
            name: 'sigma',
            detail: 'The population (known) standard deviation. If omitted, the sample standard deviation is used.'
          }
        }
      },
      ADDRESS: {
        description: 'Gibt einen Bezug in Textform für eine einzelne Zelle eines Tabellenblatts zurück.',
        abstract: 'Zellbezug als Text.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/address-function-d0c26c0d-3991-446b-8de4-ab46431d4f89'
          }
        ],
        functionParameter: {
          row_num: {
            name: 'row number',
            detail: 'A numeric value that specifies the row number to use in the cell reference.'
          },
          column_num: {
            name: 'column number',
            detail: 'A numeric value that specifies the column number to use in the cell reference.'
          },
          abs_num: {
            name: 'type of reference',
            detail: 'A numeric value that specifies the type of reference to return.'
          },
          a1: {
            name: 'style of reference',
            detail: 'A logical value that specifies the A1 or R1C1 reference style. In A1 style, columns are labeled alphabetically, and rows are labeled numerically. In R1C1 reference style, both columns and rows are labeled numerically. If the A1 argument is TRUE or omitted, the ADDRESS function returns an A1-style reference; if FALSE, the ADDRESS function returns an R1C1-style reference.'
          },
          sheet_text: {
            name: 'worksheet name',
            detail: 'A text value that specifies the name of the worksheet to be used as the external reference. For example, the formula =ADDRESS(1,1,,,"Sheet2") returns Sheet2!$A$1. If the sheet_text argument is omitted, no sheet name is used, and the address returned by the function refers to a cell on the current sheet.'
          }
        }
      },
      AREAS: {
        description: 'Gibt die Anzahl der Bereiche in einem Bezug zurück.',
        abstract: 'Anzahl Bereiche.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/areas-function-8392ba32-7a41-43b3-96b0-3695d2ec6152'
          }
        ],
        functionParameter: {
          reference: {
            name: 'reference',
            detail: 'A reference to a cell or range of cells and can refer to multiple areas.'
          }
        }
      },
      CHOOSE: {
        description: 'Wählt einen Wert aus einer Liste von Werten aus.',
        abstract: 'WAHL aus Liste.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/choose-function-fc5c184f-cb62-4ec7-a46e-38653b98f5bc'
          }
        ],
        functionParameter: {
          indexNum: {
            name: 'index_num',
            detail: 'Specifies which value argument is selected. Index_num must be a number between 1 and 254, or a formula or reference to a cell containing a number between 1 and 254.\nIf index_num is 1, CHOOSE returns value1; if it is 2, CHOOSE returns value2; and so on.\nIf index_num is less than 1 or greater than the number of the last value in the list, CHOOSE returns the #VALUE! error value.\nIf index_num is a fraction, it is truncated to the lowest integer before being used.'
          },
          value1: {
            name: 'value1',
            detail: 'CHOOSE selects a value or an action to perform based on index_num. The arguments can be numbers, cell references, defined names, formulas, functions, or text.'
          },
          value2: {
            name: 'value2',
            detail: '1 to 254 value arguments.'
          }
        }
      },
      CHOOSECOLS: {
        description: 'Gibt die angegebenen Spalten aus einem Array zurück.',
        abstract: 'Spalten auswählen.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/choosecols-function-bf117976-2722-4466-9b9a-1c01ed9aebff'
          }
        ],
        functionParameter: {
          array: {
            name: 'array',
            detail: 'The array containing the columns to be returned in the new array.'
          },
          colNum1: {
            name: 'col_num1',
            detail: 'The first column to be returned.'
          },
          colNum2: {
            name: 'col_num2',
            detail: 'Additional columns to be returned.'
          }
        }
      },
      CHOOSEROWS: {
        description: 'Gibt die angegebenen Zeilen aus einem Array zurück.',
        abstract: 'Zeilen auswählen.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/chooserows-function-51ace882-9bab-4a44-9625-7274ef7507a3'
          }
        ],
        functionParameter: {
          array: {
            name: 'array',
            detail: 'The array containing the rows to be returned in the new array.'
          },
          rowNum1: {
            name: 'row_num1',
            detail: 'The first row number to be returned.'
          },
          rowNum2: {
            name: 'row_num2',
            detail: 'Additional row numbers to be returned.'
          }
        }
      },
      COLUMN: {
        description: 'Gibt die Spaltennummer eines Bezugs zurück.',
        abstract: 'Spaltennummer.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/column-function-44e8c754-711c-4df3-9da4-47a55042554b'
          }
        ],
        functionParameter: {
          reference: {
            name: 'reference',
            detail: 'The cell or range of cells for which you want to return the column number.'
          }
        }
      },
      COLUMNS: {
        description: 'Gibt die Anzahl der Spalten in einem Bezug zurück.',
        abstract: 'Anzahl Spalten.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/columns-function-4e8e7b4e-e603-43e8-b177-956088fa48ca'
          }
        ],
        functionParameter: {
          array: {
            name: 'array',
            detail: 'An array or array formula, or a reference to a range of cells for which you want the number of columns.'
          }
        }
      },
      DROP: {
        description: 'Schließt eine angegebene Anzahl Zeilen oder Spalten am Anfang oder Ende eines Arrays aus.',
        abstract: 'Zeilen/Spalten weglassen.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/drop-function-1cb4e151-9e17-4838-abe5-9ba48d8c6a34'
          }
        ],
        functionParameter: {
          array: {
            name: 'array',
            detail: 'The array from which to drop rows or columns.'
          },
          rows: {
            name: 'rows',
            detail: 'The number of rows to drop. A negative value drops from the end of the array.'
          },
          columns: {
            name: 'columns',
            detail: 'The number of columns to exclude. A negative value drops from the end of the array.'
          }
        }
      },
      EXPAND: {
        description: 'Erweitert ein Array auf angegebene Zeilen- und Spaltenmaße.',
        abstract: 'Array erweitern.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/expand-function-7433fba5-4ad1-41da-a904-d5d95808bc38'
          }
        ],
        functionParameter: {
          array: {
            name: 'array',
            detail: 'The array to expand.'
          },
          rows: {
            name: 'rows',
            detail: 'The number of rows in the expanded array. If missing, rows will not be expanded.'
          },
          columns: {
            name: 'columns',
            detail: 'The number of columns in the expanded array. If missing, columns will not be expanded.'
          },
          padWith: {
            name: 'pad_with',
            detail: 'The value with which to pad. The default is #N/A.'
          }
        }
      },
      FILTER: {
        description: 'Filtert einen Bereich anhand angegebener Kriterien.',
        abstract: 'Filtern.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/filter-function-f4f7cb66-82eb-4767-8f7c-4877ad80c759'
          }
        ],
        functionParameter: {
          array: {
            name: 'array',
            detail: 'The range or array to filter.'
          },
          include: {
            name: 'include',
            detail: 'An array of Boolean values ​​where TRUE indicates that a row or column is to be retained.'
          },
          ifEmpty: {
            name: 'if_empty',
            detail: 'If no items are reserved, return.'
          }
        }
      },
      FORMULATEXT: {
        description: 'Gibt die Formel als Text zurück.',
        abstract: 'Formel als Text.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/formulatext-function-0a786771-54fd-4ae2-96ee-09cda35439c8'
          }
        ],
        functionParameter: {
          reference: {
            name: 'reference',
            detail: 'A reference to a cell or range of cells.'
          }
        }
      },
      GETPIVOTDATA: {
        description: 'Gibt Daten zurück, die in einem PivotTable-Bericht gespeichert sind.',
        abstract: 'PivotTabelle-Daten.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/getpivotdata-function-8c083b99-a922-4ca0-af5e-3af55960761f'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'first'
          },
          number2: {
            name: 'number2',
            detail: 'second'
          }
        }
      },
      HLOOKUP: {
        description: 'Sucht in der obersten Zeile eines Bereichs und gibt den Wert der angegebenen Zelle zurück.',
        abstract: 'Waagerecht suchen (HVERWEIS).',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/hlookup-function-a3034eec-b719-4ba3-bb65-e1ad662ed95f'
          }
        ],
        functionParameter: {
          lookupValue: {
            name: 'lookup_value',
            detail: 'The value to be found in the first row of the table. Lookup_value can be a value, a reference, or a text string.'
          },
          tableArray: {
            name: 'table_array',
            detail: 'A table of information in which data is looked up. Use a reference to a range or a range name.'
          },
          rowIndexNum: {
            name: 'row_index_num',
            detail: 'The row number in table_array from which the matching value will be returned. A row_index_num of 1 returns the first row value in table_array, a row_index_num of 2 returns the second row value in table_array, and so on.'
          },
          rangeLookup: {
            name: 'range_lookup',
            detail: 'A logical value that specifies whether you want HLOOKUP to find an exact match or an approximate match.'
          }
        }
      },
      HSTACK: {
        description: 'Hängt Arrays horizontal aneinander.',
        abstract: 'Arrays horizontal stapeln.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/hstack-function-98c4ab76-10fe-4b4f-8d5f-af1c125fe8c2'
          }
        ],
        functionParameter: {
          array1: {
            name: 'array',
            detail: 'The arrays to append.'
          },
          array2: {
            name: 'array',
            detail: 'The arrays to append.'
          }
        }
      },
      HYPERLINK: {
        description: 'Erstellt eine Verknüpfung oder einen Sprung zu einer Stelle im aktuellen Dokument oder zu einem URL.',
        abstract: 'Hyperlink.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.google.com/docs/answer/3093313?sjid=14131674310032162335-NC&hl=en'
          }
        ],
        functionParameter: {
          url: {
            name: 'url',
            detail: 'The full URL of the link location enclosed in quotation marks, or a reference to a cell containing such a URL.'
          },
          linkLabel: {
            name: 'link_label',
            detail: 'The text to display in the cell as the link, enclosed in quotation marks, or a reference to a cell containing such a label.'
          }
        }
      },
      IMAGE: {
        description: 'Gibt ein Bild aus einer Quell-URL zurück.',
        abstract: 'Bild aus URL.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/image-function-7e112975-5e52-4f2a-b9da-1d913d51f5d5'
          }
        ],
        functionParameter: {
          source: {
            name: 'source',
            detail: 'The URL path, using an "https" protocol, of the image file.'
          },
          altText: {
            name: 'alt_text',
            detail: 'Alternative text that describes the image for accessibility.'
          },
          sizing: {
            name: 'sizing',
            detail: 'Specifies the image dimensions.'
          },
          height: {
            name: 'height',
            detail: 'The custom height of the image in pixels.'
          },
          width: {
            name: 'width',
            detail: 'The custom width of the image in pixels.'
          }
        }
      },
      INDEX: {
        description: 'Gibt mithilfe eines Index einen Wert aus einem Bezug oder Array zurück.',
        abstract: 'INDEX.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/index-function-a5dcf0dd-996d-40a4-a822-b56b061328bd'
          }
        ],
        functionParameter: {
          reference: {
            name: 'reference',
            detail: 'A reference to one or more cell ranges.'
          },
          rowNum: {
            name: 'row_num',
            detail: 'The number of the row in reference from which to return a reference.'
          },
          columnNum: {
            name: 'column_num',
            detail: 'The number of the column in reference from which to return a reference.'
          },
          areaNum: {
            name: 'area_num',
            detail: 'Selects a range in reference from which to return the intersection of row_num and column_num.'
          }
        }
      },
      INDIRECT: {
        description: 'Gibt den durch eine Textfolge angegebenen Bezug zurück.',
        abstract: 'INDIREKT.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/indirect-function-474b3a3a-8a26-4f44-b491-92b6306fa261'
          }
        ],
        functionParameter: {
          refText: {
            name: 'ref_text',
            detail: 'A reference to a cell that contains an A1-style reference, an R1C1-style reference, a name defined as a reference, or a reference to a cell as a text string. '
          },
          a1: {
            name: 'a1',
            detail: 'A logical value that specifies what type of reference is contained in the cell ref_text.'
          }
        }
      },
      LOOKUP: {
        description: 'Sucht Werte in einem Vektor oder Array.',
        abstract: 'VERWEIS.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/lookup-function-446d94af-663b-451d-8251-369d5e3864cb'
          }
        ],
        functionParameter: {
          lookupValue: {
            name: 'lookup_value',
            detail: 'A value that LOOKUP searches for in the first vector. Lookup_value can be a number, text, a logical value, or a name or reference that refers to a value.'
          },
          lookupVectorOrArray: {
            name: 'lookup_vectorOrArray',
            detail: 'A range that contains only one row or one column'
          },
          resultVector: {
            name: 'result_vector',
            detail: 'A range that contains only one row or column. The result_vector argument must be the same size as lookup_vector.'
          }
        }
      },
      MATCH: {
        description: 'Sucht Werte in einem Bezug oder Array.',
        abstract: 'VERGLEICH.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/match-function-e8dffd45-c762-47d6-bf89-533f4a37673a'
          }
        ],
        functionParameter: {
          lookupValue: {
            name: 'lookup_value',
            detail: 'The value that you want to match in lookup_array.'
          },
          lookupArray: {
            name: 'lookup_array',
            detail: 'The range of cells being searched.'
          },
          matchType: {
            name: 'match_type',
            detail: 'The number -1, 0, or 1.'
          }
        }
      },
      OFFSET: {
        description: 'Gibt einen um Zeilen/Spalten versetzten Bezug zurück.',
        abstract: 'BEREICH.VERSCHIEBEN.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/offset-function-c8de19ae-dd79-4b9b-a14e-b4d906d11b66'
          }
        ],
        functionParameter: {
          reference: {
            name: 'reference',
            detail: 'The reference from which you want to base the offset.'
          },
          rows: {
            name: 'rows',
            detail: 'The number of rows, up or down, that you want the upper-left cell to refer to.'
          },
          cols: {
            name: 'columns',
            detail: 'The number of columns, to the left or right, that you want the upper-left cell of the result to refer to.'
          },
          height: {
            name: 'height',
            detail: 'The height, in number of rows, that you want the returned reference to be. Height must be a positive number.'
          },
          width: {
            name: 'width',
            detail: 'The width, in number of columns, that you want the returned reference to be. Width must be a positive number.'
          }
        }
      },
      ROW: {
        description: 'Gibt die Zeilennummer eines Bezugs zurück.',
        abstract: 'Zeilennummer.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/row-function-3a63b74a-c4d0-4093-b49a-e76eb49a6d8d'
          }
        ],
        functionParameter: {
          reference: {
            name: 'reference',
            detail: 'The cell or range of cells for which you want the row number.'
          }
        }
      },
      ROWS: {
        description: 'Gibt die Anzahl der Zeilen in einem Bezug zurück.',
        abstract: 'Anzahl Zeilen.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/rows-function-b592593e-3fc2-47f2-bec1-bda493811597'
          }
        ],
        functionParameter: {
          array: {
            name: 'array',
            detail: 'An array, an array formula, or a reference to a range of cells for which you want the number of rows.'
          }
        }
      },
      RTD: {
        description: 'Ruft Echtzeitdaten aus einem COM-Automatisierungsprogramm ab.',
        abstract: 'Echtzeitdaten.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/rtd-function-e0cc001a-56f0-470a-9b19-9455dc0eb593'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'first'
          },
          number2: {
            name: 'number2',
            detail: 'second'
          }
        }
      },
      SORT: {
        description: 'Sortiert den Inhalt eines Bereichs oder Arrays.',
        abstract: 'Sortieren.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/sort-function-22f63bd0-ccc8-492f-953d-c20e8e44b86c'
          }
        ],
        functionParameter: {
          array: {
            name: 'array',
            detail: 'The range or array to be sorted.'
          },
          sortIndex: {
            name: 'sort_index',
            detail: 'A number indicating the sort order (by row or by column).'
          },
          sortOrder: {
            name: 'sort_order',
            detail: 'A number representing the desired sort order; 1 for ascending (default), -1 for descending.'
          },
          byCol: {
            name: 'by_col',
            detail: 'Logical value indicating the desired sort direction; FALSE sorts by rows (default), TRUE sorts by columns.'
          }
        }
      },
      SORTBY: {
        description: 'Sortiert einen Bereich oder ein Array anhand der Werte in einem entsprechenden Bereich oder Array.',
        abstract: 'Sortieren nach.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/sortby-function-cd2d7a62-1b93-435c-b561-d6a35134f28f'
          }
        ],
        functionParameter: {
          array: {
            name: 'array',
            detail: 'The range or array to be sorted.'
          },
          byArray1: {
            name: 'by_array1',
            detail: 'The range or array to sort based on.'
          },
          sortOrder1: {
            name: 'sort_order1',
            detail: 'A number representing the desired sort order; 1 for ascending (default), -1 for descending.'
          },
          byArray2: {
            name: 'by_array2',
            detail: 'The range or array to sort based on.'
          },
          sortOrder2: {
            name: 'sort_order2',
            detail: 'A number representing the desired sort order; 1 for ascending (default), -1 for descending.'
          }
        }
      },
      TAKE: {
        description: 'Gibt eine angegebene Anzahl benachbarter Zeilen oder Spalten am Anfang oder Ende eines Arrays zurück.',
        abstract: 'Zeilen/Spalten übernehmen.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/take-function-25382ff1-5da1-4f78-ab43-f33bd2e4e003'
          }
        ],
        functionParameter: {
          array: {
            name: 'array',
            detail: 'The array from which to take rows or columns.'
          },
          rows: {
            name: 'rows',
            detail: 'The number of rows to take. A negative value takes from the end of the array.'
          },
          columns: {
            name: 'columns',
            detail: 'The number of columns to take. A negative value takes from the end of the array.'
          }
        }
      },
      TOCOL: {
        description: 'Gibt ein Array in einer einzigen Spalte zurück.',
        abstract: 'In Spalte umformen.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/tocol-function-22839d9b-0b55-4fc1-b4e6-2761f8f122ed'
          }
        ],
        functionParameter: {
          array: {
            name: 'array',
            detail: 'The array or reference to return as a column.'
          },
          ignore: {
            name: 'ignore',
            detail: 'Whether to ignore certain types of values. By default, no values are ignored. Specify one of the following:\n0 Keep all values (default)\n1 Ignore blanks\n2 Ignore errors\n3 Ignore blanks and errors'
          },
          scanByColumn: {
            name: 'scan_by_column',
            detail: 'Scan the array by column. By default, the array is scanned by row. Scanning determines whether the values are ordered by row or by column.'
          }
        }
      },
      TOROW: {
        description: 'Gibt ein Array in einer einzigen Zeile zurück.',
        abstract: 'In Zeile umformen.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/torow-function-b90d0964-a7d9-44b7-816b-ffa5c2fe2289'
          }
        ],
        functionParameter: {
          array: {
            name: 'array',
            detail: 'The array or reference to return as a row.'
          },
          ignore: {
            name: 'ignore',
            detail: 'Whether to ignore certain types of values. By default, no values are ignored. Specify one of the following:\n0 Keep all values (default)\n1 Ignore blanks\n2 Ignore errors\n3 Ignore blanks and errors'
          },
          scanByColumn: {
            name: 'scan_by_column',
            detail: 'Scan the array by column. By default, the array is scanned by row. Scanning determines whether the values are ordered by row or by column.'
          }
        }
      },
      TRANSPOSE: {
        description: 'Gibt die transponierte Matrix eines Arrays zurück.',
        abstract: 'Transponieren.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/transpose-function-ed039415-ed8a-4a81-93e9-4b6dfac76027'
          }
        ],
        functionParameter: {
          array: {
            name: 'array',
            detail: 'A range of cells or an array in a worksheet.'
          }
        }
      },
      UNIQUE: {
        description: 'Gibt eindeutige Werte aus einem Bereich oder Array zurück.',
        abstract: 'Eindeutige Werte.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/unique-function-c5ab87fd-30a3-4ce9-9d1a-40204fb85e1e'
          }
        ],
        functionParameter: {
          array: {
            name: 'array',
            detail: 'The range or array from which unique rows or columns are returned.'
          },
          byCol: {
            name: 'by_col',
            detail: 'Is a logical value: compares rows to each other and returns unique values ​​= FALSE, or is omitted; compares columns to each other and returns unique values ​​= TRUE.'
          },
          exactlyOnce: {
            name: 'exactly_once',
            detail: 'Is a logical value: returns rows or columns from the array that appear only once = TRUE; returns all distinct rows or columns from the array = FALSE, or has been omitted.'
          }
        }
      },
      VLOOKUP: {
        description: 'Sucht in der ersten Spalte eines Bereichs und gibt den Wert in der angegebenen Spalte zurück.',
        abstract: 'SVERWEIS.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/vlookup-function-0bbc8083-26fe-4963-8ab8-93a18ad188a1'
          }
        ],
        functionParameter: {
          lookupValue: {
            name: 'lookup_value',
            detail: 'The value you want to look up. The value you want to look up must be in the first column of the range of cells you specify in the table_array argument.'
          },
          tableArray: {
            name: 'table_array',
            detail: 'The range of cells in which the VLOOKUP will search for the lookup_value and the return value. You can use a named range or a table, and you can use names in the argument instead of cell references. '
          },
          colIndexNum: {
            name: 'col_index_num',
            detail: 'The column number (starting with 1 for the left-most column of table_array) that contains the return value.'
          },
          rangeLookup: {
            name: 'range_lookup',
            detail: 'A logical value that specifies whether you want VLOOKUP to find an approximate or an exact match: Approximate match - 1/TRUE, Exact match - 0/FALSE'
          }
        }
      },
      VSTACK: {
        description: 'Hängt Arrays vertikal aneinander.',
        abstract: 'Arrays vertikal stapeln.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/vstack-function-a4b86897-be0f-48fc-adca-fcc10d795a9c'
          }
        ],
        functionParameter: {
          array1: {
            name: 'array',
            detail: 'The arrays to append.'
          },
          array2: {
            name: 'array',
            detail: 'The arrays to append.'
          }
        }
      },
      WRAPCOLS: {
        description: 'Verpackt die bereitgestellte Zeile oder Spalte nach einer angegebenen Anzahl Werte in Spalten.',
        abstract: 'In Spalten umbrechen.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/wrapcols-function-d038b05a-57b7-4ee0-be94-ded0792511e2'
          }
        ],
        functionParameter: {
          vector: {
            name: 'vector',
            detail: 'The vector or reference to wrap.'
          },
          wrapCount: {
            name: 'wrap_count',
            detail: 'The maximum number of values for each column.'
          },
          padWith: {
            name: 'pad_with',
            detail: 'The value with which to pad. The default is #N/A.'
          }
        }
      },
      WRAPROWS: {
        description: 'Verpackt die bereitgestellte Zeile oder Spalte nach einer angegebenen Anzahl Werte in Zeilen.',
        abstract: 'In Zeilen umbrechen.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/wraprows-function-796825f3-975a-4cee-9c84-1bbddf60ade0'
          }
        ],
        functionParameter: {
          vector: {
            name: 'vector',
            detail: 'The vector or reference to wrap.'
          },
          wrapCount: {
            name: 'wrap_count',
            detail: 'The maximum number of values for each row.'
          },
          padWith: {
            name: 'pad_with',
            detail: 'The value with which to pad. The default is #N/A.'
          }
        }
      },
      XLOOKUP: {
        description: 'Sucht in einem Bereich oder einem Array nach einer Übereinstimmung und gibt das entsprechende Element aus einem zweiten Bereich oder Array zurück.',
        abstract: 'XVERWEIS.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/xlookup-function-b7fd680e-6d10-43e6-84f9-88eae8bf5929'
          }
        ],
        functionParameter: {
          lookupValue: {
            name: 'lookup_value',
            detail: 'The value to search for, If omitted, XLOOKUP returns blank cells it finds in lookup_array. '
          },
          lookupArray: {
            name: 'lookup_array',
            detail: 'The array or range to search'
          },
          returnArray: {
            name: 'return_array',
            detail: 'The array or range to return'
          },
          ifNotFound: {
            name: 'if_not_found',
            detail: 'Where a valid match is not found, return the [if_not_found] text you supply. If a valid match is not found, and [if_not_found] is missing, #N/A is returned.'
          },
          matchMode: {
            name: 'match_mode',
            detail: 'Specify the match type: 0 - Exact match. If none found, return #N/A. This is the default. -1 - Exact match. If none found, return the next smaller item. 1 - Exact match. If none found, return the next larger item. 2 - A wildcard match where *, ?, and ~ have special meaning.'
          },
          searchMode: {
            name: 'search_mode',
            detail: 'Specify the search mode to use: 1 - Perform a search starting at the first item. This is the default. -1 - Perform a reverse search starting at the last item. 2 - Perform a binary search that relies on lookup_array being sorted in ascending order. If not sorted, invalid results will be returned. -2 - Perform a binary search that relies on lookup_array being sorted in descending order. If not sorted, invalid results will be returned.'
          }
        }
      },
      XMATCH: {
        description: 'Gibt die relative Position eines Elements in einem Array oder Zellbereich zurück.',
        abstract: 'XVERGLEICH.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/xmatch-function-d966da31-7a6b-4a13-a1c6-5a33ed6a0312'
          }
        ],
        functionParameter: {
          lookupValue: {
            name: 'lookup_value',
            detail: 'The lookup value'
          },
          lookupArray: {
            name: 'lookup_array',
            detail: 'The array or range to search'
          },
          matchMode: {
            name: 'match_mode',
            detail: 'Specify the match type:\n0 - Exact match (default)\n-1 - Exact match or next smallest item\n1 - Exact match or next largest item\n2 - A wildcard match where *, ?, and ~ have special meaning.'
          },
          searchMode: {
            name: 'search_mode',
            detail: 'Specify the search type:\n1 - Search first-to-last (default)\n-1 - Search last-to-first (reverse search).\n2 - Perform a binary search that relies on lookup_array being sorted in ascending order. If not sorted, invalid results will be returned.\n-2 - Perform a binary search that relies on lookup_array being sorted in descending order. If not sorted, invalid results will be returned.'
          }
        }
      },
      DAVERAGE: {
        description: 'Gibt den Mittelwert ausgewählter Datenbankeinträge zurück.',
        abstract: 'Mittelwert ausgewählter Datenbankeinträge.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/daverage-function-a6a2d5ac-4b4b-48cd-a1d8-7b37834e5aee'
          }
        ],
        functionParameter: {
          database: {
            name: 'database',
            detail: 'The range of cells that makes up the list or database.'
          },
          field: {
            name: 'field',
            detail: 'Indicates which column is used in the function.'
          },
          criteria: {
            name: 'criteria',
            detail: 'The range of cells that contains the conditions you specify.'
          }
        }
      },
      DCOUNT: {
        description: 'Zählt die Zellen mit Zahlen in einer Datenbank.',
        abstract: 'Zählt die Zellen mit Zahlen in einer Datenbank.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/dcount-function-c1fc7b93-fb0d-4d8d-97db-8d5f076eaeb1'
          }
        ],
        functionParameter: {
          database: {
            name: 'database',
            detail: 'The range of cells that makes up the list or database.'
          },
          field: {
            name: 'field',
            detail: 'Indicates which column is used in the function.'
          },
          criteria: {
            name: 'criteria',
            detail: 'The range of cells that contains the conditions you specify.'
          }
        }
      },
      DCOUNTA: {
        description: 'Zählt nicht leere Zellen in einer Datenbank.',
        abstract: 'Zählt nicht leere Zellen in einer Datenbank.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/dcounta-function-00232a6d-5a66-4a01-a25b-c1653fda1244'
          }
        ],
        functionParameter: {
          database: {
            name: 'database',
            detail: 'The range of cells that makes up the list or database.'
          },
          field: {
            name: 'field',
            detail: 'Indicates which column is used in the function.'
          },
          criteria: {
            name: 'criteria',
            detail: 'The range of cells that contains the conditions you specify.'
          }
        }
      },
      DGET: {
        description: 'Extrahiert einen einzelnen Datensatz aus einer Datenbank, der den angegebenen Kriterien entspricht.',
        abstract: 'Extrahiert einen einzelnen Datensatz aus einer Datenbank.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/dget-function-455568bf-4eef-45f7-90f0-ec250d00892e'
          }
        ],
        functionParameter: {
          database: {
            name: 'database',
            detail: 'The range of cells that makes up the list or database.'
          },
          field: {
            name: 'field',
            detail: 'Indicates which column is used in the function.'
          },
          criteria: {
            name: 'criteria',
            detail: 'The range of cells that contains the conditions you specify.'
          }
        }
      },
      DMAX: {
        description: 'Gibt den größten Wert aus ausgewählten Datenbankeinträgen zurück.',
        abstract: 'Größter Wert aus ausgewählten Datenbankeinträgen.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/dmax-function-f4e8209d-8958-4c3d-a1ee-6351665d41c2'
          }
        ],
        functionParameter: {
          database: {
            name: 'database',
            detail: 'The range of cells that makes up the list or database.'
          },
          field: {
            name: 'field',
            detail: 'Indicates which column is used in the function.'
          },
          criteria: {
            name: 'criteria',
            detail: 'The range of cells that contains the conditions you specify.'
          }
        }
      },
      DMIN: {
        description: 'Gibt den kleinsten Wert aus ausgewählten Datenbankeinträgen zurück.',
        abstract: 'Kleinster Wert aus ausgewählten Datenbankeinträgen.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/dmin-function-4ae6f1d9-1f26-40f1-a783-6dc3680192a3'
          }
        ],
        functionParameter: {
          database: {
            name: 'database',
            detail: 'The range of cells that makes up the list or database.'
          },
          field: {
            name: 'field',
            detail: 'Indicates which column is used in the function.'
          },
          criteria: {
            name: 'criteria',
            detail: 'The range of cells that contains the conditions you specify.'
          }
        }
      },
      DPRODUCT: {
        description: 'Multipliziert die Werte eines bestimmten Feldes, die den Kriterien entsprechen.',
        abstract: 'Multipliziert die Werte eines bestimmten Feldes.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/dproduct-function-4f96b13e-d49c-47a7-b769-22f6d017cb31'
          }
        ],
        functionParameter: {
          database: {
            name: 'database',
            detail: 'The range of cells that makes up the list or database.'
          },
          field: {
            name: 'field',
            detail: 'Indicates which column is used in the function.'
          },
          criteria: {
            name: 'criteria',
            detail: 'The range of cells that contains the conditions you specify.'
          }
        }
      },
      DSTDEV: {
        description: 'Schätzt die Standardabweichung anhand einer Stichprobe ausgewählter Datenbankeinträge.',
        abstract: 'Standardabweichung einer Datenbank-Stichprobe.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/dstdev-function-026b8c73-616d-4b5e-b072-241871c4ab96'
          }
        ],
        functionParameter: {
          database: {
            name: 'database',
            detail: 'The range of cells that makes up the list or database.'
          },
          field: {
            name: 'field',
            detail: 'Indicates which column is used in the function.'
          },
          criteria: {
            name: 'criteria',
            detail: 'The range of cells that contains the conditions you specify.'
          }
        }
      },
      DSTDEVP: {
        description: 'Berechnet die Standardabweichung anhand der Grundgesamtheit ausgewählter Datenbankeinträge.',
        abstract: 'Standardabweichung einer Datenbank-Grundgesamtheit.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/dstdevp-function-04b78995-da03-4813-bbd9-d74fd0f5d94b'
          }
        ],
        functionParameter: {
          database: {
            name: 'database',
            detail: 'The range of cells that makes up the list or database.'
          },
          field: {
            name: 'field',
            detail: 'Indicates which column is used in the function.'
          },
          criteria: {
            name: 'criteria',
            detail: 'The range of cells that contains the conditions you specify.'
          }
        }
      },
      DSUM: {
        description: 'Addiert die Zahlen in der Feldspalte von Datensätzen einer Datenbank, die den Kriterien entsprechen.',
        abstract: 'Summe von Datenbankeinträgen.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/dsum-function-53181285-0c4b-4f5a-aaa3-529a322be41b'
          }
        ],
        functionParameter: {
          database: {
            name: 'database',
            detail: 'The range of cells that makes up the list or database.'
          },
          field: {
            name: 'field',
            detail: 'Indicates which column is used in the function.'
          },
          criteria: {
            name: 'criteria',
            detail: 'The range of cells that contains the conditions you specify.'
          }
        }
      },
      DVAR: {
        description: 'Schätzt die Varianz anhand einer Stichprobe ausgewählter Datenbankeinträge.',
        abstract: 'Varianz einer Datenbank-Stichprobe.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/dvar-function-d6747ca9-99c7-48bb-996e-9d7af00f3ed1'
          }
        ],
        functionParameter: {
          database: {
            name: 'database',
            detail: 'The range of cells that makes up the list or database.'
          },
          field: {
            name: 'field',
            detail: 'Indicates which column is used in the function.'
          },
          criteria: {
            name: 'criteria',
            detail: 'The range of cells that contains the conditions you specify.'
          }
        }
      },
      DVARP: {
        description: 'Berechnet die Varianz anhand der Grundgesamtheit ausgewählter Datenbankeinträge.',
        abstract: 'Varianz einer Datenbank-Grundgesamtheit.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/dvarp-function-eb0ba387-9cb7-45c8-81e9-0394912502fc'
          }
        ],
        functionParameter: {
          database: {
            name: 'database',
            detail: 'The range of cells that makes up the list or database.'
          },
          field: {
            name: 'field',
            detail: 'Indicates which column is used in the function.'
          },
          criteria: {
            name: 'criteria',
            detail: 'The range of cells that contains the conditions you specify.'
          }
        }
      },
      ASC: {
        description: 'Konvertiert Doppelbyte-Zeichen in Einzelbyte-Zeichen.',
        abstract: 'ASC.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/asc-function-0b6abf1c-c663-4004-a964-ebc00b723266'
          }
        ],
        functionParameter: {
          text: {
            name: 'text',
            detail: 'The text or a reference to a cell that contains the text you want to change. If text does not contain any full-width letters, text is not changed.'
          }
        }
      },
      ARRAYTOTEXT: {
        description: 'Gibt ein Array von Textwerten aus jedem angegebenen Bereich zurück.',
        abstract: 'Array in Text.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/arraytotext-function-9cdcad46-2fa5-4c6b-ac92-14e7bc862b8b'
          }
        ],
        functionParameter: {
          array: {
            name: 'array',
            detail: 'The array to return as text.'
          },
          format: {
            name: 'format',
            detail: 'The format of the returned data. It can be one of two values: \n0 Default. Concise format that is easy to read. \n1 Strict format that includes escape characters and row delimiters. Generates a string that can be parsed when entered into the formula bar. Encapsulates returned strings in quotes except for Booleans, Numbers and Errors.'
          }
        }
      },
      BAHTTEXT: {
        description: 'Wandelt eine Zahl in Text um, mit dem Währungsformat ß (Baht).',
        abstract: 'Baht-Text.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/bahttext-function-5ba4d0b4-abd3-4325-8d22-7a92d59aab9c'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'A number you want to convert to text, or a reference to a cell containing a number, or a formula that evaluates to a number.'
          }
        }
      },
      CHAR: {
        description: 'Gibt das einer Codenummer entsprechende Zeichen zurück.',
        abstract: 'Zeichen aus Code.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/char-function-bbd249c8-b36e-4a91-8017-1c133f9b837a'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'A number between 1 and 255 specifying which character you want. The character is from the character set used by your computer.'
          }
        }
      },
      CLEAN: {
        description: 'Entfernt alle nicht druckbaren Zeichen aus einem Text.',
        abstract: 'Säubern.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/clean-function-26f3d7c5-475f-4a9c-90e5-4b8ba987ba41'
          }
        ],
        functionParameter: {
          text: {
            name: 'text',
            detail: 'Any worksheet information from which you want to remove nonprintable characters.'
          }
        }
      },
      CODE: {
        description: 'Gibt einen numerischen Code für das erste Zeichen einer Zeichenfolge zurück.',
        abstract: 'Code.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/code-function-c32b692b-2ed0-4a04-bdd9-75640144b928'
          }
        ],
        functionParameter: {
          text: {
            name: 'text',
            detail: 'The text for which you want the code of the first character.'
          }
        }
      },
      CONCAT: {
        description: 'Verkettet mehrere Textbereiche und/oder Zeichenfolgen.',
        abstract: 'TEXTKETTE.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/concat-function-9b1a9a3f-94ff-41af-9736-694cbd6b4ca2'
          }
        ],
        functionParameter: {
          text1: {
            name: 'text1',
            detail: 'Text item to be joined. A string, or array of strings, such as a range of cells.'
          },
          text2: {
            name: 'text2',
            detail: 'Additional text items to be joined. There can be a maximum of 253 text arguments for the text items. Each can be a string, or array of strings, such as a range of cells.'
          }
        }
      },
      CONCATENATE: {
        description: 'Verkettet mehrere Zeichenfolgen zu einer.',
        abstract: 'Verketten.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/concatenate-function-8f8ae884-2ca8-4f7a-b093-75d702bea31d'
          }
        ],
        functionParameter: {
          text1: {
            name: 'text1',
            detail: 'The first item to join. The item can be a text value, number, or cell reference.'
          },
          text2: {
            name: 'text2',
            detail: 'Additional text items to join. You can have up to 255 items, up to a total of 8,192 characters.'
          }
        }
      },
      DBCS: {
        description: 'Wandelt Einzelbyte-Zeichen in einer Zeichenfolge in Doppelbyte-Zeichen um.',
        abstract: 'DBCS.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/dbcs-function-a4025e73-63d2-4958-9423-21a24794c9e5'
          }
        ],
        functionParameter: {
          text: {
            name: 'text',
            detail: 'The text or a reference to a cell that contains the text you want to change. If text does not contain any half-width English letters or katakana, text is not changed.'
          }
        }
      },
      DOLLAR: {
        description: 'Wandelt eine Zahl im Währungsformat in Text um.',
        abstract: 'Währungstext.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/dollar-function-a6cd05d9-9740-4ad3-a469-8109d18ff611'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'A number, a reference to a cell containing a number, or a formula that evaluates to a number.'
          },
          decimals: {
            name: 'decimals',
            detail: 'The number of digits to the right of the decimal point. If this is negative, the number is rounded to the left of the decimal point. If you omit decimals, it is assumed to be 2.'
          }
        }
      },
      EXACT: {
        description: 'Prüft, ob zwei Texte gleich sind.',
        abstract: 'IDENTISCH.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/exact-function-d3087698-fc15-4a15-9631-12575cf29926'
          }
        ],
        functionParameter: {
          text1: {
            name: 'text1',
            detail: 'The first text string.'
          },
          text2: {
            name: 'text2',
            detail: 'The second text string.'
          }
        }
      },
      FIND: {
        description: 'Findet eine Zeichenfolge in einer anderen Zeichenfolge (Groß-/Kleinschreibung).',
        abstract: 'FINDEN.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/find-findb-functions-c7912941-af2a-4bdf-a553-d0d89b0a0628'
          }
        ],
        functionParameter: {
          findText: {
            name: 'find_text',
            detail: 'The text you want to find.'
          },
          withinText: {
            name: 'within_text',
            detail: 'The text containing the text you want to find.'
          },
          startNum: {
            name: 'start_num',
            detail: 'Specifies the character at which to start the search. If you omit start_num, it is assumed to be 1.'
          }
        }
      },
      FINDB: {
        description: 'Findet eine Zeichenfolge in einer anderen Zeichenfolge (Byte-basiert).',
        abstract: 'FINDENB.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/find-findb-functions-c7912941-af2a-4bdf-a553-d0d89b0a0628'
          }
        ],
        functionParameter: {
          findText: {
            name: 'find_text',
            detail: 'The text you want to find.'
          },
          withinText: {
            name: 'within_text',
            detail: 'The text containing the text you want to find.'
          },
          startNum: {
            name: 'start_num',
            detail: 'Specifies the character at which to start the search. If you omit start_num, it is assumed to be 1.'
          }
        }
      },
      FIXED: {
        description: 'Formatiert eine Zahl als Text mit fester Anzahl Dezimalstellen.',
        abstract: 'FEST.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/fixed-function-ffd5723c-324c-45e9-8b96-e41be2a8274a'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The number you want to round and convert to text.'
          },
          decimals: {
            name: 'decimals',
            detail: 'The number of digits to the right of the decimal point. If this is negative, the number is rounded to the left of the decimal point. If you omit decimals, it is assumed to be 2.'
          },
          noCommas: {
            name: 'no_commas',
            detail: 'A logical value that, if TRUE, prevents FIXED from including commas in the returned text.'
          }
        }
      },
      LEFT: {
        description: 'Gibt die linken Zeichen einer Zeichenfolge zurück.',
        abstract: 'LINKS.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/left-leftb-functions-9203d2d2-7960-479b-84c6-1ea52b99640c'
          }
        ],
        functionParameter: {
          text: {
            name: 'text',
            detail: 'The text string containing the characters you want to extract.'
          },
          numChars: {
            name: 'num_chars',
            detail: 'Specifies the number of characters you want LEFT to extract.'
          }
        }
      },
      LEFTB: {
        description: 'Gibt die linken Zeichen einer Zeichenfolge zurück (Byte-basiert).',
        abstract: 'LINKSB.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/left-leftb-functions-9203d2d2-7960-479b-84c6-1ea52b99640c'
          }
        ],
        functionParameter: {
          text: {
            name: 'text',
            detail: 'The text string containing the characters you want to extract.'
          },
          numBytes: {
            name: 'num_bytes',
            detail: 'Specifies the number of characters you want LEFTB to extract, based on bytes.'
          }
        }
      },
      LEN: {
        description: 'Gibt die Anzahl der Zeichen einer Zeichenfolge zurück.',
        abstract: 'LÄNGE.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/len-lenb-functions-29236f94-cedc-429d-affd-b5e33d2c67cb'
          }
        ],
        functionParameter: {
          text: {
            name: 'text',
            detail: 'The text whose length you want to find. Spaces count as characters.'
          }
        }
      },
      LENB: {
        description: 'Gibt die Anzahl der Bytes zurück, die zur Darstellung der Zeichen verwendet werden.',
        abstract: 'LÄNGEB.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/len-lenb-functions-29236f94-cedc-429d-affd-b5e33d2c67cb'
          }
        ],
        functionParameter: {
          text: {
            name: 'text',
            detail: 'The text whose length you want to find. Spaces count as characters.'
          }
        }
      },
      LOWER: {
        description: 'Wandelt einen Text in Kleinbuchstaben um.',
        abstract: 'KLEIN.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/lower-function-3f21df02-a80c-44b2-afaf-81358f9fdeb4'
          }
        ],
        functionParameter: {
          text: {
            name: 'text',
            detail: 'The text you want to convert to lowercase.'
          }
        }
      },
      MID: {
        description: 'Gibt eine bestimmte Anzahl Zeichen aus einem Text zurück, beginnend an einer angegebenen Position.',
        abstract: 'TEIL.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/mid-midb-functions-d5f9e25c-d7d6-472e-b568-4ecb12433028'
          }
        ],
        functionParameter: {
          text: {
            name: 'text',
            detail: 'The text string containing the characters you want to extract.'
          },
          startNum: {
            name: 'start_num',
            detail: 'The position of the first character you want to extract in text.'
          },
          numChars: {
            name: 'num_chars',
            detail: 'Specifies the number of characters you want MID to extract.'
          }
        }
      },
      MIDB: {
        description: 'Gibt eine bestimmte Anzahl Zeichen aus einem Text zurück (Byte-basiert).',
        abstract: 'TEILB.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/mid-midb-functions-d5f9e25c-d7d6-472e-b568-4ecb12433028'
          }
        ],
        functionParameter: {
          text: {
            name: 'text',
            detail: 'The text string containing the characters you want to extract.'
          },
          startNum: {
            name: 'start_num',
            detail: 'The position of the first character you want to extract in text.'
          },
          numBytes: {
            name: 'num_bytes',
            detail: 'Specifies the number of characters you want MIDB to extract, based on bytes.'
          }
        }
      },
      NUMBERSTRING: {
        description: 'Wandelt eine Zahl in eine chinesische Zeichenkette um.',
        abstract: 'Zahl in chinesische Zeichen.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://www.wps.cn/learning/course/detail/id/340.html?chan=pc_kdocs_function'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The value converted to a Chinese string.'
          },
          type: {
            name: 'type',
            detail: 'The type of the returned result. \n1. Chinese lowercase \n2. Chinese uppercase \n3. Reading and Writing Chinese Characters'
          }
        }
      },
      NUMBERVALUE: {
        description: 'Wandelt einen Text in eine Zahl um, abhängig vom Gebietsschema.',
        abstract: 'ZAHLENWERT.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/numbervalue-function-1b05c8cf-2bfa-4437-af70-596c7ea7d879'
          }
        ],
        functionParameter: {
          text: {
            name: 'text',
            detail: 'The text to convert to a number.'
          },
          decimalSeparator: {
            name: 'decimal_separator',
            detail: 'The character used to separate the integer and fractional part of the result.'
          },
          groupSeparator: {
            name: 'group_separator',
            detail: 'The character used to separate groupings of numbers.'
          }
        }
      },
      PHONETIC: {
        description: 'Extrahiert die phonetischen Zeichen aus einer Textfolge.',
        abstract: 'Phonetisch.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/phonetic-function-9a329dac-0c0f-42f8-9a55-639086988554'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'first'
          },
          number2: {
            name: 'number2',
            detail: 'second'
          }
        }
      },
      PROPER: {
        description: 'Schreibt den ersten Buchstaben jedes Wortes groß.',
        abstract: 'GROSS2.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/proper-function-52a5a283-e8b2-49be-8506-b2887b889f94'
          }
        ],
        functionParameter: {
          text: {
            name: 'text',
            detail: 'Text enclosed in quotation marks, a formula that returns text, or a reference to a cell containing the text you want to partially capitalize.'
          }
        }
      },
      REGEXEXTRACT: {
        description: 'Extrahiert übereinstimmende Teilzeichenfolgen anhand eines regulären Ausdrucks.',
        abstract: 'Regex extrahieren.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.google.com/docs/answer/3098244?sjid=5628197291201472796-AP&hl=en'
          }
        ],
        functionParameter: {
          text: {
            name: 'text',
            detail: 'The input text.'
          },
          regularExpression: {
            name: 'regular_expression',
            detail: 'The first part of text that matches this expression will be returned.'
          }
        }
      },
      REGEXMATCH: {
        description: 'Gibt zurück, ob eine Textzeichenfolge einem regulären Ausdruck entspricht.',
        abstract: 'Regex passt.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.google.com/docs/answer/3098292?sjid=5628197291201472796-AP&hl=en'
          }
        ],
        functionParameter: {
          text: {
            name: 'text',
            detail: 'The text to be tested against the regular expression.'
          },
          regularExpression: {
            name: 'regular_expression',
            detail: 'The regular expression to test the text against.'
          }
        }
      },
      REGEXREPLACE: {
        description: 'Ersetzt Teile einer Textzeichenfolge mithilfe eines regulären Ausdrucks.',
        abstract: 'Regex ersetzen.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.google.com/docs/answer/3098245?sjid=5628197291201472796-AP&hl=en'
          }
        ],
        functionParameter: {
          text: {
            name: 'text',
            detail: 'The text, a part of which will be replaced.'
          },
          regularExpression: {
            name: 'regular_expression',
            detail: 'The regular expression. All matching instances in text will be replaced.'
          },
          replacement: {
            name: 'replacement',
            detail: 'The text which will be inserted into the original text.'
          }
        }
      },
      REPLACE: {
        description: 'Ersetzt Zeichen in einem Text.',
        abstract: 'ERSETZEN.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/replace-replaceb-functions-8d799074-2425-4a8a-84bc-82472868878a'
          }
        ],
        functionParameter: {
          oldText: {
            name: 'old_text',
            detail: 'Text in which you want to replace some characters.'
          },
          startNum: {
            name: 'start_num',
            detail: 'The position of the character in old_text that you want to replace with new_text.'
          },
          numChars: {
            name: 'num_chars',
            detail: 'The number of characters in old_text that you want REPLACE to replace with new_text.'
          },
          newText: {
            name: 'new_text',
            detail: 'The text that will replace characters in old_text.'
          }
        }
      },
      REPLACEB: {
        description: 'Ersetzt Zeichen in einem Text (Byte-basiert).',
        abstract: 'ERSETZENB.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/replace-replaceb-functions-8d799074-2425-4a8a-84bc-82472868878a'
          }
        ],
        functionParameter: {
          oldText: {
            name: 'old_text',
            detail: 'Text in which you want to replace some characters.'
          },
          startNum: {
            name: 'start_num',
            detail: 'The position of the character in old_text that you want to replace with new_text.'
          },
          numBytes: {
            name: 'num_bytes',
            detail: 'The number of bytes in old_text that you want REPLACEB to replace with new_text.'
          },
          newText: {
            name: 'new_text',
            detail: 'The text that will replace characters in old_text.'
          }
        }
      },
      REPT: {
        description: 'Wiederholt einen Text in der angegebenen Anzahl.',
        abstract: 'WIEDERHOLEN.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/rept-function-04c4d778-e712-43b4-9c15-d656582bb061'
          }
        ],
        functionParameter: {
          text: {
            name: 'text',
            detail: 'The text you want to repeat.'
          },
          numberTimes: {
            name: 'number_times',
            detail: 'A positive number specifying the number of times to repeat text.'
          }
        }
      },
      RIGHT: {
        description: 'Gibt die rechten Zeichen einer Zeichenfolge zurück.',
        abstract: 'RECHTS.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/right-rightb-functions-240267ee-9afa-4639-a02b-f19e1786cf2f'
          }
        ],
        functionParameter: {
          text: {
            name: 'text',
            detail: 'The text string containing the characters you want to extract.'
          },
          numChars: {
            name: 'num_chars',
            detail: 'Specifies the number of characters you want RIGHT to extract.'
          }
        }
      },
      RIGHTB: {
        description: 'Gibt die rechten Zeichen einer Zeichenfolge zurück (Byte-basiert).',
        abstract: 'RECHTSB.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/right-rightb-functions-240267ee-9afa-4639-a02b-f19e1786cf2f'
          }
        ],
        functionParameter: {
          text: {
            name: 'text',
            detail: 'The text string containing the characters you want to extract.'
          },
          numBytes: {
            name: 'num_bytes',
            detail: 'Specifies the number of characters you want RIGHTB to extract, based on bytes.'
          }
        }
      },
      SEARCH: {
        description: 'Findet eine Zeichenfolge in einer anderen Zeichenfolge (ohne Groß-/Kleinschreibung).',
        abstract: 'SUCHEN.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/search-searchb-functions-9ab04538-0e55-4719-a72e-b6f54513b495'
          }
        ],
        functionParameter: {
          findText: {
            name: 'find_text',
            detail: 'The text you want to find.'
          },
          withinText: {
            name: 'within_text',
            detail: 'The text containing the text you want to find.'
          },
          startNum: {
            name: 'start_num',
            detail: 'Specifies the character at which to start the search. If you omit start_num, it is assumed to be 1.'
          }
        }
      },
      SEARCHB: {
        description: 'Findet eine Zeichenfolge in einer anderen Zeichenfolge (Byte-basiert).',
        abstract: 'SUCHENB.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/search-searchb-functions-9ab04538-0e55-4719-a72e-b6f54513b495'
          }
        ],
        functionParameter: {
          findText: {
            name: 'find_text',
            detail: 'The text you want to find.'
          },
          withinText: {
            name: 'within_text',
            detail: 'The text containing the text you want to find.'
          },
          startNum: {
            name: 'start_num',
            detail: 'Specifies the character at which to start the search. If you omit start_num, it is assumed to be 1.'
          }
        }
      },
      SUBSTITUTE: {
        description: 'Ersetzt einen alten Text durch einen neuen Text.',
        abstract: 'WECHSELN.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/substitute-function-6434944e-a904-4336-a9b0-1e58df3bc332'
          }
        ],
        functionParameter: {
          text: {
            name: 'text',
            detail: 'The text or the reference to a cell containing text for which you want to substitute characters.'
          },
          oldText: {
            name: 'old_text',
            detail: 'The text you want to replace.'
          },
          newText: {
            name: 'new_text',
            detail: 'The text you want to replace old_text with.'
          },
          instanceNum: {
            name: 'instance_num',
            detail: 'Specifies which occurrence of old_text you want to replace with new_text. If you specify instance_num, only that instance of old_text is replaced. Otherwise, every occurrence of old_text in text is changed to new_text.'
          }
        }
      },
      T: {
        description: 'Wandelt seine Argumente in Text um.',
        abstract: 'T.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/t-function-fb83aeec-45e7-4924-af95-53e073541228'
          }
        ],
        functionParameter: {
          value: {
            name: 'value',
            detail: 'The value you want to test.'
          }
        }
      },
      TEXT: {
        description: 'Formatiert eine Zahl und wandelt sie in Text um.',
        abstract: 'TEXT.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/text-function-20d5ac4d-7b94-49fd-bb38-93d29371225c'
          }
        ],
        functionParameter: {
          value: {
            name: 'value',
            detail: 'A numeric value that you want to be converted into text.'
          },
          formatText: {
            name: 'format_text',
            detail: 'A text string that defines the formatting that you want to be applied to the supplied value.'
          }
        }
      },
      TEXTAFTER: {
        description: 'Gibt den Text nach einem angegebenen Trennzeichen zurück.',
        abstract: 'Text nach Trennzeichen.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/textafter-function-c8db2546-5b51-416a-9690-c7e6722e90b4'
          }
        ],
        functionParameter: {
          text: {
            name: 'text',
            detail: 'The text you are searching within. Wildcard characters not allowed.'
          },
          delimiter: {
            name: 'delimiter',
            detail: 'The text that marks the point after which you want to extract.'
          },
          instanceNum: {
            name: 'instance_num',
            detail: 'The instance of the delimiter after which you want to extract the text.'
          },
          matchMode: {
            name: 'match_mode',
            detail: 'Determines whether the text search is case-sensitive. The default is case-sensitive.'
          },
          matchEnd: {
            name: 'match_end',
            detail: 'Treats the end of text as a delimiter. By default, the text is an exact match.'
          },
          ifNotFound: {
            name: 'if_not_found',
            detail: 'Value returned if no match is found. By default, #N/A is returned.'
          }
        }
      },
      TEXTBEFORE: {
        description: 'Gibt den Text vor einem angegebenen Trennzeichen zurück.',
        abstract: 'Text vor Trennzeichen.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/textbefore-function-d099c28a-dba8-448e-ac6c-f086d0fa1b29'
          }
        ],
        functionParameter: {
          text: {
            name: 'text',
            detail: 'The text you are searching within. Wildcard characters not allowed.'
          },
          delimiter: {
            name: 'delimiter',
            detail: 'The text that marks the point after which you want to extract.'
          },
          instanceNum: {
            name: 'instance_num',
            detail: 'The instance of the delimiter after which you want to extract the text.'
          },
          matchMode: {
            name: 'match_mode',
            detail: 'Determines whether the text search is case-sensitive. The default is case-sensitive.'
          },
          matchEnd: {
            name: 'match_end',
            detail: 'Treats the end of text as a delimiter. By default, the text is an exact match.'
          },
          ifNotFound: {
            name: 'if_not_found',
            detail: 'Value returned if no match is found. By default, #N/A is returned.'
          }
        }
      },
      TEXTJOIN: {
        description: 'Verkettet Texte mit einem Trennzeichen.',
        abstract: 'TEXTVERKETTEN.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/textjoin-function-357b449a-ec91-49d0-80c3-0e8fc845691c'
          }
        ],
        functionParameter: {
          delimiter: {
            name: 'delimiter',
            detail: 'A text string, either empty, or one or more characters enclosed by double quotes, or a reference to a valid text string.'
          },
          ignoreEmpty: {
            name: 'ignore_empty',
            detail: 'If TRUE, ignores empty cells.'
          },
          text1: {
            name: 'text1',
            detail: 'Text item to be joined. A text string, or array of strings, such as a range of cells.'
          },
          text2: {
            name: 'text2',
            detail: 'Additional text items to be joined. There can be a maximum of 252 text arguments for the text items, including text1. Each can be a text string, or array of strings, such as a range of cells.'
          }
        }
      },
      TEXTSPLIT: {
        description: 'Teilt Textzeichenfolgen anhand von Spalten- und Zeilentrennzeichen auf.',
        abstract: 'TEXTTEILEN.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/textsplit-function-b1ca414e-4c21-4ca0-b1b7-bdecace8a6e7'
          }
        ],
        functionParameter: {
          text: {
            name: 'text',
            detail: 'The text to split.'
          },
          colDelimiter: {
            name: 'col_delimiter',
            detail: 'The character or string by which to split the column.'
          },
          rowDelimiter: {
            name: 'row_delimiter',
            detail: 'The character or string on which to split the line.'
          },
          ignoreEmpty: {
            name: 'ignore_empty',
            detail: 'Whether to ignore empty cells. The default is FALSE.'
          },
          matchMode: {
            name: 'match_mode',
            detail: 'Searches for a delimiter match in the text. By default, a case-sensitive match is done.'
          },
          padWith: {
            name: 'pad_with',
            detail: 'The value to use for padding. By default, #N/A is used.'
          }
        }
      },
      TRIM: {
        description: 'Entfernt überflüssige Leerzeichen aus einem Text.',
        abstract: 'GLÄTTEN.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/trim-function-410388fa-c5df-49c6-b16c-9e5630b479f9'
          }
        ],
        functionParameter: {
          text: {
            name: 'text',
            detail: 'The text from which you want spaces removed.'
          }
        }
      },
      UNICHAR: {
        description: 'Gibt das einem Unicode-Wert entsprechende Zeichen zurück.',
        abstract: 'UNIZEICHEN.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/unichar-function-ffeb64f5-f131-44c6-b332-5cd72f0659b8'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'Number is the Unicode number that represents the character.'
          }
        }
      },
      UNICODE: {
        description: 'Gibt den Unicode-Wert des ersten Zeichens eines Textes zurück.',
        abstract: 'UNICODE.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/unicode-function-adb74aaa-a2a5-4dde-aff6-966e4e81f16f'
          }
        ],
        functionParameter: {
          text: {
            name: 'text',
            detail: 'Text is the character for which you want the Unicode value.'
          }
        }
      },
      UPPER: {
        description: 'Wandelt einen Text in Großbuchstaben um.',
        abstract: 'GROSS.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/upper-function-c11f29b3-d1a3-4537-8df6-04d0049963d6'
          }
        ],
        functionParameter: {
          text: {
            name: 'text',
            detail: 'The text you want converted to uppercase.'
          }
        }
      },
      VALUE: {
        description: 'Wandelt einen Text in eine Zahl um.',
        abstract: 'WERT.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/value-function-257d0108-07dc-437d-ae1c-bc2d3953d8c2'
          }
        ],
        functionParameter: {
          text: {
            name: 'text',
            detail: 'The text enclosed in quotation marks or a reference to a cell containing the text you want to convert.'
          }
        }
      },
      VALUETOTEXT: {
        description: 'Gibt Text aus einem Wert zurück.',
        abstract: 'Wert in Text.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/valuetotext-function-5fff61a2-301a-4ab2-9ffa-0a5242a08fea'
          }
        ],
        functionParameter: {
          value: {
            name: 'value',
            detail: 'The value to return as text.'
          },
          format: {
            name: 'format',
            detail: 'The format of the returned data. It can be one of two values: \n0 Default. Concise format that is easy to read. \n1 Strict format that includes escape characters and row delimiters. Generates a string that can be parsed when entered into the formula bar. Encapsulates returned strings in quotes except for Booleans, Numbers and Errors.'
          }
        }
      },
      CALL: {
        description: 'Ruft eine Prozedur in einer Dynamic Link Library oder Code-Ressource auf.',
        abstract: 'DLL/Ressource aufrufen.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/call-function-32d58445-e646-4ffd-8d5e-b45077a5e995'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'first'
          },
          number2: {
            name: 'number2',
            detail: 'second'
          }
        }
      },
      EUROCONVERT: {
        description: 'Konvertiert eine Zahl in Euro, von Euro in eine Euro-Mitgliedswährung oder zwischen Euro-Mitgliedswährungen mit Euro als Zwischenwert (Triangulation).',
        abstract: 'Euro-Umrechnung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/euroconvert-function-79c8fd67-c665-450c-bb6c-15fc92f8345c'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'first'
          },
          number2: {
            name: 'number2',
            detail: 'second'
          }
        }
      },
      REGISTER_ID: {
        description: 'Gibt die Registrier-ID der angegebenen DLL oder Code-Ressource zurück, die vorher registriert wurde.',
        abstract: 'Registrier-ID.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/register-id-function-f8f0af0f-fd66-4704-a0f2-87b27b175b50'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'first'
          },
          number2: {
            name: 'number2',
            detail: 'second'
          }
        }
      },
      AND: {
        description: 'Gibt WAHR zurück, wenn alle Argumente WAHR sind.',
        abstract: 'UND: alle Argumente WAHR.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/and-function-5f19b2e8-e1df-4408-897a-ce285a19e9d9'
          }
        ],
        functionParameter: {
          logical1: {
            name: 'logical1',
            detail: 'Die erste zu prüfende Bedingung, die entweder WAHR oder FALSCH ergibt.'
          },
          logical2: {
            name: 'logical2',
            detail: 'Weitere zu prüfende Bedingungen, die entweder WAHR oder FALSCH ergeben, bis zu 255 Bedingungen.'
          }
        }
      },
      BYCOL: {
        description: 'Wendet ein LAMBDA auf jede Spalte an und gibt ein Array der Ergebnisse zurück.',
        abstract: 'LAMBDA auf jede Spalte anwenden.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/bycol-function-58463999-7de5-49ce-8f38-b7f7a2192bfb'
          }
        ],
        functionParameter: {
          array: {
            name: 'array',
            detail: 'An array to be separated by column.'
          },
          lambda: {
            name: 'lambda',
            detail: 'A LAMBDA that takes a column as a single parameter and calculates one result. The LAMBDA takes a single parameter: A column from array.'
          }
        }
      },
      BYROW: {
        description: 'Wendet ein LAMBDA auf jede Zeile an und gibt ein Array der Ergebnisse zurück.',
        abstract: 'LAMBDA auf jede Zeile anwenden.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/byrow-function-2e04c677-78c8-4e6b-8c10-a4602f2602bb'
          }
        ],
        functionParameter: {
          array: {
            name: 'array',
            detail: 'An array to be separated by row.'
          },
          lambda: {
            name: 'lambda',
            detail: 'A LAMBDA that takes a row as a single parameter and calculates one result. The LAMBDA takes a single parameter: A row from array.'
          }
        }
      },
      FALSE: {
        description: 'Gibt den Wahrheitswert FALSCH zurück.',
        abstract: 'FALSCH.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/false-function-2d58dfa5-9c03-4259-bf8f-f0ae14346904'
          }
        ],
        functionParameter: {}
      },
      IF: {
        description: 'Gibt einen Wert zurück, wenn eine Bedingung WAHR ist, andernfalls einen anderen Wert.',
        abstract: 'WENN-Bedingung.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/if-function-69aed7c9-4e8a-4755-a9bc-aa8bbff73be2'
          }
        ],
        functionParameter: {
          logicalTest: {
            name: 'logical_test',
            detail: 'Die zu prüfende Bedingung.'
          },
          valueIfTrue: {
            name: 'value_if_true',
            detail: 'The value that you want returned if the result of logical_test is TRUE.'
          },
          valueIfFalse: {
            name: 'value_if_false',
            detail: 'The value that you want returned if the result of logical_test is FALSE.'
          }
        }
      },
      IFERROR: {
        description: 'Gibt einen angegebenen Wert zurück, wenn eine Formel einen Fehler liefert; andernfalls das Formel-Ergebnis.',
        abstract: 'WENNFEHLER.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/iferror-function-c526fd07-caeb-47b8-8bb6-63f3e417f611'
          }
        ],
        functionParameter: {
          value: {
            name: 'value',
            detail: 'Der zu prüfende Wert auf einen Fehler.'
          },
          valueIfError: {
            name: 'value_if_error',
            detail: 'The value to return if the formula evaluates to an error. The following error types are evaluated: #N/A, #VALUE!, #REF!, #DIV/0!, #NUM!, #NAME?, or #NULL!.'
          }
        }
      },
      IFNA: {
        description: 'Gibt den angegebenen Wert zurück, wenn der Ausdruck #NV ergibt; andernfalls das Ergebnis des Ausdrucks.',
        abstract: 'WENNNV.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/ifna-function-6626c961-a569-42fc-a49d-79b4951fd461'
          }
        ],
        functionParameter: {
          value: {
            name: 'value',
            detail: 'The argument that is checked for the #N/A error value.'
          },
          valueIfNa: {
            name: 'value_if_na',
            detail: 'The value to return if the formula evaluates to the #N/A error value.'
          }
        }
      },
      IFS: {
        description: 'Prüft eine oder mehrere Bedingungen und gibt den zur ersten WAHREN Bedingung gehörenden Wert zurück.',
        abstract: 'WENNS: mehrere Bedingungen.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/ifs-function-36329a26-37b2-467c-972b-4a39bd951d45'
          }
        ],
        functionParameter: {
          logicalTest1: {
            name: 'logical_test1',
            detail: 'Condition that evaluates to TRUE or FALSE.'
          },
          valueIfTrue1: {
            name: 'value_if_true1',
            detail: 'Result to be returned if logical_test1 evaluates to TRUE. Can be empty.'
          },
          logicalTest2: {
            name: 'logical_test2',
            detail: 'Condition that evaluates to TRUE or FALSE.'
          },
          valueIfTrue2: {
            name: 'value_if_true2',
            detail: 'Result to be returned if logical_testN evaluates to TRUE. Each value_if_trueN corresponds with a condition logical_testN. Can be empty.'
          }
        }
      },
      LAMBDA: {
        description: 'Mit LAMBDA erstellen Sie eigene, wiederverwendbare Funktionen und rufen sie über einen benutzerfreundlichen Namen auf.',
        abstract: 'Benutzerdefinierte LAMBDA-Funktion.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/lambda-function-bd212d27-1cd1-4321-a34a-ccbf254b8b67'
          }
        ],
        functionParameter: {
          parameter: {
            name: 'parameter',
            detail: 'A value that you want to pass to the function, such as a cell reference, string or number. You can enter up to 253 parameters. This argument is optional.'
          },
          calculation: {
            name: 'calculation',
            detail: 'The formula you want to execute and return as the result of the function. It must be the last argument and it must return a result. This argument is required.'
          }
        }
      },
      MAKEARRAY: {
        description: 'Gibt ein berechnetes Array mit angegebener Größe zurück, indem ein LAMBDA angewendet wird.',
        abstract: 'Array per LAMBDA erzeugen.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/makearray-function-b80da5ad-b338-4149-a523-5b221da09097'
          }
        ],
        functionParameter: {
          number1: {
            name: 'rows',
            detail: 'The number of rows in the array. Must be greater than zero.'
          },
          number2: {
            name: 'cols',
            detail: 'The number of columns in the array. Must be greater than zero.'
          },
          value3: {
            name: 'lambda',
            detail: 'A LAMBDA that is called to create the array. The LAMBDA takes two parameters: row (The row index of the array), col (The column index of the array).'
          }
        }
      },
      MAP: {
        description: 'Gibt ein Array zurück, das durch Anwenden eines LAMBDA auf jeden Wert eines oder mehrerer Arrays erstellt wird.',
        abstract: 'LAMBDA auf jedes Element abbilden.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/map-function-48006093-f97c-47c1-bfcc-749263bb1f01'
          }
        ],
        functionParameter: {
          array1: {
            name: 'array1',
            detail: 'An array1 to be mapped.'
          },
          array2: {
            name: 'array2',
            detail: 'An array2 to be mapped.'
          },
          lambda: {
            name: 'lambda',
            detail: 'A LAMBDA which must be the last argument and which must have either a parameter for each array passed.'
          }
        }
      },
      NOT: {
        description: 'Kehrt die Logik des Arguments um.',
        abstract: 'NICHT.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/not-function-9cfc6011-a054-40c7-a140-cd4ba2d87d77'
          }
        ],
        functionParameter: {
          logical: {
            name: 'logical',
            detail: 'The condition that you want to reverse the logic for, which can evaluate to either TRUE or FALSE.'
          }
        }
      },
      OR: {
        description: 'Gibt WAHR zurück, wenn mindestens ein Argument WAHR ist.',
        abstract: 'ODER.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/or-function-7d17ad14-8700-4281-b308-00b131e22af0'
          }
        ],
        functionParameter: {
          logical1: {
            name: 'logical1',
            detail: 'Die erste zu prüfende Bedingung, die entweder WAHR oder FALSCH ergibt.'
          },
          logical2: {
            name: 'logical2',
            detail: 'Weitere zu prüfende Bedingungen, die entweder WAHR oder FALSCH ergeben, bis zu 255 Bedingungen.'
          }
        }
      },
      REDUCE: {
        description: 'Reduziert ein Array auf einen aufsummierten Wert, indem ein LAMBDA auf jeden Wert angewendet wird.',
        abstract: 'Array reduzieren.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/reduce-function-42e39910-b345-45f3-84b8-0642b568b7cb'
          }
        ],
        functionParameter: {
          initialValue: {
            name: 'initial_value',
            detail: 'Sets the starting value for the accumulator.'
          },
          array: {
            name: 'array',
            detail: 'An array to be reduced.'
          },
          lambda: {
            name: 'lambda',
            detail: 'A LAMBDA that is called to reduce the array. The LAMBDA takes three parameters: 1.The value totaled up and returned as the final result. 2.The current value from the array. 3.The calculation applied to each element in the array.'
          }
        }
      },
      SCAN: {
        description: 'Durchläuft ein Array, indem ein LAMBDA auf jeden Wert angewendet wird, und gibt ein Array mit allen Zwischenwerten zurück.',
        abstract: 'Array durchlaufen (LAMBDA).',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/scan-function-d58dfd11-9969-4439-b2dc-e7062724de29'
          }
        ],
        functionParameter: {
          initialValue: {
            name: 'initial_value',
            detail: 'Sets the starting value for the accumulator.'
          },
          array: {
            name: 'array',
            detail: 'An array to be scanned.'
          },
          lambda: {
            name: 'lambda',
            detail: 'A LAMBDA that is called to scanned the array. The LAMBDA takes three parameters: 1.The value totaled up and returned as the final result. 2.The current value from the array. 3.The calculation applied to each element in the array.'
          }
        }
      },
      SWITCH: {
        description: 'Wertet einen Ausdruck anhand einer Werteliste aus und gibt das zum ersten passenden Wert gehörende Ergebnis zurück.',
        abstract: 'ERSTERWERT (SWITCH).',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/switch-function-47ab33c0-28ce-4530-8a45-d532ec4aa25e'
          }
        ],
        functionParameter: {
          expression: {
            name: 'expression',
            detail: 'Expression is the value (such as a number, date or some text) that will be compared against value1…value126.'
          },
          value1: {
            name: 'value1',
            detail: 'ValueN is a value that will be compared against expression.'
          },
          result1: {
            name: 'result1',
            detail: 'ResultN is the value to be returned when the corresponding valueN argument matches expression. ResultN and must be supplied for each corresponding valueN argument.'
          },
          defaultOrValue2: {
            name: 'default_or_value2',
            detail: 'Default is the value to return in case no matches are found in the valueN expressions. The Default argument is identified by having no corresponding resultN expression (see examples). Default must be the final argument in the function.'
          },
          result2: {
            name: 'result2',
            detail: 'ResultN is the value to be returned when the corresponding valueN argument matches expression. ResultN and must be supplied for each corresponding valueN argument.'
          }
        }
      },
      TRUE: {
        description: 'Gibt den Wahrheitswert WAHR zurück.',
        abstract: 'WAHR.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/true-function-7652c6e3-8987-48d0-97cd-ef223246b3fb'
          }
        ],
        functionParameter: {}
      },
      XOR: {
        description: 'Gibt WAHR zurück, wenn eine ungerade Anzahl der Argumente WAHR ist.',
        abstract: 'Exklusives ODER.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/xor-function-1548d4c2-5e47-4f77-9a92-0533bba14f37'
          }
        ],
        functionParameter: {
          logical1: {
            name: 'logical1',
            detail: 'Die erste zu prüfende Bedingung, die entweder WAHR oder FALSCH ergibt.'
          },
          logical2: {
            name: 'logical2',
            detail: 'Weitere zu prüfende Bedingungen, die entweder WAHR oder FALSCH ergeben, bis zu 255 Bedingungen.'
          }
        }
      },
      CELL: {
        description: 'Gibt Informationen zur Formatierung, dem Ort oder dem Inhalt einer Zelle zurück.',
        abstract: 'Zellinformationen.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/cell-function-51bd39a5-f338-4dbe-a33f-955d67c2b2cf'
          }
        ],
        functionParameter: {
          infoType: {
            name: 'info_type',
            detail: 'A text value that specifies what type of cell information you want to return.'
          },
          reference: {
            name: 'reference',
            detail: 'The cell that you want information about.'
          }
        }
      },
      ERROR_TYPE: {
        description: 'Gibt eine Zahl zurück, die einer Fehlerart entspricht.',
        abstract: 'Fehlertyp.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/error-type-function-10958677-7c8d-44f7-ae77-b9a9ee6eefaa'
          }
        ],
        functionParameter: {
          errorVal: {
            name: 'error_val',
            detail: 'The error value whose identifying number you want to find.'
          }
        }
      },
      INFO: {
        description: 'Gibt Informationen zur aktuellen Betriebssystem-Umgebung zurück.',
        abstract: 'Systeminformationen.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/info-function-725f259a-0e4b-49b3-8b52-58815c69acae'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'first'
          },
          number2: {
            name: 'number2',
            detail: 'second'
          }
        }
      },
      ISBETWEEN: {
        description: 'Prüft, ob ein bereitgestellter Zahlenwert zwischen zwei anderen Zahlen (einschließlich oder ausschließlich) liegt.',
        abstract: 'Liegt zwischen?',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.google.com/docs/answer/10538337?hl=en&sjid=7730820672019533290-AP'
          }
        ],
        functionParameter: {
          valueToCompare: {
            name: 'value_to_compare',
            detail: 'The value to test as being between `lower_value` and `upper_value`.'
          },
          lowerValue: {
            name: 'lower_value',
            detail: 'The lower boundary of the range of values that `value_to_compare` can fall within.'
          },
          upperValue: {
            name: 'upper_value',
            detail: 'The upper boundary of the range of values that `value_to_compare` can fall within.'
          },
          lowerValueIsInclusive: {
            name: 'lower_value_is_inclusive',
            detail: 'Whether the range of values includes the `lower_value`. By default this is TRUE.'
          },
          upperValueIsInclusive: {
            name: 'upper_value_is_inclusive',
            detail: 'Whether the range of values includes the `upper_value`. By default this is TRUE.'
          }
        }
      },
      ISBLANK: {
        description: 'Gibt WAHR zurück, wenn der Wert leer ist.',
        abstract: 'Ist leer?',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/is-functions-0f2d7971-6019-40a0-a171-f2d869135665'
          }
        ],
        functionParameter: {
          value: {
            name: 'value',
            detail: 'The value that you want tested. The value argument can be a blank (empty cell), error, logical value, text, number, or reference value, or a name referring to any of these.'
          }
        }
      },
      ISDATE: {
        description: 'Gibt zurück, ob ein Wert ein Datum ist.',
        abstract: 'Ist Datum?',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.google.com/docs/answer/9061381?hl=en&sjid=2155433538747546473-AP'
          }
        ],
        functionParameter: {
          value: {
            name: 'value',
            detail: 'The value to be verified as a date.'
          }
        }
      },
      ISEMAIL: {
        description: 'Gibt zurück, ob ein Wert eine gültige E-Mail-Adresse ist.',
        abstract: 'Ist E-Mail?',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.google.com/docs/answer/3256503?hl=en&sjid=2155433538747546473-AP'
          }
        ],
        functionParameter: {
          value: {
            name: 'value',
            detail: 'The value to be verified as an email address.'
          }
        }
      },
      ISERR: {
        description: 'Gibt WAHR zurück, wenn der Wert ein Fehlerwert außer #NV ist.',
        abstract: 'Ist Fehler (außer #NV)?',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/is-functions-0f2d7971-6019-40a0-a171-f2d869135665'
          }
        ],
        functionParameter: {
          value: {
            name: 'value',
            detail: 'The value that you want tested. The value argument can be a blank (empty cell), error, logical value, text, number, or reference value, or a name referring to any of these.'
          }
        }
      },
      ISERROR: {
        description: 'Gibt WAHR zurück, wenn der Wert ein beliebiger Fehlerwert ist.',
        abstract: 'Ist Fehler?',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/is-functions-0f2d7971-6019-40a0-a171-f2d869135665'
          }
        ],
        functionParameter: {
          value: {
            name: 'value',
            detail: 'The value that you want tested. The value argument can be a blank (empty cell), error, logical value, text, number, or reference value, or a name referring to any of these.'
          }
        }
      },
      ISEVEN: {
        description: 'Gibt WAHR zurück, wenn die Zahl gerade ist.',
        abstract: 'Ist gerade?',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/iseven-function-aa15929a-d77b-4fbb-92f4-2f479af55356'
          }
        ],
        functionParameter: {
          value: {
            name: 'value',
            detail: 'The value to test. If number is not an integer, it is truncated.'
          }
        }
      },
      ISFORMULA: {
        description: 'Gibt WAHR zurück, wenn ein Verweis auf eine Zelle vorliegt, die eine Formel enthält.',
        abstract: 'Ist Formel?',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/isformula-function-e4d1355f-7121-4ef2-801e-3839bfd6b1e5'
          }
        ],
        functionParameter: {
          reference: {
            name: 'reference',
            detail: 'Reference is a reference to the cell you want to test.'
          }
        }
      },
      ISLOGICAL: {
        description: 'Gibt WAHR zurück, wenn der Wert ein Wahrheitswert ist.',
        abstract: 'Ist Wahrheitswert?',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/is-functions-0f2d7971-6019-40a0-a171-f2d869135665'
          }
        ],
        functionParameter: {
          value: {
            name: 'value',
            detail: 'The value that you want tested. The value argument can be a blank (empty cell), error, logical value, text, number, or reference value, or a name referring to any of these.'
          }
        }
      },
      ISNA: {
        description: 'Gibt WAHR zurück, wenn der Wert der Fehlerwert #NV ist.',
        abstract: 'Ist #NV?',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/is-functions-0f2d7971-6019-40a0-a171-f2d869135665'
          }
        ],
        functionParameter: {
          value: {
            name: 'value',
            detail: 'The value that you want tested. The value argument can be a blank (empty cell), error, logical value, text, number, or reference value, or a name referring to any of these.'
          }
        }
      },
      ISNONTEXT: {
        description: 'Gibt WAHR zurück, wenn der Wert kein Text ist.',
        abstract: 'Ist kein Text?',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/is-functions-0f2d7971-6019-40a0-a171-f2d869135665'
          }
        ],
        functionParameter: {
          value: {
            name: 'value',
            detail: 'The value that you want tested. The value argument can be a blank (empty cell), error, logical value, text, number, or reference value, or a name referring to any of these.'
          }
        }
      },
      ISNUMBER: {
        description: 'Gibt WAHR zurück, wenn der Wert eine Zahl ist.',
        abstract: 'Ist Zahl?',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/is-functions-0f2d7971-6019-40a0-a171-f2d869135665'
          }
        ],
        functionParameter: {
          value: {
            name: 'value',
            detail: 'The value that you want tested. The value argument can be a blank (empty cell), error, logical value, text, number, or reference value, or a name referring to any of these.'
          }
        }
      },
      ISODD: {
        description: 'Gibt WAHR zurück, wenn die Zahl ungerade ist.',
        abstract: 'Ist ungerade?',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/isodd-function-1208a56d-4f10-4f44-a5fc-648cafd6c07a'
          }
        ],
        functionParameter: {
          value: {
            name: 'value',
            detail: 'The value to test. If number is not an integer, it is truncated.'
          }
        }
      },
      ISOMITTED: {
        description: 'Prüft, ob ein Wert in einem LAMBDA ausgelassen wurde, und gibt WAHR oder FALSCH zurück.',
        abstract: 'Ist ausgelassen?',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/isomitted-function-831d6fbc-0f07-40c4-9c5b-9c73fd1d60c1'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'first'
          },
          number2: {
            name: 'number2',
            detail: 'second'
          }
        }
      },
      ISREF: {
        description: 'Gibt WAHR zurück, wenn der Wert ein Bezug ist.',
        abstract: 'Ist Bezug?',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/is-functions-0f2d7971-6019-40a0-a171-f2d869135665'
          }
        ],
        functionParameter: {
          value: {
            name: 'value',
            detail: 'The value that you want tested. The value argument can be a blank (empty cell), error, logical value, text, number, or reference value, or a name referring to any of these.'
          }
        }
      },
      ISTEXT: {
        description: 'Gibt WAHR zurück, wenn der Wert Text ist.',
        abstract: 'Ist Text?',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/is-functions-0f2d7971-6019-40a0-a171-f2d869135665'
          }
        ],
        functionParameter: {
          value: {
            name: 'value',
            detail: 'The value that you want tested. The value argument can be a blank (empty cell), error, logical value, text, number, or reference value, or a name referring to any of these.'
          }
        }
      },
      ISURL: {
        description: 'Gibt zurück, ob ein Wert eine gültige URL ist.',
        abstract: 'Ist URL?',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.google.com/docs/answer/3256501?hl=en&sjid=7312884847858065932-AP'
          }
        ],
        functionParameter: {
          value: {
            name: 'value',
            detail: 'The value to be verified as a URL.'
          }
        }
      },
      N: {
        description: 'Gibt einen Wert zurück, der in eine Zahl umgewandelt wurde.',
        abstract: 'In Zahl umwandeln.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/n-function-a624cad1-3635-4208-b54a-29733d1278c9'
          }
        ],
        functionParameter: {
          value: {
            name: 'value',
            detail: 'The value you want converted.'
          }
        }
      },
      NA: {
        description: 'Gibt den Fehlerwert #NV zurück.',
        abstract: 'Gibt #NV zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/na-function-5469c2d1-a90c-4fb5-9bbc-64bd9bb6b47c'
          }
        ],
        functionParameter: {}
      },
      SHEET: {
        description: 'Gibt die Blattnummer des referenzierten Tabellenblatts zurück.',
        abstract: 'Blattnummer.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/sheet-function-44718b6f-8b87-47a1-a9d6-b701c06cff24'
          }
        ],
        functionParameter: {
          value: {
            name: 'value',
            detail: 'Value is the name of a sheet or a reference for which you want the sheet number. If value is omitted, SHEET returns the number of the sheet that contains the function.'
          }
        }
      },
      SHEETS: {
        description: 'Gibt die Anzahl der Blätter in einem Bezug zurück.',
        abstract: 'Anzahl Blätter.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/sheets-function-770515eb-e1e8-45ce-8066-b557e5e4b80b'
          }
        ],
        functionParameter: {}
      },
      TYPE: {
        description: 'Gibt eine Zahl zurück, die den Datentyp eines Wertes angibt.',
        abstract: 'Datentyp.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/type-function-45b4e688-4bc3-48b3-a105-ffa892995899'
          }
        ],
        functionParameter: {
          value: {
            name: 'value',
            detail: 'Can be any value, such as a number, text, logical value, and so on.'
          }
        }
      },
      BESSELI: {
        description: 'Gibt die modifizierte Bessel-Funktion In(x) zurück.',
        abstract: 'Modifizierte Bessel-Funktion In(x).',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/besseli-function-8d33855c-9a8d-444b-98e0-852267b1c0df'
          }
        ],
        functionParameter: {
          x: {
            name: 'X',
            detail: 'The value at which to evaluate the function.'
          },
          n: {
            name: 'N',
            detail: 'The order of the Bessel function. If n is not an integer, it is truncated.'
          }
        }
      },
      BESSELJ: {
        description: 'Gibt die Bessel-Funktion Jn(x) zurück.',
        abstract: 'Bessel-Funktion Jn(x).',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/besselj-function-839cb181-48de-408b-9d80-bd02982d94f7'
          }
        ],
        functionParameter: {
          x: {
            name: 'X',
            detail: 'The value at which to evaluate the function.'
          },
          n: {
            name: 'N',
            detail: 'The order of the Bessel function. If n is not an integer, it is truncated.'
          }
        }
      },
      BESSELK: {
        description: 'Gibt die modifizierte Bessel-Funktion Kn(x) zurück.',
        abstract: 'Modifizierte Bessel-Funktion Kn(x).',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/besselk-function-606d11bc-06d3-4d53-9ecb-2803e2b90b70'
          }
        ],
        functionParameter: {
          x: {
            name: 'X',
            detail: 'The value at which to evaluate the function.'
          },
          n: {
            name: 'N',
            detail: 'The order of the Bessel function. If n is not an integer, it is truncated.'
          }
        }
      },
      BESSELY: {
        description: 'Gibt die Bessel-Funktion Yn(x) zurück.',
        abstract: 'Bessel-Funktion Yn(x).',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/bessely-function-f3a356b3-da89-42c3-8974-2da54d6353a2'
          }
        ],
        functionParameter: {
          x: {
            name: 'X',
            detail: 'The value at which to evaluate the function.'
          },
          n: {
            name: 'N',
            detail: 'The order of the Bessel function. If n is not an integer, it is truncated.'
          }
        }
      },
      BIN2DEC: {
        description: 'Wandelt eine binäre Zahl in eine dezimale Zahl um.',
        abstract: 'Binär in Dezimal umwandeln.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/bin2dec-function-63905b57-b3a0-453d-99f4-647bb519cd6c'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The binary number you want to convert.'
          }
        }
      },
      BIN2HEX: {
        description: 'Wandelt eine binäre Zahl in eine hexadezimale Zahl um.',
        abstract: 'Binär in Hexadezimal umwandeln.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/bin2hex-function-0375e507-f5e5-4077-9af8-28d84f9f41cc'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The binary number you want to convert.'
          },
          places: {
            name: 'places',
            detail: 'The number of characters to use.'
          }
        }
      },
      BIN2OCT: {
        description: 'Wandelt eine binäre Zahl in eine oktale Zahl um.',
        abstract: 'Binär in Oktal umwandeln.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/bin2oct-function-0a4e01ba-ac8d-4158-9b29-16c25c4c23fd'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The binary number you want to convert.'
          },
          places: {
            name: 'places',
            detail: 'The number of characters to use.'
          }
        }
      },
      BITAND: {
        description: 'Gibt ein bitweises UND zweier Zahlen zurück.',
        abstract: 'Bitweises UND.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/bitand-function-8a2be3d7-91c3-4b48-9517-64548008563a'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'Must be in decimal form and greater than or equal to 0.'
          },
          number2: {
            name: 'number2',
            detail: 'Must be in decimal form and greater than or equal to 0.'
          }
        }
      },
      BITLSHIFT: {
        description: 'Gibt eine um die in shift_amount angegebene Anzahl Bits nach links verschobene Zahl zurück.',
        abstract: 'Bits nach links verschieben.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/bitlshift-function-c55bb27e-cacd-4c7c-b258-d80861a03c9c'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'Number must be an integer greater than or equal to 0.'
          },
          shiftAmount: {
            name: 'shift_amount',
            detail: 'Shift_amount must be an integer.'
          }
        }
      },
      BITOR: {
        description: 'Gibt ein bitweises ODER zweier Zahlen zurück.',
        abstract: 'Bitweises ODER.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/bitor-function-f6ead5c8-5b98-4c9e-9053-8ad5234919b2'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'Must be in decimal form and greater than or equal to 0.'
          },
          number2: {
            name: 'number2',
            detail: 'Must be in decimal form and greater than or equal to 0.'
          }
        }
      },
      BITRSHIFT: {
        description: 'Gibt eine um die in shift_amount angegebene Anzahl Bits nach rechts verschobene Zahl zurück.',
        abstract: 'Bits nach rechts verschieben.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/bitrshift-function-274d6996-f42c-4743-abdb-4ff95351222c'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'Number must be an integer greater than or equal to 0.'
          },
          shiftAmount: {
            name: 'shift_amount',
            detail: 'Shift_amount must be an integer.'
          }
        }
      },
      BITXOR: {
        description: 'Gibt ein bitweises Exklusiv-ODER zweier Zahlen zurück.',
        abstract: 'Bitweises XOR.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/bitxor-function-c81306a1-03f9-4e89-85ac-b86c3cba10e4'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'Must be in decimal form and greater than or equal to 0.'
          },
          number2: {
            name: 'number2',
            detail: 'Must be in decimal form and greater than or equal to 0.'
          }
        }
      },
      COMPLEX: {
        description: 'Wandelt Real- und Imaginärteil in eine komplexe Zahl um.',
        abstract: 'Bildet eine komplexe Zahl.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/complex-function-f0b8f3a9-51cc-4d6d-86fb-3a9362fa4128'
          }
        ],
        functionParameter: {
          realNum: {
            name: 'real_num',
            detail: 'The real coefficient of the complex number.'
          },
          iNum: {
            name: 'i_num',
            detail: 'The imaginary coefficient of the complex number.'
          },
          suffix: {
            name: 'suffix',
            detail: 'The suffix for the imaginary component of the complex number. If omitted, suffix is assumed to be "i".'
          }
        }
      },
      CONVERT: {
        description: 'Wandelt eine Zahl in ein anderes Maßsystem um.',
        abstract: 'Wandelt eine Zahl in andere Einheit um.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/convert-function-d785bef1-808e-4aac-bdcd-666c810f9af2'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'Is the value in from_units to convert.'
          },
          fromUnit: {
            name: 'from_unit',
            detail: 'Is the units for number.'
          },
          toUnit: {
            name: 'to_unit',
            detail: 'Is the units for the result.'
          }
        }
      },
      DEC2BIN: {
        description: 'Wandelt eine dezimale Zahl in eine binäre Zahl um.',
        abstract: 'Dezimal in Binär umwandeln.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/dec2bin-function-0f63dd0e-5d1a-42d8-b511-5bf5c6d43838'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The decimal number you want to convert.'
          },
          places: {
            name: 'places',
            detail: 'The number of characters to use.'
          }
        }
      },
      DEC2HEX: {
        description: 'Wandelt eine dezimale Zahl in eine hexadezimale Zahl um.',
        abstract: 'Dezimal in Hexadezimal umwandeln.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/dec2hex-function-6344ee8b-b6b5-4c6a-a672-f64666704619'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The decimal number you want to convert.'
          },
          places: {
            name: 'places',
            detail: 'The number of characters to use.'
          }
        }
      },
      DEC2OCT: {
        description: 'Wandelt eine dezimale Zahl in eine oktale Zahl um.',
        abstract: 'Dezimal in Oktal umwandeln.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/dec2oct-function-c9d835ca-20b7-40c4-8a9e-d3be351ce00f'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The decimal number you want to convert.'
          },
          places: {
            name: 'places',
            detail: 'The number of characters to use.'
          }
        }
      },
      DELTA: {
        description: 'Prüft, ob zwei Werte gleich sind.',
        abstract: 'Prüft, ob zwei Werte gleich sind.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/delta-function-2f763672-c959-4e07-ac33-fe03220ba432'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'The first number.'
          },
          number2: {
            name: 'number2',
            detail: 'The second number. If omitted, number2 is assumed to be zero.'
          }
        }
      },
      ERF: {
        description: 'Gibt die Fehlerfunktion zurück.',
        abstract: 'Fehlerfunktion.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/erf-function-c53c7e7b-5482-4b6c-883e-56df3c9af349'
          }
        ],
        functionParameter: {
          lowerLimit: {
            name: 'lower_limit',
            detail: 'The lower bound for integrating ERF.'
          },
          upperLimit: {
            name: 'upper_limit',
            detail: 'The upper bound for integrating ERF. If omitted, ERF integrates between zero and lower_limit.'
          }
        }
      },
      ERF_PRECISE: {
        description: 'Gibt die Fehlerfunktion zurück.',
        abstract: 'Fehlerfunktion (präzise).',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/erf-precise-function-9a349593-705c-4278-9a98-e4122831a8e0'
          }
        ],
        functionParameter: {
          x: {
            name: 'x',
            detail: 'The lower bound for integrating ERF.PRECISE.'
          }
        }
      },
      ERFC: {
        description: 'Gibt die komplementäre Fehlerfunktion zurück.',
        abstract: 'Komplementäre Fehlerfunktion.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/erfc-function-736e0318-70ba-4e8b-8d08-461fe68b71b3'
          }
        ],
        functionParameter: {
          x: {
            name: 'x',
            detail: 'The lower bound for integrating ERFC.'
          }
        }
      },
      ERFC_PRECISE: {
        description: 'Gibt die komplementäre Fehlerfunktion zurück, integriert zwischen x und unendlich.',
        abstract: 'Komplementäre Fehlerfunktion (präzise).',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/erfc-precise-function-e90e6bab-f45e-45df-b2ac-cd2eb4d4a273'
          }
        ],
        functionParameter: {
          x: {
            name: 'x',
            detail: 'The lower bound for integrating ERFC.PRECISE.'
          }
        }
      },
      GESTEP: {
        description: 'Prüft, ob eine Zahl größer als ein Schwellenwert ist.',
        abstract: 'Größer als Schwellenwert?',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/gestep-function-f37e7d2a-41da-4129-be95-640883fca9df'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The value to test against step.'
          },
          step: {
            name: 'step',
            detail: 'The threshold value. If you omit a value for step, GESTEP uses zero.'
          }
        }
      },
      HEX2BIN: {
        description: 'Wandelt eine hexadezimale Zahl in eine binäre Zahl um.',
        abstract: 'Hexadezimal in Binär.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/hex2bin-function-a13aafaa-5737-4920-8424-643e581828c1'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The hexadecimal number you want to convert.'
          },
          places: {
            name: 'places',
            detail: 'The number of characters to use.'
          }
        }
      },
      HEX2DEC: {
        description: 'Wandelt eine hexadezimale Zahl in eine dezimale Zahl um.',
        abstract: 'Hexadezimal in Dezimal.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/hex2dec-function-8c8c3155-9f37-45a5-a3ee-ee5379ef106e'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The hexadecimal number you want to convert.'
          }
        }
      },
      HEX2OCT: {
        description: 'Wandelt eine hexadezimale Zahl in eine oktale Zahl um.',
        abstract: 'Hexadezimal in Oktal.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/hex2oct-function-54d52808-5d19-4bd0-8a63-1096a5d11912'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The hexadecimal number you want to convert.'
          },
          places: {
            name: 'places',
            detail: 'The number of characters to use.'
          }
        }
      },
      IMABS: {
        description: 'Gibt den Absolutwert (Modul) einer komplexen Zahl zurück.',
        abstract: 'Absolutwert einer komplexen Zahl.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/imabs-function-b31e73c6-d90c-4062-90bc-8eb351d765a1'
          }
        ],
        functionParameter: {
          inumber: {
            name: 'inumber',
            detail: 'A complex number for which you want the absolute value.'
          }
        }
      },
      IMAGINARY: {
        description: 'Gibt den Imaginärteil einer komplexen Zahl zurück.',
        abstract: 'Imaginärteil.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/imaginary-function-dd5952fd-473d-44d9-95a1-9a17b23e428a'
          }
        ],
        functionParameter: {
          inumber: {
            name: 'inumber',
            detail: 'A complex number for which you want the imaginary coefficient.'
          }
        }
      },
      IMARGUMENT: {
        description: 'Gibt das Argument Theta zurück, einen Winkel in Bogenmaß.',
        abstract: 'Argument einer komplexen Zahl.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/imargument-function-eed37ec1-23b3-4f59-b9f3-d340358a034a'
          }
        ],
        functionParameter: {
          inumber: {
            name: 'inumber',
            detail: 'A complex number for which you want the argument theta.'
          }
        }
      },
      IMCONJUGATE: {
        description: 'Gibt die komplexe Konjugierte einer komplexen Zahl zurück.',
        abstract: 'Komplexe Konjugierte.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/imconjugate-function-2e2fc1ea-f32b-4f9b-9de6-233853bafd42'
          }
        ],
        functionParameter: {
          inumber: {
            name: 'inumber',
            detail: 'A complex number for which you want the conjugate.'
          }
        }
      },
      IMCOS: {
        description: 'Gibt den Kosinus einer komplexen Zahl zurück.',
        abstract: 'Kosinus komplex.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/imcos-function-dad75277-f592-4a6b-ad6c-be93a808a53c'
          }
        ],
        functionParameter: {
          inumber: {
            name: 'inumber',
            detail: 'A complex number for which you want the cosine.'
          }
        }
      },
      IMCOSH: {
        description: 'Gibt den hyperbolischen Kosinus einer komplexen Zahl zurück.',
        abstract: 'Hyperbolischer Kosinus komplex.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/imcosh-function-053e4ddb-4122-458b-be9a-457c405e90ff'
          }
        ],
        functionParameter: {
          inumber: {
            name: 'inumber',
            detail: 'A complex number for which you want the hyperbolic cosine.'
          }
        }
      },
      IMCOT: {
        description: 'Gibt den Kotangens einer komplexen Zahl zurück.',
        abstract: 'Kotangens komplex.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/imcot-function-dc6a3607-d26a-4d06-8b41-8931da36442c'
          }
        ],
        functionParameter: {
          inumber: {
            name: 'inumber',
            detail: 'A complex number for which you want the cotangent.'
          }
        }
      },
      IMCOTH: {
        description: 'Gibt den hyperbolischen Kotangens einer komplexen Zahl zurück.',
        abstract: 'Hyperbolischer Kotangens komplex.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.google.com/docs/answer/9366256?hl=en&sjid=1719420110567985051-AP'
          }
        ],
        functionParameter: {
          inumber: {
            name: 'inumber',
            detail: 'A complex number for which you want the hyperbolic cotangent.'
          }
        }
      },
      IMCSC: {
        description: 'Gibt den Kosekans einer komplexen Zahl zurück.',
        abstract: 'Kosekans komplex.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/imcsc-function-9e158d8f-2ddf-46cd-9b1d-98e29904a323'
          }
        ],
        functionParameter: {
          inumber: {
            name: 'inumber',
            detail: 'A complex number for which you want the cosecant.'
          }
        }
      },
      IMCSCH: {
        description: 'Gibt den hyperbolischen Kosekans einer komplexen Zahl zurück.',
        abstract: 'Hyperbolischer Kosekans komplex.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/imcsch-function-c0ae4f54-5f09-4fef-8da0-dc33ea2c5ca9'
          }
        ],
        functionParameter: {
          inumber: {
            name: 'inumber',
            detail: 'A complex number for which you want the hyperbolic cosecant.'
          }
        }
      },
      IMDIV: {
        description: 'Gibt den Quotienten zweier komplexer Zahlen zurück.',
        abstract: 'Quotient komplex.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/imdiv-function-a505aff7-af8a-4451-8142-77ec3d74d83f'
          }
        ],
        functionParameter: {
          inumber1: {
            name: 'inumber1',
            detail: 'The complex numerator or dividend.'
          },
          inumber2: {
            name: 'inumber2',
            detail: 'The complex denominator or divisor.'
          }
        }
      },
      IMEXP: {
        description: 'Gibt die algebraische Form einer komplexen Zahl zurück, die in exponentieller Form gegeben ist.',
        abstract: 'Exponentialform komplex.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/imexp-function-c6f8da1f-e024-4c0c-b802-a60e7147a95f'
          }
        ],
        functionParameter: {
          inumber: {
            name: 'inumber',
            detail: 'A complex number for which you want the exponential.'
          }
        }
      },
      IMLN: {
        description: 'Gibt den natürlichen Logarithmus einer komplexen Zahl zurück.',
        abstract: 'Natürlicher Logarithmus komplex.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/imln-function-32b98bcf-8b81-437c-a636-6fb3aad509d8'
          }
        ],
        functionParameter: {
          inumber: {
            name: 'inumber',
            detail: 'A complex number for which you want the natural logarithm.'
          }
        }
      },
      IMLOG: {
        description: 'Gibt den Logarithmus zu einer angegebenen Basis einer komplexen Zahl zurück.',
        abstract: 'Logarithmus komplex.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.google.com/docs/answer/9366486?hl=en&sjid=1719420110567985051-AP'
          }
        ],
        functionParameter: {
          inumber: {
            name: 'inumber',
            detail: 'A complex number whose logarithm to a specific base needs to be calculated.'
          },
          base: {
            name: 'base',
            detail: 'The base to use when calculating the logarithm.'
          }
        }
      },
      IMLOG10: {
        description: 'Gibt den dekadischen Logarithmus einer komplexen Zahl zurück.',
        abstract: 'Log10 komplex.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/imlog10-function-58200fca-e2a2-4271-8a98-ccd4360213a5'
          }
        ],
        functionParameter: {
          inumber: {
            name: 'inumber',
            detail: 'A complex number for which you want the common logarithm.'
          }
        }
      },
      IMLOG2: {
        description: 'Gibt den Logarithmus zur Basis 2 einer komplexen Zahl zurück.',
        abstract: 'Log2 komplex.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/imlog2-function-152e13b4-bc79-486c-a243-e6a676878c51'
          }
        ],
        functionParameter: {
          inumber: {
            name: 'inumber',
            detail: 'A complex number for which you want the base-2 logarithm.'
          }
        }
      },
      IMPOWER: {
        description: 'Gibt eine komplexe Zahl potenziert mit einer ganzzahligen Potenz zurück.',
        abstract: 'Potenz komplex.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/impower-function-210fd2f5-f8ff-4c6a-9d60-30e34fbdef39'
          }
        ],
        functionParameter: {
          inumber: {
            name: 'inumber',
            detail: 'A complex number you want to raise to a power.'
          },
          number: {
            name: 'number',
            detail: 'The power to which you want to raise the complex number.'
          }
        }
      },
      IMPRODUCT: {
        description: 'Gibt das Produkt von 2 bis 255 komplexen Zahlen zurück.',
        abstract: 'Produkt komplex.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/improduct-function-2fb8651a-a4f2-444f-975e-8ba7aab3a5ba'
          }
        ],
        functionParameter: {
          inumber1: {
            name: 'inumber1',
            detail: '1 to 255 complex numbers to multiply.'
          },
          inumber2: {
            name: 'inumber2',
            detail: '1 to 255 complex numbers to multiply.'
          }
        }
      },
      IMREAL: {
        description: 'Gibt den Realteil einer komplexen Zahl zurück.',
        abstract: 'Realteil.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/imreal-function-d12bc4c0-25d0-4bb3-a25f-ece1938bf366'
          }
        ],
        functionParameter: {
          inumber: {
            name: 'inumber',
            detail: 'A complex number for which you want the real coefficient.'
          }
        }
      },
      IMSEC: {
        description: 'Gibt den Sekans einer komplexen Zahl zurück.',
        abstract: 'Sekans komplex.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/imsec-function-6df11132-4411-4df4-a3dc-1f17372459e0'
          }
        ],
        functionParameter: {
          inumber: {
            name: 'inumber',
            detail: 'A complex number for which you want the secant.'
          }
        }
      },
      IMSECH: {
        description: 'Gibt den hyperbolischen Sekans einer komplexen Zahl zurück.',
        abstract: 'Hyperbolischer Sekans komplex.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/imsech-function-f250304f-788b-4505-954e-eb01fa50903b'
          }
        ],
        functionParameter: {
          inumber: {
            name: 'inumber',
            detail: 'A complex number for which you want the hyperbolic secant.'
          }
        }
      },
      IMSIN: {
        description: 'Gibt den Sinus einer komplexen Zahl zurück.',
        abstract: 'Sinus komplex.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/imsin-function-1ab02a39-a721-48de-82ef-f52bf37859f6'
          }
        ],
        functionParameter: {
          inumber: {
            name: 'inumber',
            detail: 'A complex number for which you want the sine.'
          }
        }
      },
      IMSINH: {
        description: 'Gibt den hyperbolischen Sinus einer komplexen Zahl zurück.',
        abstract: 'Hyperbolischer Sinus komplex.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/imsinh-function-dfb9ec9e-8783-4985-8c42-b028e9e8da3d'
          }
        ],
        functionParameter: {
          inumber: {
            name: 'inumber',
            detail: 'A complex number for which you want the hyperbolic sine.'
          }
        }
      },
      IMSQRT: {
        description: 'Gibt die Quadratwurzel einer komplexen Zahl zurück.',
        abstract: 'Quadratwurzel komplex.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/imsqrt-function-e1753f80-ba11-4664-a10e-e17368396b70'
          }
        ],
        functionParameter: {
          inumber: {
            name: 'inumber',
            detail: 'A complex number for which you want the square root.'
          }
        }
      },
      IMSUB: {
        description: 'Gibt die Differenz zweier komplexer Zahlen zurück.',
        abstract: 'Differenz komplex.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/imsub-function-2e404b4d-4935-4e85-9f52-cb08b9a45054'
          }
        ],
        functionParameter: {
          inumber1: {
            name: 'inumber1',
            detail: 'inumber1.'
          },
          inumber2: {
            name: 'inumber2',
            detail: 'inumber2.'
          }
        }
      },
      IMSUM: {
        description: 'Gibt die Summe komplexer Zahlen zurück.',
        abstract: 'Summe komplex.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/imsum-function-81542999-5f1c-4da6-9ffe-f1d7aaa9457f'
          }
        ],
        functionParameter: {
          inumber1: {
            name: 'inumber1',
            detail: '1 to 255 complex numbers to add.'
          },
          inumber2: {
            name: 'inumber2',
            detail: '1 to 255 complex numbers to add.'
          }
        }
      },
      IMTAN: {
        description: 'Gibt den Tangens einer komplexen Zahl zurück.',
        abstract: 'Tangens komplex.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/imtan-function-8478f45d-610a-43cf-8544-9fc0b553a132'
          }
        ],
        functionParameter: {
          inumber: {
            name: 'inumber',
            detail: 'A complex number for which you want the tangent.'
          }
        }
      },
      IMTANH: {
        description: 'Gibt den hyperbolischen Tangens einer komplexen Zahl zurück.',
        abstract: 'Hyperbolischer Tangens komplex.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.google.com/docs/answer/9366655?hl=en&sjid=1719420110567985051-AP'
          }
        ],
        functionParameter: {
          inumber: {
            name: 'inumber',
            detail: 'A complex number for which you want the hyperbolic tangent.'
          }
        }
      },
      OCT2BIN: {
        description: 'Wandelt eine oktale Zahl in eine binäre Zahl um.',
        abstract: 'Oktal in Binär.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/oct2bin-function-55383471-3c56-4d27-9522-1a8ec646c589'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The octal number you want to convert.'
          },
          places: {
            name: 'places',
            detail: 'The number of characters to use.'
          }
        }
      },
      OCT2DEC: {
        description: 'Wandelt eine oktale Zahl in eine dezimale Zahl um.',
        abstract: 'Oktal in Dezimal.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/oct2dec-function-87606014-cb98-44b2-8dbb-e48f8ced1554'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The octal number you want to convert.'
          }
        }
      },
      OCT2HEX: {
        description: 'Wandelt eine oktale Zahl in eine hexadezimale Zahl um.',
        abstract: 'Oktal in Hexadezimal.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/oct2hex-function-912175b4-d497-41b4-a029-221f051b858f'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The octal number you want to convert.'
          },
          places: {
            name: 'places',
            detail: 'The number of characters to use.'
          }
        }
      },
      CUBEKPIMEMBER: {
        description: 'Gibt die Eigenschaft eines KPI-Elements zurück und zeigt KPI-Name und Eigenschaft in der Zelle an.',
        abstract: 'Gibt eine KPI-Eigenschaft zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/cubekpimember-function-744608bf-2c62-42cd-b67a-a56109f4b03b'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'first'
          },
          number2: {
            name: 'number2',
            detail: 'second'
          }
        }
      },
      CUBEMEMBER: {
        description: 'Gibt ein Element oder Tupel aus dem Cube zurück.',
        abstract: 'Gibt ein Element oder Tupel aus dem Cube zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/cubemember-function-0f6a15b9-2c18-4819-ae89-e1b5c8b398ad'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'first'
          },
          number2: {
            name: 'number2',
            detail: 'second'
          }
        }
      },
      CUBEMEMBERPROPERTY: {
        description: 'Gibt den Wert einer Element-Eigenschaft aus dem Cube zurück.',
        abstract: 'Gibt den Wert einer Element-Eigenschaft zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/cubememberproperty-function-001e57d6-b35a-49e5-abcd-05ff599e8951'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'first'
          },
          number2: {
            name: 'number2',
            detail: 'second'
          }
        }
      },
      CUBERANKEDMEMBER: {
        description: 'Gibt das n-te oder rangmäßige Element einer Menge zurück.',
        abstract: 'Gibt das rangmäßige Element einer Menge zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/cuberankedmember-function-07efecde-e669-4075-b4bf-6b40df2dc4b3'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'first'
          },
          number2: {
            name: 'number2',
            detail: 'second'
          }
        }
      },
      CUBESET: {
        description: 'Definiert eine berechnete Menge von Elementen oder Tupeln durch Senden eines Mengenausdrucks an den Cube.',
        abstract: 'Definiert eine berechnete Menge.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/cubeset-function-5b2146bd-62d6-4d04-9d8f-670e993ee1d9'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'first'
          },
          number2: {
            name: 'number2',
            detail: 'second'
          }
        }
      },
      CUBESETCOUNT: {
        description: 'Gibt die Anzahl der Elemente in einer Menge zurück.',
        abstract: 'Anzahl der Elemente in einer Menge.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/cubesetcount-function-c4c2a438-c1ff-4061-80fe-982f2d705286'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'first'
          },
          number2: {
            name: 'number2',
            detail: 'second'
          }
        }
      },
      CUBEVALUE: {
        description: 'Gibt einen aggregierten Wert aus dem Cube zurück.',
        abstract: 'Gibt einen aggregierten Wert aus dem Cube zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/cubevalue-function-8733da24-26d1-4e34-9b3a-84a8f00dcbe0'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'first'
          },
          number2: {
            name: 'number2',
            detail: 'second'
          }
        }
      },
      BETADIST: {
        description: 'Gibt die Verteilungsfunktion der Beta-Verteilung zurück.',
        abstract: 'Gibt die Verteilungsfunktion der Beta-Verteilung zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/betadist-function-49f1b9a9-a5da-470f-8077-5f1730b5fd47'
          }
        ],
        functionParameter: {
          x: {
            name: 'x',
            detail: 'The value between A and B at which to evaluate the function.'
          },
          alpha: {
            name: 'alpha',
            detail: 'A parameter of the distribution.'
          },
          beta: {
            name: 'beta',
            detail: 'A parameter of the distribution.'
          },
          A: {
            name: 'A',
            detail: 'A lower bound to the interval of x.'
          },
          B: {
            name: 'B',
            detail: 'An upper bound to the interval of x.'
          }
        }
      },
      BETAINV: {
        description: 'Gibt die Umkehrfunktion der Verteilungsfunktion einer angegebenen Beta-Verteilung zurück.',
        abstract: 'Gibt die Umkehrfunktion der Beta-Verteilung zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/betainv-function-8b914ade-b902-43c1-ac9c-c05c54f10d6c'
          }
        ],
        functionParameter: {
          probability: {
            name: 'probability',
            detail: 'A probability associated with the beta distribution.'
          },
          alpha: {
            name: 'alpha',
            detail: 'A parameter of the distribution.'
          },
          beta: {
            name: 'beta',
            detail: 'A parameter of the distribution.'
          },
          A: {
            name: 'A',
            detail: 'A lower bound to the interval of x.'
          },
          B: {
            name: 'B',
            detail: 'An upper bound to the interval of x.'
          }
        }
      },
      BINOMDIST: {
        description: 'Gibt die Wahrscheinlichkeit der Binomialverteilung zurück.',
        abstract: 'Gibt die Wahrscheinlichkeit der Binomialverteilung zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/binomdist-function-506a663e-c4ca-428d-b9a8-05583d68789c'
          }
        ],
        functionParameter: {
          numberS: {
            name: 'number_s',
            detail: 'The number of successes in trials.'
          },
          trials: {
            name: 'trials',
            detail: 'The number of independent trials.'
          },
          probabilityS: {
            name: 'probability_s',
            detail: 'The probability of success on each trial.'
          },
          cumulative: {
            name: 'cumulative',
            detail: 'A logical value that determines the form of the function. If cumulative is TRUE, BINOMDIST returns the cumulative distribution function; if FALSE, it returns the probability density function.'
          }
        }
      },
      CHIDIST: {
        description: 'Gibt die rechtsseitige Wahrscheinlichkeit der Chi-Quadrat-Verteilung zurück.',
        abstract: 'Gibt die rechtsseitige Wahrscheinlichkeit der Chi-Quadrat-Verteilung zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/chidist-function-c90d0fbc-5b56-4f5f-ab57-34af1bf6897e'
          }
        ],
        functionParameter: {
          x: {
            name: 'x',
            detail: 'The value at which you want to evaluate the distribution.'
          },
          degFreedom: {
            name: 'deg_freedom',
            detail: 'The number of degrees of freedom.'
          }
        }
      },
      CHIINV: {
        description: 'Gibt die Umkehrfunktion der rechtsseitigen Chi-Quadrat-Verteilung zurück.',
        abstract: 'Gibt die Umkehrfunktion der rechtsseitigen Chi-Quadrat-Verteilung zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/chiinv-function-cfbea3f6-6e4f-40c9-a87f-20472e0512af'
          }
        ],
        functionParameter: {
          probability: {
            name: 'probability',
            detail: 'A probability associated with the chi-squared distribution.'
          },
          degFreedom: {
            name: 'deg_freedom',
            detail: 'The number of degrees of freedom.'
          }
        }
      },
      CHITEST: {
        description: 'Gibt die Teststatistik eines Unabhängigkeitstests zurück.',
        abstract: 'Gibt die Teststatistik eines Unabhängigkeitstests zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/chitest-function-981ff871-b694-4134-848e-38ec704577ac'
          }
        ],
        functionParameter: {
          actualRange: {
            name: 'actual_range',
            detail: 'The range of data that contains observations to test against expected values.'
          },
          expectedRange: {
            name: 'expected_range',
            detail: 'The range of data that contains the ratio of the product of row totals and column totals to the grand total.'
          }
        }
      },
      CONFIDENCE: {
        description: 'Gibt das Konfidenzintervall für den Erwartungswert einer Zufallsvariablen bei Normalverteilung zurück.',
        abstract: 'Gibt das Konfidenzintervall für den Erwartungswert zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/confidence-function-75ccc007-f77c-4343-bc14-673642091ad6'
          }
        ],
        functionParameter: {
          alpha: {
            name: 'alpha',
            detail: 'The significance level used to compute the confidence level. The confidence level equals 100*(1 - alpha)%, or in other words, an alpha of 0.05 indicates a 95 percent confidence level.'
          },
          standardDev: {
            name: 'standard_dev',
            detail: 'The population standard deviation for the data range and is assumed to be known.'
          },
          size: {
            name: 'size',
            detail: 'The sample size.'
          }
        }
      },
      COVAR: {
        description: 'Gibt die Kovarianz zurück, also den Mittelwert der Produkte von Abweichungen für jedes Datenpunktpaar in zwei Datensätzen.',
        abstract: 'Gibt die Kovarianz zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/covar-function-50479552-2c03-4daf-bd71-a5ab88b2db03'
          }
        ],
        functionParameter: {
          array1: {
            name: 'array1',
            detail: 'A first range of cell values.'
          },
          array2: {
            name: 'array2',
            detail: 'A second range of cell values.'
          }
        }
      },
      CRITBINOM: {
        description: 'Gibt den kleinsten Wert zurück, für den die kumulierte Binomialverteilung kleiner oder gleich einem Kriteriumswert ist.',
        abstract: 'Gibt den kleinsten Wert zurück, für den die kumulierte Binomialverteilung kleiner oder gleich einem Kriteriumswert ist.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/critbinom-function-eb6b871d-796b-4d21-b69b-e4350d5f407b'
          }
        ],
        functionParameter: {
          trials: {
            name: 'trials',
            detail: 'The number of Bernoulli trials.'
          },
          probabilityS: {
            name: 'probability_s',
            detail: 'The probability of success on each trial.'
          },
          alpha: {
            name: 'alpha',
            detail: 'The criterion value.'
          }
        }
      },
      EXPONDIST: {
        description: 'Gibt die Exponentialverteilung zurück.',
        abstract: 'Gibt die Exponentialverteilung zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/expondist-function-68ab45fd-cd6d-4887-9770-9357eb8ee06a'
          }
        ],
        functionParameter: {
          x: {
            name: 'x',
            detail: 'The value at which you want to evaluate the distribution.'
          },
          lambda: {
            name: 'lambda',
            detail: 'The parameter value.'
          },
          cumulative: {
            name: 'cumulative',
            detail: 'A logical value that determines the form of the function. If cumulative is TRUE, EXPONDIST returns the cumulative distribution function; if FALSE, it returns the probability density function.'
          }
        }
      },
      FDIST: {
        description: 'Gibt die F-Verteilung zurück.',
        abstract: 'Gibt die F-Verteilung zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/fdist-function-ecf76fba-b3f1-4e7d-a57e-6a5b7460b786'
          }
        ],
        functionParameter: {
          x: {
            name: 'x',
            detail: 'The value at which to evaluate the function.'
          },
          degFreedom1: {
            name: 'deg_freedom1',
            detail: 'The numerator degrees of freedom.'
          },
          degFreedom2: {
            name: 'deg_freedom2',
            detail: 'The denominator degrees of freedom.'
          }
        }
      },
      FINV: {
        description: 'Gibt die Umkehrfunktion der F-Verteilung zurück.',
        abstract: 'Gibt die Umkehrfunktion der F-Verteilung zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/finv-function-4d46c97c-c368-4852-bc15-41e8e31140b1'
          }
        ],
        functionParameter: {
          probability: {
            name: 'probability',
            detail: 'A probability associated with the F cumulative distribution.'
          },
          degFreedom1: {
            name: 'deg_freedom1',
            detail: 'The numerator degrees of freedom.'
          },
          degFreedom2: {
            name: 'deg_freedom2',
            detail: 'The denominator degrees of freedom.'
          }
        }
      },
      FTEST: {
        description: 'Gibt das Ergebnis eines F-Tests zurück.',
        abstract: 'Gibt das Ergebnis eines F-Tests zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/ftest-function-4c9e1202-53fe-428c-a737-976f6fc3f9fd'
          }
        ],
        functionParameter: {
          array1: {
            name: 'array1',
            detail: 'The first array or range of data.'
          },
          array2: {
            name: 'array2',
            detail: 'The second array or range of data.'
          }
        }
      },
      GAMMADIST: {
        description: 'Gibt die Gamma-Verteilung zurück.',
        abstract: 'Gibt die Gamma-Verteilung zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/gammadist-function-7327c94d-0f05-4511-83df-1dd7ed23e19e'
          }
        ],
        functionParameter: {
          x: {
            name: 'x',
            detail: 'The value for which you want the distribution.'
          },
          alpha: {
            name: 'alpha',
            detail: 'A parameter of the distribution.'
          },
          beta: {
            name: 'beta',
            detail: 'A parameter of the distribution.'
          },
          cumulative: {
            name: 'cumulative',
            detail: 'A logical value that determines the form of the function. If cumulative is TRUE, GAMMADIST returns the cumulative distribution function; if FALSE, it returns the probability density function.'
          }
        }
      },
      GAMMAINV: {
        description: 'Gibt die Umkehrfunktion der Gamma-Verteilung zurück.',
        abstract: 'Gibt die Umkehrfunktion der Gamma-Verteilung zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/gammainv-function-06393558-37ab-47d0-aa63-432f99e7916d'
          }
        ],
        functionParameter: {
          probability: {
            name: 'probability',
            detail: 'A probability associated with the gamma distribution.'
          },
          alpha: {
            name: 'alpha',
            detail: 'A parameter of the distribution.'
          },
          beta: {
            name: 'beta',
            detail: 'A parameter of the distribution.'
          }
        }
      },
      HYPGEOMDIST: {
        description: 'Gibt die hypergeometrische Verteilung zurück.',
        abstract: 'Gibt die hypergeometrische Verteilung zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/hypgeomdist-function-23e37961-2871-4195-9629-d0b2c108a12e'
          }
        ],
        functionParameter: {
          sampleS: {
            name: 'sample_s',
            detail: 'The number of successes in the sample.'
          },
          numberSample: {
            name: 'number_sample',
            detail: 'The size of the sample.'
          },
          populationS: {
            name: 'population_s',
            detail: 'The number of successes in the population.'
          },
          numberPop: {
            name: 'number_pop',
            detail: 'The population size.'
          },
          cumulative: {
            name: 'cumulative',
            detail: 'A logical value that determines the form of the function. If cumulative is TRUE, HYPGEOMDIST returns the cumulative distribution function; if FALSE, it returns the probability density function.'
          }
        }
      },
      LOGINV: {
        description: 'Gibt die Umkehrfunktion der logarithmischen Normalverteilung zurück.',
        abstract: 'Gibt die Umkehrfunktion der logarithmischen Normalverteilung zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/loginv-function-0bd7631a-2725-482b-afb4-de23df77acfe'
          }
        ],
        functionParameter: {
          probability: {
            name: 'probability',
            detail: 'A probability corresponding to the lognormal distribution.'
          },
          mean: {
            name: 'mean',
            detail: 'The arithmetic mean of the distribution.'
          },
          standardDev: {
            name: 'standard_dev',
            detail: 'The standard deviation of the distribution.'
          }
        }
      },
      LOGNORMDIST: {
        description: 'Gibt die kumulierte logarithmische Normalverteilung zurück.',
        abstract: 'Gibt die kumulierte logarithmische Normalverteilung zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/lognormdist-function-f8d194cb-9ee3-4034-8c75-1bdb3884100b'
          }
        ],
        functionParameter: {
          x: {
            name: 'x',
            detail: 'The value for which you want the distribution.'
          },
          mean: {
            name: 'mean',
            detail: 'The arithmetic mean of the distribution.'
          },
          standardDev: {
            name: 'standard_dev',
            detail: 'The standard deviation of the distribution.'
          },
          cumulative: {
            name: 'cumulative',
            detail: 'A logical value that determines the form of the function. If cumulative is TRUE, LOGNORM.DIST returns the cumulative distribution function; if FALSE, it returns the probability density function.'
          }
        }
      },
      MODE: {
        description: 'Gibt den häufigsten Wert in einer Datengruppe zurück.',
        abstract: 'Gibt den häufigsten Wert in einer Datengruppe zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/mode-function-e45192ce-9122-4980-82ed-4bdc34973120'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'The first number, cell reference, or range for which you want calculate the mode.'
          },
          number2: {
            name: 'number2',
            detail: 'Additional numbers, cell references or ranges for which you want calculate the mode, up to a maximum of 255.'
          }
        }
      },
      NEGBINOMDIST: {
        description: 'Gibt die negative Binomialverteilung zurück.',
        abstract: 'Gibt die negative Binomialverteilung zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/negbinomdist-function-f59b0a37-bae2-408d-b115-a315609ba714'
          }
        ],
        functionParameter: {
          numberF: {
            name: 'number_f',
            detail: 'The number of failures.'
          },
          numberS: {
            name: 'number_s',
            detail: 'The threshold number of successes.'
          },
          probabilityS: {
            name: 'probability_s',
            detail: 'The probability of a success.'
          },
          cumulative: {
            name: 'cumulative',
            detail: 'A logical value that determines the form of the function. If cumulative is TRUE, NEGBINOMDIST returns the cumulative distribution function; if FALSE, it returns the probability density function.'
          }
        }
      },
      NORMDIST: {
        description: 'Gibt die Normalverteilung zurück.',
        abstract: 'Gibt die Normalverteilung zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/normdist-function-126db625-c53e-4591-9a22-c9ff422d6d58'
          }
        ],
        functionParameter: {
          x: {
            name: 'x',
            detail: 'The value for which you want the distribution.'
          },
          mean: {
            name: 'mean',
            detail: 'The arithmetic mean of the distribution.'
          },
          standardDev: {
            name: 'standard_dev',
            detail: 'The standard deviation of the distribution.'
          },
          cumulative: {
            name: 'cumulative',
            detail: 'A logical value that determines the form of the function. If cumulative is TRUE, NORMDIST returns the cumulative distribution function; if FALSE, it returns the probability density function.'
          }
        }
      },
      NORMINV: {
        description: 'Gibt die Umkehrfunktion der Normalverteilung zurück.',
        abstract: 'Gibt die Umkehrfunktion der Normalverteilung zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/norminv-function-87981ab8-2de0-4cb0-b1aa-e21d4cb879b8'
          }
        ],
        functionParameter: {
          probability: {
            name: 'probability',
            detail: 'A probability corresponding to the normal distribution.'
          },
          mean: {
            name: 'mean',
            detail: 'The arithmetic mean of the distribution.'
          },
          standardDev: {
            name: 'standard_dev',
            detail: 'The standard deviation of the distribution.'
          }
        }
      },
      NORMSDIST: {
        description: 'Gibt die Standardnormalverteilung zurück.',
        abstract: 'Gibt die Standardnormalverteilung zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/normsdist-function-463369ea-0345-445d-802a-4ff0d6ce7cac'
          }
        ],
        functionParameter: {
          z: {
            name: 'z',
            detail: 'The value for which you want the distribution.'
          }
        }
      },
      NORMSINV: {
        description: 'Gibt die Umkehrfunktion der Standardnormalverteilung zurück.',
        abstract: 'Gibt die Umkehrfunktion der Standardnormalverteilung zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/normsinv-function-8d1bce66-8e4d-4f3b-967c-30eed61f019d'
          }
        ],
        functionParameter: {
          probability: {
            name: 'probability',
            detail: 'A probability corresponding to the normal distribution.'
          }
        }
      },
      PERCENTILE: {
        description: 'Gibt das k-Quantil von Werten in einem Bereich zurück.',
        abstract: 'Gibt das k-Quantil von Werten in einem Bereich zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/percentile-function-91b43a53-543c-4708-93de-d626debdddca'
          }
        ],
        functionParameter: {
          array: {
            name: 'array',
            detail: 'The array or range of data that defines relative standing.'
          },
          k: {
            name: 'k',
            detail: 'The percentile value in the range 0 and 1 (Includes 0 and 1).'
          }
        }
      },
      PERCENTRANK: {
        description: 'Gibt den prozentualen Rang eines Wertes innerhalb eines Datensatzes zurück.',
        abstract: 'Gibt den prozentualen Rang eines Wertes zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/percentrank-function-f1b5836c-9619-4847-9fc9-080ec9024442'
          }
        ],
        functionParameter: {
          array: {
            name: 'array',
            detail: 'The array or range of data that defines relative standing.'
          },
          x: {
            name: 'x',
            detail: 'The value for which you want to know the rank.'
          },
          significance: {
            name: 'significance',
            detail: 'A value that identifies the number of significant digits for the returned percentage value. If omitted, PERCENTRANK.INC uses three digits (0.xxx).'
          }
        }
      },
      POISSON: {
        description: 'Gibt die Poisson-Verteilung zurück.',
        abstract: 'Gibt die Poisson-Verteilung zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/poisson-function-d81f7294-9d7c-4f75-bc23-80aa8624173a'
          }
        ],
        functionParameter: {
          x: {
            name: 'x',
            detail: 'The value for which you want the distribution.'
          },
          mean: {
            name: 'mean',
            detail: 'The arithmetic mean of the distribution.'
          },
          cumulative: {
            name: 'cumulative',
            detail: 'A logical value that determines the form of the function. If cumulative is TRUE, POISSON returns the cumulative distribution function; if FALSE, it returns the probability density function.'
          }
        }
      },
      QUARTILE: {
        description: 'Gibt das Quartil eines Datensatzes zurück.',
        abstract: 'Gibt das Quartil eines Datensatzes zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/quartile-function-93cf8f62-60cd-4fdb-8a92-8451041e1a2a'
          }
        ],
        functionParameter: {
          array: {
            name: 'array',
            detail: 'The array or range of data for which you want quartile values.'
          },
          quart: {
            name: 'quart',
            detail: 'The quartile value to return.'
          }
        }
      },
      RANK: {
        description: 'Gibt den Rang einer Zahl in einer Liste von Zahlen zurück.',
        abstract: 'Gibt den Rang einer Zahl zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/rank-function-6a2fc49d-1831-4a03-9d8c-c279cf99f723'
          }
        ],
        functionParameter: {
          number: {
            name: 'number',
            detail: 'The number whose rank you want to find.'
          },
          ref: {
            name: 'ref',
            detail: 'A reference to a list of numbers. Nonnumeric values in ref are ignored.'
          },
          order: {
            name: 'order',
            detail: 'A number specifying how to rank number. If order is 0 (zero) or omitted, Microsoft Excel ranks number as if ref were a list sorted in descending order. If order is any nonzero value, Microsoft Excel ranks number as if ref were a list sorted in ascending order.'
          }
        }
      },
      STDEV: {
        description: 'Schätzt die Standardabweichung ausgehend von einer Stichprobe.',
        abstract: 'Schätzt die Standardabweichung einer Stichprobe.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/stdev-function-51fecaaa-231e-4bbb-9230-33650a72c9b0'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'The first number argument corresponding to a sample of a population.'
          },
          number2: {
            name: 'number2',
            detail: 'Number arguments 2 to 255 corresponding to a sample of a population. You can also use a single array or a reference to an array instead of arguments separated by commas.'
          }
        }
      },
      STDEVP: {
        description: 'Berechnet die Standardabweichung ausgehend von einer Grundgesamtheit.',
        abstract: 'Standardabweichung einer Grundgesamtheit.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/stdevp-function-1f7c1c88-1bec-4422-8242-e9f7dc8bb195'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'The first number argument corresponding to a population.'
          },
          number2: {
            name: 'number2',
            detail: 'Number arguments 2 to 255 corresponding to a population. You can also use a single array or a reference to an array instead of arguments separated by commas.'
          }
        }
      },
      TDIST: {
        description: 'Gibt die t-Verteilung zurück.',
        abstract: 'Gibt die t-Verteilung zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/tdist-function-630a7695-4021-4853-9468-4a1f9dcdd192'
          }
        ],
        functionParameter: {
          x: {
            name: 'x',
            detail: 'The numeric value at which to evaluate the distribution.'
          },
          degFreedom: {
            name: 'degFreedom',
            detail: 'An integer indicating the number of degrees of freedom.'
          },
          tails: {
            name: 'tails',
            detail: 'Specifies the number of distribution tails to return. If Tails = 1, TDIST returns the one-tailed distribution. If Tails = 2, TDIST returns the two-tailed distribution.'
          }
        }
      },
      TINV: {
        description: 'Gibt die Umkehrfunktion der t-Verteilung zurück.',
        abstract: 'Gibt die Umkehrfunktion der t-Verteilung zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/tinv-function-a7c85b9d-90f5-41fe-9ca5-1cd2f3e1ed7c'
          }
        ],
        functionParameter: {
          probability: {
            name: 'probability',
            detail: 'The probability associated with the Student\'s t-distribution.'
          },
          degFreedom: {
            name: 'degFreedom',
            detail: 'An integer indicating the number of degrees of freedom.'
          }
        }
      },
      TTEST: {
        description: 'Gibt die Wahrscheinlichkeit eines t-Tests zurück.',
        abstract: 'Gibt die Wahrscheinlichkeit eines t-Tests zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/ttest-function-1696ffc1-4811-40fd-9d13-a0eaad83c7ae'
          }
        ],
        functionParameter: {
          array1: {
            name: 'array1',
            detail: 'The first array or range of data.'
          },
          array2: {
            name: 'array2',
            detail: 'The second array or range of data.'
          },
          tails: {
            name: 'tails',
            detail: 'Specifies the number of distribution tails. If tails = 1, TTEST uses the one-tailed distribution. If tails = 2, TTEST uses the two-tailed distribution.'
          },
          type: {
            name: 'type',
            detail: 'The kind of t-Test to perform.'
          }
        }
      },
      VAR: {
        description: 'Schätzt die Varianz ausgehend von einer Stichprobe.',
        abstract: 'Schätzt die Varianz einer Stichprobe.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/var-function-1f2b7ab2-954d-4e17-ba2c-9e58b15a7da2'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'The first number argument corresponding to a sample of a population.'
          },
          number2: {
            name: 'number2',
            detail: 'Number arguments 2 to 255 corresponding to a sample of a population.'
          }
        }
      },
      VARP: {
        description: 'Berechnet die Varianz einer Grundgesamtheit.',
        abstract: 'Varianz einer Grundgesamtheit.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/varp-function-26a541c4-ecee-464d-a731-bd4c575b1a6b'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'The first number argument corresponding to a population.'
          },
          number2: {
            name: 'number2',
            detail: 'Number arguments 2 to 255 corresponding to a population.'
          }
        }
      },
      WEIBULL: {
        description: 'Gibt die Weibull-Verteilung zurück.',
        abstract: 'Gibt die Weibull-Verteilung zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/weibull-function-b83dc2c6-260b-4754-bef2-633196f6fdcc'
          }
        ],
        functionParameter: {
          x: {
            name: 'x',
            detail: 'The value for which you want the distribution.'
          },
          alpha: {
            name: 'alpha',
            detail: 'A parameter of the distribution.'
          },
          beta: {
            name: 'beta',
            detail: 'A parameter of the distribution.'
          },
          cumulative: {
            name: 'cumulative',
            detail: 'A logical value that determines the form of the function. If cumulative is TRUE, WEIBULL returns the cumulative distribution function; if FALSE, it returns the probability density function.'
          }
        }
      },
      ZTEST: {
        description: 'Gibt den einseitigen Wahrscheinlichkeitswert eines Gauß-Tests zurück.',
        abstract: 'Gibt den einseitigen Wahrscheinlichkeitswert eines Gauß-Tests zurück.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/ztest-function-8f33be8a-6bd6-4ecc-8e3a-d9a4420c4a6a'
          }
        ],
        functionParameter: {
          array: {
            name: 'array',
            detail: 'The array or range of data against which to test x.'
          },
          x: {
            name: 'x',
            detail: 'The value to test.'
          },
          sigma: {
            name: 'sigma',
            detail: 'The population (known) standard deviation. If omitted, the sample standard deviation is used.'
          }
        }
      },
      ENCODEURL: {
        description: 'Gibt eine URL-codierte Zeichenfolge zurück.',
        abstract: 'URL kodieren.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/encodeurl-function-07c7fb90-7c60-4bff-8687-fac50fe33d0e'
          }
        ],
        functionParameter: {
          text: {
            name: 'text',
            detail: 'A string to be URL encoded'
          }
        }
      },
      FILTERXML: {
        description: 'Gibt bestimmte Daten aus XML-Inhalten anhand des angegebenen XPath zurück.',
        abstract: 'XML filtern.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/filterxml-function-4df72efc-11ec-4951-86f5-c1374812f5b7'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'first'
          },
          number2: {
            name: 'number2',
            detail: 'second'
          }
        }
      },
      WEBSERVICE: {
        description: 'Gibt Daten eines Webdienstes zurück.',
        abstract: 'Webdienst.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.microsoft.com/en-us/office/webservice-function-0546a35a-ecc6-4739-aed7-c0b7ce1562c4'
          }
        ],
        functionParameter: {
          number1: {
            name: 'number1',
            detail: 'first'
          },
          number2: {
            name: 'number2',
            detail: 'second'
          }
        }
      },
      ARRAY_CONSTRAIN: {
        description: 'Beschränkt ein Array-Ergebnis auf eine angegebene Größe.',
        abstract: 'Beschränkt ein Array-Ergebnis auf eine angegebene Größe.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.google.com/docs/answer/3267036?hl=en&sjid=8484774178571403392-AP'
          }
        ],
        functionParameter: {
          inputRange: {
            name: 'input_range',
            detail: 'The range to constrain.'
          },
          numRows: {
            name: 'num_rows',
            detail: 'The number of rows the result should contain.'
          },
          numCols: {
            name: 'num_cols',
            detail: 'The number of columns the result should contain'
          }
        }
      },
      FLATTEN: {
        description: 'Reduziert alle Werte aus einem oder mehreren Bereichen auf eine einzelne Spalte.',
        abstract: 'Reduziert alle Werte aus einem oder mehreren Bereichen auf eine einzelne Spalte.',
        links: [
          {
            title: 'Anleitung',
            url: 'https://support.google.com/docs/answer/10307761?hl=zh-Hans&sjid=17375453483079636084-AP'
          }
        ],
        functionParameter: {
          range1: {
            name: 'range1',
            detail: 'The first range to flatten.'
          },
          range2: {
            name: 'range2',
            detail: 'Additional ranges to flatten.'
          }
        }
      }
    },
    prompt: {
      helpExample: 'BEISPIEL',
      helpAbstract: 'INFO',
      required: 'Erforderlich.',
      optional: 'Optional.'
    },
    error: {
      title: 'Fehler',
      divByZero: 'Division durch null',
      name: 'Ungültiger Name',
      value: 'Fehler im Wert',
      num: 'Zahlenfehler',
      na: 'Wert nicht verfügbar',
      cycle: 'Zirkelbezugsfehler',
      ref: 'Ungültiger Zellbezug',
      spill: 'Überlaufbereich ist nicht leer',
      calc: 'Berechnungsfehler',
      error: 'Fehler',
      connect: 'Daten werden abgerufen',
      null: 'Null-Fehler'
    },
    functionType: {
      financial: 'Finanzmathematik',
      date: 'Datum & Uhrzeit',
      math: 'Mathematik & Trigonometrie',
      statistical: 'Statistik',
      lookup: 'Nachschlagen & Verweisen',
      database: 'Datenbank',
      text: 'Text',
      logical: 'Logik',
      information: 'Information',
      engineering: 'Technik',
      cube: 'Cube',
      compatibility: 'Kompatibilität',
      web: 'Web',
      array: 'Array',
      univer: 'Univer',
      user: 'Benutzerdefiniert',
      definedname: 'Definierter Name'
    },
    moreFunctions: {
      confirm: 'Bestätigen',
      prev: 'Zurück',
      next: 'Weiter',
      searchFunctionPlaceholder: 'Funktion suchen',
      allFunctions: 'Alle Funktionen',
      syntax: 'SYNTAX'
    },
    operation: {
      copyFormulaOnly: 'Nur Formel kopieren',
      pasteFormula: 'Formel einfügen'
    }
  },
  sheet: {
    numfmt: {
      title: 'Zahlenformat',
      numfmtType: 'Formattypen',
      cancel: 'Abbrechen',
      confirm: 'Bestätigen',
      general: 'Standard',
      accounting: 'Buchhaltung',
      text: 'Text',
      number: 'Zahl',
      percent: 'Prozent',
      scientific: 'Wissenschaftlich',
      currency: 'Währung',
      date: 'Datum',
      time: 'Uhrzeit',
      thousandthPercentile: 'Tausender-Trennzeichen',
      preview: 'Vorschau',
      dateTime: 'Datum und Uhrzeit',
      decimalLength: 'Dezimalstellen',
      currencyType: 'Währungssymbol',
      moreFmt: 'Formate',
      financialValue: 'Finanzwert',
      roundingCurrency: 'Währung aufrunden',
      timeDuration: 'Zeitdauer',
      currencyDes: 'Das Währungsformat dient zur Darstellung allgemeiner Währungswerte. Das Buchhaltungsformat richtet eine Spalte von Werten an Dezimalpunkten aus.',
      accountingDes: 'Das Buchhaltungs-Zahlenformat richtet eine Spalte von Werten an Währungssymbolen und Dezimalpunkten aus.',
      dateType: 'Datumstyp',
      dateDes: 'Das Datumsformat stellt Datums- und Zeitreihenwerte als Datumswerte dar.',
      negType: 'Typ für negative Zahlen',
      generalDes: 'Das Standardformat enthält kein spezifisches Zahlenformat.',
      thousandthPercentileDes: 'Das Tausender-Format wird zur Darstellung gewöhnlicher Zahlen verwendet. Währungs- und Buchhaltungsformate bieten ein spezialisiertes Format für Währungsberechnungen.',
      addDecimal: 'Dezimalstelle hinzufügen',
      subtractDecimal: 'Dezimalstelle verringern',
      customFormat: 'Benutzerdefiniertes Format',
      customFormatDes: 'Benutzerdefinierte Zahlenformate auf Basis bestehender Formate erzeugen.'
    }
  }
};

export default deDE;
