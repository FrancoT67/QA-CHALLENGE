let user_name='testuser';
let user_pass='TestPass123!';
const page='login';
describe("Login Frontend - DemoQA", () => {
  Cypress.on('uncaught:exception',(err,runnable)=>{
    return false;
  })
  it("deberia loguearse con las credenciales validas", () => {
    cy.visit(`/${page}`);

    cy.get("#userName").type(user_name);
    cy.get("#password").type(user_pass);
    cy.get("#login").click();

    cy.url().should("include", "/profile");
  });
});
