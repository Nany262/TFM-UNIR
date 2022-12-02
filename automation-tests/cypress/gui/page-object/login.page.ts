export class LoginPage {
    email() {
        return cy.get('#email');
    }
    password() {
        return cy.get('#password');
    }
    loginButton() {
        return cy.get('#login-button');
    }
    fieldError(numError: number) {
        return cy.get(`#mat-mdc-error-${numError}`)
    }
    bigError() {
        return cy.get('#big-error')
    }
}