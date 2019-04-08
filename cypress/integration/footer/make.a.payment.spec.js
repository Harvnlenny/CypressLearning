describe('footer', () => {
	describe('make a payment', () => {
	  it('should navigate to the make a payment page', () => {
	    cy.visit('https://neptuneflood.com/');
			cy.get('#menu-item-33 > a').click({ force: true });
			cy.url().should('eq', 'https://neptuneflood.com/flood-insurance-support/#make-a-payment');
		});
	});
});