import { afr } from './stopwords_afr.js'
import { ara } from './stopwords_ara.js'
import { hye } from './stopwords_hye.js'
import { eus } from './stopwords_eus.js'
import { ben } from './stopwords_ben.js'
import { bre } from './stopwords_bre.js'
import { bul } from './stopwords_bul.js'
import { cat } from './stopwords_cat.js'
import { zho } from './stopwords_zho.js'
import { hrv } from './stopwords_hrv.js'
import { ces } from './stopwords_ces.js'
import { dan } from './stopwords_dan.js'
import { nld } from './stopwords_nld.js'
import { eng } from './stopwords_eng.js'
import { epo } from './stopwords_epo.js'
import { est } from './stopwords_est.js'
import { fin } from './stopwords_fin.js'
import { fra } from './stopwords_fra.js'
import { glg } from './stopwords_glg.js'
import { deu } from './stopwords_deu.js'
import { ell } from './stopwords_ell.js'
import { hau } from './stopwords_hau.js'
import { heb } from './stopwords_heb.js'
import { hin } from './stopwords_hin.js'
import { es } from './stopwords_es.js'
import { gle } from './stopwords_gle.js'
import { hun } from './stopwords_hun.js'
import { ind } from './stopwords_ind.js'
import { ita } from './stopwords_ita.js'
import { jpn } from './stopwords_jpn.js'
import { kor } from './stopwords_kor.js'
import { lat } from './stopwords_lat.js'
import { lgg } from './stopwords_lgg.js'
import { lggo } from './stopwords_lggo.js'
import { lav } from './stopwords_lav.js'
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

export { removeStopwords, afr, ara, hye, eus, ben, bre, bul, cat, zho, hrv, ces, dan, nld, eng, epo, est, per, fin, fra, glg, deu, ell, hau, heb, hin, es, hun, ind, gle, ita, jpn, kor, lat, lav, lgg, lggo, mr, my, no, pa, pl, pt, ptbr, ro, ru, sk, sl, so, st, sv, sw, th, tl, tr, ur, vi, yo, zu }
// export { removeStopwords, af, ar, bn, bg, br, ca, cs, da, de, el, en, eo, es, et, eu, fa, fr, ga, gl, fi, ha, he, hi, hr, hu, hy, id, it, ja, ko, la, lgg, lggo, lv, mr, my, nl, no, pa, pl, pt, ptbr, ro, ru, sk, sl, so, st, sv, sw, th, tl, tr, ur, vi, yo, zh, zu }
