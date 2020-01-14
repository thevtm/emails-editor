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

  describe("EmailsEditor", () => {
    it(`should set the emails correctly when EmailsEditor.setEmailsList is called`, () => {
      const EMAILS_ADDRESSES = ["foo@miro.com", "bar@miro.com"];

      cy.get("emails-editor").then(ee => {
        ee.get()[0].setEmailsList(EMAILS_ADDRESSES);
      });

      getEmailBlocks().should("have.length", 2);

      for (const email of EMAILS_ADDRESSES) {
        cy.shadowGet("emails-editor").shadowContains(email);
      }
    });

    it(`should get the correct emails when EmailsEditor.getEmailsList is called`, () => {
      const EMAILS_ADDRESSES = ["foo@miro.com", "bar@miro.com"];

      cy.get("emails-editor").then(subject => {
        const ee = subject.get()[0];

        return cy
          .then(() => ee.getEmailsList())
          .should("deep.equal", [])
          .then(() => ee.setEmailsList(EMAILS_ADDRESSES))
          .then(() => ee.getEmailsList())
          .should("deep.equal", EMAILS_ADDRESSES);
      });
    });
  });

  describe("EmailBlock", () => {
    it(`should be removed when the "×" button is pressed`, () => {
      const EMAILS_ADDRESSES = ["foo@miro.com", "bar@miro.com"];

      cy.get("emails-editor").then(ee => {
        ee.get()[0].setEmailsList(EMAILS_ADDRESSES);
      });

      cy.shadowGet("emails-editor")
        .shadowContains(EMAILS_ADDRESSES[1])
        .shadowLast()
        .shadowFind(`[data-test-id="email-block__remove-button"]`)
        .shadowClick();

      cy.shadowGet("emails-editor")
        .shadowContains(EMAILS_ADDRESSES[1])
        .should("not.exist");
    });

    it(`should have a red underline when email address is invalid`, () => {
      const EMAIL_INVALID = "foo";
      const EMAIL_VALID = "john@miro.com";

      cy.get("emails-editor").then(ee => {
        ee.get()[0].setEmailsList([EMAIL_INVALID, EMAIL_VALID]);
      });

      cy.shadowGet("emails-editor")
        .shadowContains(EMAIL_INVALID)
        .shadowLast()
        .should("have.class", "email-block--invalid");
    });
  });
});
