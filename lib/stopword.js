const defaultStopwords = require('./stopwords_en.js').words

exports.removeStopwords = function(tokens, stopwords) {
  stopwords = stopwords || defaultStopwords
  if (( Object.prototype.toString.call(tokens) !== '[object Array]' )
    || ( Object.prototype.toString.call(stopwords) !== '[object Array]' )) {
    throw new Error ('expected Arrays try: removeStopwords(Array[, Array])')
  }
  return tokens.filter(function (value) {
    if (stopwords.indexOf(value.toLowerCase()) === -1)
      return value
  })
}

exports.da = require('./stopwords_da.js').words
exports.en = require('./stopwords_en.js').words
exports.es = require('./stopwords_es.js').words
exports.fa = require('./stopwords_fa.js').words
exports.fr = require('./stopwords_fr.js').words
exports.it = require('./stopwords_it.js').words
exports.ja = require('./stopwords_ja.js').words
exports.nl = require('./stopwords_nl.js').words
exports.no = require('./stopwords_no.js').words
exports.pl = require('./stopwords_pl.js').words
exports.pt = require('./stopwords_pt.js').words
exports.ru = require('./stopwords_ru.js').words
exports.sv = require('./stopwords_sv.js').words
exports.zh = require('./stopwords_zh.js').words
