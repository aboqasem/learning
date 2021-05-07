Feature: Search Stuff

  Scenario: Search for stuff on Google
    Given my browser is Google Chrome
    And I visit "www.google.com"
    When I search "food"
    Then I should see "food"