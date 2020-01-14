/// <reference types="Cypress" />

/** Workaround CYPRESS_SHADOW_DOM
 *
 * Cypress doesn't support Shadow DOM out of the box so I tried to use the
 * cypress-shadow-dom library, unfortunately it has it's limitations.
 * And in some cases I had to use the workaround I found here:
 * https://github.com/cypress-io/cypress/issues/144#issuecomment-336124325
 */

context("Default", () => {
  const getEmailBlocks = () =>
    // Workaround CYPRESS_SHADOW_DOM
    cy.get("emails-editor").then(search => {
      const ee = search[0];
      const emailBlocks = ee.shadowRoot.querySelectorAll(
        `[data-test-id="email-block"]`
      );

      return cy
        .log(`found ${emailBlocks.length} email blocks`)
        .then(() => emailBlocks);
    });

  beforeEach(() => {
    cy.visit("http://localhost:5000/single");
  });

  describe(`"Add email" Button`, () => {
    it("should add a new Email when clicked", () => {
      getEmailBlocks().should("have.length", 0);

      cy.shadowGet(`emails-editor`)
        .shadowFind(`[data-test-id="add-email-button"]`)
        .shadowClick();

      getEmailBlocks().should("have.length", 1);
    });
  });

  describe("Input", () => {
    it("should add a new Email when an <enter> is pressed", () => {
      const EMAIL_ADDRESS = "john@miro.com";

      getEmailBlocks().should("have.length", 0);

      cy.shadowGet(`emails-editor`)
        .shadowFind(`[data-test-id="form-input"]`)
        .shadowType(EMAIL_ADDRESS);

      // Workaround CYPRESS_SHADOW_DOM
      cy.get("emails-editor")
        .then(search => {
          const ee = search[0];
          const inputEl = ee.shadowRoot.querySelector(
            `[data-test-id="form-input"]`
          );

          inputEl.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
        })
        .log("pressing <enter>");

      cy.shadowGet("emails-editor").shadowContains(EMAIL_ADDRESS);
    });

    it("should add a new Email when an <comma> is pressed", () => {
      const EMAIL_ADDRESS = "mary@miro.com";

      getEmailBlocks().should("have.length", 0);

      cy.shadowGet(`emails-editor`)
        .shadowFind(`[data-test-id="form-input"]`)
        .shadowType(EMAIL_ADDRESS);

      // Workaround CYPRESS_SHADOW_DOM
      cy.get("emails-editor")
        .then(search => {
          const ee = search[0];
          const inputEl = ee.shadowRoot.querySelector(
            `[data-test-id="form-input"]`
          );

          inputEl.dispatchEvent(new KeyboardEvent("keydown", { key: "," }));
        })
        .log("pressing <comma>");

      cy.shadowGet("emails-editor").shadowContains(EMAIL_ADDRESS);
    });
  });
});
