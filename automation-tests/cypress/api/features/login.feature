Feature: Login into portal - API Tests
    As a teacher
    I want to login into the portal
    To check the subject list

    Scenario: Valid structure with a existing teacher
        Given I want to do a request with the email "gloaocampo@liceoingles.edu.co" and the password "Test1234"
        When  I do the POST request to "https://www.liceoingles.edu.co/calificaciones/autenticacion" service
        Then  I expect to see a "200" status
        And should include the "active" status

    Scenario: Valid structure with a no-existing teacher
        Given I want to do a request with the email "noexiste@liceoingles.edu.co" and the password "Test1234"
        When  I do the POST request to "https://www.liceoingles.edu.co/calificaciones/autenticacion" service
        Then  I expect to see a "404" status

    Scenario: Valid structure with a empty body
        Given I want to do a request with empty body
        When  I do the POST request to "https://www.liceoingles.edu.co/calificaciones/autenticacion" service
        Then  I expect to see a "400" status

    Scenario: Valid structure with a empty body
        Given I want to do a request without body
        When  I do the POST request to "https://www.liceoingles.edu.co/calificaciones/autenticacion" service
        Then  I expect to see a "415" status