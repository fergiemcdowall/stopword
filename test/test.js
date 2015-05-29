//force travis build

var should = require('should');
var sw = require('../lib/stopword.js');

describe('Does stopword play nice?', function(){
  describe('general term-vectoriness:', function(){
    it('should remove stopwords', function(){
      var oldString = "a really interesting string with some words";
      var newString = sw.removeStopwords(oldString);
      newString.should.be.exactly('really interesting string words');
    }),
    it('should remove custom stopwords', function(){
      var oldString = "a really interesting string with some words";
      var newString = sw.removeStopwords(oldString, {
        stopwords: ['interesting']
      });
      newString.should.be.exactly('a really string with some words');
    }),
    it('should not remove any stopwords', function(){
      var oldString = "a really interesting string with some words";
      var newString = sw.removeStopwords(oldString, {
        stopwords: []
      });
      newString.should.be.exactly('a really interesting string with some words');
    }),
    it('should remove stopwords that have a non standard separator', function(){
      var oldString = "a.really,interesting string.with,some.words";
      var newString = sw.removeStopwords(oldString);
      newString.should.be.exactly('really interesting string words');
    }),
    it('should specify a custom input separator', function(){
      var oldString = "a-really-interesting-string-with-some words";
      var newString = sw.removeStopwords(oldString, {inputSeparator: '-'});
      newString.should.be.exactly('really interesting string some words');
    }),
    it('should specify a custom input and output separator', function(){
      var oldString = "a-really-interesting-string-with-some words";
      var newString = sw.removeStopwords(oldString, {
        inputSeparator: '-',
        outputSeparator: '+'
      });
      newString.should.be.exactly('really+interesting+string+some words');
    }),
    it('should remove norwegian stopwords', function(){
      var oldString = "dette er en tekst som har nørske tegn øæåø øæåø æææ";
      var norwegianSW = sw.getStopwords('no');
      var newString = sw.removeStopwords(oldString, {stopwords: norwegianSW});
      newString.should.be.exactly('tekst nørske tegn øæåø øæåø æææ');
    }),
    it('getStopwords should default to "en"', function(){
      var swDict = sw.getStopwords();
      swDict[0].should.be.exactly('about');
      swDict[1].should.be.exactly('after');
      swDict[2].should.be.exactly('all');
    })
  }),
  describe('error handling', function(){
    it('should return throw an error if specified language is not supported', function(){
      (function(){
        sw.getStopwords('xx')
      }).should.throw();
    })
  })
})
