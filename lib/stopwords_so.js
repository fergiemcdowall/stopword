/* Copyright 2016 Liam Doherty

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* A list of commonly used words that have little meaning and can be excluded
from analysis.
This list is frequency sorted. That means it can be sliced from the bottom
and be less agressive in excluding stopwords */

var words = [
  'oo', 'atabo', 'ay', 'ku', 'waxeey', 'uu', 'lakin', 'si', 'ayuu', 'soo',
  'waa', 'ka', 'kasoo', 'kale', 'waxuu', 'ayee', 'ayaa', 'kuu', 'isku', 'ugu',
  'jiray', 'dhan', 'dambeestii', 'inuu', 'in', 'jirtay', 'uheestay', 'aad',
  'uga', 'hadana', 'timaado', 'timaaday'
]


// Tell the world about the noise words.
exports.words = words
