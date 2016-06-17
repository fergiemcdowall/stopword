/* global describe */
/* global it */

var should = require('should')
var sw = require('../lib/stopword.js')

describe('general stopwordiness:', function () {
  it('should remove stopwords', function () {
    var oldString = 'a really interesting string with some words'
    var newString = sw.removeStopwords(oldString)
    should.exist(sw.removeStopwords(oldString))
    newString.should.eql([ 'really', 'interesting', 'string', 'words' ])
  })

  it('should remove custom stopwords', function () {
    var oldString = 'a really interesting string with some words'
    var newString = sw.removeStopwords(oldString, {
      stopwords: ['interesting']
    })
    newString.should.eql([ 'a', 'really', 'string', 'with', 'some', 'words' ])
  })

  it('should not remove any stopwords', function () {
    var oldString = 'a really interesting string with some words'
    var newString = sw.removeStopwords(oldString, {
      stopwords: []
    })
    newString.should.eql([ 'a', 'really', 'interesting', 'string', 'with', 'some', 'words' ])
  })

  it('should remove stopwords that have a non standard separator', function () {
    var oldString = 'a.really,interesting string.with,some.words'
    var newString = sw.removeStopwords(oldString)
    newString.should.eql([ 'really', 'interesting', 'string', 'words' ])
  })

  it('should specify a custom input separator', function () {
    var oldString = 'a-really-interesting-string-with-some words'
    var newString = sw.removeStopwords(oldString, {inputSeparator: '-'})
    newString.should.eql([ 'really', 'interesting', 'string', 'some words' ])
  })

  it('should remove norwegian stopwords', function () {
    var oldString = 'dette er en tekst som har nørske tegn øæåø øæåø æææ'
    var norwegianSW = sw.getStopwords('no')
    var newString = sw.removeStopwords(oldString, {stopwords: norwegianSW})
    newString.should.eql([ 'tekst', 'nørske', 'tegn', 'øæåø', 'øæåø', 'æææ' ])
  })

  it('should remove swedish stopwords', function () {
    var oldString = 'Trädgårdsägare är beredda att pröva vad som helst för att bli av med de hatade mördarsniglarna åäö'
    var swedishSW = sw.getStopwords('sv')
    var newString = sw.removeStopwords(oldString, {stopwords: norwegianSW})
    newString.should.eql([ 'Trädgårdsägare', 'beredda', 'pröva', 'helst', 'hatade', 'mördarsniglarna', 'åäö' ])
  })

  it('getStopwords should default to "en"', function () {
    var swDict = sw.getStopwords()
    swDict[0].should.be.exactly('about')
    swDict[1].should.be.exactly('after')
    swDict[2].should.be.exactly('all')
  })
})

describe('error handling', function () {
  it('should return throw an error if specified language is not supported', function () {
    (function () {
      sw.getStopwords('xx')
    }).should.throw()
  })
})
