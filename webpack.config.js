const path = require('path')
const glob = require('glob')

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
    devtool: 'none' // prevent webpack from using eval() on my module
  },

  // Generating test script for the browser
  {
    mode: 'production',
    entry: glob.sync('./test/test.js'),
    output: {
      path: path.resolve(__dirname, './test/sandbox'),
      filename: 'bundle.js'
    },
    node: {
      fs: 'empty'
    }
  }
]
