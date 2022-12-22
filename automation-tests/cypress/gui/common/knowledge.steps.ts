import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { GeneralPage } from "../page-object/general.page";
import { GradesPage } from "../page-object/grades.page";

const generalPage = new GeneralPage();
const gradesPage = new GradesPage();

When("I select a knowledge", () => {
    //gradesPage.knowledge().click()
});

Then("I expect to see the list of indicators to calificate", () => {
    gradesPage.tableRubric().should('be.visible')
});

Then("I expect to see the save and send buttons", () => {
    gradesPage.saveButton().should('be.visible').and('have.text', 'Guardar')
    gradesPage.sendButton().should('be.visible').and('have.text', 'Enviar')
});

Then("I expect to not see the list of knowledges without logging in again", () => {
    cy.go('back')
    generalPage.titlePage().should('be.visible').and('not.contain', 'Saberes')
});

Then("I expect to see a field to write a comment", () => {
    gradesPage.commentGeneral().should('be.visible')
});