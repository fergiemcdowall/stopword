[![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-url] [![MIT License][license-image]][license-url] [![Build Status][travis-image]][travis-url]

# stopword

`stopword` is a node module that allows you to strip stopwords from an
input text. It is useful for text analysis.

## API

### getStopwords

Usage:
```javascript
getStopwords(language)
```

returns and array of stopwords for the given language.

Supported languages: en, es, fa, fr, it, ja, nl, no, pl, pt, ru, zh


### removeStopwords

Usage:
```javascript
removeStopwords(text[, options])
```

Returns a string that has had the specified stopwords removed, and the
seperator normalised to a specified value.

`options` (optional) is an object and can contain 0 or more of the following:

* `stopwords`: an array of stopwords
* `inputSeparator`: a speratator in the string.split() format used to
tokenise input
* `outputSeparator`: a speratator in the string.join() format used to
tokenise output

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[npm-url]: https://npmjs.org/package/stopword
[npm-version-image]: http://img.shields.io/npm/v/stopword.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/stopword.svg?style=flat

[travis-url]: http://travis-ci.org/fergiemcdowall/stopword
[travis-image]: http://img.shields.io/travis/fergiemcdowall/stopword.svg?style=flat
