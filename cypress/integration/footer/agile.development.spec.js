describe('footer', () => {
	describe('agile development', () => {
	  it('should navigate to the agile development page', () => {
			cy.visit('https://www.clearlyagileinc.com/');
      cy.get('.sqs-cookie-banner-v2-accept').click();
			cy.get('.footer-links > .list > :nth-child(6) > .has-arrow > span').click({ force: true });
			cy.url().should('eq', 'https://www.clearlyagileinc.com/services/development');
		});
	});
});