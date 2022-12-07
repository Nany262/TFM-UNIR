Feature: Subject listing- API Tests
    As a teacher
    I want check the status of my assigned subjects
    To evaluate the students according to the subject

    Scenario: Subject list and status
        Given I login with the email "linaarias@liceoingles.edu.co" and password "Test1234"
        When  I see my assigned subjects
        Then  I expect to see the status in which the subject qualification process is located

    Scenario: List of students enrolled in the subject
        Given I login with the email "linaarias@liceoingles.edu.co" and password "Test1234"
        When  I select one of the assigned subjects
        Then  I expect to see the list of students who are enrolled in the subject

    Scenario: Logout - Subject list
        Given I login with the email "linaarias@liceoingles.edu.co" and password "Test1234"
        When  I log out of the app
        Then  I expect to not see the list of subjects without logging in again
