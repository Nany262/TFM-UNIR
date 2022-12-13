import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { getSubjectList } from "cypress/support/services/subjectList";
import { GeneralPage } from "../page-object/general.page";
import { SubjectsPage } from "../page-object/subjects.page";

const subjectsPage = new SubjectsPage();
const generalPage = new GeneralPage();

When("I see my assigned subjects", () => {
    generalPage.titlePage().should('be.visible').and('contain', 'Materias')
    getSubjectList('1')
    cy.get('@subjectListResponse').then((response) => {
        console.log(response)
        for (let i = 2; i <= response.length + 1; i++) {
            subjectsPage.subjectListOne(i).should('be.visible').and('contain', response[i])
        }
    })
});

When("I select one of the assigned subjects", () => {
    generalPage.titlePage().should('be.visible').and('contain', 'Materias')
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
    generalPage.titlePage().should('be.visible').and('not.contain', 'Materias')
});