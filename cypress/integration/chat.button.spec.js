describe('chat button', () => {
  it('should ask the user to complete all required fields', () => {
    cy.visit('https://neptuneflood.com/');
    cy.get('#olark-wrapper > button').click();
    cy.get('#olark-custom-survey-form > div.olark-survey-form-inner > div > button').click();
    cy.get('#olark-custom-survey-form > div.olark-survey-form-welcome.olark-survey-form-item > div')
      .should('contain', 'Please complete all required fields');
  });

  it('should ask the user to fill in a valid email address', () => {
    cy.visit('https://neptuneflood.com/');
    cy.get('#olark-wrapper > button').click();
    cy.get('#olark-custom-survey-form > div.olark-survey-form-inner > div > div.olark-survey-form-item.olark-survey-form-item-name.olark-survey-form-is-required > input')
      .type('Customer Name');
    cy.get('#olark-custom-survey-form > div.olark-survey-form-inner > div > button').click();
    cy.get('#olark-custom-survey-form > div.olark-survey-form-welcome.olark-survey-form-item > div')
      .should('contain', 'Please enter a valid email address');
  });
  
  it('should ask the user to complete all required fields if the input field is not filled out', () => {
    cy.visit('https://neptuneflood.com/');
    cy.get('#olark-wrapper > button').click();
    cy.get('#olark-custom-survey-form > div.olark-survey-form-inner > div > div.olark-survey-form-item.olark-survey-form-item-name.olark-survey-form-is-required > input')
      .type('Customer Name');
    cy.get('#olark-custom-survey-form > div.olark-survey-form-inner > div > div.olark-survey-form-item.olark-survey-form-item-email.olark-survey-form-is-required > input')
      .type('Joe@example.com');
    cy.get('#olark-custom-survey-form > div.olark-survey-form-inner > div > button').click();
    cy.get('#olark-container > div.olark-overlay-module-container.olark-no-message-form > div > div')
      .should('contain', `Please complete all required fields`);
  });
});
