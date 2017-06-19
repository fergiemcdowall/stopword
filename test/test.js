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
    const oldString = 'सूत्रों ने बताया कि ऊर्जा मंत्रालय के अंतर्गत काम करने वाले ब्यूरो ऑफ एनर्जी एफ़िशंसी एक योजना पर काम कर रहा है। मकसद ऐसे घरों को बढ़ावा देना है, जहां ऊर्जा का प्रभावशाली इस्तेमाल हो सके। यानी यहां रोशनी या कूलिंग के लिए संसाधनों की कम डिमांड विकसित की जा सके। इसी कोशिश के तहत, वर्तमान रेजिडेंशल इमारतों में भी नए उपकरणों का इस्तेमाल करके ऊर्जा के कम और प्रभावशाली इस्तेमाल को बढ़ावा देना है। बता दें कि मोदी सरकार की ओर से उजाला स्कीम ऊर्जा संसाधनों के बेहतर इस्तेमाल की दिशा में ही उठाया गया कदम है। इसके तहत सरकार ने पुराने फिलामेंट वाले और सीएफएल बल्बों को आधुनिक एलईडी लाइट्स से बदला है। बढ़ते शहरी दायरे और पर्यावरण पर पड़ते प्रभाव के मद्देनजर ECBC-R के जरिए सरकारी कोशिशों को नई ताकत मिलने की उम्मीद है। इससे प्रॉपर्टी सेक्टर में नौकरियां पैदा होने की भी पूरी गुंजाइश है।'.split(' ')
    const newString = sw.removeStopwords(oldString, sw.hi)
    newString.should.eql([ 'सूत्रों', 'ने', 'बताया', 'कि', 'ऊर्जा', 'मंत्रालय', 'के', 'अंतर्गत', 'काम', 'करने', 'वाले', 'ब्यूरो', 'ऑफ', 'एनर्जी', 'एफ़िशंसी', 'एक', 'योजना', 'पर', 'काम', 'कर', 'रहा', 'है।', 'मकसद', 'ऐसे', 'घरों', 'को', 'बढ़ावा', 'देना', 'है,', 'जहां', 'ऊर्जा', 'का', 'प्रभावशाली', 'इस्तेमाल', 'हो', 'सके।', 'यानी', 'यहां', 'रोशनी', 'या', 'कूलिंग', 'के', 'लिए', 'संसाधनों', 'की', 'कम', 'डिमांड', 'विकसित', 'की', 'जा', 'सके।', 'इसी', 'कोशिश', 'के', 'तहत,', 'वर्तमान', 'रेजिडेंशल', 'इमारतों', 'में', 'भी', 'नए', 'उपकरणों', 'का', 'इस्तेमाल', 'करके', 'ऊर्जा', 'के', 'कम', 'और', 'प्रभावशाली', 'इस्तेमाल', 'को', 'बढ़ावा', 'देना', 'है।', 'बता', 'दें', 'कि', 'मोदी', 'सरकार', 'की', 'ओर', 'से', 'उजाला', 'स्कीम', 'ऊर्जा', 'संसाधनों', 'के', 'बेहतर', 'इस्तेमाल', 'की', 'दिशा', 'में', 'ही', 'उठाया', 'गया', 'कदम', 'है।', 'इसके', 'तहत', 'सरकार', 'ने', 'पुराने', 'फिलामेंट', 'वाले', 'और', 'सीएफएल', 'बल्बों', 'को', 'आधुनिक', 'एलईडी', 'लाइट्स', 'से', 'बदला', 'है।', 'बढ़ते', 'शहरी', 'दायरे', 'और', 'पर्यावरण', 'पर', 'पड़ते', 'प्रभाव', 'के', 'मद्देनजर', 'ECBC-R', 'के', 'जरिए', 'सरकारी', 'कोशिशों', 'को', 'नई', 'ताकत', 'मिलने', 'की', 'उम्मीद', 'है।', 'इससे', 'प्रॉपर्टी', 'सेक्टर', 'में', 'नौकरियां', 'पैदा', 'की', 'भी', 'पूरी', 'गुंजाइश', 'है।' ])
  })

})

describe('error handling', function () {
  it('should return throw an error if specified language is not supported', function () {
    (function () {
      sw.getStopwords('xx')
    }).should.throw()
  })
})
