import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { GeneralPage } from "../page-object/general.page";
import { LoginPage } from "../page-object/login.page";

const loginPage = new LoginPage();
const generalPage = new GeneralPage();

Given("I am an unauthenticated user", () => {
   cy.visit("/");
});

When("I login with the email {string} and password {string}", (email: string, password: string) => {
    /*cy.visit("/");*/
    loginPage.email().type(email);
    loginPage.password().type(password);
    loginPage.loginButton().click();
});

When("I login without fill the form", () => {
    loginPage.email().click();
    loginPage.password().click();
    loginPage.email().click();
});

Then("I expect to see my assigned subjects", () => {
    generalPage.titlePage().should('be.visible').and('contain','Materias')
});

Then("I expect to see the hired teachers", () => {
    generalPage.titlePage().should('be.visible').and('contain','Profesores')
});

Then("I expect to see an alert with the text {string}", (text: string) => {
    if (text === 'Campo obligatorio (*)') {
        for (let i = 1; i <= 2; i++) {
            loginPage.fieldError(i).should('be.visible').and('have.text', text);
        }
    } else {
        loginPage.bigError().should('be.visible').and('have.text', text);
    }
});