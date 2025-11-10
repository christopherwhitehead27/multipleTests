import { expect, browser } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import ProductsPage from '../pageobjects/products.page.js'
import CartPage from '../pageobjects/cart.page.js'

describe('Cart page test', () => {
    it('Products should be added to cart, displayed in the cart page, and then removed', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await ProductsPage.addAllProducts()
        await CartPage.removeAll()
    })
    it('Continue Shopping button should lead back to Products Page', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await CartPage.continueShopping()
    })
    it('Checkout button should lead to information form, Cancel button should return to cart', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await CartPage.testCheckout()
    })
    it('User should be able to navigate to single product page from Cart Page', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await CartPage.testIndividualProd()
    })
})