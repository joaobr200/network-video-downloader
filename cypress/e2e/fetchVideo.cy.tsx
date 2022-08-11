// @ts-ignore
describe("should be fetch a video for download", () => {
  it("Cannot fetch a wrong video url", () => {
    cy.visit("/");

    cy.findByPlaceholderText("Cole o link do vídeo aqui...").type(
      "https://www.yout.com/watch?v=jfKfPfyJRdk&ab_channel=LofiGirl"
    );

    cy.get("form").submit();

    cy.get("span#error").should("have.attr", "aria-label", "URL inválida");
  });

  it("Clean input value when click clean button", () => {
    cy.get("#download").type(
      "https://www.yout.com/watch?v=iSvpw4aVFW0&ab_channel=montana%21"
    );

    cy.get("form").submit();

    cy.get("span#error").should("have.attr", "aria-label", "URL inválida");

    cy.get("[title='Limpar caixa de texto']").click();

    cy.get("#download").should("have.value", "");
  });

  it("Fetch a video with a correct youtube url", () => {
    cy.get("#download").type(
      "https://www.youtube.com/watch?v=kt2D7xl06mk&ab_channel=NeutralBalance"
    );

    cy.get("form").submit();

    cy.get("span#youtube").should("have.attr", "aria-label", "URL do Youtube");

    cy.get("#download").should("not.be.enabled");

    cy.get("[aria-label='Buscando vídeo']")
      .find("span")
      .should("contain.text", "Buscando vídeo...");

    cy.wait(2000);

    cy.get("#download").should("be.enabled");

    cy.get("article").find("h1").contains("VIDEO 10s");
  });

  it("should clean video after click button clean", () => {
    cy.get("button[title='Limpar vídeo']").click();

    cy.get("article").should("not.be.false");
  });
});
