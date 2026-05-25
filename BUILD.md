# Building SpreadsheetEditor Extension

## Prerequisites

- Node.js >= 18.17.0
- npm or pnpm

## Build Process

The SpreadsheetEditor extension bundles Univer (a modern spreadsheet library) into a single UMD module compatible with MediaWiki's ResourceLoader.

### Initial Setup

```bash
# Install dependencies
npm install

# Or with pnpm
pnpm install
```

### Building the UMD Bundle

```bash
# Production build
npm run build

# Development build with watch mode
npm run watch
```

This will:
1. Bundle all Univer packages from `src/univer-bundle.js`
2. Generate `modules/univer/univer.umd.js` (~2-3MB minified)
3. Extract CSS to `modules/univer/univer.css`

### Build Output

After building, you should have:
- `modules/univer/univer.umd.js` - The bundled Univer library
- `modules/univer/univer.css` - Extracted stylesheets

These files are loaded by MediaWiki's ResourceLoader via `extension.json`.

### Version Management

**Important**: All `@univerjs/*` packages must be on the same version. When updating:

```bash
# Update all Univer packages at once
npm update @univerjs/core @univerjs/design @univerjs/docs @univerjs/engine-formula @univerjs/engine-render @univerjs/sheets @univerjs/sheets-ui @univerjs/ui @univerjs/facade @univerjs/sheets-formula @univerjs/sheets-numfmt

# Rebuild after update
npm run build
```

### Troubleshooting

**Bundle size too large:**
- Check that tree-shaking is working (rollup should eliminate unused code)
- Consider lazy-loading some Univer plugins

**Build errors:**
- Ensure all Univer packages are the same version
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check that Node.js version is >= 18.17.0

**Runtime errors about Intl.Segmenter:**
- Univer requires `Intl.Segmenter` API
- Add polyfill: `npm install @formatjs/intl-segmenter`
- Import in `src/univer-bundle.js` if needed

## Development Workflow

1. Make changes to `src/univer-bundle.js` or extension code
2. Run `npm run build` to rebuild
3. Reload MediaWiki page to see changes
4. MediaWiki will cache ResourceLoader modules - use `?debug=true` or purge cache

## Notes on Commercial Features

Univer Pro (commercial) includes:
- Excel import/export
- Printing
- Charts
- Pivot tables

The open-source version used here does **NOT** include Excel I/O. For Excel import, we use SheetJS (xlsx) library as an alternative (to be implemented).

## CI/CD Integration

To build automatically in CI:

```yaml
steps:
  - name: Install Node.js
    uses: actions/setup-node@v3
    with:
      node-version: '18'
  
  - name: Install dependencies
    run: npm ci
  
  - name: Build Univer bundle
    run: npm run build
  
  - name: Commit built files
    run: |
      git add modules/univer/
      git commit -m "Build Univer bundle"
```

Alternatively, commit the built UMD bundle to the repository to avoid requiring Node.js on deployment servers.
