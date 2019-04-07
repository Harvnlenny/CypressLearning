describe('footer', () => {
	describe('news', () => {
	  it('should navigate to the news page', () => {
	    cy.visit('https://neptuneflood.com/');
			cy.get('#menu-item-433').click();
			cy.url().should('eq', 'https://neptuneflood.com/flood-news/');
		});
	});
});