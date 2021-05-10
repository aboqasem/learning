package stepdefinitions;

import io.cucumber.java.After;
import io.cucumber.java.PendingException;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SearchStuffStepDefs {
  private static WebDriver driver;

  @Given("my browser is {}")
  public void myBrowserIsGoogleChrome(String browser) {
    if (browser.equalsIgnoreCase("google chrome")) {
      driver = new ChromeDriver(new ChromeOptions()
          .setBinary(System.getenv("CHROME_EXECUTABLE"))
          .setHeadless(true)
      );
      return;
    }
    throw new PendingException();
  }

  @Given("I visit {string}")
  public void iVisit(String visitUrl) {
    driver.get(visitUrl);
  }

  @When("I search {string}")
  public void iSearch(String query) {
    WebElement element = driver.findElement(By.name("q"));
    element.sendKeys(query);
    element.submit();
  }

  @Then("the page title should start with {string}")
  public void thePageTitleShouldStartWith(final String expectedTitle) {
    new WebDriverWait(driver, 10).until(new ExpectedCondition<Boolean>() {
      @Override
      public Boolean apply(WebDriver d) {
        return d.getTitle().startsWith(expectedTitle);
      }
    });
  }

  @After
  public void closeBrowser() {
    driver.quit();
  }
}
