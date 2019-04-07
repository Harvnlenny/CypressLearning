describe('header', () => {
	describe('report a claim', () => {
	  it('should navigate to the report a claim page', () => {
	    cy.visit('https://neptuneflood.com/');
	    cy.get('#menu-item-17').click();
	    cy.url().should('eq', 'https://neptuneflood.com/report-a-claim/');
	  });
	});
});