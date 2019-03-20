/*
Copyright (c) 2011, Polyakov Vladimir, Chris Umbel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

// a list of commonly used words that have little meaning and can be excluded
// from analysis.
var words = ['и', 'в', 'во', 'не', 'что', 'он', 'на', 'я', 'с', 'со', 'как',
'а', 'то', 'все', 'она', 'так', 'его', 'но', 'да', 'ты', 'к', 'у', 'же', 'вы',
 'за', 'бы', 'по', 'только', 'ее', 'мне', 'было', 'вот', 'от', 'меня', 'еще',
 'нет', 'о', 'из', 'ему', 'теперь', 'когда', 'даже', 'ну', 'ли', 'если', 'уже',
 'или', 'ни', 'быть', 'был', 'него', 'до', 'вас', 'нибудь', 'уж', 'вам',
 'сказал', 'ведь', 'там', 'потом', 'себя', 'ничего', 'ей', 'может', 'они',
 'тут', 'где', 'есть', 'надо', 'ней', 'для', 'мы', 'тебя', 'их', 'чем', 'была',
 'сам', 'чтоб', 'без', 'будто', 'чего', 'раз', 'тоже', 'себе', 'под', 'будет',
 'ж', 'тогда', 'кто', 'этот', 'того', 'потому', 'этого', 'какой', 'совсем',
 'ним', 'этом', 'почти', 'мой', 'тем', 'чтобы', 'нее', 'были', 'куда', 'всех',
 'никогда', 'сегодня', 'можно', 'при', 'об', 'другой', 'хоть', 'после', 'над',
 'больше', 'тот', 'через', 'эти', 'нас', 'про', 'всего', 'них', 'какая',
 'много', 'разве', 'эту', 'моя', 'свою', 'этой', 'перед', 'иногда', 'лучше',
 'чуть', 'том', 'нельзя', 'такой', 'им', 'более', 'всегда', 'конечно', 'всю',
 'между', 'это', 'лишь']

// tell the world about the noise words.
exports.words = words
