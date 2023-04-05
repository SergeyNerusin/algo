import {
  elementInput,
  elementInputIndex,
  renderliElement,
  renderCircle,
  renderCircleSmall,
  buttonAddHead,
  buttonAddTail,
  buttonDeleteFromHead,
  buttonDeleteFromTail,
  buttonAddByIndex,
  buttonDeleteByIndex,
  circleDefault,
  circleChanging,
  circleModified,
} from '../constants/constants';

import { DELAY_MILLISECONDS_500 } from '../../src/utils/delay';
let lastIndex = null;
describe('check permutation of a string in reverse order', () => {
  beforeEach(() => {
    cy.clock();
    cy.viewport(1280, 900);
    cy.visit('/list');
  });

  const addHeadElementList = (value) => {
    cy.get(elementInput).type(value);
    cy.get(buttonAddHead).click();
    cy.get(buttonAddHead)
      .invoke('attr', 'class')
      .then((classList) => expect(classList).contains('loader'));
    cy.wait(1000);
    cy.get(renderliElement).then((elem) =>
      cy
        .get(elem[0])
        .find(renderCircleSmall)
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleChanging))
    );
    cy.get(renderCircleSmall)
      .children()
      .should('have.text', value)
      .should('be.visible');
    cy.tick(DELAY_MILLISECONDS_500);
    cy.get(renderCircleSmall).should('not.exist');
    cy.get(renderCircle).then((elem) => {
      cy.get(elem[0])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleModified));
      cy.get(elem[0]).siblings('div').contains('head');
      cy.get(elem[0]).should('have.text', value);
    });
    cy.wait(1000);
    cy.tick(DELAY_MILLISECONDS_500);
    cy.get(renderCircle).then((elem) => {
      cy.get(elem[0])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleDefault));
    });
    cy.tick(DELAY_MILLISECONDS_500);
    cy.get(elementInput).should('have.value', '');
    cy.get(buttonAddHead).should('be.disabled');
  };

  const addTailElementList = (value, index) => {
    cy.get(elementInput).type(value);
    cy.get(buttonAddTail).click();
    cy.get(buttonAddTail)
      .invoke('attr', 'class')
      .then((classList) => expect(classList).contains('loader'));
    cy.wait(1000);
    cy.get(renderliElement).then((elem) =>
      cy
        .get(elem[index])
        .find(renderCircleSmall)
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleChanging))
    );
    cy.get(renderCircleSmall)
      .children()
      .should('have.text', value)
      .should('be.visible');
    cy.tick(DELAY_MILLISECONDS_500);
    cy.get(renderCircleSmall).should('not.exist');
    cy.get(renderCircle).then((elem) => {
      cy.get(elem[index + 1])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleModified));
      cy.get(elem[index + 1])
        .siblings('div')
        .contains('tail');
      cy.get(elem[index + 1]).should('have.text', value);
    });
    cy.wait(1000);
    cy.tick(DELAY_MILLISECONDS_500);
    cy.get(renderCircle).then((elem) => {
      cy.get(elem[index + 1])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleDefault));
    });
    cy.tick(DELAY_MILLISECONDS_500);
    cy.get(elementInput).should('have.value', '');
    cy.get(buttonAddTail).should('be.disabled');
  };

  const deleteHeadElementList = () => {
    let list = [];
    cy.get(buttonDeleteFromHead).should('be.enabled');
    cy.get(renderCircle)
      .children()
      .each((el) => {
        list.push(el.text().trim());
      });
    cy.get(buttonDeleteFromHead).click();
    cy.get(buttonDeleteFromHead)
      .invoke('attr', 'class')
      .then((classList) => expect(classList).contains('loader'));
    cy.get(renderliElement).then((elem) =>
      cy
        .get(elem[0])
        .find(renderCircleSmall)
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleChanging))
    );
    cy.get(renderCircle)
      .not(renderCircleSmall)
      .then((elem) => {
        cy.get(elem[0])
          .invoke('attr', 'class')
          .then((classList) => expect(classList).contains(circleDefault));
        cy.get(elem[0]).should('have.text', '');
      });
    cy.get(renderCircleSmall).should('be.visible');
    cy.get(renderCircleSmall).then((elem) => {
      cy.get(elem[0]).should('have.text', list[0]);
    });

    cy.wait(1000);
    cy.tick(DELAY_MILLISECONDS_500);
    cy.get(renderCircle).then((elem) => {
      cy.get(elem[0]).siblings('div').contains('head');
      cy.get(elem[0]).should('have.text', list[1]);
    });
    cy.wait(1000);
  };

  const deleteTailElementList = () => {
    let list = [];
    cy.get(renderCircle)
      .children()
      .each((el, index) => {
        list.push(el.text().trim());
        lastIndex = index;
      });
    cy.get(buttonDeleteFromTail).should('be.enabled');
    cy.get(buttonDeleteFromTail).click();
    cy.get(buttonDeleteFromTail)
      .invoke('attr', 'class')
      .then((classList) => expect(classList).contains('loader'));
    cy.get(renderliElement).then((elem) =>
      cy
        .get(elem[lastIndex])
        .find(renderCircleSmall)
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleChanging))
    );
    cy.get(renderCircle)
      .not(renderCircleSmall)
      .then((elem) => {
        cy.get(elem[lastIndex])
          .invoke('attr', 'class')
          .then((classList) => expect(classList).contains(circleDefault));
        cy.get(elem[lastIndex]).should('have.text', '');
      });
    cy.get(renderCircleSmall).should('be.visible');
    cy.get(renderCircleSmall).then((elem) => {
      cy.get(elem[0]).should('have.text', list[lastIndex]);
    });

    cy.wait(1000);
    cy.tick(DELAY_MILLISECONDS_500);
    cy.get(renderCircle).then((elem) => {
      cy.get(elem[lastIndex - 1])
        .siblings('div')
        .contains('tail');
      cy.get(elem[lastIndex - 1]).should('have.text', list[lastIndex - 1]);
    });
    cy.wait(1000);
  };

  const addElementByIndex = (value, index) => {
    cy.get(elementInput).type(value);
    cy.get(elementInput).should('not.have.value', '');
    cy.get(elementInputIndex).type(index);
    cy.wait(500);
    cy.get(buttonAddByIndex).should('be.enabled');
    cy.get(buttonAddByIndex).click();
    cy.get(buttonAddByIndex)
      .invoke('attr', 'class')
      .then((classList) => expect(classList).contains('loader'));
    for (let i = 0; i < index; i++) {
      cy.get(renderliElement).then((elem) =>
        cy
          .get(elem[i])
          .find(renderCircleSmall)
          .invoke('attr', 'class')
          .then((classList) => expect(classList).contains(circleChanging))
      );
      cy.get(renderCircleSmall)
        .children()
        .should('have.text', value)
        .should('be.visible');
      cy.get(renderCircle).then((elem) => {
        cy.get(elem[i])
          .invoke('attr', 'class')
          .then((classList) => expect(classList).contains(circleChanging));
      });
      cy.wait(1000);
      cy.tick(DELAY_MILLISECONDS_500);
      cy.get(renderCircle).then((elem) => {
        cy.get(elem[i])
          .invoke('attr', 'class')
          .then((classList) => expect(classList).contains(circleChanging));
      });
      // cy.contains(renderCircleSmall).should('not.exist');
      cy.get(renderCircleSmall).should('not.exist');
      cy.wait(1000);
      cy.tick(DELAY_MILLISECONDS_500);
    }
    cy.wait(1000);
    cy.tick(DELAY_MILLISECONDS_500);
    // cy.contains(renderCircleSmall).should('not.exist');
    cy.get(renderCircleSmall).should('not.exist');
    cy.get(renderCircle).then((elem) => {
      cy.get(elem[index])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleDefault));
    });
    cy.tick(DELAY_MILLISECONDS_500);
    cy.get(renderCircle).then((elem) => {
      cy.get(elem[index])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleModified));
      cy.get(elem[index]).should('have.text', value);
    });
    cy.tick(DELAY_MILLISECONDS_500);
    cy.get(renderCircle).then((elem) => {
      cy.get(elem[index])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleModified));
      cy.get(elem[index]).should('have.text', value);
    });
    cy.wait(1000);
    cy.tick(DELAY_MILLISECONDS_500);
    cy.get(renderCircle).then((elem) => {
      cy.get(elem[index])
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleDefault));
    });

    cy.get(renderCircle).then((elem) => {
      const renderCircleCount = Cypress.$(elem).length;
      expect(elem).to.have.length(renderCircleCount);
    });
  };

  const deleteElementByIndex = (index) => {
    let list = [];
    cy.get(renderCircle)
      .children()
      .each((el) => {
        list.push(el.text().trim());
      });
    console.log('list', list);
    cy.get(elementInputIndex).type(index);
    cy.get(buttonDeleteByIndex).should('be.enabled');
    cy.get(buttonDeleteByIndex).click();
    cy.get(buttonDeleteByIndex)
      .invoke('attr', 'class')
      .then((classList) => expect(classList).contains('loader'));

    for (let i = 0; i < index; i++) {
      cy.get(renderliElement).then((elem) =>
        cy
          .get(elem[i])
          .find(renderCircle)
          .invoke('attr', 'class')
          .then((classList) => expect(classList).contains(circleDefault))
      );
      cy.tick(DELAY_MILLISECONDS_500);
      cy.get(renderliElement).then((elem) =>
        cy
          .get(elem[i])
          .find(renderCircle)
          .invoke('attr', 'class')
          .then((classList) => expect(classList).contains(circleChanging))
      );
      cy.wait(500);
      cy.tick(DELAY_MILLISECONDS_500);
    }
    cy.tick(DELAY_MILLISECONDS_500);
    cy.get(renderCircle)
      .not(renderCircleSmall)
      .then((elem) => {
        cy.get(elem[index])
          .invoke('attr', 'class')
          .then((classList) => expect(classList).contains(circleDefault));
        cy.get(elem[index]).should('have.text', '');
      });
    cy.get(renderliElement).then((elem) =>
      cy
        .get(elem[index])
        .find(renderCircleSmall)
        .invoke('attr', 'class')
        .then((classList) => expect(classList).contains(circleChanging))
    );
    cy.get(renderCircleSmall).should('be.visible');
    cy.get(renderCircleSmall).then((elem) => {
      cy.get(elem[0]).should('have.text', list[index]);
    });
    cy.wait(1000);
    cy.tick(DELAY_MILLISECONDS_500);
    cy.get(renderCircleSmall).should('not.exist');
    cy.get(buttonDeleteByIndex).should('be.enabled');
    cy.tick(DELAY_MILLISECONDS_500);
  };

  it('initial state input elements, buttons, list elemens', () => {
    cy.get(elementInput).should('have.value', '');
    cy.get(elementInputIndex).should('have.value', 0);
    cy.get(buttonAddHead).should('be.disabled');
    cy.get(buttonAddTail).should('be.disabled');
    cy.get(buttonDeleteFromHead).should('be.enabled');
    cy.get(buttonDeleteFromTail).should('be.enabled');
    cy.get(buttonAddByIndex).should('be.disabled');
    cy.get(buttonDeleteByIndex).should('be.enabled');
    cy.get(renderCircle).should('have.length', 4);
  });

  it('add element in head list', () => {
    addHeadElementList('aaa');
    cy.get(renderCircle).should('have.length', 5);
    addHeadElementList('100');
    cy.get(renderCircle).should('have.length', 6);
    cy.wait(1000);
  });

  it('add element in tail list', () => {
    addTailElementList('aaa', 3);
    cy.get(renderCircle).should('have.length', 5);
    addTailElementList('100', 4);
    cy.get(renderCircle).should('have.length', 6);
    cy.wait(1000);
  });

  it('delete element in head list', () => {
    deleteHeadElementList();
    cy.get(renderCircle).should('have.length', 3);
    deleteHeadElementList();
    cy.get(renderCircle).should('have.length', 2);
    cy.wait(1000);
  });

  it('delete element in tail list', () => {
    deleteTailElementList();
    cy.get(renderCircle).should('have.length', 3);
    deleteTailElementList();
    cy.get(renderCircle).should('have.length', 2);
  });

  it('add element by index', () => {
    // ('value', index for insert element)
    addElementByIndex('100', 3);
    cy.get(renderCircle).should('have.length', 5);
    cy.wait(1000);
    addElementByIndex('1000', 2);
    cy.get(renderCircle).should('have.length', 6);
  });

  it('delete element by index', () => {
    deleteElementByIndex(3);
    cy.get(renderCircle).should('have.length', 3);
    cy.wait(1000);
    deleteElementByIndex(1);
    cy.get(renderCircle).should('have.length', 2);
  });
});
