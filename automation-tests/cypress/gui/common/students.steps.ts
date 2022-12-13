import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { GeneralPage } from "../page-object/general.page";
import { StudentsPage } from "../page-object/students.page";

const generalPage = new GeneralPage();
const studentPage = new StudentsPage();

When("I select one of the students enrolled", () => {
    studentPage.studentButton().click()
});

When("I log out of the app", () => {
    generalPage.logoutButton().click()
});

Then("I expect to see the status in which the student qualification process is located", () => {
    studentPage.studentStatus().should('be.visible')
});

Then("I expect to see the list of knowledges of the student", () => {
    generalPage.titlePage().should('be.visible').and('contain', 'Saberes')
});

Then("I expect to not see the list of students without logging in again", () => {
    cy.go('back')
    generalPage.titlePage().should('be.visible').and('not.contain', 'Estudiantes')
});

Then("I expect to see a breadcrumbs to know my location", () => {
    studentPage.breadcrumb().should('be.visible').and('contain', 'Materias >')
});