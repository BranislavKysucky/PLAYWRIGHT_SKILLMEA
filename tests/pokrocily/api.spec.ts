import { test, expect } from '@playwright/test';

var token: "";

// npm run test:api
test.describe('API tests', () => {

    // bez parametrov
    test('GET request @api', async ({ request }) => {
        const response = await request.get('https://restful-booker.herokuapp.com/booking/');
        expect(response.status()).toBe(200);
        const body = await response.json();
        console.log(JSON.stringify(body));
    });

    // test s parametrom
    test('GET request with params @api', async ({ request }) => {
        const response = await request.get("/booking", {
            params: {
                firstname: "Jane",
                lastname: "Doe"
            }
        });
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        console.log(await response.json());
    });


    test('POST request @api', async ({ request }) => {
        const response = await request.post("/booking", {
            data: {
                firstname: "Michal",
                lastname: "Brown",
                totalprice: 222,
                depositpaid: true,
                bookingdates: {
                    checkin: "2023-08-24",
                    checkout: "2023-08-29"
                },
                additionalneeds: "Breakfast"
            }
        });
        console.log(await response.json());
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody.booking).toHaveProperty('firstname', 'Michal');
        expect(responseBody.booking).toHaveProperty('lastname', 'Brown');
        expect(responseBody.booking).toHaveProperty('totalprice', 222);
    });


    test('PUT - update the booking details @api', async ({ request }) => {
        const response = await request.post("/auth", {
            data: {
                username: "admin",
                password: "password123"
            }
        });

        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        token = responseBody.token;
        console.log("Token is: " + token);

        // put request
        const updateRequest = await request.put("/booking/1", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Cookie': `token=${token}`,
            },
            data: {
                firstname: "Michal",
                lastname: "Brown",
                totalprice: 222,
                depositpaid: true,
                bookingdates: {
                    checkin: "2023-08-24",
                    checkout: "2023-08-29"
                },
                additionalneeds: "Breakfast"
            }
        });
        console.log(await updateRequest.json());
        expect(updateRequest.ok()).toBeTruthy();
        expect(updateRequest.status()).toBe(200);
        const updateResponseBody = await updateRequest.json();
        console.log("Updated response body: " + JSON.stringify(updateResponseBody));

        expect(updateResponseBody).toHaveProperty('firstname', 'Michal');
        expect(updateResponseBody).toHaveProperty('lastname', 'Brown');
        expect(updateResponseBody).toHaveProperty('totalprice', 222);
        expect(updateResponseBody).toHaveProperty('depositpaid', true);
    });


    test('DELETE - delete the booking @api', async ({ request }) => {
        const response = await request.post("/auth", {
            data: {
                username: "admin",
                password: "password123"
            }
        });
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        token = responseBody.token;
        console.log("Token is: " + token);

        const deleteRequest = await request.delete("/booking/2", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Cookie': `token=${token}`,
            }
        });
        expect(deleteRequest.ok()).toBeTruthy();
        expect(deleteRequest.status()).toBe(201);
        expect(deleteRequest.statusText()).toBe("Created");
    });


    // Blokovanie niecoho na URLKe
    test.only("Block request @api", async ({ page, context }) => {
        await context.route(/.*\.(jpg|png|css)$/, route => route.abort());
        await page.goto("/");
        await page.waitForURL("http://zero.webappsecurity.com/index.html");
    });
});
