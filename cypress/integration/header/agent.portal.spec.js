describe('header', () => {
  describe('agent portal', () => {
    it('should navigate to the agent portal page', () => {
      cy.visit('https://neptuneflood.com/');
      cy.get('#menu-item-533').click();
      cy.url().should('eq', 'https://neptuneflood.net/');
    });
  });
});