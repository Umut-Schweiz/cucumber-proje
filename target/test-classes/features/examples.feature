@teknolojikarama @amazon
Feature: Amazon Birden Fazla Arama
  Scenario Outline: TC05_kullanici amazonda urun aramasi yapar
    Given kullanici amazon sayfasina gider
    And kullanici aramaKutusuna "<urunler>" yazar ve arar
    Then kullanici sonuc sayisini ekrana yazdirir
    Examples: Urun Isimleri
      |urunler   |
      |headphones|
      |camera    |
      |drone     |
      |pencil    |
      |tv        |