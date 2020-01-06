describe('footer', () => {
	describe('links', () => {
		describe('agile training', () => {
			it('should navigate to the agile training page', () => {
				cy.visit('https://www.clearlyagileinc.com/');
				cy.get('.sqs-cookie-banner-v2-accept').click();
				cy.get('.footer-links > .list > :nth-child(4) > .has-arrow > span').click({ force: true });
				cy.url().should('eq', 'https://www.clearlyagileinc.com/services/training');
			});
		});
	});
});