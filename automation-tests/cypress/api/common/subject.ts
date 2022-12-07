import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

let user: any;
let urlFeature: string;
const METHOD = 'GET'

Given("I want to do a request with the email {string}", (emailTest: string, passwordTest: string) => {
    user = emailTest;
});

Given("I want to do a request with a no-valid email", (emailTest: string, passwordTest: string) => {
    user = emailTest;
});

Given("I want to do a request without query", (emailTest: string, passwordTest: string) => {
    user = emailTest;
});

When("I do the POST request to {string} service", (url: string) => {
    urlFeature = url;
});

Then("I expect to see a {int} status on subject service", (status: string) => {
    cy.request({
        method: METHOD,
        url: urlFeature,
        failOnStatusCode:false
    })
        .should((response) => {
            expect(response.status).to.eq(status)
            cy.log(JSON.stringify(response.body))
        });
});