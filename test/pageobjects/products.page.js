import { $, browser, expect } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get appLogo () {
        return $('.app_logo');
    }
    get hamburgerMenu () {
        return $('#react-burger-menu-btn');
    }
    get allItems () {
        return $('#inventory_sidebar_link')
    }
    get about () {
        return $('#about_sidebar_link')
    }
    get logout () {
        return $('#logout_sidebar_link')
    }
    get resetAppState () {
        return $('#reset_sidebar_link')
    }
    get closeButton () {
        return $('#react-burger-cross-btn')
    }
    get cartButton () {
        return $('.shopping_cart_link')
    }
    get cartBadge () {
        return $('.shopping_cart_badge')
    }
    itemWithDashes = ['sauce-labs-backpack', 'sauce-labs-bike-light', 'sauce-labs-bolt-t-shirt', 'sauce-labs-fleece-jacket', 'sauce-labs-onesie']
    dynamicAddToCart(itemWithDashes) {
        return $(`#add-to-cart-${itemWithDashes}`)
    }
    get allTheThings () {
        return $('[id*="allthethings"]')
    }
    get labsSelector () {
        return $('#__next')
    }
    async hamburgerOpenClose () {
        await this.hamburgerMenu.click()
        await this.closeButton.click()
    }
    async testAllItems () {
        await this.cartButton.click()
        await this.hamburgerMenu.click()
        await this.allItems.click()
    }
    async clickAbout () {
        await this.hamburgerMenu.click()
        const link = await $('a[href*="saucelabs.com"]');
        const href = await link.getAttribute('href');
        expect(href).toContain('saucelabs.com');
    }
    async clickLogout () {
        await this.hamburgerMenu.click()
        await this.logout.click()
    }
    async clickResetApp () {
        for (let i = 0; i < this.itemWithDashes.length; i++) {
            await this.dynamicAddToCart(this.itemWithDashes[i]).click()
        }
        await expect(this.cartBadge).toBeDisplayed()
        await this.hamburgerMenu.click()
        await this.resetAppState.click()
        await browser.refresh()
        await expect(this.cartBadge).not.toBeDisplayed() 
    }
    async addAllProducts () {
        for (let i = 0; i < this.itemWithDashes.length; i++) {
            await this.dynamicAddToCart(this.itemWithDashes[i]).click()
        }
        await this.allTheThings.click()
        await this.cartButton.click()
    }
}

export default new ProductsPage();
