package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import pages.GooglePage;
import utilities.ConfigurationReader;
import utilities.Driver;

public class GoogleAramaStepDefinitions {

    GooglePage googlePage = new GooglePage();

    @Given("kullanici google sayfasina gider")
    public void kullanici_google_sayfasina_gider() {
        System.out.println("Google sayfasına gider methodu çalıştı.");

        Driver.getDriver().get(ConfigurationReader.getProperty("google_link"));
        //bu bize .properties dosyasinin icerisindeki google linkini getirecek

    }

    @Given("techproeducation aramasi yapar")
    public void techproeducation_aramasi_yapar() {
        System.out.println("Techproeducation araması yaptı.");
        googlePage.aramaKutusu.sendKeys(ConfigurationReader.getProperty("google_kelime") + Keys.ENTER);

    }

    @Then("sayfa basligini kontrol eder")
    public void sayfa_basligini_kontrol_eder() {
        System.out.println("Sayfa başlığını kontrol etti.");

        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        String baslik = Driver.getDriver().getTitle();
        Assert.assertTrue(baslik.contains(ConfigurationReader.getProperty("google_kelime")));

    }
}
