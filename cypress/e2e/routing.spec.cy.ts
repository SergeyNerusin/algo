describe('Application launch testing', () => {
  beforeEach(() => {
    // window browser size (width, height)
    cy.viewport(1280, 900);
  });

  it('Main page available', () => {
    cy.visit('http://localhost:3000');
    cy.contains('МБОУ АЛГОСОШ');
    cy.wait(1000);
  });

  it('String page available', () => {
    cy.visit('/recursion');
    cy.contains('Строка');
    cy.wait(1000);
  });

  it('Fibonacci page available', () => {
    cy.visit('/fibonacci');
    cy.contains('Последовательность Фибоначчи');
    cy.wait(1000);
  });

  it('Sorting page available', () => {
    cy.visit('/sorting');
    cy.contains('Сортировка массива');
    cy.wait(1000);
  });

  it('Stack page available', () => {
    cy.visit('/stack');
    cy.contains('Стек');
    cy.wait(1000);
  });

  it('Queue page available', () => {
    cy.visit('/queue');
    cy.contains('Очередь');
    cy.wait(1000);
  });

  it('List page available', () => {
    cy.visit('/list');
    cy.contains('Связный список');
  });
});

export {};
