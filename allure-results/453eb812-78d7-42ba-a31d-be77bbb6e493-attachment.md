# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pokrocily\api.spec.ts >> API tests >> PUT - update the booking details @api
- Location: tests\pokrocily\api.spec.ts:54:10

# Error details

```
SyntaxError: Unexpected token 'F', "Forbidden" is not valid JSON
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | var token: "";
  4  | 
  5  | // npm run test:api
  6  | test.describe('API tests', () => {
  7  | 
  8  |     // bez parametrov
  9  |     test('GET request @api', async ({ request }) => {
  10 |         const response = await request.get('https://restful-booker.herokuapp.com/booking/');
  11 |         expect(response.status()).toBe(200);
  12 |         const body = await response.json();
  13 |         console.log(JSON.stringify(body));
  14 |     });
  15 | 
  16 |     // test s parametrom
  17 |     test('GET request with params @api', async ({ request }) => {
  18 |         const response = await request.get("/booking", {
  19 |             params: {
  20 |                 firstname: "Jane",
  21 |                 lastname: "Doe"
  22 |             }
  23 |         });
  24 |         expect(response.ok()).toBeTruthy();
  25 |         expect(response.status()).toBe(200);
  26 |         console.log(await response.json());
  27 |     });
  28 | 
  29 | 
  30 |     test('POST request @api', async ({ request }) => {
  31 |         const response = await request.post("/booking", {
  32 |             data: {
  33 |                 firstname: "Michal",
  34 |                 lastname: "Brown",
  35 |                 totalprice: 222,
  36 |                 depositpaid: true,
  37 |                 bookingdates: {
  38 |                     checkin: "2023-08-24",
  39 |                     checkout: "2023-08-29"
  40 |                 },
  41 |                 additionalneeds: "Breakfast"
  42 |             }
  43 |         });
  44 |         console.log(await response.json());
  45 |         expect(response.ok()).toBeTruthy();
  46 |         expect(response.status()).toBe(200);
  47 |         const responseBody = await response.json();
  48 |         expect(responseBody.booking).toHaveProperty('firstname', 'Michal');
  49 |         expect(responseBody.booking).toHaveProperty('lastname', 'Brown');
  50 |         expect(responseBody.booking).toHaveProperty('totalprice', 222);
  51 |     });
  52 | 
  53 | 
  54 |     test.only('PUT - update the booking details @api', async ({ request }) => {
  55 |         const response = await request.post("/auth", {
  56 |             data: {
  57 |                 username: "admin",
  58 |                 password: "password123"
  59 |             }
  60 |         });
  61 | 
  62 |         expect(response.ok()).toBeTruthy();
  63 |         expect(response.status()).toBe(200);
  64 |         const responseBody = await response.json();
  65 |         token = responseBody.token;
  66 |         console.log("Token is: " + token);
  67 |         // put request
  68 | 
  69 |         const updateRequest = await request.put("/booking/1", {
  70 |             headers: {
  71 |                 'Content-Type': 'application/json',
  72 |                 'Accept': 'application/json',
  73 |                 'Cookie': 'token=${token}',
  74 |             },
  75 |             data: {
  76 |                 firstname: "Michal",
  77 |                 lastname: "Brown",
  78 |                 totalprice: 222,
  79 |                 depositpaid: true,
  80 |                 bookingdates: {
  81 |                     checkin: "2023-08-24",
  82 |                     checkout: "2023-08-29"
  83 |                 },
  84 |                 additionalneeds: "Breakfast"
  85 |             }
  86 |         });
> 87 |         console.log(await updateRequest.json());
     |                     ^ SyntaxError: Unexpected token 'F', "Forbidden" is not valid JSON
  88 |     });
  89 | });
  90 | 
```