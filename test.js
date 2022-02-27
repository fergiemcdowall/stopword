const { extract, words } = require('words-n-numbers')
const { removeStopwords, ukr } = require('./dist/stopword.cjs.js')

const stringOfWords = '24 лютого 2022 року Росія відкрито напала на Україну. Військова кампанія почалася після тривалого військового нарощування, визнання Росією терористичних квазідержав «ДНР» та «ЛНР» як державних утворень 21 лютого. Практично одночасно ЗС РФ почали неприховане перекидання військ на окуповані території Донбасу.'
let newStringOfWords = extract(stringOfWords, { regex: [words], toLowercase: true })
console.log(newStringOfWords)
console.log(newStringOfWords.length)

newStringOfWords = removeStopwords(newStringOfWords, ukr)
console.log(newStringOfWords)
console.log(newStringOfWords.length)

console.log(ukr.length)
