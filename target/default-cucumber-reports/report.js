$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/amazonexamples.feature");
formatter.feature({
  "name": "Amazonda Urun Arama",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@birdenfazlaexample"
    }
  ]
});
formatter.scenarioOutline({
  "name": "TC07_kullanici amazonda dropdown ve aramakutusu kullanarak arama yapar",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "kullanici \"http://amazon.com\" sayfasina gider",
  "keyword": "Given "
});
formatter.step({
  "name": "kullanici dropdownda \"\u003ckategori\u003e\" secer",
  "keyword": "And "
});
formatter.step({
  "name": "kullanici aramaKutusuna \"\u003curunler\u003e\" yazar ve arar",
  "keyword": "And "
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.examples({
  "name": "Test Verileri",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "kategori",
        "urunler"
      ]
    },
    {
      "cells": [
        "Automotive",
        "phone holder"
      ]
    },
    {
      "cells": [
        "Baby",
        "stroller"
      ]
    },
    {
      "cells": [
        "Books",
        "Miserables"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC07_kullanici amazonda dropdown ve aramakutusu kullanarak arama yapar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@birdenfazlaexample"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://amazon.com\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.EbayStepDefinitions.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici dropdownda \"Automotive\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_dropdownda_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici aramaKutusuna \"phone holder\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_aramaKutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC07_kullanici amazonda dropdown ve aramakutusu kullanarak arama yapar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@birdenfazlaexample"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://amazon.com\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.EbayStepDefinitions.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici dropdownda \"Baby\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_dropdownda_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici aramaKutusuna \"stroller\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_aramaKutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC07_kullanici amazonda dropdown ve aramakutusu kullanarak arama yapar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@birdenfazlaexample"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://amazon.com\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.EbayStepDefinitions.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici dropdownda \"Books\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_dropdownda_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici aramaKutusuna \"Miserables\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_aramaKutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});