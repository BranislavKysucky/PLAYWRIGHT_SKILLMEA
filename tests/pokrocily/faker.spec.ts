import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

// npm install @faker-js/faker
// generuje nahodne udaje
test.describe('API tests', () => {

    const randomFirstname = faker.person.firstName();
    const randomLastname = faker.person.lastName();
    const randomNumber = faker.number.int(50);


    test('POST dynamic data @api', async ({ request }) => {
        const response = await request.post("/booking", {
            data: {
                firstname: randomFirstname,
                lastname: randomLastname,
                totalprice: randomNumber,
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
        expect(responseBody.booking).toHaveProperty('firstname', randomFirstname);
        expect(responseBody.booking).toHaveProperty('lastname', randomLastname);
        expect(responseBody.booking).toHaveProperty('totalprice', randomNumber);

    });

});
