export class SubjectsPage {
    subjectList() {
        return cy.get('#subject-list')
    }

    subjectListOne(position: number) {
        return cy.get(`:nth-child(${position}) > .subject > .mat-mdc-card-title > .subject-name`)
    }

    subjectButton() { return cy.get('#subject-button') }

    subjectStatus() {
        return cy.get('#subject-status')
    }
}