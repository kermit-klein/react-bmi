describe("BMI Calculator", () => {
  it("Calculates BMI in metric", () => {
    cy.visit("http://localhost:3000");
    cy.get("input#weight").type(90);
    cy.get("input#height").type(180);
    cy.get("button#calculate").click();
    cy.get("p#bmi-message").should(
      "contain",
      "You are Normal with a BMI of 24.93"
    );
  });
});
