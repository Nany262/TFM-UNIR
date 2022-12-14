Feature: Knowledges - API Tests
    As a teacher
    I want to see the knowledges to evaluate
    To write the rubric to use when I calificate the students

    Scenario: Valid listing to knowledges
        When  I do the GET request to "http://localhost:3000/knowledges" knowledge service
        Then  I expect to see a 200 status on knowledge service

    Scenario: Valid structure to rubric load with a valid id
        Given I want to do a request with the knowledge id "saber1"
        When  I do the GET request to "http://localhost:3000/grades/rubric/" rubric service
        Then  I expect to see a 200 status on rubric service

    Scenario: Valid structure to rubric load with a no-existing id
        Given I want to do a request with the knowledge id "saber7"
        When  I do the GET request to "http://localhost:3000/grades/rubric/" rubric service
        Then  I expect to see a 404 status on rubric service

    Scenario: Valid structure to rubric load with a no-valid id
        Given I want to do a request with the knowledge id "¡asad! e85"
        When  I do the GET request to "http://localhost:3000/grades/rubric/" rubric service
        Then  I expect to see a 415 status on rubric service

    Scenario: Valid structure without a knowledge
        Given I want to do a request without knowledge id
        When  I do the GET request to "http://localhost:3000/grades/rubric/" rubric service
        Then  I expect to see a 404 status on rubric service