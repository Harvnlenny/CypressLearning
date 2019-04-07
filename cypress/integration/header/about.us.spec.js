describe('header', () => {
	describe('about us', () => {
	  it('should navigate to the about us page', () => {
	    cy.visit('https://neptuneflood.com/');
			cy.get('#menu-item-15').click();
			cy.url().should('eq', 'https://neptuneflood.com/about/');
		});
		
	  it('should navigate to the about us our technology page', () => {
	    cy.visit('https://neptuneflood.com/');
	    cy.get("li#menu-item-15 ul.sub-menu").invoke("show")
			cy.get('#menu-item-271 > a').click({ force: true })
			cy.url().should('eq', 'https://neptuneflood.com/about/lidar-technology/');
	  });
	});
});