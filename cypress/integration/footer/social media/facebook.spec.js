describe('footer', () => {
	describe('social media', () => {
    describe('facebook', () => {
      it('should check the url route for facebook', () => {
        cy.visit('https://www.clearlyagileinc.com/');
        cy.get('.sqs-cookie-banner-v2-accept').click();
        cy.get(':nth-child(3) > a.has-icon')
          .should('have.prop', 'href')
          .and('equal', 'https://www.facebook.com/ClearlyAgile/');
      });
    });
	});
});