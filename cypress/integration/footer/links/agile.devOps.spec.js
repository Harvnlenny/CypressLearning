describe('footer', () => {
	describe('links', () => {
		describe('agile devOps', () => {
			it('should navigate to the devOps page', () => {
				cy.visit('https://www.clearlyagileinc.com/');
				cy.get('.sqs-cookie-banner-v2-accept').click();
				cy.get('.footer-links > .list > :nth-child(3) > .has-arrow > span').click({ force: true });
				cy.url().should('eq', 'https://www.clearlyagileinc.com/services/devops');
			});
		});
	});
});