describe("API- Backend - DemoQA Boockstore", () => {
  let token = "";
  it("Deberia generar un token JWT valido", () => {
    cy.request({
      method: "POST",
      url: "/BookStore/v1/GenerateToken",
      body: {
        userName: "testuser",
        password: "TestPass123!",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("token");
      token = response.body.token;
    });
  });
  it("Deberia obtener libros usando el token", () => {
    cy.request({
      method: "GET",
      url: "/BookStore/v1/Books",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.books.length).to.be.greaterThan(0);
    });
  });
});
