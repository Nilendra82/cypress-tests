import loginPage from '../../pages/loginpage';
import logoutPage from '../../pages/logoutpage';

describe('Login test suite', () => {
    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'), { timeout: 80000 });
    });

    it('Login with valid credentials', () => {
        const loginObject = new loginPage();
        cy.fixture('login.json').then((data) => {
            loginObject.enterUserName(data.username);
            loginObject.enterPassword(data.password);
        });
        loginObject.clickLoginButton();
        cy.url({ timeout: 10000 }).should('include', '/account/dashboard');
    });

    it('Logout', () => {
        const loginObject = new loginPage();
        const logoutObject = new logoutPage();
        cy.fixture('login.json').then((data) => {
            loginObject.enterUserName(data.username);
            loginObject.enterPassword(data.password);
        });
        loginObject.clickLoginButton();
        logoutObject.clickLogout();
        cy.url().should('include', '/login');
    })

    it('Login with invalid credentials', () => {
        const loginObject = new loginPage();
        cy.fixture('login.json').then((data) => {
            loginObject.enterUserName(data.invalidusername);
            loginObject.enterPassword(data.invalidpassword);
        });
        loginObject.clickLoginButton();
        loginObject.elements.errorMessage().should('contain', 'You have entered an incorrect username or password.');
    })
});