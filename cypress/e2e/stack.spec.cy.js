import {
  elementInput,
  buttonAdd,
  buttonDelete,
  buttonClear,
  renderCircle,
  circleDefault,
  circleChanging,
} from '../constants/constants';

import { DELAY_MILLISECONDS_500 } from '../../src/utils/delay';

const testArrayString = ['qwe', 'wer', 'ert', 'rtyuip'];

describe('check work stac componet', () => {
  beforeEach(() => {
    cy.clock();
    cy.viewport(1280, 900);
    cy.visit('/stack');
  });

  const addElementInStack = (value, index) => {
    cy.get(elementInput).type(value);
    cy.get(buttonAdd).should('not.be.disabled');
    cy.wait(1500);
    cy.get(buttonAdd).click();
    cy.get(elementInput).should('have.value', '');
    cy.get(buttonAdd)
      .invoke('attr', 'class')
      .then((classList) => expect(classList).contains('loader'));
    cy.get(buttonDelete).should('be.disabled');
    cy.get(buttonClear).should('be.disabled');
    cy.get(renderCircle).then((elem) => {
      cy.get(elem[index])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleChanging));
    });
    cy.tick(DELAY_MILLISECONDS_500);
    cy.get(buttonAdd).should('be.disabled');
    cy.get(buttonDelete).should('not.be.disabled');
    cy.get(buttonClear).should('not.be.disabled');
    cy.get(renderCircle).then((elem) => {
      cy.get(elem[index])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleDefault));
    });
  };

  const deleteElement = () => {
    const index = testArrayString.length - 1;
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
    });
    testArrayString.pop();
    cy.wait(2000);
    cy.tick(DELAY_MILLISECONDS_500);
    cy.get(buttonAdd).should('be.disabled');
    cy.get(buttonDelete).should('be.enabled');
    cy.get(buttonClear).should('be.enabled');
  };

  it('initial state input line is empty, buttons is disabled', () => {
    cy.get(elementInput).should('have.value', '');
    cy.get(buttonAdd).should('be.disabled');
    cy.get(buttonDelete).should('be.disabled');
    cy.get(buttonClear).should('be.disabled');
  });

  it('checking the input of elements and rendering', () => {
    testArrayString.map((elem, index) => {
      addElementInStack(elem, index);
    });
    cy.wait(2000);
  });

  it('checking delete element, and clear elements', () => {
    testArrayString.map((elem, index) => {
      addElementInStack(elem, index);
    });
    deleteElement();
    deleteElement();
    cy.wait(2000);
    cy.get(buttonClear).click();
    cy.get(buttonClear)
      .invoke('attr', 'class')
      .then((classList) => expect(classList).contains('loader'));
    cy.wait(1000);
    cy.tick(DELAY_MILLISECONDS_500);
    cy.get(elementInput).should('have.value', '');
    cy.get(buttonAdd).should('be.disabled');
    cy.get(buttonDelete).should('be.disabled');
    cy.get(buttonClear).should('be.disabled');
    cy.get(renderCircle).should('not.exist');
  });
});
