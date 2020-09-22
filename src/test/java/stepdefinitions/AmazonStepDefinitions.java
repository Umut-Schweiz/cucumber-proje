package stepdefinitions;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.openqa.selenium.Keys;
import pages.AmazonPage;
import utilities.Driver;
public class AmazonStepDefinitions {

    AmazonPage amazonPage = new AmazonPage();

    @Given("kullanici amazon sayfasina gider")
    public void kullanici_amazon_sayfasina_gider() {
        Driver.getDriver().get("http://amazon.com");
    }
    @Given("kullanici aramakutusuna headphones yazar ve arar")
    public void kullanici_aramakutusuna_headphones_yazar_ve_arar() {
        amazonPage.aramaKutusu.sendKeys("headphones" + Keys.ENTER);
    }
    @Then("kullanici sonuc sayisini ekrana yazdirir")
    public void kullanici_sonuc_sayisini_ekrana_yazdirir() {
        System.out.println(amazonPage.sonucSayisi.getText());
    }

    @Given("kullanici aramakutusuna camera yazar ve arar")
    public void kullanici_aramakutusuna_camera_yazar_ve_arar() {
     amazonPage.aramaKutusu.sendKeys("camera" + Keys.ENTER);
    }

    @Given("kullanici aramaKutusuna {string} yazar ve arar")
    public void kullanici_aramaKutusuna_yazar_ve_arar(String string) {
        amazonPage.aramaKutusu.sendKeys(string + Keys.ENTER);
    }

}
