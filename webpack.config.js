const path = require('path')
const glob = require('glob')
const webpack = require('webpack')

module.exports = [
  // Generating browser version of stopword
  {
    mode: 'production',
    entry: './lib/stopword.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'stopword.js',
      library: 'sw'
    },
    // devtool: 'none' // prevent webpack from using eval() on my module
    devtool: 'hidden-source-map' // prevent webpack from using eval() on my module
  },

  // Generating test script for the browser
  {
    mode: 'production',
    entry: glob.sync('./test/test.js'),
    output: {
      path: path.resolve(__dirname, './test/sandbox'),
      filename: 'bundle.js'
    },
    resolve: {
      fallback: {
        fs: false,
        path: require.resolve('path-browserify'),
        stream: require.resolve('stream-browserify'),
        buffer: require.resolve('buffer/')
      }
    },
    node: {
    //   // fs: 'empty'
      global: true,
      __filename: false,
      __dirname: false
    },
    plugins: [
      // fix "process is not defined" error:
      // (do "npm install process" before running the build)
      new webpack.ProvidePlugin({
        process: 'process/browser'
      })
    ]
  }
]
