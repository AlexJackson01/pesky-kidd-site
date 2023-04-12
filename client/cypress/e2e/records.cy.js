describe("Records text", () => {
  it("contains the correct track/album titles", () => {
    cy.visit("/releases");

    cy.get("[data-cy='record-1']").invoke("text").should("equal", "With You");
    cy.get("[data-cy='record-2']")
      .invoke("text")
      .should("equal", "Civilian Rebellion");
    cy.get("[data-cy='record-3']").invoke("text").should("equal", "Open Heart");
  });
});

describe("Spotify player", () => {
  it("displays the most popular tracks in a Spotify player", () => {
    cy.visit("/releases");

    cy.get("[data-cy='spotify-player']").should("be.visible");
  });
});
