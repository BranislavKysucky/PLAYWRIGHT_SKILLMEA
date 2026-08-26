import { Locator, Page } from '@playwright/test'

// npx playwright test login.spec.ts spustim vsetky testy

export class LoginPage {
    page: Page;
    userNameInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
    invalidCredentialsErrorMessage: Locator;
    requiredCredentialsErrorMessage: Locator;
    lockedOutErrorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userNameInput = page.locator('#user-name')
        this.passwordInput = page.locator('#password')
        this.loginButton = page.locator('#login-button')
        this.invalidCredentialsErrorMessage = page.getByText('Epic sadface: Username and password do not match any user in this service')
        this.requiredCredentialsErrorMessage = page.getByText('Epic sadface: Username is required')
        this.lockedOutErrorMessage = page.getByText('Epic sadface: Sorry, this user has been locked out.')
    }

    // Definovanie metody

    async goToLoginPage() {
        await this.page.goto('https://www.saucedemo.com/')
    }

    async enterValidUserName() {
        await this.userNameInput.fill('standard_user');
    }

    async enterLockedOutUser() {
        await this.userNameInput.fill('locked_out_user');
    }

    async enterValidPassword() {
        await this.passwordInput.fill('secret_sauce');
    }

    async enterInValidUserName() {
        await this.userNameInput.fill('meno');
    }

    async enterInValidPassword() {
        await this.passwordInput.fill('heslo');
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    // vyplni vsetko
    async login() {
        await this.userNameInput.fill('standard_user');
        await this.passwordInput.fill('secret_sauce');
        await this.loginButton.click();
    }
}