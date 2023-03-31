import { DELAY_MILLISECONDS_700 } from '../../src/utils/delay';

describe('check work fibonacci componet', () => {
  beforeEach(() => {
    cy.viewport(1280, 900);
    cy.visit('/fibonacci');
  });

  it('initial state input line is empty, button submit is disabled', () => {
    cy.get('[data-cy="input"]').should('have.value', '');
    cy.get('[type="submit"]').should('be.disabled');
  });

  it('checking the output of fibonacci numbers', () => {
    cy.get('[data-cy="input"]').type('4');
    cy.get('[type="submit"]').click();
    cy.get('[type="submit"]')
      .invoke('attr', 'class')
      .then((classList) => expect(classList).contains('loader'));
    cy.wait(DELAY_MILLISECONDS_700);
    cy.get('[class^="circle_circle"]').then((elem) => {
      cy.get(elem[0]).children().should('have.text', '1');
    });
    cy.wait(DELAY_MILLISECONDS_700);
    cy.get('[class^="circle_circle"]').then((elem) => {
      cy.get(elem[0]).children().should('have.text', '1');
      cy.get(elem[1]).children().should('have.text', '1');
    });
    cy.wait(DELAY_MILLISECONDS_700);
    cy.get('[class^="circle_circle"]').then((elem) => {
      cy.get(elem[0]).children().should('have.text', '1');
      cy.get(elem[1]).children().should('have.text', '1');
      cy.get(elem[2]).children().should('have.text', '2');
    });
    cy.wait(DELAY_MILLISECONDS_700);
    cy.get('[class^="circle_circle"]').then((elem) => {
      cy.get(elem[0]).children().should('have.text', '1');
      cy.get(elem[1]).children().should('have.text', '1');
      cy.get(elem[2]).children().should('have.text', '2');
      cy.get(elem[3]).children().should('have.text', '3');
    });
    cy.wait(DELAY_MILLISECONDS_700);
    cy.get('[class^="circle_circle"]').then((elem) => {
      cy.get(elem[0]).children().should('have.text', '1');
      cy.get(elem[1]).children().should('have.text', '1');
      cy.get(elem[2]).children().should('have.text', '2');
      cy.get(elem[3]).children().should('have.text', '3');
      cy.get(elem[4]).children().should('have.text', '5');
    });

    cy.get('[data-cy="input"]').should('have.value', '');
    cy.get('[type="submit"]').should('be.disabled');
  });
});
