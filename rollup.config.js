import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import path from 'path'
import license from 'rollup-plugin-license'

export default [
  // browser-friendly UMD build
  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: './src/stopword.js',
    output: [
      { name: 'sw', file: './dist/stopword.umd.js', format: 'umd', exports: 'named' },
      { file: './dist/stopword.cjs.js', format: 'cjs' },
      { file: './dist/stopword.esm.mjs', format: 'es' }
    ],
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs() // so Rollup can convert `ms` to an ES module
    ]
  },
  // Minified versions
  {
    input: './src/stopword.js',
    output: [
      { name: 'sw', file: './dist/stopword.umd.min.js', format: 'umd', exports: 'named' },
      { file: './dist/stopword.cjs.min.js', format: 'cjs' },
      { file: './dist/stopword.esm.min.mjs', format: 'es' }
    ],
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
      terser(), // Minify
      license({ // Add reference to license file for minified scripts
        banner: {
          commentStyle: 'regular', // The default
          content: {
            file: path.join(__dirname, 'license-references.txt')
          }
        }
      })
    ]
  }
]
