import { test, expect } from '@playwright/test';

// vytvori to cookies file folder v koreni auth

test.use({ storageState: '.auth/user.json'});
test.describe('Home page user', () => {

    test('Verify successful user login', async ({ page }) => {
        await page.goto('https://demoqa.com/login');
        await page.getByText('michald').isVisible();
        expect(page.getByRole('button', { name: 'Log out' })).toBeVisible();
    });
});


test.use({ storageState: '.auth/admin.json'});
test.describe('Home page admin', () => {

    test('Verify successful user login', async ({ page }) => {
        await page.goto('https://demoqa.com/login');
        await page.getByText('michald_admin').isVisible();
        expect(page.getByRole('button', { name: 'Log out' })).toBeVisible();
    });
});