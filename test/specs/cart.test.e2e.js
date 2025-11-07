import { expect, browser } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import ProductsPage from '../pageobjects/products.page.js'

describe('Cart page test', () => {
    it('Products should be added to cart from products page', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await ProductsPage.addAllProducts()
    })
})