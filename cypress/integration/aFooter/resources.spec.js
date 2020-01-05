describe('footer', () => {
	describe('resources', () => {
	  it('should navigate to the resources page', () => {
			cy.visit('https://www.clearlyagileinc.com/');
			cy.wait(1000);
			cy.get('.footer-pages > .list > :nth-child(4) > .has-arrow > span').click({ force: true });
			cy.url().should('eq', 'https://www.clearlyagileinc.com/resources');
		});
	});
});