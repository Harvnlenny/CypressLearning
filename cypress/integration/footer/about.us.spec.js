describe('footer', () => {
	describe('about us', () => {
	  it('should navigate to the about us page', () => {
	    cy.visit('https://neptuneflood.com/');
			cy.get('#menu-item-20 > a').click({ force: true });
			cy.url().should('eq', 'https://neptuneflood.com/about/');
		});
	});
});