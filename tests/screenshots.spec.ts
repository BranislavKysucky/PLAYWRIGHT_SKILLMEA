import test, { expect } from '../fixtures/basePages';
import { LoginPage } from '../page-objects/LoginPage';

// vytvori to novy folder screenshots v roote projektu

// ak chceme vizualne si overit ze test padol, resp iba ked padne spravis screnshot nastavime to v playwright.config.ts
// v collect trace pridame     screenshot: 'only-on-failure'
// a screen najdeme v test-results ako test failed vidime na ako stepe to padlo

test.describe('Screenshots', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goToLoginPage();
        await loginPage.login();
    })

    // toto nespravi screenshot celej stranky
    test('Viewport screenshots', async ({ page }) => {
        await page.screenshot({ path: 'screenshots/viewpoer.png' })
    });

    // toto spravi screenshot celej
    test('Full page screenshot', async ({ page }) => {
        await page.screenshot({ path: 'screenshots/viewpoer.png', fullPage: true })
    });

    // screenshort urciteho elementu
    test('Element screenshot', async ({ page }) => {
        await page.locator('#item_4_img_link').screenshot({ path: 'screenshots/viewpoer.png' })
    });
})




