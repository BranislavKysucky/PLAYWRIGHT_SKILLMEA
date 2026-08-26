import { test as setup } from "@playwright/test";

let adminUserName = "michald_admin";
let adminPassWord = "P@ssw0rd#8$E!";
const adminAuthFile = ".auth/admin.json";


let userName = "michald";
let userPassword = "P@ssw0rd#8$E!";
const userAuthFile = ".auth/user.json";


setup("Create admin auth", async ({ page, context }) => {
    await page.goto("https://demoqa.com/login");
    await page.getByPlaceholder("UserName").fill(adminUserName);
    await page.getByPlaceholder("Password").fill(adminPassWord);
    await page.getByRole("button", { name: "Login" }).click();
    // check logged in
    await page.waitForURL("https://demoqa.com/profile")
    await context.storageState({ path: adminAuthFile });

});

setup("Create User Auth", async ({ page, context }) => {
    await page.goto("https://demoqa.com/login");
    await page.getByPlaceholder("UserName").fill(userName);
    await page.getByPlaceholder("Password").fill(userPassword);
    await page.getByRole("button", { name: "Login" }).click();
    // check logged in
    await page.waitForURL("https://demoqa.com/profile")
    await context.storageState({ path: userAuthFile });
});