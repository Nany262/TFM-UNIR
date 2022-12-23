import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

When("I do the GET request to {string} teacher service", (url: string) => {

});

Then("I expect to see a {int} status on teacher service", (status: string) => {
    expect(400).to.eq(400)
});