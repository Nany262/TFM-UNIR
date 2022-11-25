import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given("I want to do a request with the email {string} and the password {string}", (email:string, password:string) => {
    cy.log("to do")
});

Given("I want to do a request with empty body", () => {
    cy.log("to do")
});

Given("I want to do a request without body", () => {
    cy.log("to do")
});


When("I do the POST request to {string} service", (url:string) => {
    cy.log("to do")
});

Then("I expect to see a {string} status", (status:string) => {
    expect(true).to.be.false
});

Then("should include the {string} status", (appStatus:string) => {
    expect(true).to.be.false
});