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
    get addBackpack () {
        return $('#add-to-cart-sauce-labs-backpack')
    }
    get cartBadge () {
        return $('.shopping_cart_badge')
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
        await this.about.click()
        await expect(browser).toHaveUrl('https://saucelabs.com/')
        await browser.back()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    }
    async clickLogout () {
        await this.hamburgerMenu.click()
        await this.logout.click()
    }
    async clickResetApp () {
        await this.addBackpack.click()
        await expect(this.cartBadge).toBeDisplayed()
        await this.hamburgerMenu.click()
        await this.resetAppState.click()
        await browser.refresh()
        await expect(this.cartBadge).not.toBeDisplayed() 
    }
}

export default new ProductsPage();
