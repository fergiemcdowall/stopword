import { af } from './stopwords_af.js'
import { ar } from './stopwords_ar.js'
import { bn } from './stopwords_bn.js'
import { bg } from './stopwords_bg.js'
import { br } from './stopwords_br.js'
import { ca } from './stopwords_ca.js'
import { cs } from './stopwords_cs.js'
import { da } from './stopwords_da.js'
import { de } from './stopwords_de.js'
import { el } from './stopwords_el.js'
import { en } from './stopwords_en.js'
import { eo } from './stopwords_eo.js'
import { es } from './stopwords_es.js'
import { et } from './stopwords_et.js'
import { eu } from './stopwords_eu.js'
import { fa } from './stopwords_fa.js'
import { fr } from './stopwords_fr.js'
import { ga } from './stopwords_ga.js'
import { gl } from './stopwords_gl.js'
import { fi } from './stopwords_fi.js'
import { ha } from './stopwords_ha.js'
import { he } from './stopwords_he.js'
import { hi } from './stopwords_hi.js'
import { hr } from './stopwords_hr.js'
import { hu } from './stopwords_hu.js'
import { hy } from './stopwords_hy.js'
import { id } from './stopwords_id.js'
import { it } from './stopwords_it.js'
import { ja } from './stopwords_ja.js'
import { ko } from './stopwords_ko.js'
import { la } from './stopwords_la.js'
import { lgg } from './stopwords_lgg.js'
import { lggo } from './stopwords_lggo.js'
import { lv } from './stopwords_lv.js'
import { mr } from './stopwords_mr.js'
import { my } from './stopwords_my.js'
import { nl } from './stopwords_nl.js'
import { no } from './stopwords_no.js'
import { pa } from './stopwords_pa.js'
import { pl } from './stopwords_pl.js'
import { pt } from './stopwords_pt.js'
import { ptbr } from './stopwords_ptbr.js'
import { ro } from './stopwords_ro.js'
import { ru } from './stopwords_ru.js'
import { sk } from './stopwords_sk.js'
import { sl } from './stopwords_sl.js'
import { so } from './stopwords_so.js'
import { st } from './stopwords_st.js'
import { sv } from './stopwords_sv.js'
import { sw } from './stopwords_sw.js'
import { th } from './stopwords_th.js'
import { tl } from './stopwords_tl.js'
import { tr } from './stopwords_tr.js'
import { ur } from './stopwords_ur.js'
import { vi } from './stopwords_vi.js'
import { yo } from './stopwords_yo.js'
import { zh } from './stopwords_zh.js'
import { zu } from './stopwords_zu.js'

const defaultStopwords = en

const removeStopwords = function (tokens, stopwords) {
  stopwords = stopwords || defaultStopwords
  if (typeof tokens !== 'object' || typeof stopwords !== 'object') {
    throw new Error('expected Arrays try: removeStopwords(Array[, Array])')
  }
  return tokens.filter(function (value) {
    return stopwords.indexOf(value.toLowerCase()) === -1
  })
}

export { removeStopwords, af, ar, bn, bg, br, ca, cs, da, de, el, en, eo, es, et, eu, fa, fr, ga, gl, fi, ha, he, hi, hr, hu, hy, id, it, ja, ko, la, lgg, lggo, lv, mr, my, nl, no, pa, pl, pt, ptbr, ro, ru, sk, sl, so, st, sv, sw, th, tl, tr, ur, vi, yo, zh, zu }
