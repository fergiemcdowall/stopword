import { _123 } from './stopwords__123.js'
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
import { guj } from './stopwords_guj.js'
import { hau } from './stopwords_hau.js'
import { heb } from './stopwords_heb.js'
import { hin } from './stopwords_hin.js'
import { gle } from './stopwords_gle.js'
import { hun } from './stopwords_hun.js'
import { ind } from './stopwords_ind.js'
import { ita } from './stopwords_ita.js'
import { jpn } from './stopwords_jpn.js'
import { kor } from './stopwords_kor.js'
import { kur } from './stopwords_kur.js'
import { lat } from './stopwords_lat.js'
import { lav } from './stopwords_lav.js'
import { lit } from './stopwords_lit.js'
import { lgg } from './stopwords_lgg.js'
import { lggNd } from './stopwords_lggNd.js'
import { msa } from './stopwords_msa.js'
import { mar } from './stopwords_mar.js'
import { mya } from './stopwords_mya.js'
import { nob } from './stopwords_nob.js'
import { panGu } from './stopwords_panGu.js'
import { fas } from './stopwords_fas.js'
import { pol } from './stopwords_pol.js'
import { por } from './stopwords_por.js'
import { porBr } from './stopwords_porBr.js'
import { ron } from './stopwords_ron.js'
import { rus } from './stopwords_rus.js'
import { slk } from './stopwords_slk.js'
import { slv } from './stopwords_slv.js'
import { som } from './stopwords_som.js'
import { sot } from './stopwords_sot.js'
import { spa } from './stopwords_spa.js'
import { swa } from './stopwords_swa.js'
import { swe } from './stopwords_swe.js'
import { tha } from './stopwords_tha.js'
import { tgl } from './stopwords_tgl.js'
import { tur } from './stopwords_tur.js'
import { ukr } from './stopwords_ukr.js'
import { urd } from './stopwords_urd.js'
import { vie } from './stopwords_vie.js'
import { yor } from './stopwords_yor.js'
import { zul } from './stopwords_zul.js'

const defaultStopwords = eng

const removeStopwords = function (tokens, stopwords, options = { caseSensitive: false }) {
  stopwords = stopwords || defaultStopwords
  if (typeof tokens !== 'object' || typeof stopwords !== 'object') {
    throw new Error('expected Arrays try: removeStopwords(Array[, Array])')
  }
  return tokens.filter(function (value) {

    if (options.caseSensitive) {
      return stopwords.indexOf(value.toLowerCase()) === -1
    } else {
      return stopwords.indexOf(value) === -1
    }

  })
}

export { removeStopwords, _123, afr, ara, hye, eus, ben, bre, bul, cat, zho, hrv, ces, dan, nld, eng, epo, est, fin, fra, glg, deu, ell, guj, hau, heb, hin, hun, ind, gle, ita, jpn, kor, kur, lat, lav, lit, lgg, lggNd, msa, mar, mya, nob, fas, pol, por, porBr, panGu, ron, rus, slk, slv, som, sot, spa, swa, swe, tha, tgl, tur, urd, ukr, vie, yor, zul }
