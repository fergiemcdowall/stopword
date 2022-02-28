const { chromium } = require('playwright')
const test = require('ava')
const browserPromise = chromium.launch({
  headless: true
  // slowMo: 350
})

const path = require('path')
async function pageMacro (t, callback) {
  const browser = await browserPromise
  const page = await browser.newPage()
  await page.setViewportSize({ width: 640, height: 480 })
  try {
    await callback(t, page)
  } finally {
    await page.close()
  }
}

test('1: Select english stopwords, type a sentence, check result. 2: Same for norwegian', pageMacro, async (t, page) => {
  // t.plan(2)
  const filePath = await path.resolve('./demo/index.html')
  const url = 'file://' + filePath

  // Go to demo
  await page.goto(url)

  // 1: Select english language and type a sentence
  await page.selectOption('select', 'eng')
  await page.click('#text')
  await page.keyboard.type('what a wonderful day for the stopword module it is')
  // TEST: check result
  let stopped = await (page.textContent('#stopwordsRemoved'))
  t.deepEqual(await stopped, 'wonderful day stopword module')

  // 2: select norwegian language, remove text and type sentence
  await page.selectOption('select', 'nob')
  await page.click('#text', {
    clickCount: 3
  })
  await page.keyboard.press('Backspace')
  await page.keyboard.type('for en fin dag det er for stoppordmodulen')
  // TEST: check result
  stopped = await (page.textContent('#stopwordsRemoved'))
  t.deepEqual(await stopped, 'fin dag stoppordmodulen')
})
