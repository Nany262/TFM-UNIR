import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

let userId: any;
let urlFeature: string;
const METHOD = 'GET'

Given("I want to do a request with the id {string}", (id: string) => {
    userId = id;
});

Given("I want to do a request with a no-valid id", () => {
    userId = 'asdade85';
});

Given("I want to do a request without id", () => {
    userId = ''
});

When("I do the GET request to {string} subject service", (url: string) => {
    urlFeature = url + userId;
});

Then("I expect to see a {int} status on subject service", (status: string) => {
    cy.request({
        method: METHOD,
        url: urlFeature,
        failOnStatusCode: false
    })
        .should((response) => {
            expect(response.status).to.eq(status)
            cy.log(JSON.stringify(response.body))
        });
});