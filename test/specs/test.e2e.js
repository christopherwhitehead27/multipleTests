import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('standard user should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(SecurePage.appLogo).toBeExisting()
        await expect(SecurePage.appLogo).toHaveText(
            expect.stringContaining('Swag Labs'))
    })

    it('standard user should not login without valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secretsauce')
        await expect(LoginPage.loginError).toBeExisting()
    })
    
    it('locked out user with valid credentials should be locked out', async () => {
        await LoginPage.open()

        await LoginPage.login('locked_out_user', 'secret_sauce')
        await expect(LoginPage.loginError).toBeExisting()
    })

     it('locked out user with invalid credentials should get error', async () => {
        await LoginPage.open()

        await LoginPage.login('locked_out_user', 'secretsauce')
        await expect(LoginPage.loginError).toBeExisting()
    })

    it('problem user should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('problem_user', 'secret_sauce')
        await expect(SecurePage.appLogo).toBeExisting()
        await expect(SecurePage.appLogo).toHaveText(
            expect.stringContaining('Swag Labs'))
    })

    it('problem user should not login without valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('problem_user', 'secretsauce')
        await expect(LoginPage.loginError).toBeExisting()
    })

    it('performance glitch user should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('performance_glitch_user', 'secret_sauce')
        await expect(SecurePage.appLogo).toBeExisting()
        await expect(SecurePage.appLogo).toHaveText(
            expect.stringContaining('Swag Labs'))
    })

    it('performance glitch user should not login without valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('performance_glitch_user', 'secretsauce')
        await expect(LoginPage.loginError).toBeExisting()
    })

    it('error user should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('error_user', 'secret_sauce')
        await expect(SecurePage.appLogo).toBeExisting()
        await expect(SecurePage.appLogo).toHaveText(
            expect.stringContaining('Swag Labs'))
    })

    it('error user should not login without valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('error_user', 'secretsauce')
        await expect(LoginPage.loginError).toBeExisting()
    })

    it('visual user should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('visual_user', 'secret_sauce')
        await expect(SecurePage.appLogo).toBeExisting()
        await expect(SecurePage.appLogo).toHaveText(
            expect.stringContaining('Swag Labs'))
    })

    it('visual user should not login without valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('visual_user', 'secretsauce')
        await expect(LoginPage.loginError).toBeExisting()
    })
})

