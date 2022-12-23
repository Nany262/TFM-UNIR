Feature: Teachers - API Tests
    As a coordinator
    I want to see the teachers hired
    To follow the progress of their work

    Scenario: Valid listing to teachers
        When  I do the GET request to "http://localhost:3000/teachers" teacher service
        Then  I expect to see a 200 status on teacher service