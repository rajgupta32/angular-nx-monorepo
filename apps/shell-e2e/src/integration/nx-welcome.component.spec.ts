describe('shell', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('first-monorepo-nx-welcome').should('exist');
  });
});