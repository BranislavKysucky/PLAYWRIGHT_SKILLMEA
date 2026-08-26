# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> get started link
- Location: tests\example.spec.ts:12:6

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://youtube.com/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('has title', async ({ page }) => {
  4  |   await page.goto('/');
  5  |   page.pause();
  6  | 
  7  |   // Expect a title "to contain" a substring.
  8  |   await expect(page).toHaveTitle(/Playwright/);
  9  | });
  10 | 
  11 | test.use({baseURL: 'https://youtube.com'})
  12 | test.only('get started link', async ({ page }) => {
> 13 |   await page.goto('/');
     |              ^ Error: page.goto: Target page, context or browser has been closed
  14 | 
  15 |   // Click the get started link.
  16 |   await page.getByRole('link', { name: 'Get started' }).click();
  17 | 
  18 |   // Expects page to have a heading with the name of Installation.
  19 |   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  20 | });
  21 | 
```