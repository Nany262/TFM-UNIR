Feature: Teachers - GUI Tests
    As a coordinator
    I want to see the teachers hired
    To follow the progress of their work

    Scenario: Notes report when selecting a subject
        Given I login with the email "linaarias@liceoingles.edu.co" and password "Test1234"
        When  I select a subject
        Then  I can see the student list and its associated report

    Scenario: Logout - Teacher list
        Given I login with the email "linaarias@liceoingles.edu.co" and password "Test1234"
        When  I log out of the app
        Then  I expect to not see the list of teachers without logging in again

    Scenario: Status of subjects - Button not enabled
        Given I login with the email "linaarias@liceoingles.edu.co" and password "Test1234"
        When  I review the report of a teacher who has not completed his work
        Then  I can see the option disabled