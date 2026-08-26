# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: visual.spec.ts >> Visual testing >> Visual test - login page
- Location: tests\visual.spec.ts:11:10

# Error details

```
Error: A snapshot doesn't exist at C:\Users\brano\Desktop\PLAYWRIGHT_SKILLMEA\tests\visual.spec.ts-snapshots\Visual-testing-Visual-test---login-page-1-chromium-win32.png, writing actual.
```

# Page snapshot

```yaml
- generic [ref=f4e3]:
  - generic [ref=f4e4]: Swag Labs
  - generic [ref=f4e5]:
    - generic [ref=f4e9]:
      - textbox "Username" [ref=f4e11]
      - textbox "Password" [ref=f4e13]
      - button "Login" [ref=f4e15] [cursor=pointer]
    - generic [ref=f4e17]:
      - generic [ref=f4e18]:
        - heading "Accepted usernames are:" [level=4] [ref=f4e19]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=f4e20]:
        - heading "Password for all users:" [level=4] [ref=f4e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import test, { expect } from '../fixtures/basePages';
  2  | 
  3  | 
  4  | test.describe('Visual testing', () => {
  5  |     test.beforeEach(async ({ loginPage }) => {
  6  |         await loginPage.goToLoginPage();
  7  | 
  8  |     })
  9  | 
  10 |     // toto nespravi screenshot celej stranky
  11 |     test.only('Visual test - login page', async ({ page }) => {
> 12 |         await expect(page).toHaveScreenshot();
     |         ^ Error: A snapshot doesn't exist at C:\Users\brano\Desktop\PLAYWRIGHT_SKILLMEA\tests\visual.spec.ts-snapshots\Visual-testing-Visual-test---login-page-1-chromium-win32.png, writing actual.
  13 |     });
  14 | 
  15 | })
  16 | 
  17 | 
  18 | 
  19 | 
  20 | 
```