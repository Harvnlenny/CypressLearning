describe('footer', () => {
	describe('links', () => {
		describe('agile classes', () => {
			it('should navigate to the agile classes page', () => {
				cy.visit('https://www.clearlyagileinc.com/');
				cy.get('.sqs-cookie-banner-v2-accept').click();
				cy.get('.footer-links > .list > :nth-child(5) > .has-arrow > span').click({ force: true });
				cy.url().should('eq', 'https://www.clearlyagileinc.com/classes');
			});
		});
	});
});