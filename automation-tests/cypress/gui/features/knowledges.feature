Feature: Knowledges - GUI Tests
    As a teacher
    I want to see the knowledges to evaluate
    To write the rubric to use when I calificate the students

    Scenario: Rubric when open a knowledge
        Given I login with the email "gloaocampo@liceoingles.edu.co" and password "Test1234"
        When  I select a knowledge
        Then  I expect to see the list of indicators to calificate

    Scenario: Logout - Students list
        Given I login with the email "gloaocampo@liceoingles.edu.co" and password "Test1234"
        When  I select a knowledge
        And  I log out of the app
        Then  I expect to not see the list of knowledges without logging in again

    Scenario: Save buttons
        Given I login with the email "gloaocampo@liceoingles.edu.co" and password "Test1234"
        When  I select one of the students enrolled
        Then  I expect to see the save and send buttons

    Scenario: General comment
        Given I login with the email "gloaocampo@liceoingles.edu.co" and password "Test1234"
        When  I select one of the students enrolled
        Then  I expect to see a field to write a comment
