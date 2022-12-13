Feature: Subject listing- API Tests
    As a teacher
    I want check the status of the student associated with a subject
    To evaluate the students according to the rubric

    Scenario: Valid structure with a valid subject id
        Given I want to do a request with the subject id "5" 
        When  I do the GET request to "http://localhost:3000/students/" students service
        Then  I expect to see a 200 status on students service

    Scenario: Valid structure with a no-existing subject id
        Given I want to do a request with the subject id "544777"
        When  I do the GET request to "http://localhost:3000/students/" students service
        Then  I expect to see a 404 status on students service

    Scenario: Valid structure with a no-valid subject id
        Given I want to do a request with a no-valid subject id
        When  I do the GET request to "http://localhost:3000/students/" students service
        Then  I expect to see a 415 status on students service

    Scenario: Valid structure without subject id
        Given I want to do a request without subject id
        When  I do the GET request to "http://localhost:3000/subjects/" students service
        Then  I expect to see a 404 status on students service