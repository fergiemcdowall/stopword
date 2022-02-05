import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to file:///Users/eklem/github_modules/stopword/demo/index.html
  await page.goto('file:///Users/eklem/github_modules/stopword/demo/index.html');

  // Click [placeholder="Add\ some\ text"]
  await page.click('[placeholder="Add\\ some\\ text"]');

  // Fill [placeholder="Add\ some\ text"]
  await page.fill('[placeholder="Add\\ some\\ text"]', 'noe tekst');

  // Click html
  await page.click('html');

  // Triple click [placeholder="Add\ some\ text"]
  await page.click('[placeholder="Add\\ some\\ text"]', {
    clickCount: 3
  });

});