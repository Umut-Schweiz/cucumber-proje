@urunarama1 @amazon
  Feature: Amazon Urun Arama
    Scenario: TC04_kullanici amazonda urun aramasi yapar
      Given kullanici amazon sayfasina gider
      And kullanici aramaKutusuna "drone" yazar ve arar
      Then kullanici sonuc sayisini ekrana yazdirir