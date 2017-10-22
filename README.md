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

### Default (English)
By default, `stopword` will strip an array of "meaningless" English words

```javascript
sw = require('stopword')
const oldString = 'a really Interesting string with some words'.split(' ')
const newString = sw.removeStopwords(oldString)
// newString is now [ 'really', 'Interesting', 'string', 'words' ]

```

### Other languages
You can also specify a language other than English:
```javascript
sw = require('stopword')
const oldString = 'Trädgårdsägare är beredda att pröva vad som helst för att bli av med de hatade mördarsniglarna åäö'.split(' ')
// sw.sv contains swedish stopwords
const newString = sw.removeStopwords(oldString, sw.sv)
// newString is now [ 'Trädgårdsägare', 'beredda', 'pröva', 'helst', 'hatade', 'mördarsniglarna', 'åäö' ]
```

### Custom list of stopwords
And last, but not least, it is possible to use your own, custom list of stopwords:
```javascript
sw = require('stopword')
const oldString = 'you can even roll your own custom stopword list'.split(' ')
// Just add your own list/array of stopwords
const newString = sw.removeStopwords(oldString, [ 'even', 'a', 'custom', 'stopword', 'list', 'is', 'possible']
// newString is now [ 'you', 'can', 'roll', 'your', 'own']
```

## API

### &lt;language code&gt;

Arrays of stopwords for the following languages are supplied: 

* `ar` - Modern Standard Arabic
* `bn` - Bengali
* `br` - Brazilian Portuguese
* `da` - Danish
* `de` - German
* `en` - English
* `es` - Spanish
* `fa` - Farsi
* `fr` - French
* `hi` - Hindi
* `it` - Italian
* `ja` - Japanese
* `nl` - Dutch
* `no` - Norwegian
* `pl` - Polish
* `pt` - Portuguese
* `ru` - Russian
* `sv` - Swedish
* `zh` - Chinese Simplified

```javascript
sw = require('stopword')
norwegianStopwords = sw.no
// norwegianStopwords now contains an Array of norwgian stopwords
```

#### Languages with no space between words
`ja` Japanese and `zh` Chinese Simplified have no space between words. For these languages you need to split the text into words before feeding it to the `stopword` module. You can check out [TinySegmenter](http://chasen.org/%7Etaku/software/TinySegmenter/) for Japanese and [chinese-tokenizer](https://github.com/yishn/chinese-tokenizer) for Chinese.

#### Your language missing?
If you can't find a stopword file for your language, you can try creating one with [`stopword-trainer`](https://github.com/eklem/stopword-trainer).

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

version 0.1.2 Updated to ES6 simplified syntax

version 0.1.5 Making syntax ES5 compatible again

version 0.1.7 Brazilian Portuguese added

version 0.1.8 Documenting how to use custom stopword lists

version 0.1.9 Longer Brazilian Portugese stopword list w/ duplicates removed

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
[npm-url]: https://npmjs.org/package/stopword
[npm-version-image]: http://img.shields.io/npm/v/stopword.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/stopword.svg?style=flat
[travis-url]: http://travis-ci.org/fergiemcdowall/stopword
[travis-image]: http://img.shields.io/travis/fergiemcdowall/stopword.svg?style=flat
