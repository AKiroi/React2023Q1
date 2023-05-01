/// <reference types="cypress" />

describe('Error page', () => {
  beforeEach(() => {
    cy.visit('/ErrorPage');
  });

  it('should render the page', () => {
    cy.contains(/Page Not Found/i).should('be.visible');
  });
});
