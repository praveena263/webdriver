describe('Test Contact Us form via webdriverUnoi', () => {
  it('Should be able to submit a suceesful submission via contact us form', () => {
    cy.visit('/');
    cy.contains('CONTACT US').invoke('removeAttr','target').click({force : true});
    cy.url().should('include','contactus'); 
    cy.get('[name="first_name"]').type('Praveena')
    cy.get('[name="last_name"]').type('Kunche');
    cy.get('[name="email"]').type('testmail@gmail.com');
    cy.get('textarea.feedback-input').type('Hello world');
    cy.get('[type="submit"]').click();
    cy.contains('h1','Thank You for your Message!').should('be.visible') ;
    cy.get('[id="fountainG"]').should('be.visible');
  })
  it('Should not be able to submit a suceesful submission via contact us form as all fields are requires', () => {
    cy.visit('/');
    cy.contains('CONTACT US').invoke('removeAttr','target').click({force : true});
    cy.url().should('include','contactus'); 
    cy.get('[name="first_name"]').type('Praveena')
    cy.get('[name="last_name"]').type('Kunche');
    cy.get('textarea.feedback-input').type('Hello world');
    cy.get('[type="submit"]').click();
    cy.contains('h1','Thank You for your Message!').should('be.visible') ;
    cy.get('[id="fountainG"]').should('be.visible');
  })
})