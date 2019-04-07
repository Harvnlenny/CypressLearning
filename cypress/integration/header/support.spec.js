describe('header', () => {
	describe('support', () => {
	  it('should navigate to the support page', () => {
	    cy.visit('https://neptuneflood.com/');
	    cy.get('#menu-item-16').click();
	    cy.url().should('eq', 'https://neptuneflood.com/flood-insurance-support/');
	  });
	});
});