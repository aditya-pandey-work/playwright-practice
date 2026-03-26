import { Page, Locator } from '@playwright/test';

export class Dashboard {
    readonly page: Page
    readonly item: Locator
    readonly cart: Locator
    readonly order: Locator
    
    constructor(page: Page) {
        this.page = page
        this.item = page.locator("#add-to-cart-sauce-labs-backpack")
        this.cart = page.locator("#shopping_cart_container > a")
        this.order = page.getByRole('button', {name: 'Checkout'})
    }

    async gotoCart() {
        await this.cart.click()
    }

    async addToCart() {
        await this.item.click()
    }

    async addOrder() {
        await this.order.click()
    }

}