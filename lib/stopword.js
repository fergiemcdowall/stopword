var defaultStopwords = require('./stopwords_en.js').words

exports.removeStopwords = function (tokens, stopwords) {
  stopwords = stopwords || defaultStopwords
  if (typeof tokens !== 'object' || typeof stopwords !== 'object') {
    throw new Error('expected Arrays try: removeStopwords(Array[, Array])')
  }
  return tokens.filter(function (value) {
    return stopwords.indexOf(value.toLowerCase()) === -1
  })
}

exports.af = require('./stopwords_af.js').words
exports.ar = require('./stopwords_ar.js').words
exports.bn = require('./stopwords_bn.js').words
exports.bg = require('./stopwords_bg.js').words
exports.br = require('./stopwords_br.js').words
exports.ca = require('./stopwords_ca.js').words
exports.cs = require('./stopwords_cs.js').words
exports.da = require('./stopwords_da.js').words
exports.de = require('./stopwords_de.js').words
exports.el = require('./stopwords_el.js').words
exports.en = require('./stopwords_en.js').words
exports.eo = require('./stopwords_eo.js').words
exports.es = require('./stopwords_es.js').words
exports.et = require('./stopwords_et.js').words
exports.eu = require('./stopwords_eu.js').words
exports.fa = require('./stopwords_fa.js').words
exports.fr = require('./stopwords_fr.js').words
exports.ga = require('./stopwords_ga.js').words
exports.gl = require('./stopwords_gl.js').words
exports.fi = require('./stopwords_fi.js').words
exports.ha = require('./stopwords_ha.js').words
exports.he = require('./stopwords_he.js').words
exports.hi = require('./stopwords_hi.js').words
exports.hr = require('./stopwords_hr.js').words
exports.hu = require('./stopwords_hu.js').words
exports.hy = require('./stopwords_hy.js').words
exports.id = require('./stopwords_id.js').words
exports.it = require('./stopwords_it.js').words
exports.ja = require('./stopwords_ja.js').words
exports.ko = require('./stopwords_ko.js').words
exports.la = require('./stopwords_la.js').words
exports.lgg = require('./stopwords_lgg.js').words
exports.lggo = require('./stopwords_lggo.js').words
exports.lv = require('./stopwords_lv.js').words
exports.mr = require('./stopwords_mr.js').words
exports.my = require('./stopwords_my.js').words
exports.nl = require('./stopwords_nl.js').words
exports.no = require('./stopwords_no.js').words
exports.pa = require('./stopwords_pa.js').words
exports.pl = require('./stopwords_pl.js').words
exports.pt = require('./stopwords_pt.js').words
exports.ptbr = require('./stopwords_ptbr.js').words
exports.ro = require('./stopwords_ro.js').words
exports.ru = require('./stopwords_ru.js').words
exports.sk = require('./stopwords_sk.js').words
exports.sl = require('./stopwords_sl.js').words
exports.so = require('./stopwords_so.js').words
exports.st = require('./stopwords_st.js').words
exports.sv = require('./stopwords_sv.js').words
exports.sw = require('./stopwords_sw.js').words
exports.th = require('./stopwords_th.js').words
exports.tr = require('./stopwords_tr.js').words
exports.vi = require('./stopwords_vi.js').words
exports.yo = require('./stopwords_yo.js').words
exports.zh = require('./stopwords_zh.js').words
exports.zu = require('./stopwords_zu.js').words
