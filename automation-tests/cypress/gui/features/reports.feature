Feature: Reports - GUI Tests
    As a coordinator
    I want to send a student grade report
    To inform parents of their children's progress

    Scenario: Enable a report for review
        Given I login with the email "linaarias@liceoingles.edu.co" and password "Test1234"
        When  I review a teacher report
        And   I send it for review due to an error detected
        Then  the teacher can correct your work

    Scenario: Send grades by email
        Given I login with the email "linaarias@liceoingles.edu.co" and password "Test1234"
        When  I review a teacher report
        And   I consider that this is correct
        Then  I can see a confirmation message for job submission

    Scenario: Sending grades – Button not enabled with unfinished activities
        Given I login with the email "linaarias@liceoingles.edu.co" and password "Test1234"
        When  I review the report of a teacher who has not completed his work
        Then  I expect to see the option to send grades disabled