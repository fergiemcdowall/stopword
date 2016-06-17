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
  'jag', 'det', 'är', 'du', 'inte', 'att', 'en', 'och', 'har', 'vi',
  'på', 'i', 'för', 'han', 'vad', 'med', 'mig', 'som', 'här', 'om',
  'dig', 'var', 'den', 'så', 'till', 'kan', 'de', 'ni', 'ska', 'ett',
  'men', 'av', 'vill', 'nu', 'ja', 'nej', 'bara', 'hon', 'hur', 'min',
  'där', 'honom', 'kom', 'din', 'då', 'när', 'ha', 'er', 'ta', 'ut',
  'får', 'man', 'vara', 'oss', 'dem', 'eller', 'varför', 'alla', 'från', 'upp',
  'igen', 'sa', 'hade', 'allt', 'in', 'sig', 'ingen', 'henne', 'vem', 'mitt',
  'nåt', 'blir', 'än', 'bli', 'ju', 'två', 'tar', 'hans', 'ditt', 'mina',
  'åt', 'väl', 'också', 'nån', 'låt', 'detta', 'va', 'dina', 'dom', 'blev',
  'inga', 'sin', 'just', 'många', 'vart', 'vilken', 'ur', 'ens', 'sitt', 'e',
  'jo', 'era', 'deras', 'fem', 'sex', 'denna', 'vilket', 'fyra', 'vårt', 'emot',
  'tio', 'ert', 'sju', 'åtta', 'nånting', 'ned', 'ers', 'nio', 'mej',
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '_']

// tell the world about the noise words.
exports.words = words
