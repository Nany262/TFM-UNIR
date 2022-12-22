Feature: Grades - API Tests
    As a teacher
    I want to see the knowledges to evaluate
    To write the rubric to use when I calificate the students

    Scenario: Valid structure when add an indicator with a valid knowledge
        Given I want to add an indicator "Indicador de prueba" on the knowledge "saber1"
        When  I do the POST request to "http://localhost:3000/grades/indicator" grades service
        Then  I expect to see a 201 status on grades service

    Scenario: Valid structure when add an indicator with a no-existing knowledge
        Given I want to add an indicator "Indicador de prueba" on the knowledge "saber8"
        When  I do the POST request to "http://localhost:3000/grades/indicator" grades service
        Then  I expect to see a 400 status on grades service

    Scenario: Valid structure with a empty body
        Given I want to do a request with empty body
        When  I do the POST request to "http://localhost:3000/grades/indicator" grades service
        Then  I expect to see a 415 status on grades service

    Scenario: Valid structure without a body
        Given I want to do a request without body
        When  I do the POST request to "http://localhost:3000/grades/indicator" grades service
        Then  I expect to see a 415 status on grades service

    Scenario: Valid structure when delete an indicator
        Given I want to delete an indicator "1"
        When  I do the DELETE request to "http://localhost:3000/grades/delete/" grades service
        Then  I expect to see a 200 status on grades service

    Scenario: Valid structure when delete a no-existing indicator
        Given I want to delete an indicator "1000"
        When  I do the DELETE request to "http://localhost:3000/grades/delete/" grades service
        Then  I expect to see a 400 status on grades service

    Scenario: Valid structure when delete a no-valid indicator
        Given I want to delete an indicator "10dfaaaaa#00"
        When  I do the DELETE request to "http://localhost:3000/grades/delete/" grades service
        Then  I expect to see a 415 status on grades service



    Scenario: Valid structure when save the grades
        Given I want to save partially my work
        When  I do the POST request to "http://localhost:3000/grades/savePartially" grades service
        Then  I expect to see 201 status on grades service

    Scenario: Valid structure with a empty body
        Given I want to do a request with empty body
        When  I do the POST request to "http://localhost:3000/grades/savePartially" grades service
        Then  I expect to see 415 status on grades service

    Scenario: Valid structure without a body
        Given I want to do a request without body
        When  I do the POST request to "http://localhost:3000/grades/savePartially" grades service
        Then  I expect to see 415 status on grades service

    Scenario: Valid structure when send the grades
        Given I want to send my work to the coordinator
        When  I do the POST request to "http://localhost:3000/grades/sendGrades" grades service
        Then  I expect to see 200 status on grades service

    Scenario: Valid structure with a empty body
        Given I want to send my work to the coordinator
        When  I do the POST request to "http://localhost:3000/grades/sendGrades" grades service
        Then  I expect to see 415 status on grades service

    Scenario: Valid structure without a body
        Given I want to send my work to the coordinator
        When  I do the POST request to "http://localhost:3000/grades/sendGrades" grades service
        Then  I expect to see 415 status on grades service
