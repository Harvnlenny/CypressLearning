describe('home', () => {
	describe('agile classes button', () => {
	  it('should click the agile classes button to navigate to the classes page', () => {
      cy.visit('https://www.clearlyagileinc.com/');
			cy.get('.ca-block-button').eq(-2).click({ force: true });
			cy.url().should('eq', 'https://www.clearlyagileinc.com/classes');
		});
	});
});