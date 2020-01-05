describe('header', () => {
	describe('classes', () => {
	  it('should navigate to the classes page', () => {
	    cy.visit('https://www.clearlyagileinc.com/');
			cy.get('.main-menu > :nth-child(2) > a').click({ force: true });
			cy.url().should('eq', 'https://www.clearlyagileinc.com/classes');
		});
	});
});