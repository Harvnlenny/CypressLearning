describe('footer', () => {
	describe('privacy policy', () => {
	  it('should navigate to the privacy policy page', () => {
			cy.visit('https://www.clearlyagileinc.com/');
      cy.get('.sqs-cookie-banner-v2-accept').click();
			cy.get('.footer-pages > .list > :nth-child(6) > .has-arrow > span').click({ force: true });
			cy.url().should('eq', 'https://www.clearlyagileinc.com/privacy-policy');
		});
	});
});