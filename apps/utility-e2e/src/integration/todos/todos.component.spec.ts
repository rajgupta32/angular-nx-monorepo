describe('utility', () => {
  beforeEach(() => cy.visit('/iframe.html?id=todoscomponent--primary&args=todos;'));
  it('should render the component', () => {
    cy.get('first-monorepo-todos').should('exist');
  });
});