import { test, expect } from '@playwright/test';

// Kompletne vygenerovany kod cez codegen
test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Selenium Online Training' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'Go To Registration' }).click();
  await page1.getByRole('button', { name: 'Send' }).click();
});