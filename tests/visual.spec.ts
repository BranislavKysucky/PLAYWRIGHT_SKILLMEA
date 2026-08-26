import test, { expect } from '../fixtures/basePages';


// npx playwright test --update-snapshots  - upadnte a da najnovsi screen z aktualenho testu

test.describe('Visual testing', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goToLoginPage();

    })

    // uklada vysledky do tests/ visual spec ts snapshots vytvori.. a porovna vysledky posledne, ak je ten test spusteny ibra raz tak to padne lebo nema s cim porovnat
    test('Visual test - login page', async ({ page }) => {
        // maxDiff pixel maximalna hodnota ktora je tolerovana este
        await expect(page).toHaveScreenshot({maxDiffPixels: 100});
    });

})




