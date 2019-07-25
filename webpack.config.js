const path = require('path')
const package = require('./package.json')
const glob = require('glob')

module.exports =  [
  // Generating browser version of stopword
  {
    mode: 'production',
    entry: './lib/stopword.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'stopword.' + package.version+ '.js',
      library: 'sw'
    },
    devtool: "none", // prevent webpack from using eval() on my module
  },

  // Generating a latest browser version of stopword (same as latest version number)
  {
    mode: 'production',
    entry: './lib/stopword.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'stopword.latest.js',
      library: 'sw'
    },
    devtool: "none", // prevent webpack from using eval() on my module
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
