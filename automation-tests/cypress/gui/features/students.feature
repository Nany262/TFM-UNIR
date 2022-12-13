Feature: Subject listing - GUI Tests
    As a teacher
    I want check the status of the student associated with a subject
    To evaluate the students according to the rubric

    Scenario: Students list and status
        Given I login with the email "gloaocampo@liceoingles.edu.co" and password "Test1234"
        When  I select one of the assigned subjects
        Then  I expect to see the status in which the student qualification process is located

    Scenario: Students list empty
        Given I login with the email "test@test.com" and password "Test12345"
        When  I select one of the assigned subjects
        Then  I expect to see the message "Aún no tienes materias asignadas"

    Scenario: List of knowledges enrolled in the subject
        Given I login with the email "gloaocampo@liceoingles.edu.co" and password "Test1234"
        When  I select one of the assigned subjects
        And   I select one of the students enrolled
        Then  I expect to see the list of knowledges of the student

    Scenario: Logout - Students list
        Given I login with the email "gloaocampo@liceoingles.edu.co" and password "Test1234"
        When  I log out of the app
        Then  I expect to not see the list of subjects without logging in again
