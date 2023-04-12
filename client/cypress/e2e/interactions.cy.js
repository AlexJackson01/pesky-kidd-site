import chaiColors from "chai-colors";
chai.use(chaiColors);

describe("Hide and show list", () => {
  beforeEach(() => {
    cy.visit("/shows");
    cy.get("[data-cy='see-previous-shows-header']").as("previous-header");
    cy.get("[data-cy='previous-shows-table']").as("previous-table");
  });

  it("hides the previous shows list", () => {
    cy.get("@previous-table").should("be.hidden");
  });

  it("shows the previous shows list", () => {
    cy.get("@previous-header").click();
    cy.get("@previous-table").should("be.visible");
  });
});

describe("Get Tickets button", () => {
  beforeEach(() => {
    cy.visit("/shows");
  });

  it("has a teal background", () => {
    cy.get("[data-cy='ticket-button']").should(
      "have.css",
      "color",
      "rgb(92, 158, 160)"
    );
  });

  it("has a link attached to it", () => {
    cy.get("[data-cy='ticket-button'] > a")
      .should("have.attr", "href")
      .and("include", "http");
  });
});
