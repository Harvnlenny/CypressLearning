describe('footer', () => {
	describe('pages', () => {
		describe('contact us', () => {
			it('should navigate to the contact us page', () => {
				cy.visit('https://www.clearlyagileinc.com/');
				cy.get('.sqs-cookie-banner-v2-accept').click();
				cy.get('.footer-pages > .list > :nth-child(5) > .has-arrow > span').click({ force: true });
				cy.url().should('eq', 'https://www.clearlyagileinc.com/contact-us');
			});
		});
	});
});