describe('header', () => {
	describe('careers', () => {
	  it('should navigate to the careers page', () => {
	    cy.visit('https://www.clearlyagileinc.com/');
			cy.get('.main-menu > :nth-child(3) > a').click({ force: true });
			cy.url().should('eq', 'https://www.clearlyagileinc.com/careers');
		});
	});
});