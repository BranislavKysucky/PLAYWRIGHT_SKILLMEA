// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../page-objects/LoginPage';
// import { HomePage } from '../page-objects/HomePage';

import test, { expect } from '../fixtures/basePages'

//test('Verify home title', async ({ page }) => {
test('Verify home title', async ({ page, loginPage, homePage }) => {
    //const loginPage = new LoginPage(page);
    //const homePage = new HomePage(page);
    await loginPage. goToLoginPage();
    await loginPage.login();
    await expect(homePage.title).toBeVisible();
});

//test('Verify add to cart functionality', async ({ page }) => {
test('Verify add to cart functionality', async ({ page, loginPage, homePage }) => {
    //const loginPage = new LoginPage(page);
    //const homePage = new HomePage(page);
    await loginPage. goToLoginPage();
    await loginPage.login();
    await homePage.clickOnAddToCard();
    await expect(homePage.cartBadge).toHaveText("1");
});



