import { LoginPage } from "../pages/login.page";
import {test, expect} from "@playwright/test"


test("login testing", async({page}) => {
    const homepage = new LoginPage(page)
    await homepage.goto()
    await homepage.login("standard_user", "secret_sauce")

    await expect(page).toHaveURL(/inventory/)
})