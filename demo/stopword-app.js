const languageSelect = document.getElementById('languages')
const sentenceInput = document.getElementById('text')
const resultText = document.getElementById('stopwordsRemoved')

function updateSentence () {
  const language = languageSelect.value
  const oldString = sentenceInput.value.split(' ')
  const newString = sw.removeStopwords(oldString, sw[language]).join(' ')
  console.group('Stopwords applied')
  console.log('oldString:', oldString.join(' '))
  console.log('newString:', newString)
  console.groupEnd()

  // Populate with only meaningful words
  resultText.textContent = newString
}

// Listen to events and initiate a stopword removal
sentenceInput.addEventListener('keyup', updateSentence)

// Configure the language select
const allLanguages = Object.entries(sw)
  .filter(([key, val]) => Array.isArray(val))
  .map((val) => val[0])

languageSelect.addEventListener('change', function (event) {
  languageSelect.value = event.target.value
  sentenceInput.focus()
  updateSentence()
})

languageSelect.innerHTML = allLanguages
  .map((lang) => `<option value=${lang}>${lang}</option>`)
  .join('')

languageSelect.value = 'en'
