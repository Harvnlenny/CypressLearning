describe('footer', () => {
	describe('faq', () => {
	  it('should navigate to the faq page', () => {
	    cy.visit('https://neptuneflood.com/');
			cy.get('#menu-item-24 > a').click({ force: true });
			cy.url().should('eq', 'https://neptuneflood.com/faq/');
		});
	});
});