import { getGreeting, getTodos, getAddToDoButton } from '../support/app.po';

describe('to-do', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome to-do');
  });

  it('should display todos', () => {
    // Function helper example, see `../support/app.po.ts` file
    getTodos().should((t) => expect(t.length).equal(2));
    getAddToDoButton().click();
    getTodos().should((t) => expect(t.length).equal(3));
  });

});
