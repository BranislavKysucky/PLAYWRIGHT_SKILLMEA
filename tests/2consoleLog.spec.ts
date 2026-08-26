import test, {expect } from '../fixtures/basePages';

 // Ibhect page + Event handler
 // Sluzi to na odchytavanie konzolovych logov z prehliadaca / inspect element a console
test.describe('Console log errors', () => {
    test('Page has no errors or logs', async ({page}) => {

        const logs = [] as any;
        page.on("console", (message) => {
            return logs.push({ message, type: message.type()});
        })
        // expections
        const errors = [] as any;
        page.on("pageerror", (expection) => {
            errors.push(expection)
        })

        await page.goto('https://demoqa.com/');
        console.log(logs);
        expect.soft(logs.length).toBe(0);
        console.log(errors);
        expect(errors.length).toBe(0);
    })
})