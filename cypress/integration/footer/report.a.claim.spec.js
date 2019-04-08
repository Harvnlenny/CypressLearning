describe('footer', () => {
	describe('report a claim', () => {
	  it('should navigate to the report a claim page', () => {
	    cy.visit('https://neptuneflood.com/');
			cy.get('#menu-item-268 > a').click({ force: true });
			cy.url().should('eq', 'https://neptuneflood.com/report-a-claim/#report-a-claim');
		});
	});
});