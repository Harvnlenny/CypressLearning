describe('header', () => {
	describe('services', () => {
	  it('should navigate to the services page', () => {
	    cy.visit('https://www.clearlyagileinc.com/');
			cy.get('.main-menu > :nth-child(1) > a').click({ force: true });
			cy.url().should('eq', 'https://www.clearlyagileinc.com/services');
		});
	});
});