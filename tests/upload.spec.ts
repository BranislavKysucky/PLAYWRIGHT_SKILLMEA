import { test, expect } from '@playwright/test';


test.describe('Upload', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://demoqa.com/upload-download');
    })


    test('Upload file', async ({ page }) => {
     await page.locator('#uploadFile').setInputFiles(['./sampleFile.jpeg'])
     await expect(page.locator('#uploadedFileBath')).toBeVisible;
     await page.close();
    });
})




