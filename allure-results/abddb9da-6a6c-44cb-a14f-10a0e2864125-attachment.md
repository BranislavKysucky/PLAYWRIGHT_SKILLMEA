# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pokrocily\api.spec.ts >> API tests >> POST request @api
- Location: tests\pokrocily\api.spec.ts:28:9

# Error details

```
Error: expect(received).toHaveProperty(path, value)

Expected path: "lastname"

Expected value: "Drajna"
Received value: "Brown"
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
  15 |     test.skip('GET request with params @api', async ({ request }) => {
  16 |         const response = await request.get("/booking", {
  17 |             params: {
  18 |                 firstname: "Jane",
  19 |                 lastname: "Doe"
  20 |             }
  21 |         });
  22 |         expect(response.ok()).toBeTruthy();
  23 |         expect(response.status()).toBe(200);
  24 |         console.log(await response.json());
  25 |     });
  26 | 
  27 | 
  28 |     test('POST request @api', async ({ request }) => {
  29 |         const response = await request.post("/booking", {
  30 |             data: {
  31 |                 firstname: "Michal",
  32 |                 lastname: "Brown",
  33 |                 totalprice: 222,
  34 |                 depositpaid: true,
  35 |                 bookingdates: {
  36 |                     checkin: "2023-08-24",
  37 |                     checkout: "2023-08-29"
  38 |                 },
  39 |                 additionalneeds: "Breakfast"
  40 |             }
  41 |         });
  42 |         console.log(await response.json());
  43 |         expect(response.ok()).toBeTruthy();
  44 |         expect(response.status()).toBe(200);
  45 |         const responseBody = await response.json();
  46 |         expect(responseBody.booking).toHaveProperty('firstname', 'Michal');
> 47 |         expect(responseBody.booking).toHaveProperty('lastname', 'Drajna');
     |                                      ^ Error: expect(received).toHaveProperty(path, value)
  48 |         expect(responseBody.booking).toHaveProperty('totalprice', 222);
  49 | 
  50 |     });
  51 | 
  52 | });
  53 | 
```