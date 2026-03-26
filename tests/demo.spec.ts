import { test, expect, Page} from "@playwright/test"

test.beforeEach(async({page}) => {
    await page.goto("https://www.browserstack.com/")
})


test.describe.skip('Demo test', () => {

    test("verify login", async ({page}) => {

        // await page.waitForSelector('text = Sign in', {state: 'visible'})

        await page.locator('text = Sign in').first().click()

        // await page.waitForSelector('#user_email_login')

        await page.locator("#user_email_login").fill("genodoc136@duoley.com")

        await page.locator("#user_password").fill("playwright.1234")

        await page.locator("#user_submit").click()

        await expect(page.locator("text = BrowserStack")).toBeVisible()
    })
})