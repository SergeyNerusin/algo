describe('checking the operation of the buttons on the sorting page', () => {
  beforeEach(() => {
    cy.viewport(1280, 900);
    cy.visit('/sorting ');
  });

  it('checking the initial state of the buttons and switch radio buttons check', () => {
    cy.get('[value="choise-method"]').should('be.checked');
    cy.get('[value="bubble-method"]').should('not.be.checked');
    cy.get('[data-cy="button-increase"]').should('not.be.disabled');
    cy.get('[data-cy="button-descending"]').should('not.be.disabled');
    cy.get('[data-cy="new-array"]').should('not.be.disabled');
    cy.wait(1000);
    cy.get('[value="bubble-method"]')
      .check({ force: true })
      .should('be.checked');
    cy.get('[value="choise-method"]').should('not.be.checked');
    cy.wait(1000);
    cy.get('[value="choise-method"]')
      .check({ force: true })
      .should('be.checked');
    cy.get('[value="bubble-method"]').should('not.be.checked');
  });

  it('check for disabling buttons, the presence of a loader on the selected sort button-descending during sorting', () => {
    cy.wait(1000);
    cy.get('[data-cy="button-descending"]').click();
    cy.get('[data-cy="button-descending"]')
      .invoke('attr', 'class')
      .then((classList) => expect(classList).contains('loader'));

    cy.get('[value="choise-method"]').should('be.disabled');
    cy.get('[value="bubble-method"]').should('be.disabled');
    cy.get('[data-cy="button-increase"]').should('be.disabled');
    cy.get('[data-cy="new-array"]').should('be.disabled');
    cy.wait(3000);
  });

  it('check for disabling buttons, the presence of a loader on the selected sort button-increase during sorting', () => {
    cy.wait(1000);
    cy.get('[data-cy="button-increase"]').click();
    cy.get('[data-cy="button-increase"]')
      .invoke('attr', 'class')
      .then((classList) => expect(classList).contains('loader'));

    cy.get('[value="choise-method"]').should('be.disabled');
    cy.get('[value="bubble-method"]').should('be.disabled');
    cy.get('[data-cy="button-descending"]').should('be.disabled');
    cy.get('[data-cy="new-array"]').should('be.disabled');
  });
});
