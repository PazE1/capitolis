import { LoginPage } from "../../pages/amazon/loginPage"
import { GeneralPage } from "../../pages/amazon/generalPage"
import { HomePage } from "../../pages/amazon/homePage"

const generalPage = new GeneralPage()
const loginPage = new LoginPage()
const homePage = new HomePage()

describe('Amazon Login', () => {

    beforeEach(() => {
        // login into Amazon (using baseUrl from cypress.config.ts)
        generalPage.open();
    })

    it('Should block access when invalid Amazon account credentials are used', () => {
        cy.fixture('amazon/login').then((login) => {

            // Ensure we are on the home page by checking the logo
            generalPage.clickOnElement(homePage.homePageLogo)

            // Click on the hamburger menu
            generalPage.clickOnElement(homePage.hamburgerMenu)

            // Click on the Sign In option
            generalPage.clickOnElement(loginPage.id)

            // Ensure the sign-in modal is visible
            generalPage.isElementExist(loginPage.signInModal, true)

            // Enter email
            generalPage.setInput(loginPage.inputId, login.amazonUser.email)

            // Click Continue
            generalPage.clickOnElement(loginPage.continueId, false)

            // Enter password
            generalPage.setInput(loginPage.passwordId, login.amazonUser.password)

            // Click Sign In
            generalPage.clickOnElement(loginPage.signInId, false)

            // Verify that login was not successful by checking for the presence of the I'm not a robot checkbox
            generalPage.isElementExist(loginPage.imNotARobot, true)
        })
    })
})
