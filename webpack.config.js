const path = require('path')
const package = require('./package.json')
const glob = require('glob')


  // Generating browser version of stopword

  module.exports =  {
    mode: 'production',
    entry: './lib/stopword.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'stopword.' + package.version+ '.js',
      library: 'sw'
    },
    devtool: "none", // prevent webpack from using eval() on my module
  }

  // Generating test script for the browser
  
module.exports = {
    mode: 'production',
    entry: glob.sync('./test/test-tape.js'),
    output: {
      path: path.resolve(__dirname, './test/sandbox'),
      filename: 'bundle.js'
    },
    node: {
      fs: 'empty'
    }
  }