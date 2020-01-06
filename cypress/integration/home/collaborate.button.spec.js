describe('home', () => {
	describe('collaborate button', () => {
	  it('should click the collaborate button to navigate to the contact us page', () => {
      cy.visit('https://www.clearlyagileinc.com/');
			cy.get('.ca-block-button').contains("Let's Collaborate").click({ force: true });
			cy.url().should('eq', 'https://www.clearlyagileinc.com/contact-us');
		});
	});
});