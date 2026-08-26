import { test, expect } from '@playwright/test';

// Assertions 
test('Assertions', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await expect(page.locator('#user-name')).toBeVisible();
    await expect(page.locator('#password')).toBeEditable();
    // soft vecicka ze ak test zlyha aj tak to bude pokracovat dalej
    await expect.soft(page.locator('#password')).not.toBeEditable();
    await expect(page.locator('#login-button')).toHaveCount(1);
    await expect(page.locator('#skillmea')).not.toBeVisible();

    //toBe, toHave, toContain tiez mozeme pouzit
});
