/// <reference types="cypress" />

describe('AboutUs page', () => {
  beforeEach(() => {
    cy.visit('/aboutUs');
  });

  it('should render the page', () => {
    cy.contains(/About us/i).should('be.visible');
  });
});
