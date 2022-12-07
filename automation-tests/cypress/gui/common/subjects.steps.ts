import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { GeneralPage } from "../page-object/general.page";
import { LoginPage } from "../page-object/login.page";
import { SubjectsPage } from "../page-object/subjects.page";

const loginPage = new LoginPage();
const subjectsPage = new SubjectsPage();
const generalPage = new GeneralPage();

Given("I login with the email {string} and password {string}", (email: string, password: string) => {
    // cy.visit("/");
    loginPage.email().type(email);
    loginPage.password().type(password);
    loginPage.loginButton().click();
});

When("I see my assigned subjects", () => {
    generalPage.titlePage().should('be.visible').and('contain', 'Mis materias')
    cy.get('@subjectListResponse').then((response) => {
        for (let i = 0; i <= response.length; i++) {
            subjectsPage.subjectListOne(i).should('be.visible').and('contain', response[i])
        }
    })
});

When("I select one of the assigned subjects", () => {
    generalPage.titlePage().should('be.visible').and('contain', 'Mis materias')
    subjectsPage.subjectButton().click()
});

When("I log out of the app", () => {
    generalPage.logoutButton().click()
});

Then("I expect to see the status in which the subject qualification process is located", () => {
    subjectsPage.subjectStatus().should('be.visible')
});

Then("I expect to see the list of students who are enrolled in the subject", () => {
    generalPage.titlePage().should('be.visible').and('contain', 'Estudiantes')
});

Then("I expect to not see the list of subjects without logging in again", () => {
    cy.go('back')
    generalPage.titlePage().should('be.visible').and('not.contain', 'Mis materias')
});