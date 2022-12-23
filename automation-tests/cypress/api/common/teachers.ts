import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

When("I do the GET request to {string} teacher service", (url: string) => {

});


Then("I expect to see a {int} status on login service", (status: string) => {
    expect(400).to.eq(status)
});