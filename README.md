[![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-url] [![MIT License][license-image]][license-url] [![Build Status][travis-image]][travis-url]

# stopword

`stopword` is a node module that allows you to strip stopwords from an
input text. It is useful for text analysis.

Usage:
```javascript
sw = require('stopword')
const oldString = 'a really Interesting string with some words'.split(' ')
const newString = sw.removeStopwords(oldString)
// newString is [ 'really', 'Interesting', 'string', 'words' ]

```

You can also specify a language other than english:
```javascript
sw = require('stopword')
const oldString = 'Trädgårdsägare är beredda att pröva vad som helst för att bli av med de hatade mördarsniglarna åäö'.split(' ')
const newString = sw.removeStopwords(oldString, sw.sv)  // sw.sv contains swedish stopwords
// newString is now [ 'Trädgårdsägare', 'beredda', 'pröva', 'helst', 'hatade', 'mördarsniglarna', 'åäö' ]


## API

### <language code>

Array of stopwords for the following languages are supplied: da, en, es, fa, fr, it, ja, nl, no, pl, pt, ru, sv, zh

Usage:
```javascript
sw = require('stopword')
norwegianStopwords = sw.no // norwegianStopwords now contains an Array of norwgian stopwords
```

### removeStopwords

Usage:
```javascript
sw = require('stopword')
sw.removeStopwords(text[, stopwords])
```

Returns an Array that represents the text with the specified stopwords removed.

`text` An array of words
`text` An array of stopwords

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[npm-url]: https://npmjs.org/package/stopword
[npm-version-image]: http://img.shields.io/npm/v/stopword.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/stopword.svg?style=flat

[travis-url]: http://travis-ci.org/fergiemcdowall/stopword
[travis-image]: http://img.shields.io/travis/fergiemcdowall/stopword.svg?style=flat


## Release Notes:

version 0.0.4, `removeStopwords` returns an Array, since this
removes ambiguity around separators.

version 0.1.0 `getStopwords` removed in favour of
constants. `removeStopwords` takes text as an Array
