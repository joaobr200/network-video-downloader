/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Custom command to ... add your description here
     * @example cy.clickOnMyJourneyInCandidateCabinet()
     */
    getById(id: string): Chainable<null>;
    clickOnMyJourneyInCandidateCabinet(): Chainable<null>;
  }
}
