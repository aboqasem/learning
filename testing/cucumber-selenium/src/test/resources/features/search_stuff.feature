Feature: Search Stuff

  Scenario: Search for stuff on Google
    Given my browser is Google Chrome
    And I visit "https://www.google.com/"
    When I search "food"
    Then the page title should start with "food"