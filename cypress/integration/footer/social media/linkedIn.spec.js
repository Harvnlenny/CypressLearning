describe('footer', () => {
	describe('social media', () => {
    describe('linkedIn', () => {
      it('should check the url route for linkedIn', () => {
        cy.visit('https://www.clearlyagileinc.com/');
        cy.get('.sqs-cookie-banner-v2-accept').click();
        cy.get(':nth-child(2) > a.has-icon')
          .should('have.prop', 'href')
          .and('equal', 'https://www.linkedin.com/company/clearly-agile-inc');
      });
    });
	});
});