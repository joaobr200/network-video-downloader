import Header from ".";

it("<Header/>", () => {
  cy.mount(<Header />);

  cy.get("a").should("contain.text", "SV Downloader");

  cy.get("button").should("have.attr", "title", "Abrir menu");
});
