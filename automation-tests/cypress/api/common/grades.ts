import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

let indicator: any;
let knowledge: any;
let bodyFeature: any = {};
let urlFeature: string;
const METHOD = 'POST'

Given("I want to add an indicator {string} on the knowledge {string}", (indicator: string, knowledge: string) => {
    indicator = indicator;
    knowledge = knowledge;
});

Given("I want to delete an indicator {string}", (indicator:string) => {
    indicator = '¡asad! e85';
});

Given("I want to send my work to the coordinator", () => {
    indicator = '¡asad! e85';
});

Given("I want to save partially my work", () => {
    indicator = '¡asad! e85';
});

Given("I want to send the grades to the parents", () => {

});

Given("I want to send the grades to review", () => {

});

When("I do the POST request to {string} grades service", (url: string) => {
    urlFeature = url + indicator;
});

When("I do the DELETE request to {string} grades service", (url: string) => {
    urlFeature = url;
});

Then("I expect to see a {int} status on grades service", (status: string) => {
    expect(400).to.eq(400)
});

Then("I expect to see {int} status on grades service", (status: string) => {
    expect(400).to.eq(status)
});