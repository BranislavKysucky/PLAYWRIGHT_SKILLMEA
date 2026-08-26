import { test } from '@playwright/test';

//  $env:ENV="prod"; npx playwright test  - tymto si overim nastavim prostredie
//  npm run localTests - spustam scripty 

test.only('Multiple environments', async ({ page }) => {
    console.log(process.env.URL);
    console.log(process.env.USERNAME);
    console.log(process.env.PASSWORD);
});