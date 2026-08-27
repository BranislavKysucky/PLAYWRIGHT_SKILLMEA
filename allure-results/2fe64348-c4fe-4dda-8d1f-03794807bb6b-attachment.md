# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pokrocily\api.spec.ts >> API tests >> GET request with params @api
- Location: tests\pokrocily\api.spec.ts:15:9

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | // npm run test:api
  4  | test.describe('API tests', () => {
  5  | 
  6  |     // bez parametrov
  7  |     test.skip('GET request @api', async ({ request }) => {
  8  |         const response = await request.get('https://restful-booker.herokuapp.com/booking/');
  9  |         expect(response.status()).toBe(200);
  10 |         const body = await response.json();
  11 |         console.log(JSON.stringify(body));
  12 |     });
  13 | 
  14 |     // test s parametrom
  15 |     test('GET request with params @api', async ({ request }) => {
  16 |         const response = await request.get("/booking", {
  17 |             params: {
  18 |                 firstname: "Jane",
  19 |                 lastname: "Doe"
  20 |             }
  21 |         });
> 22 |         expect(response.ok()).toBeTruthy();
     |                               ^ Error: expect(received).toBeTruthy()
  23 |         expect(response.status()).toBe(200);
  24 |         console.log(await response.json());
  25 |     });
  26 | });
  27 | 
```