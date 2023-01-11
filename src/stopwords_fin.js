/*
The MIT License (MIT)
Copyright (c) 2018 Espen Klem

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

/* This list is frequency sorted. That means it can be sliced from the bottom
and be less agressive in excluding stopwords */

const fin = [
  'ja',
  'on',
  'oli',
  'hän',
  'vuonna',
  'myös',
  'joka',
  'se',
  'sekä',
  'sen',
  'mutta',
  'ei',
  'ovat',
  'hänen',
  'n',
  'kanssa',
  'vuoden',
  'jälkeen',
  'että',
  's',
  'tai',
  'jonka',
  'jossa',
  'mukaan',
  'kun',
  'muun',
  'muassa',
  'hänet',
  'olivat',
  'kuitenkin',
  'noin',
  'vuosina',
  'aikana',
  'lisäksi',
  'kaksi',
  'kuin',
  'ollut',
  'the',
  'myöhemmin',
  'eli',
  'vain',
  'teki',
  'mm',
  'jotka',
  'ennen',
  'ensimmäinen',
  'a',
  '9',
  'jo',
  'kuten',
  'yksi',
  'ensimmäisen',
  'vastaan',
  'tämän',
  'vuodesta',
  'sitä',
  'voi',
  'luvun',
  'luvulla',
  'of',
  'ole',
  'kauden',
  'osa',
  'esimerkiksi',
  'jolloin',
  'yli',
  'de',
  'kaudella',
  'eri',
  'sillä',
  'kolme',
  'he',
  'vuotta'
]
export { fin }
