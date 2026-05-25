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
        drop_console: false, // Keep console for debugging
        drop_debugger: true
      }
    })
  ]
};
