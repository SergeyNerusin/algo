import {
  elementInput,
  buttonReverse,
  renderCircle,
  circleDefault,
  circleChanging,
  circleModified,
} from '../constants/constants';
import { DELAY_MILLISECONDS } from '../../src/utils/delay';
describe('check permutation of a string in reverse order', () => {
  beforeEach(() => {
    cy.viewport(1280, 900);
    cy.visit('/recursion');
  });

  it('initial state input line is empty, "reverse" button is disabled', () => {
    cy.get(elementInput).should('have.value', '');
    cy.get(buttonReverse).should('be.disabled');
  });

  it('check reverse string', () => {
    cy.get(elementInput).type('ytrewq');
    cy.get(buttonReverse).should('not.be.disabled');
    cy.get(buttonReverse).click();
    cy.get(buttonReverse)
      .invoke('attr', 'class')
      .then((classList) => expect(classList).contains('loader'));

    cy.get(renderCircle).then((elem) => {
      cy.get(elem[0])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleChanging));
      cy.get(elem[0]).children().should('have.text', 'y');

      cy.get(elem[1])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleDefault));
      cy.get(elem[1]).children().should('have.text', 't');

      cy.get(elem[2])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleDefault));
      cy.get(elem[2]).children().should('have.text', 'r');

      cy.get(elem[3])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleDefault));
      cy.get(elem[3]).children().should('have.text', 'e');

      cy.get(elem[4])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleDefault));
      cy.get(elem[4]).children().should('have.text', 'w');

      cy.get(elem[5])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleChanging));
      cy.get(elem[5]).children().should('have.text', 'q');
    });

    cy.wait(DELAY_MILLISECONDS);

    cy.get(renderCircle).then((elem) => {
      cy.get(elem[0])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleModified));
      cy.get(elem[0]).children().should('have.text', 'q');

      cy.get(elem[1])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleChanging));
      cy.get(elem[1]).children().should('have.text', 't');

      cy.get(elem[2])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleDefault));
      cy.get(elem[2]).children().should('have.text', 'r');

      cy.get(elem[3])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleDefault));
      cy.get(elem[3]).children().should('have.text', 'e');

      cy.get(elem[4])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleChanging));
      cy.get(elem[4]).children().should('have.text', 'w');

      cy.get(elem[5])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleModified));
      cy.get(elem[5]).children().should('have.text', 'y');
    });

    cy.wait(DELAY_MILLISECONDS);

    cy.get(renderCircle).then((elem) => {
      cy.get(elem[0])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleModified));
      cy.get(elem[0]).children().should('have.text', 'q');

      cy.get(elem[1])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleModified));
      cy.get(elem[1]).children().should('have.text', 'w');

      cy.get(elem[2])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleChanging));
      cy.get(elem[2]).children().should('have.text', 'r');

      cy.get(elem[3])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleChanging));
      cy.get(elem[3]).children().should('have.text', 'e');

      cy.get(elem[4])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleModified));
      cy.get(elem[4]).children().should('have.text', 't');

      cy.get(elem[5])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleModified));
      cy.get(elem[5]).children().should('have.text', 'y');
    });

    cy.wait(DELAY_MILLISECONDS);

    cy.get(renderCircle).then((elem) => {
      cy.get(elem[0])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleModified));
      cy.get(elem[0]).children().should('have.text', 'q');

      cy.get(elem[1])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleModified));
      cy.get(elem[1]).children().should('have.text', 'w');

      cy.get(elem[2])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleModified));
      cy.get(elem[2]).children().should('have.text', 'e');

      cy.get(elem[3])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleModified));
      cy.get(elem[3]).children().should('have.text', 'r');

      cy.get(elem[4])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleModified));
      cy.get(elem[4]).children().should('have.text', 't');

      cy.get(elem[5])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleModified));
      cy.get(elem[5]).children().should('have.text', 'y');
    });

    cy.get(elementInput).should('have.value', '');
    cy.get(buttonReverse).should('be.disabled');
  });
});
