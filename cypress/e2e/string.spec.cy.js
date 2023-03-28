import { DELAY_MILLISECONDS } from '../../src/utils/delay';
describe('check permutation of a string in reverse order', () => {
  beforeEach(() => {
    cy.viewport(1280, 900);
    cy.visit('/recursion');
  });

  it('initial state input line is empty, "reverse" button is disabled', () => {
    cy.get('[data-cy="input"]').should('have.value', '');
    cy.get('[data-cy="button-reverse"]').should('be.disabled');
  });

  it('check reverse string', () => {
    cy.get('[data-cy="input"]').type('ytrewq');
    cy.get('[data-cy="button-reverse"]').should('not.be.disabled');
    cy.get('[data-cy="button-reverse"]').click();
    cy.get('[data-cy="button-reverse"]')
      .invoke('attr', 'class')
      .then((classList) => expect(classList).contains('loader'));

    cy.get('[class^="circle_circle"]').then((elem) => {
      cy.get(elem[0])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains('circle_changing'));
      cy.get(elem[0]).children().should('have.text', 'y');

      cy.get(elem[1])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains('circle_default'));
      cy.get(elem[1]).children().should('have.text', 't');

      cy.get(elem[2])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains('circle_default'));
      cy.get(elem[2]).children().should('have.text', 'r');

      cy.get(elem[3])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains('circle_default'));
      cy.get(elem[3]).children().should('have.text', 'e');

      cy.get(elem[4])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains('circle_default'));
      cy.get(elem[4]).children().should('have.text', 'w');

      cy.get(elem[5])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains('circle_changing'));
      cy.get(elem[5]).children().should('have.text', 'q');
    });

    cy.wait(DELAY_MILLISECONDS);

    cy.get('[class^="circle_circle"]').then((elem) => {
      cy.get(elem[0])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains('circle_modified'));
      cy.get(elem[0]).children().should('have.text', 'q');

      cy.get(elem[1])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains('circle_changing'));
      cy.get(elem[1]).children().should('have.text', 't');

      cy.get(elem[2])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains('circle_default'));
      cy.get(elem[2]).children().should('have.text', 'r');

      cy.get(elem[3])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains('circle_default'));
      cy.get(elem[3]).children().should('have.text', 'e');

      cy.get(elem[4])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains('circle_changing'));
      cy.get(elem[4]).children().should('have.text', 'w');

      cy.get(elem[5])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains('circle_modified'));
      cy.get(elem[5]).children().should('have.text', 'y');
    });

    cy.wait(DELAY_MILLISECONDS);

    cy.get('[class^="circle_circle"]').then((elem) => {
      cy.get(elem[0])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains('circle_modified'));
      cy.get(elem[0]).children().should('have.text', 'q');

      cy.get(elem[1])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains('circle_modified'));
      cy.get(elem[1]).children().should('have.text', 'w');

      cy.get(elem[2])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains('circle_changing'));
      cy.get(elem[2]).children().should('have.text', 'r');

      cy.get(elem[3])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains('circle_changing'));
      cy.get(elem[3]).children().should('have.text', 'e');

      cy.get(elem[4])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains('circle_modified'));
      cy.get(elem[4]).children().should('have.text', 't');

      cy.get(elem[5])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains('circle_modified'));
      cy.get(elem[5]).children().should('have.text', 'y');
    });

    cy.wait(DELAY_MILLISECONDS);

    cy.get('[class^="circle_circle"]').then((elem) => {
      cy.get(elem[0])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains('circle_modified'));
      cy.get(elem[0]).children().should('have.text', 'q');

      cy.get(elem[1])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains('circle_modified'));
      cy.get(elem[1]).children().should('have.text', 'w');

      cy.get(elem[2])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains('circle_modified'));
      cy.get(elem[2]).children().should('have.text', 'e');

      cy.get(elem[3])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains('circle_modified'));
      cy.get(elem[3]).children().should('have.text', 'r');

      cy.get(elem[4])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains('circle_modified'));
      cy.get(elem[4]).children().should('have.text', 't');

      cy.get(elem[5])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains('circle_modified'));
      cy.get(elem[5]).children().should('have.text', 'y');
    });
  });

  it('input line is clear after reverse string, "reverse" button is disabled', () => {
    cy.get('[data-cy="input"]').should('have.value', '');
    cy.get('[data-cy="button-reverse"]').should('be.disabled');
  });
});