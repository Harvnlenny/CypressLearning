describe('footer', () => {
	describe('agile transformation', () => {
	  it('should navigate to the agile transformation page', () => {
			cy.visit('https://www.clearlyagileinc.com/');
			cy.wait(1000);
			cy.get('.footer-links > .list > :nth-child(2) > .has-arrow > span').click({ force: true });
			cy.url().should('eq', 'https://www.clearlyagileinc.com/services/transformation');
		});
	});
});