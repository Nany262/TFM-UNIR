export class GeneralPage {
    logoutButton() {
        return cy.get('#logout');
    }

    titlePage() {
        return cy.get('#title page');
    }
}