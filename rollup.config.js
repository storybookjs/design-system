import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import nodeResolve from 'rollup-plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import replace from 'rollup-plugin-replace';
import sourceMaps from 'rollup-plugin-sourcemaps';
import { insertIf } from '@innocuous/functions';

import packageJson from './package.json';

const extensions = ['.js', '.jsx'];

// Inspiration for rollup config stems mostly from https://github.com/palmerhq/tsdx
const generateOutputConfig = ({ format, environment }) => ({
  file: `dist/index.${environment}.${format}.js`,
  format,

  // Do not let Rollup call Object.freeze() on namespace import objects
  // (i.e. import * as namespaceImportObject from...) that are accessed dynamically.
  freeze: false,

  // Do not let Rollup add a `__esModule: true` property when generating exports for non-ESM formats.
  esModule: false,

  treeshake: {
    // We assume reading a property of an object never has side-effects.
    // getters and setters on objects WILL be removed.
    //
    // @example
    // const foo = {
    //  get bar() {
    //    console.log('effect');
    //    return 'bar';
    //  }
    // }
    //
    // const result = foo.bar;
    // const illegalAccess = foo.quux.tooDeep;
    //
    // tl;dr: Don't use getters and setters 🙏
    propertyReadSideEffects: false,
  },
  name: packageJson.name,
  sourcemap: true,
  globals: { react: 'React', 'react-native': 'ReactNative' },
  exports: 'named',
});

export default {
  input: 'src/index.js',
  output: [
    generateOutputConfig({ format: 'cjs', environment: process.env.BUILD }),
    generateOutputConfig({ format: 'esm', environment: process.env.BUILD }),
  ],
  plugins: [
    /*
     * Instead of declaring a hard-coded list of external libraries (`react`, `react-dom`, etc.),
     * this library automatically externalizes dependencies declared as peerDependencies
     * in package.json
     */
    peerDepsExternal(),

    /*
     * Defines dependency entry points dynamically (prefer ESM).
     * Adhere to `package.json/browser when present.
     */
    nodeResolve({
      extensions,
      mainFields: ['module', 'main', 'browser'],
    }),

    /*
     * Convert CJS module dependencies to ES6 modules.
     */
    commonjs({
      // non-CommonJS modules will be ignored, but you can also
      include: 'node_modules/**',
      // exclude: [ 'node_modules/foo/**', 'node_modules/bar/**' ],  // Default: undefined
      // these values can also be regular expressions
      extensions,
    }),

    /*
     * Convert .json files to ES6 modules.
     */
    json(),

    /*
     * Transpile modern ECMAScript down to target JavaScript.
     * Transpilation process takes into consideration `babel.config.js` and `.browserslistrc`
     */
    babel({
      exclude: '**/node_modules/**',
      babelrc: false,
      configFile: './babel.config.js',
    }),

    /*
     * Inline stringification of specific environment variables.
     */
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.BUILD),
    }),

    /*
     * Sourcemaps ✅
     */
    sourceMaps(),

    /*
     * Snapshot test for bundle size
     */
    sizeSnapshot({ matchSnapshot: true }),

    // Production-only uglification and minification
    ...insertIf(
      process.env.BUILD === 'production',
      terser({
        // https://github.com/terser-js/terser#minify-options
        sourcemap: true,
        output: { comments: false },
        compress: {
          pure_getters: true,
          passes: 10,
        },
        warnings: true,
      })
    ),
  ],
};
