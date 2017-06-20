/* global describe */
/* global it */

const should = require('should')
const sw = require('../lib/stopword.js')

describe('general stopwordiness:', function () {
  it('should remove stopwords, should default to english, should preserve case', function () {
    const oldString = 'a really Interesting string with some words'.split(' ')
    const newString = sw.removeStopwords(oldString)
    should.exist(sw.removeStopwords(oldString))
    newString.should.eql([ 'really', 'Interesting', 'string', 'words' ])
  })

  it('should remove custom stopwords', function () {
    const oldString = 'a really interesting string with some words'.split(' ')
    const newString = sw.removeStopwords(oldString, ['interesting'])
    newString.should.eql([ 'a', 'really', 'string', 'with', 'some', 'words' ])
  })

  it('should not remove any stopwords', function () {
    const oldString = 'a really interesting string with some words'.split(' ')
    const newString = sw.removeStopwords(oldString, [])
    newString.should.eql([ 'a', 'really', 'interesting', 'string', 'with', 'some', 'words' ])
  })

  it('should remove stopwords that have a non standard separator', function () {
    const oldString = 'a.really,interesting string.with,some.words'.split(/[\\., ]+/)
    const newString = sw.removeStopwords(oldString)
    newString.should.eql([ 'really', 'interesting', 'string', 'words' ])
  })

  it('should specify a custom input separator', function () {
    const oldString = 'a-really-interesting-string-with-some words'.split('-')
    const newString = sw.removeStopwords(oldString)
    newString.should.eql([ 'really', 'interesting', 'string', 'some words' ])
  })

  it('should remove norwegian stopwords', function () {
    const oldString = 'dette er en tekst som har nørske tegn øæåø øæåø æææ'.split(' ')
    const newString = sw.removeStopwords(oldString, sw.no)
    newString.should.eql([ 'tekst', 'nørske', 'tegn', 'øæåø', 'øæåø', 'æææ' ])
  })

  it('should remove swedish stopwords and preserve case', function () {
    const oldString = 'Trädgårdsägare är beredda att pröva vad som helst för att bli av med de hatade mördarsniglarna åäö'.split(' ')
    const newString = sw.removeStopwords(oldString, sw.sv)
    newString.should.eql([ 'Trädgårdsägare', 'beredda', 'pröva', 'helst', 'hatade', 'mördarsniglarna', 'åäö' ])
  })

  it('should remove danish stopwords', function () {
    const oldString = 'gæsterne i musikhuset i aarhus bør fremover sende en venlig tanke til den afdøde købmand herman salling når de skal til koncert eller se teater i det aarhusianske kulturhus æøå'.split(' ')
    const newString = sw.removeStopwords(oldString, sw.da)
    newString.should.eql([ 'gæsterne', 'musikhuset', 'aarhus', 'bør', 'fremover', 'sende', 'venlig', 'tanke', 'afdøde', 'købmand', 'herman', 'salling', 'koncert', 'teater', 'aarhusianske', 'kulturhus', 'æøå' ])
  })

  it('should remove hindu stopwords', function () {
    const oldString = 'केंद्र सरकार पर्यावरण के माकूल घरों ग्रीन होम्स को बढ़ावा देने की दिशा में गंभीरता से सोच रही है। ग्रीन हाउसिंग सोसायटी डिवेलप करने के लिए सरकार सस्ते लोन'.split(' ')
    const newString = sw.removeStopwords(oldString, sw.hi)
    newString.should.eql([ 'केंद्र', 'सरकार', 'पर्यावरण', 'माकूल', 'घरों', 'ग्रीन', 'होम्स', 'बढ़ावा', 'देने', 'दिशा', 'गंभीरता', 'सोच', 'रही', 'है।', 'ग्रीन', 'हाउसिंग', 'सोसायटी', 'डिवेलप', 'सरकार', 'सस्ते', 'लोन' ])
  })

  it('should remove spanish stopwords', function () {
    const oldString = 'los investigadores han analizado el adn de los restos de unos 200 gatos tomados de momias egipcias yacimientos vikingos y cuevas de la edad de piedra entre otros lugares variopintos'.split(' ')
    const newString = sw.removeStopwords(oldString, sw.es)
    newString.should.eql([ 'investigadores', 'han', 'analizado', 'adn', 'restos', 'unos', '200', 'gatos', 'tomados', 'momias', 'egipcias', 'yacimientos', 'vikingos', 'cuevas', 'edad', 'piedra', 'entre', 'otros', 'lugares', 'variopintos' ])
  })

  it('should remove japanese stopwords after being tokenised', function () {
    const oldString = '今 回作っ た リスト で は 校正 待ち と なっ て いる 作品 を 抽出 し 作者 や 作品 名 で の 検索 の ほか 作品 の 長さ さまざまな 理由 で 機械 的 に 処理 でき なかっ た もの は に なっ て しまっ て い ます が やいつ から 校正 待ち に なっ て いる か で 並べ替え が できる よう に し まし た'.split(' ')
    const newString = sw.removeStopwords(oldString, sw.ja)
    newString.should.eql([ '今', '回作っ', 'リスト', '校正', '待ち', '作品', '抽出', '作者', '作品', '名', '検索', '作品', '長さ', 'さまざまな', '理由', '機械', '的', '処理', 'しまっ', 'やいつ', '校正', '待ち', '並べ替え', 'まし' ])
  })

  it('should remove french stopwords', function () {
    const oldString = 'personne à commencer par theresa may n’aurait jamais imaginé une atmosphère aussi plombée un accablement collectif aussi manifeste pour ce qui devait être un jour de gloire'.split(' ')
    const newString = sw.removeStopwords(oldString, sw.fr)
    newString.should.eql([ 'personne', 'commencer', 'theresa', 'may', 'n’aurait', 'jamais', 'imaginé', 'atmosphère', 'aussi', 'plombée', 'accablement', 'collectif', 'aussi', 'manifeste', 'devait', 'jour', 'gloire' ])
  })

  it('should remove italian stopwords', function () {
    const oldString = 'la distruzione del califfato è ancora in corso ma già si è aperta la nuova fase nel duello fra stati uniti e russia in medio oriente'.split(' ')
    const newString = sw.removeStopwords(oldString, sw.it)
    newString.should.eql([ 'distruzione', 'califfato', 'ancora', 'corso', 'già', 'aperta', 'nuova', 'fase', 'duello', 'fra', 'stati', 'uniti', 'russia', 'medio', 'oriente' ])
  })

  // Right to Left languages. 
  it('should remove farsi stopwords and preserve case', function () {
    const oldString = 'در این بیانیه آمده است که اتو قادر به صحبت کردن، قادر به دیدن و قادر به عکس العمل نشان دادن به درخواست های شفاهی نبود'.split(' ')
    const newString = sw.removeStopwords(oldString, sw.fa)
    newString.should.eql([ 'در' ,'این' ,'بیانیه' ,'آمده' ,'است' ,'که' ,'اتو' ,'قادر' ,'به' ,'صحبت' ,'کردن،' ,'قادر' ,'به' ,'دیدن' ,'قادر' ,'به', 'عکس' ,'العمل' ,'نشان' ,'دادن' ,'به' ,'درخواست' ,'های' ,'شفاهی' ,'نبود' ])
  })

})

describe('error handling', function () {
  it('should return throw an error if specified language is not supported', function () {
    (function () {
      sw.getStopwords('xx')
    }).should.throw()
  })
})
