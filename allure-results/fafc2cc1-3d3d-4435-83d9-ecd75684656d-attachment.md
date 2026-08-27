# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pokrocily\api.spec.ts >> API tests >> Block request @api
- Location: tests\pokrocily\api.spec.ts:127:10

# Error details

```
Error: page.waitForURL: Target page, context or browser has been closed
=========================== logs ===========================
waiting for navigation to "http://zero.webappsecurity.com/index.html" until "load"
============================================================
```

# Test source

```ts
  30  |     test('POST request @api', async ({ request }) => {
  31  |         const response = await request.post("/booking", {
  32  |             data: {
  33  |                 firstname: "Michal",
  34  |                 lastname: "Brown",
  35  |                 totalprice: 222,
  36  |                 depositpaid: true,
  37  |                 bookingdates: {
  38  |                     checkin: "2023-08-24",
  39  |                     checkout: "2023-08-29"
  40  |                 },
  41  |                 additionalneeds: "Breakfast"
  42  |             }
  43  |         });
  44  |         console.log(await response.json());
  45  |         expect(response.ok()).toBeTruthy();
  46  |         expect(response.status()).toBe(200);
  47  |         const responseBody = await response.json();
  48  |         expect(responseBody.booking).toHaveProperty('firstname', 'Michal');
  49  |         expect(responseBody.booking).toHaveProperty('lastname', 'Brown');
  50  |         expect(responseBody.booking).toHaveProperty('totalprice', 222);
  51  |     });
  52  | 
  53  | 
  54  |     test('PUT - update the booking details @api', async ({ request }) => {
  55  |         const response = await request.post("/auth", {
  56  |             data: {
  57  |                 username: "admin",
  58  |                 password: "password123"
  59  |             }
  60  |         });
  61  | 
  62  |         expect(response.ok()).toBeTruthy();
  63  |         expect(response.status()).toBe(200);
  64  |         const responseBody = await response.json();
  65  |         token = responseBody.token;
  66  |         console.log("Token is: " + token);
  67  | 
  68  |         // put request
  69  |         const updateRequest = await request.put("/booking/1", {
  70  |             headers: {
  71  |                 'Content-Type': 'application/json',
  72  |                 'Accept': 'application/json',
  73  |                 'Cookie': `token=${token}`,
  74  |             },
  75  |             data: {
  76  |                 firstname: "Michal",
  77  |                 lastname: "Brown",
  78  |                 totalprice: 222,
  79  |                 depositpaid: true,
  80  |                 bookingdates: {
  81  |                     checkin: "2023-08-24",
  82  |                     checkout: "2023-08-29"
  83  |                 },
  84  |                 additionalneeds: "Breakfast"
  85  |             }
  86  |         });
  87  |         console.log(await updateRequest.json());
  88  |         expect(updateRequest.ok()).toBeTruthy();
  89  |         expect(updateRequest.status()).toBe(200);
  90  |         const updateResponseBody = await updateRequest.json();
  91  |         console.log("Updated response body: " + JSON.stringify(updateResponseBody));
  92  | 
  93  |         expect(updateResponseBody).toHaveProperty('firstname', 'Michal');
  94  |         expect(updateResponseBody).toHaveProperty('lastname', 'Brown');
  95  |         expect(updateResponseBody).toHaveProperty('totalprice', 222);
  96  |         expect(updateResponseBody).toHaveProperty('depositpaid', true);
  97  |     });
  98  | 
  99  | 
  100 |     test('DELETE - delete the booking @api', async ({ request }) => {
  101 |         const response = await request.post("/auth", {
  102 |             data: {
  103 |                 username: "admin",
  104 |                 password: "password123"
  105 |             }
  106 |         });
  107 |         expect(response.ok()).toBeTruthy();
  108 |         expect(response.status()).toBe(200);
  109 |         const responseBody = await response.json();
  110 |         token = responseBody.token;
  111 |         console.log("Token is: " + token);
  112 | 
  113 |         const deleteRequest = await request.delete("/booking/2", {
  114 |             headers: {
  115 |                 'Content-Type': 'application/json',
  116 |                 'Accept': 'application/json',
  117 |                 'Cookie': `token=${token}`,
  118 |             }
  119 |         });
  120 |         expect(deleteRequest.ok()).toBeTruthy();
  121 |         expect(deleteRequest.status()).toBe(201);
  122 |         expect(deleteRequest.statusText()).toBe("Created");
  123 |     });
  124 | 
  125 | 
  126 | 
  127 |     test.only("Block request @api", async ({ page, context }) => {
  128 |         await context.route(/.*\.mp3/, route => route.abort());
  129 |         await page.goto("/");
> 130 |         await page.waitForURL("http://zero.webappsecurity.com/index.html");
      |                    ^ Error: page.waitForURL: Target page, context or browser has been closed
  131 |     });
  132 | });
  133 | 
```