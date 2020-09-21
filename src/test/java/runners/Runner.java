package runners;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;
@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"html:target/default-cucumber-reports"},  // rapor oluşturmak için
        features = "src/test/resources/features",    // features klasörünün adresini
        glue = "stepdefinitions",      // testlerinin içerisinde olduğu paketin ismi
        dryRun = false // senaryoda oluşturduğumuz ancak henüz test methodu yazılmamış
        // olan adımların(steps) methodlarını consol'da görmek için "dryRun = true"
        // şeklinde kullanıyoruz.

        //dryRun = false olursa, testleri calistirir.
        //dryRun = true olursa, eksik olan methodlari bulur ve size oneride bulunur.


)
public class Runner {
}