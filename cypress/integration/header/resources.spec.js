describe('header', () => {
	describe('resources', () => {
	  it('should navigate to the resources page', () => {
	    cy.visit('https://www.clearlyagileinc.com/');
			cy.get('.main-menu > :nth-child(4) > a').click({ force: true });
			cy.url().should('eq', 'https://www.clearlyagileinc.com/resources');
		});
	});
});