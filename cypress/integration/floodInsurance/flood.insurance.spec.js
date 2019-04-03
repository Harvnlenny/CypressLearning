describe('flood insurance', () => {
  it('should navigate to the flood insurance page', () => {
    cy.visit('https://neptuneflood.com/');
    cy.get('#menu-item-18').click();
    cy.url().should('eq', 'https://neptuneflood.com/privatefloodinsurance/');
  });
});