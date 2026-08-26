// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../page-objects/LoginPage';

// tu sme prerobili to, ze citame loginPage z fixture basePages a nemusim vytvarat constantu
import test, { expect } from '../fixtures/basePages'


test.describe('Login', () => {
    // beforeEach pred kazdym volanim zavola loginPage
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goToLoginPage();
    })


    test('Succesful login', async ({ page, loginPage }) => {
        //const loginPage = new LoginPage(page);
        await loginPage.login();
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    });


    test('Cannot login with valid username and invalid password', async ({ page, loginPage }) => {
        test.info().annotations.push({
            type: 'Test',
            description: 'This test will pass if the user is not able to loin with valid username and invalid password'
        });

        // pridanie test stepov
        await test.step('Enter valid username', async () => {
            await loginPage.enterValidUserName();
        });

        // pridanie test stepov
        await test.step('Enter invalid password', async () => {
            await loginPage.enterInValidPassword();
        });

        // pridanie test stepov
        await test.step('Click login button', async () => {
            await loginPage.clickLoginButton();
        });

        // pridanie test stepov
        await test.step('Verify invalid credentials error message', async () => {
            // mozeme pridat aj spravu ak by to padlo takymto sposobom!
            await expect(loginPage.invalidCredentialsErrorMessage, 'Can not find login error message').toBeVisible();
        });

        //const loginPage = new LoginPage(page);
        // await loginPage.enterValidUserName();
        // await loginPage.enterInValidPassword();
        // await loginPage.clickLoginButton();
        // await expect(loginPage.invalidCredentialsErrorMessage).toBeVisible();
    });


    test('Cannot login with invalid username and valid password', async ({ page, loginPage }) => {
        //const loginPage = new LoginPage(page);
        await loginPage.enterInValidUserName();
        await loginPage.enterValidPassword();
        await loginPage.clickLoginButton();
        await expect(loginPage.invalidCredentialsErrorMessage).toBeVisible();
    });


    test('Cannot login with blanc fields', async ({ page, loginPage }) => {
        //const loginPage = new LoginPage(page);

        await loginPage.clickLoginButton();
        await expect(loginPage.requiredCredentialsErrorMessage).toBeVisible();
    });

    test('Cannot login with locked user', async ({ page, loginPage }) => {
        //const loginPage = new LoginPage(page);
        await loginPage.enterLockedOutUser();
        await loginPage.enterValidPassword();
        await loginPage.clickLoginButton();
        await expect(loginPage.lockedOutErrorMessage).toBeVisible();
    });
})




