function getSubjectList() {
    cy.request({
        method: 'GET',
        url: 'http://localhost:3000/subject/',
        failOnStatusCode: false
    })
        .should((response) => {
            cy.wrap(response.body).as("subjectListResponse");
        });
}