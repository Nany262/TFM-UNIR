export class StudentsPage {

    studentStatus() {
        return cy.get('#student-status')
    }

    studentButton() { return cy.get('#student-button') }

    breadcrumb(){
        return cy.get('#breadcrumb')
    }
}