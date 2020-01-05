describe('header', () => {
	describe('about', () => {
	  it('should navigate to the about page', () => {
	    cy.visit('https://www.clearlyagileinc.com/');
			cy.get('.main-menu > :nth-child(5) > a').click({ force: true });
			cy.url().should('eq', 'https://www.clearlyagileinc.com/about');
		});
	});
});