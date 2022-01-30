import { afr } from './stopwords_afr.js'
import { ara } from './stopwords_ara.js'
import { arm } from './stopwords_arm.js'
import { baq } from './stopwords_baq.js'
import { ben } from './stopwords_ben.js'
import { bre } from './stopwords_bre.js'
import { bul } from './stopwords_bul.js'
import { cat } from './stopwords_cat.js'
import { chi } from './stopwords_chi.js'
import { hrv } from './stopwords_hrv.js'
import { cze } from './stopwords_cze.js'
import { dan } from './stopwords_dan.js'
import { dut } from './stopwords_dut.js'
import { eng } from './stopwords_eng.js'
import { epo } from './stopwords_epo.js'
import { est } from './stopwords_est.js'
import { fin } from './stopwords_fin.js'
import { fre } from './stopwords_fre.js'
import { glg } from './stopwords_glg.js'
import { ger } from './stopwords_ger.js'
import { gre } from './stopwords_gre.js'
import { es } from './stopwords_es.js'
import { ga } from './stopwords_ga.js'
import { ha } from './stopwords_ha.js'
import { he } from './stopwords_he.js'
import { hi } from './stopwords_hi.js'
import { hu } from './stopwords_hu.js'
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
import { no } from './stopwords_no.js'
import { pa } from './stopwords_pa.js'
import { per } from './stopwords_per.js'
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
import { zu } from './stopwords_zu.js'

const defaultStopwords = eng

const removeStopwords = function (tokens, stopwords) {
  stopwords = stopwords || defaultStopwords
  if (typeof tokens !== 'object' || typeof stopwords !== 'object') {
    throw new Error('expected Arrays try: removeStopwords(Array[, Array])')
  }
  return tokens.filter(function (value) {
    return stopwords.indexOf(value.toLowerCase()) === -1
  })
}

export { removeStopwords, afr, ara, arm, baq, ben, bre, bul, cat, chi, hrv, cze, dan, dut, eng, epo, est, per, fin, fre, glg, ger, gre, es, ga, ha, he, hi, hu, id, it, ja, ko, la, lgg, lggo, lv, mr, my, no, pa, pl, pt, ptbr, ro, ru, sk, sl, so, st, sv, sw, th, tl, tr, ur, vi, yo, zu }
// export { removeStopwords, af, ar, bn, bg, br, ca, cs, da, de, el, en, eo, es, et, eu, fa, fr, ga, gl, fi, ha, he, hi, hr, hu, hy, id, it, ja, ko, la, lgg, lggo, lv, mr, my, nl, no, pa, pl, pt, ptbr, ro, ru, sk, sl, so, st, sv, sw, th, tl, tr, ur, vi, yo, zh, zu }
