describe('footer', () => {
	describe('social media', () => {
    describe('twitter', () => {
      it('should check the url route for twitter', () => {
        cy.visit('https://www.clearlyagileinc.com/');
        cy.get('.sqs-cookie-banner-v2-accept').click();
        cy.get(':nth-child(1) > a.has-icon')
          .should('have.prop', 'href')
          .and('equal', 'https://twitter.com/clearlyagileinc');
      });
    });
	});
});