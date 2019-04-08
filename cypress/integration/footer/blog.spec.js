describe('footer', () => {
	describe('blog', () => {
	  it('should navigate to the blog page', () => {
	    cy.visit('https://neptuneflood.com/');
			cy.get('#menu-item-552 > a').click({ force: true });
			cy.url().should('eq', 'https://neptuneflood.com/blog/');
		});
	});
});