Feature: Login into portal - GUI Tests
    As a teacher
    I want to login into the portal
    To check the subject list

    Scenario: Login with a valid coordinator
        Given I am an unauthenticated user
        When  I login with the email "linaarias@liceoingles.edu.co" and password "Test1234"
        Then  I expect to see the hired teachers
