class loginPage {
    elements = {
      userNameField : () => cy.get('#inputEmail', { timeout: 10000 }),
      passwordField : () => cy.get('#inputPassword', { timeout: 10000 }),
      loginButton : () => cy.contains('Login', { timeout: 10000 }),
      errorMessage : () => cy.get('h1', { timeout: 10000 })
    }
  
    enterUserName(userName) {
      this.elements.userNameField().clear();
      this.elements.userNameField().type(userName);
    }
  
    enterPassword(password) {
      this.elements.passwordField().clear();
      this.elements.passwordField().type(password);
    }
  
    clickLoginButton() {
      this.elements.loginButton().click();
    }
  }
  export default loginPage;