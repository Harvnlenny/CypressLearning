describe('get quote', () => {
  it('should ask for a valid address', () => {
    cy.visit('https://neptuneflood.com/');
    cy.get('#olark-wrapper > button').click({ force: true });
    cy.get('#quote-address').type('123 Fake St, Woodridge IL');
    cy.get('#centered-content > div.quote-form-container > .get-a-quote-form > input[type="submit"]').click();
    cy.get('#update-address > div > div.block-title.npt-print-hide > h2')
      .should('contain', 'Uh oh, we were not able to find your address.');
  });

  it('should proceed to ask what kind of home do you have', () => {
    cy.visit('https://neptuneflood.com/');
    cy.get('#olark-wrapper > button').click({ force: true });
    cy.get('#quote-address').type('1507 Main St, Valrico FL');
    cy.get('#centered-content > div.quote-form-container > .get-a-quote-form > input[type="submit"]').click();
    cy.url().should('eq', 'https://neptuneflood.com/consumer-app/home-type');
  });
});
