export class GradesPage {
    knowledge() {
        return cy.get('#knowledge1');
    }

    tableRubric() {
        return cy.get('#title-page')
    }

    saveButton() { return cy.get('#save-button') }
    sendButton() { return cy.get('#send-button') }

    commentGeneral(){
        return cy.get('#general-comment') 
    }
}