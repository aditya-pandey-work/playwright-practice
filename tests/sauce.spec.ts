import { test, expect } from "@playwright/test"
import { sign } from "node:crypto"


    test.skip("login", async({ page }) => {

    await page.goto("https://sauce-demo.myshopify.com/")

    // await page.locator('#customer_login_link').click()
    await page.getByRole("link", {name: "Log In"}).click()

    await expect(page.locator("text = Customer Login")).toBeVisible()

    await page.locator("#customer_email").fill("genodoc136@duoley.com")

    await page.locator("#customer_password").fill("playright.1234")

    await page.getByRole("button", {name: 'SIGN IN'}).click()

    await expect(page.locator("text = Account Details and Order History")).toBeVisible()
})