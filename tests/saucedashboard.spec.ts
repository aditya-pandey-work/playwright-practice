import { Dashboard } from '../pages/dashboard.page';
import { LoginPage } from '../pages/login.page';
import { test, expect } from '@playwright/test';

test.beforeEach("logging", async({page}) => {
    const home = new LoginPage(page)
    await home.goto()
    await home.login("standard_user", "secret_sauce")
})

test("dashboard", async({page}) => {
    const dash = new Dashboard(page)
    await dash.addToCart()
    await dash.gotoCart()
    await dash.addOrder()

    await expect(page.locator("text = Checkout: Your Information")).toBeVisible()
})