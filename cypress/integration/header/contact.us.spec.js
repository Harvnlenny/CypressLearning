describe('header', () => {
	describe('contact us', () => {
	  it('should navigate to the contact us page', () => {
	    cy.visit('https://www.clearlyagileinc.com/');
			cy.get('.main-menu > :nth-child(7) > a').click({ force: true });
			cy.url().should('eq', 'https://www.clearlyagileinc.com/contact-us');
		});
	});
});