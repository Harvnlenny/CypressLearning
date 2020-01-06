describe('home', () => {
	describe('agile services button', () => {
	  it('should click the agile services button to navigate to the services page', () => {
      cy.visit('https://www.clearlyagileinc.com/');
			cy.get('.ca-block-button').eq(-1).click({ force: true });
			cy.url().should('eq', 'https://www.clearlyagileinc.com/services');
		});
	});
});