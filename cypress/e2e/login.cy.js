describe("Login Frontend - DemoQA", () => {
  it("deberia loguearse con las credenciales validas", () => {
    cy.visit("https://demoqa.com/login");

    cy.get("#userName").type("testuser");
    cy.get("#password").type("TestPass123!");
    cy.get("#login").click();

    cy.url().should("include", "/profile");
  });
});
