Feature: Login into portal - GUI Tests
    As a teacher
    I want to login into the portal
    To check the subject list

    Scenario: Login with a valid teacher
        Given I am an unauthenticated user
        When  I login with the email "gloaocampo@liceoingles.edu.co" and password "Test1234"
        Then  I expect to see my assigned subjects

    Scenario: Login with a valid coordinator
        Given I am an unauthenticated user
        When  I login with the email "linaarias@liceoingles.edu.co" and password "Test1234"
        Then  I expect to see the hired teachers

    Scenario Outline: Login with an invalid user
        Given I am an unauthenticated user
        When  I login with the email "<email>" and password "<password>"
        Then  I expect to see an alert with the text "¡Ooops! Correo o contraseña incorrectas, si olvidaste tu contraseña contacta con tu administrador"
        Examples:
            | email                         | password       |
            | noexiste@liceoingles.edu.co   | Test1234       |
            | 11124398874                   | Test1234       |
            | Gloria Amparo O               | Test1234       |
            | gloaocamp@liceoingles.edu.co | IncorrectaPass |
            | :u6-$#w(XE&3m)3m],J+$kK6&2{   | Test1234       |

    Scenario: Empty fields on login
        Given I am an unauthenticated user
        When I login without fill the form
        Then I expect to see an alert with the text "Campo obligatorio (*)"