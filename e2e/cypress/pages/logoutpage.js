class logoutPage {
    elements = {
      profileDropdown : () => cy.get('a[title="QA role Assignment Efrain DLS"]', { timeout: 10000 }),
      logoutButton : () => cy.contains('Logout', { timeout: 10000 })
    }
    clickLogout() {
        this.elements.logoutButton().click({ force: true });
    }
}
export default logoutPage;