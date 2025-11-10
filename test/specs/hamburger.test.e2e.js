import { expect, browser } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import ProductsPage from '../pageobjects/products.page.js'

describe('Hamburger menu test', () => {
    it('Hamburger menu should open and close', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await ProductsPage.hamburgerOpenClose()
    })
    it('All Items hamburger menu option should link to products page', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await ProductsPage.testAllItems()
    })
    it('About menu item should link to saucelabs.com', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await ProductsPage.clickAbout()
    })
    it('Logout menu item should log user out and return to login page', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await ProductsPage.clickLogout()
    })
    it('Reset App State menu item should empty cart', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await ProductsPage.clickResetApp()
    })
})

