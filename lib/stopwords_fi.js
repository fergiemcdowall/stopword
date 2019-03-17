/* The MIT License (MIT)
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

/* A list of commonly used words that have little meaning and can be excluded
from analysis.
This list is frequency sorted. That means it can be sliced from the bottom
and be less agressive in excluding stopwords */

var words =[
  "0",
  "ja",
  "on",
  "1",
  "oli",
  "hän",
  "vuonna",
  "2",
  "myös",
  "joka",
  "3",
  "se",
  "sekä",
  "sen",
  "mutta",
  "4",
  "ei",
  "ovat",
  "hänen",
  "n",
  "kanssa",
  "vuoden",
  "jälkeen",
  "että",
  "5",
  "s",
  "tai",
  "jonka",
  "jossa",
  "6",
  "mukaan",
  "kun",
  "muun",
  "muassa",
  "hänet",
  "olivat",
  "kuitenkin",
  "noin",
  "vuosina",
  "7",
  "aikana",
  "lisäksi",
  "kaksi",
  "kuin",
  "ollut",
  "the",
  "myöhemmin",
  "8",
  "eli",
  "10",
  "vain",
  "teki",
  "mm",
  "jotka",
  "ennen",
  "ensimmäinen",
  "a",
  "9",
  "jo",
  "kuten",
  "yksi",
  "ensimmäisen",
  "vastaan",
  "tämän",
  "vuodesta",
  "sitä",
  "000",
  "voi",
  "luvun",
  "luvulla",
  "of",
  "ole",
  "kauden",
  "osa",
  "esimerkiksi",
  "jolloin",
  "yli",
  "de",
  "kaudella",
  "eri",
  "sillä",
  "kolme",
  "he",
  "vuotta"
]

exports.words = words