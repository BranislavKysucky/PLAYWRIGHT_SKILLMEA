// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../page-objects/LoginPage';

import test, { expect } from '../fixtures/basePages'


test('Succesful login', async ({ page, loginPage }) => {
  //const loginPage = new LoginPage(page);
  await loginPage.goToLoginPage();
  await loginPage.login();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
});


test('Cannot login with valid username and invalid password', async ({ page,loginPage }) => {
  //const loginPage = new LoginPage(page);
  // Anotacia aby boli krajsie vypisy
  test.info().annotations.push({
    type: 'Test',
    description: 'This test will pass if the user is not able to loin with valid username and invalid password'
  });
  await loginPage.goToLoginPage();
  await loginPage.enterValidUserName();
  await loginPage.enterInValidPassword();
  await loginPage.clickLoginButton();
  await expect(loginPage.invalidCredentialsErrorMessage).toBeVisible();
});


test('Cannot login with invalid username and valid password', async ({ page,loginPage }) => {
  //const loginPage = new LoginPage(page);
  await loginPage.goToLoginPage();
  await loginPage.enterInValidUserName();
  await loginPage.enterValidPassword();
  await loginPage.clickLoginButton();
  await expect(loginPage.invalidCredentialsErrorMessage).toBeVisible();
});


test('Cannot login with blanc fields', async ({ page,loginPage }) => {
  //const loginPage = new LoginPage(page);
  await loginPage.goToLoginPage();
  await loginPage.clickLoginButton();
  await expect(loginPage.requiredCredentialsErrorMessage).toBeVisible();
});

test('Cannot login with locked user', async ({ page,loginPage }) => {
  //const loginPage = new LoginPage(page);
  await loginPage.goToLoginPage();
  await loginPage.enterLockedOutUser();
  await loginPage.enterValidPassword();
  await loginPage.clickLoginButton();
  await expect(loginPage.lockedOutErrorMessage).toBeVisible();
});
