# stopword

`stopword` is a node module that allows you to strip stopwords from an
input text. It is useful for text analysis.

## API

### getStopwords

Usage:
javascript```
getStopwords(language)
```

returns and array of stopwords for the given language.

Supported languages: en, es, fa, fr, it, ja, nl, no, pl, pt, ru, zh


### removeStopwords

Usage:
javascript```
removeStopwords(text[, options])
```

Returns a string that has had the specified stopwords removed, and the
seperator normalised to a specified value.

`options` is optional and can contain:

stopwords: an array of stopwords
inputSeparator: a speratator in the string.split() format used to
tokenise input
outputSeparator: a speratator in the string.join() format used to
tokenise output

