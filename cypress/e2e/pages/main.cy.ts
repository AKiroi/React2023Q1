/// <reference types="cypress" />

describe('Main page', () => {
  const cardSelector = '[data-testid="card"]';
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render cards', () => {
    cy.get(cardSelector).should('have.length.above', 1);
  });

  it('should display placeholder "Find..."', () => {
    cy.get('input[type="text"]')
      .should('be.visible')
      .invoke('attr', 'placeholder')
      .should('contain', 'Find...');
  });

  it('should find and render clickable cards', () => {
    cy.get('input').type('iphone{enter}');
    cy.get(cardSelector).should('have.length.above', 1);
    cy.contains(/iphone 9/i).click();
    cy.contains(/An apple mobile which is nothing like apple/i).should('be.visible');
  });

  it('should preserve search input value and found cards when leaving page', () => {
    cy.debug();
    cy.get('input').type('macbook{enter}');
    cy.contains('a', /aboutUs/i).click();
    cy.contains('a', /main/i).click();
    cy.get(cardSelector).should('have.length', 1);
    cy.get('input').should('have.value', 'macbook');
  });

  it('should correctly render pages', () => {
    cy.visit('/');
    cy.get('[data-testid="mainPage"]').should('be.visible');

    const links = [
      { text: /AboutUs/i, href: '/aboutUs' },
      { text: /Form/i, href: '/formPage' },
    ];

    links.forEach(({ text, href }) => {
      cy.contains('a', text).should('be.visible');
      cy.contains('a', text).click();
      cy.url().should('include', href);
    });
  });
});
