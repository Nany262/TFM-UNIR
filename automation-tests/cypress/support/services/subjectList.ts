export function getSubjectList(id: string) {
    cy.request({
        method: 'GET',
        url: `http://localhost:3000/subjects/${id}`,
        failOnStatusCode: false
    })
        .should((response) => {
            cy.wrap(response.body).as("subjectListResponse");
        });
}