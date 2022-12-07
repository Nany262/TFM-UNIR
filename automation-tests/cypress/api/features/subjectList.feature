Feature: Subject listing- API Tests
    As a teacher
    I want check the status of my assigned subjects
    To evaluate the students according to the subject

    Scenario: Valid listing with a existing teacher
        Given I want to do a request with the email "gloaocampo@liceoingles.edu.co" 
        When  I do the GET request to "http://localhost:3000/subject/" service
        Then  I expect to see a 200 status on subject service

    Scenario: Valid structure with a no-existing teacher
        Given I want to do a request with the email "noexiste@liceoingles.edu.co"
        When  I do the GET request to "http://localhost:3000/subject/" service
        Then  I expect to see a 404 status on subject service

    Scenario: Valid structure with a no-valid teacher email
        Given I want to do a request with a no-valid email
        When  I do the GET request to "http://localhost:3000/subject/" service
        Then  I expect to see a 400 status on subject service

    Scenario: Valid structure without teacher
        Given I want to do a request without query
        When  I do the GET request to "http://localhost:3000/subject/" service
        Then  I expect to see a 400 status on subject service