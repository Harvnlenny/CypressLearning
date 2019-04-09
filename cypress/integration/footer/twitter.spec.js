describe('footer', () => {
	describe('twitter', () => {
	  it('should inspect the twitter link', () => {
	    cy.visit('https://neptuneflood.com/');
			cy.get('#text-4 > div > ul > li:nth-child(1) > a')
				.should('have.prop', 'href')
				.and('equal', 'https://twitter.com/NeptuneFlood');
		});
	});
});