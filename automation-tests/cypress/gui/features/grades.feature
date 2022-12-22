Feature: Grades - GUI Tests
    As a teacher
    I want to see the knowledges to evaluate
    To write the rubric to use when I calificate the students

    Scenario: Add an indicator to the rubric
        Given I login with the email "gloaocampo@liceoingles.edu.co" and password "Test1234"
        When  I select a knowledge
        And   I add an indicator
        Then  I expect to see the indicator added to the rubric

    Scenario: Delete an indicator to the rubric
        Given I login with the email "gloaocampo@liceoingles.edu.co" and password "Test1234"
        When  I select a knowledge
        And   I delete an indicator
        Then  I expect not see the indicator deleted from the rubric

    Scenario: Save partially the info
        Given I login with the email "gloaocampo@liceoingles.edu.co" and password "Test1234"
        When  I save the information on my rubric
        And   I reload the page
        Then  I expect to see the information saved before

    Scenario: Delete an indicator to the rubric
        Given I login with the email "gloaocampo@liceoingles.edu.co" and password "Test1234"
        When  I send the information on my rubric
        Then  I expect to see a confirmation message
        And   My coordinator can see the grades