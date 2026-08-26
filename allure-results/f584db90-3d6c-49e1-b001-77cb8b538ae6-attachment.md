# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: visual.spec.ts >> Visual testing >> Visual test - login page
- Location: tests\visual.spec.ts:13:10

# Error details

```
Error: A snapshot doesn't exist at C:\Users\brano\Desktop\PLAYWRIGHT_SKILLMEA\tests\visual.spec.ts-snapshots\Visual-testing-Visual-test---login-page-1-iPhone-win32.png, writing actual.
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import test, { expect } from '../fixtures/basePages';
  2  | 
  3  | 
  4  | // npx playwright test --update-snapshots  - upadnte a da najnovsi screen z aktualenho testu
  5  | 
  6  | test.describe('Visual testing', () => {
  7  |     test.beforeEach(async ({ loginPage }) => {
  8  |         await loginPage.goToLoginPage();
  9  | 
  10 |     })
  11 | 
  12 |     // uklada vysledky do tests/ visual spec ts snapshots vytvori.. a porovna vysledky posledne, ak je ten test spusteny ibra raz tak to padne lebo nema s cim porovnat
  13 |     test.only('Visual test - login page', async ({ page }) => {
  14 |         // maxDiff pixel maximalna hodnota ktora je tolerovana este
> 15 |         await expect(page).toHaveScreenshot({maxDiffPixels: 100});
     |         ^ Error: A snapshot doesn't exist at C:\Users\brano\Desktop\PLAYWRIGHT_SKILLMEA\tests\visual.spec.ts-snapshots\Visual-testing-Visual-test---login-page-1-iPhone-win32.png, writing actual.
  16 |     });
  17 | 
  18 | })
  19 | 
  20 | 
  21 | 
  22 | 
  23 | 
```