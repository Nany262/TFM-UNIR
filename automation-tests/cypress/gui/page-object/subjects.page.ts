export class SubjectsPage {
    subjectList() {
        return cy.get('#subject-list')
    }

    subjectListOne(position: number) {
        return cy.get(`mat-card-${position}`)
    }

    subjectButton() { return cy.get('#subject-button') }

    subjectStatus(){
        return cy.get('#subject-status')
    }
}