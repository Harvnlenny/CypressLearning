describe('footer', () => {
	describe('agile devOps', () => {
	  it('should navigate to the devOps page', () => {
			cy.visit('https://www.clearlyagileinc.com/');
			cy.wait(1000);
			cy.get('.footer-links > .list > :nth-child(3) > .has-arrow > span').click({ force: true });
			cy.url().should('eq', 'https://www.clearlyagileinc.com/services/devops');
		});
	});
});