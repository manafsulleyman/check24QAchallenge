import { AllUrls } from "../../../fixtures/nlUrls";

/// <reference types="Cypress" />
AllUrls.forEach((element) => {
  describe("Check something for something", () => {
    // Ignore errors from the site itself
    Cypress.on("uncaught:exception", () => {
      return false;
    });

    it("C962349 Check if utm_campaign value of all non product links is the same, tested newsletter url: ", () => {
      //open nl
      cy.visit(element.pageUrl);

      //filter out all links which contain utm_campaign
      cy.get('[href*="utm_campaign"]').then((links) => {
        console.log(links);
      });

      //check if the links were found
      cy.get('[href*="utm_campaign"]').should("exist");

      //check if all parameter values are equal to each other
      cy.get('[href*="utm_campaign"]').then((links) => {
        for (let link of links) {
          let hrefValue = link.href;
          expect(hrefValue).to.contains("nl_20220715_category");
        }
      });
    });

    it("C955682 Check if wpset value of all non product links is the same, tested newsletter url: ", () => {
      //open nl
      cy.visit(element.pageUrl);

      //filter out all links which contain wpset
      cy.get('[href*="wpset"]').then((links) => {
        console.log(links);
      });

      //check if the links were found
      cy.get('[href*="wpset"]').should("exist");

      //check if all parameter values are equal to each other
      cy.get(`[href*=${element.wpset}]`).then((links) => {
        for (let link of links) {
          let hrefValue = link.href;
          expect(hrefValue).to.contains(element.wpset);
        }
      });
    });
  });
});
