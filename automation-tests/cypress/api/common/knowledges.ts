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

Given("I want to do a request without knowledge id", () => {
    rubricId = ''
});

When("I do the GET request to {string} rubric service", (url: string) => {
    urlFeature = url + rubricId;
});

When("I do the GET request to {string} knowledge service", (url: string) => {
    urlFeature = url;
});

Then("I expect to see a {int} status on knowledge service", (status: string) => {
    expect(400).to.eq(400)
});

Then("I expect to see a {int} status on rubric service", (status: string) => {
    expect(400).to.eq(400)
});