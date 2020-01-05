describe('footer', () => {
	describe('agile services', () => {
	  it('should navigate to the agile services page', () => {
			cy.visit('https://www.clearlyagileinc.com/');
			cy.wait(1000);
			cy.get('.footer-links > .list > :nth-child(1) > .has-arrow > span').click({ force: true });
			cy.url().should('eq', 'https://www.clearlyagileinc.com/services');
		});
	});
});