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
    const oldString = 'केंद्र सरकार पर्यावरण के माकूल घरों ग्रीन होम्स को बढ़ावा देने की दिशा में गंभीरता से सोच रही है। ग्रीन हाउसिंग सोसायटी डिवेलप करने के लिए सरकार सस्ते लोन और कम रजिस्ट्रेशन फीस जैसी सुविधाएं देगी। क्लाइमेट चेंज से लड़ने की दिशा में केंद्र इस तरह की रिहायशी कॉलोनियां विकसित करने की दिशा में सोच रही है। बता दें कि ग्रीन होम्स वे घर हैं, जो पर्यावरण को ध्यान में रखकर विकसित किए जाते हैं। इनमें पर्यावरण के नजरिए से एनर्जी जल संसाधन और बिल्डिंग मटीरियल्स का प्रभावशाली इस्तेमाल किया जाता है। सरकारी सूत्रों ने बताया कि ग्रीन होम्स को बढ़ावा देने के लिए ही इससे जुड़े नियम-कायदे यानी एनर्जी कंजर्वेशन बिल्डिंग कोड फॉर रेजिडेंशल सेक्टर तैयार किया जा चुका है। ये नियम में सरकारी और कमर्शल इमारतों से संबंधित कोड की तर्ज पर ही हैं। ऊर्जा मंत्री पीयूष गोयल सोमवार को पेश कर सकते हैं। इसे भारतीय रीयल्टी सेक्टर में इको फ्रेंडली निर्माण की दिशा में बड़ा कदम माना जा सकता है। सूत्रों ने बताया कि ऊर्जा मंत्रालय के अंतर्गत काम करने वाले ब्यूरो ऑफ एनर्जी एफ़िशंसी एक योजना पर काम कर रहा है। मकसद ऐसे घरों को बढ़ावा देना है जहां ऊर्जा का प्रभावशाली इस्तेमाल हो सके। यानी यहां रोशनी या कूलिंग के लिए संसाधनों की कम डिमांड विकसित की जा सके। इसी कोशिश के तहत वर्तमान रेजिडेंशल इमारतों में भी नए उपकरणों का इस्तेमाल करके ऊर्जा के कम और प्रभावशाली इस्तेमाल को बढ़ावा देना है।'.split(' ')
    const newString = sw.removeStopwords(oldString, sw.hi) 
    newString.should.eql([ 'है।' ])
  })

})

describe('error handling', function () {
  it('should return throw an error if specified language is not supported', function () {
    (function () {
      sw.getStopwords('xx')
    }).should.throw()
  })
})
