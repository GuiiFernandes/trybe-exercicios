package com.betrybe.ecommerce;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

import com.betrybe.ecommerce.entity.Product;
import com.betrybe.ecommerce.repository.ProductRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.testcontainers.containers.MySQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

@SpringBootTest
@AutoConfigureMockMvc
@Testcontainers // Habilita o uso do TestContainers na classe de teste
public class ProductIntegrationTest {
  @Autowired
  ProductRepository productRepository;

  @Autowired // Injeta o MockMvc
  MockMvc mockMvc; // Simula requisições HTTP

  @Container // Indica que será usado um container específico no teste, nesse caso um mysql na versão 8.0.32 com database ecommerce
  public static MySQLContainer MYSQL_CONTAINER = new MySQLContainer("mysql:8.0.32")
      .withDatabaseName("ecommerce");

  @DynamicPropertySource // Notação do próprio Spring para sobrescrever propriedades direto no código
  public static void overrideProperties(DynamicPropertyRegistry registry) {
    registry.add("spring.datasource.url", MYSQL_CONTAINER::getJdbcUrl); // Adiciona a propriedade spring.datasource.url com o valor do jdbcUrl do container
    registry.add("spring.datasource.username", MYSQL_CONTAINER::getUsername); // Adiciona a propriedade spring.datasource.username com o valor do username do container
    registry.add("spring.datasource.password", MYSQL_CONTAINER::getPassword); // Adiciona a propriedade spring.datasource.password com o valor do password do container
  }

  @Test
  public void testProductCreation() throws Exception {
    // Cria produto para ser salvo
    Product product = new Product();
    product.setName("Chinelo");
    product.setPrice(20.45);

    // Salva diretamente no repositório
    Product savedProduct = productRepository.save(product);

    // Verifica se conseguimos acessar os dados pela rota
    String productUrl = "/products/%s".formatted(savedProduct.getId());
    mockMvc.perform(get(productUrl)
            .accept(MediaType.APPLICATION_JSON))
        .andExpect(jsonPath("$.name").value("Chinelo"))
        .andExpect(jsonPath("$.price").value("20.45"));
  }
}
