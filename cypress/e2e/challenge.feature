Feature: Cypress challenge 

  Scenario: As user, I can confirm to a alert that I can close the alert
    Given I'm on the alerts page
    When Click on "Alert with OK & Cancel" tab
    And I click on "click the button to display a confirm box" button
    Then I should see "You pressed Ok"

  Scenario: As user, I submit registration for so that I can register on the application
    Given I'm on the registration page
    When I fill up mandatory fields 
    And I click on submit button
    Then I should be successfully registered