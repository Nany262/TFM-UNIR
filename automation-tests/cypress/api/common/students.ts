import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

let subjectId: any;
let urlFeature: string;
const METHOD = 'GET'

Given("I want to do a request with the subject id {string}", (id: string) => {
    subjectId = id;
});

Given("I want to do a request with a no-valid subject id", () => {
    subjectId = 'asdade85';
});

Given("I want to do a request without subject id", () => {
    subjectId = ''
});

When("I do the GET request to {string} students service", (url: string) => {
    urlFeature = url + subjectId;
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