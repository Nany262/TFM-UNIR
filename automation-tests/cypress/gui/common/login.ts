import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given("I am an unauthenticated teacher", () => {
    cy.log("to do")
});

When("I login with the email {string} and password {string}", (email:string, password:string) => {
    cy.log("to do")
});

When("I login without fill the form", () => {
    cy.log("to do")
});

Then("I expect to see my assigned subjects", () => {
    expect(true).to.be.false
});

Then("I expect to see an alert with the text {string}", (appStatus:string) => {
    expect(true).to.be.false
});