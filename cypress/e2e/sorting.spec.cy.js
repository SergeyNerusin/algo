import {
  buttonRadioChoise,
  buttonRadioBubble,
  buttonNewArray,
  buttonIncrease,
  buttonDescending,
} from '../constants/constants';

describe('checking the operation of the buttons on the sorting page', () => {
  beforeEach(() => {
    cy.viewport(1280, 900);
    cy.visit('/sorting ');
  });

  it('checking the initial state of the buttons and switch radio buttons check', () => {
    cy.get(buttonRadioChoise).should('be.checked');
    cy.get(buttonRadioBubble).should('not.be.checked');
    cy.get(buttonIncrease).should('not.be.disabled');
    cy.get(buttonDescending).should('not.be.disabled');
    cy.get(buttonNewArray).should('not.be.disabled');
    cy.wait(1000);
    cy.get(buttonRadioBubble).check({ force: true }).should('be.checked');
    cy.get(buttonRadioChoise).should('not.be.checked');
    cy.wait(1000);
    cy.get(buttonRadioChoise).check({ force: true }).should('be.checked');
    cy.get(buttonRadioBubble).should('not.be.checked');
  });

  it('check for disabling buttons, the presence of a loader on the selected sort button-descending during sorting', () => {
    cy.wait(1000);
    cy.get(buttonDescending).click();
    cy.get(buttonDescending)
      .invoke('attr', 'class')
      .then((classList) => expect(classList).contains('loader'));

    cy.get(buttonRadioChoise).should('be.disabled');
    cy.get(buttonRadioBubble).should('be.disabled');
    cy.get(buttonIncrease).should('be.disabled');
    cy.get(buttonNewArray).should('be.disabled');
    cy.wait(3000);
  });

  it('check for disabling buttons, the presence of a loader on the selected sort button-increase during sorting', () => {
    cy.wait(1000);
    cy.get(buttonIncrease).click();
    cy.get(buttonIncrease)
      .invoke('attr', 'class')
      .then((classList) => expect(classList).contains('loader'));

    cy.get(buttonRadioChoise).should('be.disabled');
    cy.get(buttonRadioBubble).should('be.disabled');
    cy.get(buttonDescending).should('be.disabled');
    cy.get(buttonNewArray).should('be.disabled');
  });
});
