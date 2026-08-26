import { test, expect } from '@playwright/test';

// npx playwright test --debug  - zapne sa debugMod

test.describe('Tabs', () => {

    test('Multi tabs', async ({ page, context }) => {
        await page.goto('https://demoqa.com')
        // create second tab
        const newTab = await context.newPage();
        await newTab.goto("https://saucedemo.com")
        // bring demoqa to the front
        await page.bringToFront();

        await newTab.locator('#login-button').click();
        await newTab.close();
    });
})




