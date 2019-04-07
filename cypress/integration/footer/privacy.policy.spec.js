describe('footer', () => {
	describe('privacy policy', () => {
	  it('should navigate to the privacy policy page', () => {
	    cy.visit('https://neptuneflood.com/');
			cy.get('#menu-item-425').click();
			cy.url().should('eq', 'https://neptuneflood.com/privacy-policy/');
		});
	});
});