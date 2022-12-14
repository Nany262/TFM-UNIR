import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

let rubricId: any;
let urlFeature: string;
const METHOD = 'GET'

Given("I want to do a request with the knowledge id {string}", (id: string) => {
    rubricId = id;
});

Given("I want to do a request with a no-valid knowledge id", () => {
    rubricId = '¡asad! e85';
});

Given("I want to do a request without subject id", () => {
    rubricId = ''
});

When("I do the GET request to {string} rubric service", (url: string) => {
    urlFeature = url + rubricId;
});

When("I do the GET request to {string} knowledge service", (url: string) => {
    urlFeature = url;
});

Then("I expect to see a {int} status on students service", (status: string) => {
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