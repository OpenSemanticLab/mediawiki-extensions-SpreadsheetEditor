import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/univer-bundle.js',
  output: {
    file: 'modules/univer/univer.umd.js',
    format: 'umd',
    name: 'UniverBundle',
    // /*@nomin*/ tells MediaWiki's ResourceLoader to skip its own minifier
    // for this file. We already minify with terser; double-minifying corrupts
    // some regex literals in the Univer/ExcelJS code.
    banner: '/*@nomin*/',
    globals: {
      // No external dependencies - everything bundled
    },
    inlineDynamicImports: true,
    sourcemap: false
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true
    }),
    resolve({
      browser: true,
      preferBuiltins: false
    }),
    json(),
    commonjs(),
    postcss({
      extract: 'univer.css',
      minimize: true
    }),
    terser({
      compress: {
        drop_console: false,
        drop_debugger: true
      },
      format: {
        // Preserve our /*@nomin*/ banner so MediaWiki ResourceLoader
        // skips re-minifying this already-minified bundle.
        comments: /@nomin/
      }
    })
  ]
};
