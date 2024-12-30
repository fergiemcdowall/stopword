# stopword

`stopword` is a module for node and the browser that allows you to strip
stopwords from an input text. Covers 62 languages. [In natural language processing, "Stopwords" are words that are so frequent that they can safely be removed from a text without altering its meaning.](https://en.wikipedia.org/wiki/Stop_words)

All `.min` minified files are approximately 130 Kb each.

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![jsDelivr downloads](https://data.jsdelivr.com/v1/package/npm/stopword/badge?style=rounded)](https://www.jsdelivr.com/package/npm/stopword)
[![Build Status][CI-image]][CI-url]
[![JavaScript Style Guide][standardjs-image]][standardjs-url]
[![MIT License][license-image]][license-url]

[![wonderful day stopword module](https://github.com/fergiemcdowall/stopword/raw/main/demo/stopword-demo.gif)](https://fergiemcdowall.github.io/stopword/demo/)

Live [stopword browser demo](https://fergiemcdowall.github.io/stopword/demo/)

## Breaking change!

Language codes are changed from `ISO-639-1` (two characters) to `ISO-639-3` (three characters). This to have room for more small languages that wasn't specified in `ISO-639-1`.

If you haven't specified any stopword lists and just gone with the default (which is English), it should continue working without the need for any change.

## Getting the script in your environment

### CJS - CommonJS

Deconstruction require:
```javascript
const { removeStopwords, eng, fra } = require('stopword')
// 'removeStopwords', 'eng' and 'fra' available
```

Old style require:
```javascript
const sw = require('stopword')
// sw.removeStopwords and sw.<language codes> now available
```

### ESM - Ecmascript Modules
Deconstruction import:
```javascript
import { removeStopwords, eng, fra } from './dist/stopword.esm.mjs'
// 'removeStopwords', 'eng' and 'fra' available
```

Old style import:
```javascript
import * as sw from './dist/stopword.esm.mjs'
// 'sw.removeStopwords' + 'sw.<language codes>' available
```

### UMD - Script tag method

```html
<script src="https://cdn.jsdelivr.net/npm/stopword/dist/stopword.umd.min.js"></script>

<script>
// sw.removeStopwords and sw.<language codes> now available
</script>
```

### TypeScript

#### TypeScript with CJS
```ts
import * as sw from 'stopword'
// 'sw.removeStopwords' + 'sw.<language codes>' available
```

#### TypeScript with ESM
```ts
import { removeStopwords, eng, fra } from 'stopword'
// 'removeStopwords', 'eng' and 'fra' available
```

#### Install TypeScript types
`npm i @types/stopword --save-dev`

## Usage

### Default (English)

By default, `stopword` will strip an array of "meaningless" English words

```javaScript
const { removeStopwords } = require('stopword')
const oldString = 'a really Interesting string with some words'.split(' ')
const newString = removeStopwords(oldString)
// newString is now [ 'really', 'Interesting', 'string', 'words' ]

```

### Other languages

You can also specify a language other than English:
```javaScript
const { removeStopwords, swe } = require('stopword')
const oldString = 'Trädgårdsägare är beredda att pröva vad som helst för att bli av med de hatade mördarsniglarna åäö'.split(' ')
// swe contains swedish stopwords
const newString = removeStopwords(oldString, swe)
// newString is now [ 'Trädgårdsägare', 'beredda', 'pröva', 'helst', 'hatade', 'mördarsniglarna', 'åäö' ]
```

### Numbers

Extract numbers (korean script/characters) with module `words-n-numbers` and removing 0-9 'stopwords'

```javaScript
const { removeStopwords, _123 } = require('stopword')
const { extract, words, numbers } = require('words-n-numbers')
const oldString = '쾰른 대성당(독일어: Kölner Dom, 정식 명칭: Hohe Domkirche St. Peter)은 독일 쾰른에 있는 로마 가톨릭교회의 성당이다. 고딕 양식으로 지어졌다. 쾰른 대교구의 주교좌 성당이라 쾰른 주교좌 성당이라고도 불린다. 현재 쾰른 대교구의 교구장은 라이너 마리아 뵐키 추기경이다. 이 성당은 독일에서 가장 잘 알려진 건축물로, 성 바실리 대성당에 이어, 1996년 유네스코 세계유산으로 등재되었다. 유네스코에서는 쾰른 대성당을 일컬어 “인류의 창조적 재능을 보여주는 드문 작품”이라고 묘사하였다.[1] 매일 2만여 명의 관광객이 이 성당을 찾는다.[2]'
let newString = extract(oldString, { regex: [numbers] })
newString = removeStopwords(newString, _123)
// newString is now [ '1996' ]
})
```

### Custom list of stopwords

And last, but not least, it is possible to use your own, custom list of stopwords:
```javascript
const { removeStopwords } = require('stopword')
const oldString = 'you can even roll your own custom stopword list'.split(' ')
// Just add your own list/array of stopwords
const newString = removeStopwords(oldString, [ 'even', 'a', 'custom', 'stopword', 'list', 'is', 'possible']
// newString is now [ 'you', 'can', 'roll', 'your', 'own']
```

### Removing stopwords for i.e. two languages and a custom stopword list

With spread syntax you can easily combine several stopword arrays into one. Useful for situations where two langauages are used interchangeably. Or when you have certain words that are used in every document that is not in your existing stopword arrays.
```javascript
const { removeStopwords, eng, swe } = require('stopword')
const oldString = 'a really interesting string with some words trädgårdsägare är beredda att pröva vad som helst för att bli av med de hatade mördarsniglarna'.split(' ')
const customStopwords = ['interesting', 'really']
const newString = sw.removeStopwords(oldString, [...eng, ...swe, ...customStopwords]
// newString is now ['string', 'words', 'trädgårdsägare', 'beredda', 'pröva', 'helst', 'hatade', 'mördarsniglarna']
```


## API

### removeStopwords

Returns an Array that represents the text with the specified stopwords removed.

* `text` An array of words
* `stopwords` An array of stopwords

```javascript
const { removeStopwords } = require('stopword')
var text = removeStopwords(text[, stopwords])
// text is now an array of given words minus specified stopwords
```

### &lt;language code&gt;

Language codes follow [ISO 639-3 Language Code list](https://iso639-3.sil.org/code_tables/639/data/all). Arrays of stopwords for the following 62 languages are supplied:

* `_123` - 0-9 for different script (regular, Farsi, Korean and Myanmar)
* `afr` - Afrikaans
* `ara` - Arabic, Macrolanguage
* `hye` - Armenian
* `eus` - Basque
* `ben` - Bengali
* `bre` - Breton
* `bul` - Bulgarian
* `cat` - Catalan, Valencian 
* `zho` - Chinese, Macrolanguage
* `hrv` - Croatian
* `ces` - Czech
* `dan` - Danish
* `nld` - Dutch
* `eng` - English
* `epo` - Esperanto
* `est` - Estonian, Macrolanguage
* `fin` - Finnish
* `fra` - French
* `glg` - Galician
* `deu` - German
* `ell` - Greek, Modern
* `guj` - Gujarati
* `hau` - Hausa
* `heb` - Hebrew
* `hin` - Hindi
* `hun` - Hungarian
* `ind` - Indonesian
* `gle` - Irish
* `ita` - Italian
* `jpn` - Japanese
* `kor` - Korean
* `kur` - Kurdish, Macrolanguage
* `lat` - Latin
* `lav` - Latvian, Macrolanguage
* `lit` - Lithuanian
* `lgg` - Lugbara
* `lggNd` - Lugbara, No diacritics
* `msa` - Malay, Macrolanguage
* `mar` - Marathi
* `mya` - Myanmar (Burmese)
* `nob` - Norwegian bokmål
* `fas` - Persian (Farsi)
* `pol` - Polish
* `por` - Portuguese
* `porBr` - Portuguese-Brazilian
* `panGu` - Punjabi (Panjabi), Gurmukhi script
* `ron` - Romanian (Moldavian, Moldovan)
* `rus` - Russian
* `slk` - Slovak
* `slv` - Slovenian
* `som` - Somali
* `sot` - Sotho, Southern
* `spa` - Spanish
* `swa` - Swahili, Macrolanguage
* `swe` - Swedish
* `tgl` - Tagalog (Filipino)
* `tha` - Thai
* `tur` - Turkish
* `ukr` - Ukrainian
* `urd` - Urdu
* `vie` - Vietnamese
* `yor` - Yoruba
* `zul` - Zulu

#### Languages with no space between words

`jpn` Japanese, `tha` Thai and `zho` Chinese and some of the other languages supported have no space between words. For these languages you need to split the text into an array of words in another way than just `textString.split(' ')`. You can check out [SudachiPy](https://github.com/WorksApplications/sudachi.rs/tree/develop/python), [TinySegmenter](https://chasen.org/%7Etaku/software/TinySegmenter/) for Japanese and [chinese-tokenizer](https://github.com/yishn/chinese-tokenizer), [jieba](https://github.com/fxsjy/jieba), [pkuseg](https://github.com/lancopku/pkuseg-python) for Chinese.

## Your language missing?

If you can't find a stopword file for your language, you can try creating one with [`stopword-trainer`](https://github.com/eklem/stopword-trainer). We're happy to help you in the process.

## Contributions and licenses

Most of this work is from other projects and people, and wouldn't be possible without them. Thanks to among others the [stopwords-iso](https://github.com/stopwords-iso) project and the [more-stoplist](https://github.com/dohliam/more-stoplists) project. And thanks for all your code input: [@arthurdenner](https://github.com/arthurdenner), [@micalevisk](https://github.com/micalevisk), [@fabric-io-rodrigues](https://github.com/fabric-io-rodrigues), [@behzadmoradi](https://github.com/behzadmoradi), [@guysaar223](https://github.com/guysaar223), [@ConnorKrammer](https://github.com/ConnorKrammer), [@GreXLin85](https://github.com/GreXLin85), [@nanopx](https://github.com/nanopx), [@virtual](https://github.com/virtual), [@JustroX](https://github.com/JustroX), [@DavideViolante](https://github.com/DavideViolante), [@rodfeal](https://github.com/rodfeal), [@BLKSerene](https://github.com/BLKSerene), [@dsdenes](https://github.com/dsdenes), [msageryd](https://github.com/msageryd), [imposeren](https://github.com/imposeren) and [laygir](https://github.com/laygir)!

[Licenses](./dist/3rd-party.txt) for this library and all third party code.

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
[npm-url]: https://npmjs.org/package/stopword
[npm-version-image]: https://img.shields.io/npm/v/stopword.svg?style=flat
[npm-downloads-image]: https://img.shields.io/npm/dm/stopword.svg?style=flat
[CI-url]: https://github.com/fergiemcdowall/stopword/actions/workflows/tests.yml
[CI-image]: https://github.com/fergiemcdowall/stopword/actions/workflows/tests.yml/badge.svg
[standardjs-url]: https://standardjs.com
[standardjs-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=rounded
