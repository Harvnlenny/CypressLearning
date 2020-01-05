describe('header', () => {
	describe('blog', () => {
	  it('should navigate to the blog page', () => {
	    cy.visit('https://www.clearlyagileinc.com/');
			cy.get('.main-menu > :nth-child(6) > a').click({ force: true });
			cy.url().should('eq', 'https://www.clearlyagileinc.com/agile-blog');
		});
	});
});