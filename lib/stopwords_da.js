/*
Creative Commons – Attribution / ShareAlike 3.0 license
http://creativecommons.org/licenses/by-sa/3.0/

List based on frequently used words in subtitles in 2012.

Thanks to
opensubtitles.org
https://invokeit.wordpress.com/frequency-word-lists/#comment-9707
*/

// a list of commonly used words that have little meaning and can be excluded
// from analysis.
var words = [
  'er', 'jeg', 'det', 'du', 'ikke', 'i', 'at', 'en', 'og', 'har',
  'vi', 'til', 'på', 'hvad', 'med', 'mig', 'så', 'for', 'de', 'dig',
  'der', 'den', 'han', 'kan', 'af', 'vil', 'var', 'her', 'et', 'skal',
  'ved', 'nu', 'men', 'om', 'ja', 'som', 'nej', 'min', 'noget', 'ham',
  'hun', 'bare', 'kom', 'være', 'din', 'hvor', 'dem', 'ud', 'os', 'hvis',
  'må', 'se', 'godt', 'have', 'fra', 'ville', 'okay', 'lige', 'op', 'alle',
  'lad', 'hvorfor', 'sig', 'hvordan', 'få', 'kunne', 'eller', 'hvem', 'man', 'bliver',
  'havde', 'da', 'ingen', 'efter', 'når', 'alt', 'jo', 'to', 'mit', 'ind',
  'hej', 'aldrig', 'lidt', 'nogen', 'over', 'også', 'mand', 'far', 'skulle', 'selv',
  'får', 'hans', 'ser', 'vores', 'jer', 'sådan', 'dit', 'kun', 'deres', 'ned',
  'mine', 'komme', 'tage', 'denne', 'sige', 'dette', 'blive', 'helt', 'fordi',
  'end', 'tag', 'før', 'fik', 'dine',
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '_']

// tell the world about the noise words.
exports.words = words
