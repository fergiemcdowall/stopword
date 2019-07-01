var path = require('path');
//import { version } from './package.json'
const package = require('./package.json');

module.exports = {
  mode: 'production',
  entry: './lib/stopword.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'stopword.' + package.version+ '.js',
  },
  devtool: "none", // prevent webpack from using eval() on my module
}