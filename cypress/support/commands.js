

Cypress.Commands.add("login", () => {  
  cy.fixture("user.json").then((userData) =>{
  cy.get('[data-cy="input-email"]').type(userData.email);
  cy.get('[data-cy="input-password"]').type(userData.password);
  cy.get('[data-cy="btn-login"]').click();
  })
});



