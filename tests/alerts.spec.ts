import { test, expect } from '@playwright/test';


test.describe('Alerts', () => {
    // beforeEach pred kazdym volanim zavola loginPage
    test.beforeEach(async ({ page }) => {
        await page.goto('https://demoqa.com/alerts');
    })


    test('Simple alert', async ({ page }) => {
        // listener ktory caka pri dialogovych oknach je to dobre
        page.on("dialog", async dialog => {
            await dialog.accept();
        })
        await page.locator('#alertButton').click();
    });

    test('Confirm alert', async ({ page }) => {
        // listener ktory caka pri dialogovych oknach je to dobre
        page.on("dialog", async dialog => {
            await dialog.dismiss();
        })
        await page.locator('#confirmButton').click();
        await expect(page.locator('#confirmResult')).toHaveText('You selected Cancel');
    });

        test('Promt alert', async ({ page }) => {
        // listener ktory caka pri dialogovych oknach je to dobre
        page.on("dialog", async dialog => {
            await dialog.accept('skillmea');
        })
        await page.locator('#promtButton').click();
        await expect(page.locator('#promptResult')).toHaveText('You entered skillmea');
    });
})




