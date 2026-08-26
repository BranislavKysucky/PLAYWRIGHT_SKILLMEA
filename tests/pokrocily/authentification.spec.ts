import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://demoqa.com/login');
});

test.describe('Authentication', () => {
  test.use({ storageState: { cookies: [], origins: [] } });
  test.skip('Successful Login', async ({ page }) => {
    await page.getByText('inistuld').isVisible();
    expect(page.getByRole('button', { name: 'Log out' })).toBeVisible();
  });
});