describe("Heading text", () => {
  it("contains the correct header", () => {
    cy.visit("/about");

    cy.get("h2").invoke("text").should("equal", "About");
  });
});

describe("Heading text", () => {
  it("contains the correct header", () => {
    cy.visit("/shows");

    cy.get("h2").invoke("text").should("equal", "Upcoming Shows");

    cy.get("[data-cy='see-previous-shows-header']").as("previous-header")
    cy.get("@previous-header").invoke("text").should("equal", "See Previous Shows")
  });
});

describe("Heading text", () => {
  it("contains the correct header", () => {
    cy.visit("/releases");

    cy.get("h2").invoke("text").should("equal", "Releases");
  });
});

describe("Heading text", () => {
  it("contains the correct header", () => {
    cy.visit("/gallery");

    cy.get("h2").invoke("text").should("equal", "Gallery");
  });
});

describe("Heading text", () => {
  it("contains the correct header", () => {
    cy.visit("/contact");

    cy.get("h2").invoke("text").should("equal", "Contact");
  });
});
