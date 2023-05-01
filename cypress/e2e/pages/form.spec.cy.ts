/// <reference types="cypress" />

describe('Form page', () => {
  beforeEach(() => {
    cy.visit('/formPage');
  });

  it('should contain a form', () => {
    cy.get('form').should('be.visible');
  });

  it('should submit form', () => {
    cy.get('input[name="firstName"]').type('Oleksandr');
    cy.get('input[name="lastName"]').type('Pudzanovsky');
    cy.get('input[type=date]').type('2008-08-14');
    cy.get('select').select('England');
    cy.get('input[type=radio]').first().check();
    cy.get('input[type=checkbox]').check();
    cy.get('input[type="file"]').selectFile('public/img/01.jpeg');
    cy.contains('button', /Submit/i).click();
    cy.contains('Add user');
  });
});
