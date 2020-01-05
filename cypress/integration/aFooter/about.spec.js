describe('footer', () => {
	describe('about', () => {
	  it('should navigate to the about page', () => {
			cy.visit('https://www.clearlyagileinc.com/');
			cy.wait(1000);
			cy.get('.footer-pages > .list > :nth-child(3) > .has-arrow > span').click({ force: true });
			cy.url().should('eq', 'https://www.clearlyagileinc.com/about');
		});
	});
});