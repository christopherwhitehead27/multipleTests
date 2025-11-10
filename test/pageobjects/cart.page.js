import { $, browser, expect } from '@wdio/globals'
import Page from './page.js';
import ProductsPage from './products.page.js';

class CartPage extends Page {
    dynamicRemove(itemWithDashes) {
        return $(`#remove-${itemWithDashes}`)
    }
    get checkout () {
        return $('#checkout')
    }
    get continueShoppingBtn () {
        return $('#continue-shopping')
    }
    get cancel () {
        return $('#cancel')
    }
    get title () {
        return $('.title')
    }
    get individualProd () {
        return $('.inventory_item_name')
    }
    get backToProducts () {
        return $('#back-to-products')
    }
    async removeAll () {
        for (let i = 0; i < ProductsPage.itemWithDashes.length; i++) {
            await this.dynamicRemove(ProductsPage.itemWithDashes[i]).click()
        }
        await ProductsPage.allTheThings.click()
    }
    async continueShopping () {
        await ProductsPage.addAllProducts()
        await this.continueShoppingBtn.click()
        await expect(this.title).toHaveText(
            expect.stringContaining('Products'))
    }
    async testCheckout () {
        await ProductsPage.dynamicAddToCart('sauce-labs-backpack')
        await ProductsPage.cartButton.click()
        await this.checkout.click()
        await this.cancel.click()
        await ProductsPage.dynamicAddToCart('sauce-labs-backpack')
        await this.checkout.click()
    }
    async testIndividualProd () {
        await ProductsPage.dynamicAddToCart('sauce-labs-backpack')
        await ProductsPage.cartButton.click()
        await this.individualProd.click()
        await expect(this.backToProducts).toBeDisplayed()
    }
}

export default new CartPage();