// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../page-objects/LoginPage';

import test, { expect } from '../fixtures/basePages'


// Skipli sme test ak bezi na firefoxe
test('Test1', async ({ page,loginPage, browserName }) => {
  test.skip(browserName == 'firefox', 'Still working on it')
  await loginPage.goToLoginPage();
  await loginPage.enterInValidUserName();
  await loginPage.enterValidPassword();
  await loginPage.clickLoginButton();
  await expect(loginPage.invalidCredentialsErrorMessage).toBeVisible();
});



// Test sa oznaci ako neuspesny, playwright to vykona aby potvrdil ze sa zlyha
test.fail('Test2', async ({ page,loginPage, browserName }) => {
  test.skip(browserName == 'firefox', 'Still working on it')
  await loginPage.goToLoginPage();
  await loginPage.enterInValidUserName();
  await loginPage.enterValidPassword();
  await loginPage.clickLoginButton();
  await expect(loginPage.invalidCredentialsErrorMessage).toBeVisible();
});


// Test sa oznaci ako neuspesny, playwright tento kod nevykona
test.fixme('Test3', async ({ page,loginPage, browserName }) => {
  test.skip(browserName == 'firefox', 'Still working on it')
  await loginPage.goToLoginPage();
  await loginPage.enterInValidUserName();
  await loginPage.enterValidPassword();
  await loginPage.clickLoginButton();
  await expect(loginPage.invalidCredentialsErrorMessage).toBeVisible();
});


// Ked je pomaly test, tak sa zvysi timeout 3nasobne
test('Test4', async ({ page, loginPage, browserName }) => {
  test.slow();
  await loginPage.goToLoginPage();
  await loginPage.enterInValidUserName();
  await loginPage.enterValidPassword();
  await loginPage.clickLoginButton();
  await expect(loginPage.invalidCredentialsErrorMessage).toBeVisible();
});


// TAGY

test('Test5 @slow', async ({ page, loginPage, browserName }) => {
  await loginPage.goToLoginPage();
  await loginPage.enterInValidUserName();
  await loginPage.enterValidPassword();
  await loginPage.clickLoginButton();
  await expect(loginPage.invalidCredentialsErrorMessage).toBeVisible();
});


test('Test6 @fast', async ({ page, loginPage, browserName }) => {
  await loginPage.goToLoginPage();
  await loginPage.enterInValidUserName();
  await loginPage.enterValidPassword();
  await loginPage.clickLoginButton();
  await expect(loginPage.invalidCredentialsErrorMessage).toBeVisible();
});

// spustim podla tagov npx playwright test --grep "@slow"
// npx playwright test --grep-invert "@slow" - spusti vsetky okrem takeho tagu