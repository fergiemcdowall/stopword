const sw = require('../lib/stopword.js')
const test = require('tape')


test('remove stopwords, default to english and preserve case', function (t) {
  t.plan(1);
  const oldString = 'a really Interesting string with some words'.split(' ')
  const newString = sw.removeStopwords(oldString)
  t.looseEqual(newString, [ 'really', 'Interesting', 'string', 'words' ]);
})

test('remove custom stopwords', function (t) {
  t.plan(1);
  const oldString = 'a really interesting string with some words'.split(' ')
  const newString = sw.removeStopwords(oldString, ['interesting'])
  t.looseEqual(newString, [ 'a', 'really', 'string', 'with', 'some', 'words' ]);
})