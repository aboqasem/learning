package stepdefinitions;

import io.cucumber.java.PendingException;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class SearchStuffStepDefs {
  @Given("my browser is {}")
  public void myBrowserIsGoogleChrome(String browser) {
    // TODO: Implement me
    throw new PendingException();
  }

  @Given("I visit {string}")
  public void iVisit(String visitUrl) {
    // TODO: Implement me
    throw new PendingException();
  }

  @When("I search {string}")
  public void iSearch(String query) {
    // TODO: Implement me
    throw new PendingException();
  }

  @Then("I should see {string}")
  public void iShouldSee(String expectedResult) {
    // TODO: Implement me
    throw new PendingException();
  }
}
