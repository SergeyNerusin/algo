import {
  elementInput,
  buttonAdd,
  buttonDelete,
  buttonClear,
  renderCircle,
  circleDefault,
  circleChanging,
} from '../constants/constants';

import { DELAY_MILLISECONDS_700 } from '../../src/utils/delay';

const testArrayString = ['qwe', 'wer', 'ert', 'rtyuip'];

describe('check work stack componet', () => {
  beforeEach(() => {
    cy.clock();
    cy.viewport(1280, 900);
    cy.visit('/queue');
  });

  const addElementInQueue = (value, index) => {
    cy.get(elementInput).type(value);
    cy.get(buttonAdd).should('be.enabled');
    cy.wait(1500);
    cy.get(buttonAdd).click();
    cy.get(elementInput).should('have.value', '');
    cy.get(buttonAdd)
      .invoke('attr', 'class')
      .then((classList) => expect(classList).contains('loader'));
    cy.wait(500);
    cy.get(buttonDelete).should('be.disabled');
    cy.get(buttonClear).should('be.disabled');
    cy.get(renderCircle).then((elem) => {
      cy.get(elem[index])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleChanging));
    });
    cy.tick(DELAY_MILLISECONDS_700);
    cy.get(buttonAdd).should('be.disabled');
    cy.get(buttonDelete).should('be.enabled');
    cy.get(buttonClear).should('be.enabled');
    if (index === 0) {
      cy.get(renderCircle).then((elem) => {
        cy.get(elem[0]).siblings('div').contains('head');
        cy.get(elem[0]).siblings('div').contains('tail');
      });
    }
    cy.get(renderCircle).then((elem) => {
      cy.get(elem[index])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleDefault));
      cy.get(elem[index]).siblings('div').contains('tail');
    });
  };

  const deleteElementQueue = (index) => {
    cy.get(buttonDelete).click();
    cy.get(buttonDelete)
      .invoke('attr', 'class')
      .then((classList) => expect(classList).contains('loader'));
    cy.get(buttonAdd).should('be.disabled');
    cy.get(buttonClear).should('be.disabled');
    cy.get(renderCircle).then((elem) => {
      cy.get(elem[index])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleChanging));
      cy.get(elem[index]).siblings('div').contains('head');
    });
    cy.wait(2000);
    cy.tick(DELAY_MILLISECONDS_700);
    cy.get(renderCircle).then((elem) => {
      cy.get(elem[index])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleDefault));
      cy.get(elem[index]).siblings('div').contains('head');
    });

    cy.get(buttonAdd).should('be.disabled');
    cy.get(buttonDelete).should('be.enabled');
    cy.get(buttonClear).should('be.enabled');
  };

  it('initial state input line is empty, buttons is disabled', () => {
    cy.get(elementInput).should('have.value', '');
    cy.get(buttonAdd).should('be.disabled');
    cy.get(buttonDelete).should('be.disabled');
    cy.get(buttonClear).should('be.disabled');
    cy.get(renderCircle).should('have.length', 7);
  });

  it('checking the input of elements in queue and rendering', () => {
    testArrayString.map((elem, index) => {
      addElementInQueue(elem, index);
    });
    cy.wait(2000);
  });

  it('checking delete element, and clear elements', () => {
    testArrayString.map((elem, index) => {
      addElementInQueue(elem, index);
    });
    deleteElementQueue(1);
    deleteElementQueue(2);
    cy.wait(2000);
    cy.get(buttonClear).click();
    cy.get(buttonClear)
      .invoke('attr', 'class')
      .then((classList) => expect(classList).contains('loader'));
    cy.wait(1000);
    cy.tick(DELAY_MILLISECONDS_700);
    cy.get(elementInput).should('have.value', '');
    cy.get(buttonAdd).should('be.disabled');
    cy.get(buttonDelete).should('be.disabled');
    cy.get(buttonClear).should('be.disabled');
    cy.get(renderCircle).children().next().should('not.exist');
  });
});
