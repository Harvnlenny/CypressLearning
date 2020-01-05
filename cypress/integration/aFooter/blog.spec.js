describe('footer', () => {
	describe('blog', () => {
	  it('should navigate to the blog page', () => {
			cy.visit('https://www.clearlyagileinc.com/');
			cy.wait(1000);
			cy.get('.footer-pages > .list > :nth-child(1) > .has-arrow > span').click({ force: true });
			cy.url().should('eq', 'https://www.clearlyagileinc.com/agile-blog');
		});
	});
});