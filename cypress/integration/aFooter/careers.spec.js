describe('footer', () => {
	describe('careers', () => {
	  it('should navigate to the careers page', () => {
			cy.visit('https://www.clearlyagileinc.com/');
			cy.wait(1000);
			cy.get('.footer-pages > .list > :nth-child(2) > .has-arrow > span').click({ force: true });
			cy.url().should('eq', 'https://www.clearlyagileinc.com/careers');
		});
	});
});