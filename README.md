# stopword
`stopword` is a node module that allows you to strip stopwords from an
input text. [In natural language processing, "Stopwords" are words
that are so frequent that they can safely be removed from a text
without altering its
meaning.](https://en.wikipedia.org/wiki/Stop_words)


[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]
[![Build Status][travis-image]][travis-url]


## Usage

By default, `stopword` will strip an array of "meaningless" English words

```javascript
sw = require('stopword')
const oldString = 'a really Interesting string with some words'.split(' ')
const newString = sw.removeStopwords(oldString)
// newString is now [ 'really', 'Interesting', 'string', 'words' ]

```

You can also specify a language other than english:
```javascript
sw = require('stopword')
const oldString = 'Trädgårdsägare är beredda att pröva vad som helst för att bli av med de hatade mördarsniglarna åäö'.split(' ')
// sw.sv contains swedish stopwords
const newString = sw.removeStopwords(oldString, sw.sv)
// newString is now [ 'Trädgårdsägare', 'beredda', 'pröva', 'helst', 'hatade', 'mördarsniglarna', 'åäö' ]
```

## API

### &lt;language code&gt;

Arrays of stopwords for the following languages are supplied: da, en, es, fa, fr, it, ja, nl, no, pl, pt, ru, sv, zh

```javascript
sw = require('stopword')
norwegianStopwords = sw.no
// norwegianStopwords now contains an Array of norwgian stopwords
```


### removeStopwords

Returns an Array that represents the text with the specified stopwords removed.

* `text` An array of words
* `stopwords` An array of stopwords

```javascript
sw = require('stopword')
var text = sw.removeStopwords(text[, stopwords])
// text is now an array of given words minus specified stopwords
```


## Release Notes:

version 0.0.4, `removeStopwords` returns an Array, since this
removes ambiguity around separators.

version 0.1.0 `getStopwords` removed in favour of constants. `removeStopwords` takes text as an Array

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
[npm-url]: https://npmjs.org/package/stopword
[npm-version-image]: http://img.shields.io/npm/v/stopword.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/stopword.svg?style=flat
[travis-url]: http://travis-ci.org/fergiemcdowall/stopword
[travis-image]: http://img.shields.io/travis/fergiemcdowall/stopword.svg?style=flat
