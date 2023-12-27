describe("Heading text", () => {
  it("contains the correct title", () => {
    cy.visit("http://localhost:3000");

    cy.get("h1")
      .invoke("text")
      .should(
        "equal",
        "Helping businesses grow through technology and design doing quality code."
      );
  });
});
