import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

let bodyFeature: any;
let urlFeature: string;
const METHOD = 'POST'

Given("I want to do a request with the email {string} and the password {string}", (emailTest: string, passwordTest: string) => {
    bodyFeature = {
        email: emailTest,
        password: passwordTest
    }
});

Given("I want to do a request with empty body", () => {
    bodyFeature = {
    }
});

Given("I want to do a request without body", () => {
    bodyFeature = null
});

When("I do the POST request to {string} service", (url: string) => {
    urlFeature = url;
});

Then("I expect to see a {int} status on login service", (status: string) => {
    cy.request({
        method: METHOD,
        url: urlFeature,
        body: bodyFeature,
        failOnStatusCode:false,
    })
        .should((response) => {
            expect(response.status).to.eq(status)
            cy.log(JSON.stringify(response.body))
        });
});