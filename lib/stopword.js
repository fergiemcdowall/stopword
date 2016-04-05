const _defaults = require('lodash.defaults')
const _compact = require('lodash.compact')

exports.removeStopwords = function (text, options) {
  var defaults = {
    stopwords: require('./stopwords_en.js').words,
    inputSeparator: /[\\., ]+/
  }
  options = _defaults(options || {}, defaults)
  var tokens = text.split(options.inputSeparator)
  tokens = _compact(tokens.map(function (value) {
    if (options.stopwords.indexOf(value.toLowerCase()) !== -1) return ''
    return value.toLowerCase()
  }))
  return tokens
}

exports.getStopwords = function (lang) {
  var defaultLang = 'en'
  lang = lang || defaultLang
  try {
    return require('./stopwords_' + lang + '.js').words
  } catch (e) {
    throw new Error('no list for ' + lang +
      ' getStopwords has lists for en, es, fa, fr, it, ja, nl, no, pl, pt, ru, zh')
  }
}
