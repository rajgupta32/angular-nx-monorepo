describe('shell', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('first-monorepo-root').should('exist');
  });
});