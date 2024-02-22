package com.betrybe.ecommerce;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import com.betrybe.ecommerce.entity.Product;
import com.betrybe.ecommerce.repository.ProductRepository;
import com.betrybe.ecommerce.service.ProductService;
import com.betrybe.ecommerce.service.exception.ProductNotFoundException;
import java.util.Optional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest
@ActiveProfiles("test")
public class ProductServiceTest {
  @Autowired
  ProductService productService;
  @MockBean //Passo o MockBean para mostrar que o productRepository é um mock
  ProductRepository productRepository; //Crio o atributo productRepository

  @Test
  public void testProductCreation() {
    Product product = new Product();
    product.setName("Panela");
    product.setPrice(60.35);

    //Crio um objeto do tipo Product para retornar no mock
    Product productToReturn = new Product();
    productToReturn.setId(123L); //Importante atribuir um id para o objeto retornado porque o método save do repository retorna um objeto com id
    //Uso os mesmos atributos dos objeto anterior pois é o que o método save do repository salvaria no banco
    productToReturn.setName(product.getName());
    productToReturn.setPrice(product.getPrice());

    //Quando o método save do repository for chamado com qualquer objeto do tipo Product, ele retornará o objeto productToReturn
    when(productRepository.save(product)).thenReturn(productToReturn);

    //Chamo o método save do service, que chama o método save do repository
    Product savedProduct = productService.save(product);

    //Verifico se o método save do repository foi chamado
    verify(productRepository).save(any());
    //Verifico se o objeto retornado pelo método save do service é igual ao objeto que eu criei
    assertEquals(123L, savedProduct.getId());
    assertNotNull(savedProduct.getId()); //Nesse caso esse teste do id nulo é desnecessário, pois o teste acima já verifica se o id é igual a 123L
    assertEquals(product.getName(), savedProduct.getName());
    assertEquals(product.getPrice(), savedProduct.getPrice());
  }

  @Test
  public void testProductFindById() {
    Product product = new Product();
    product.setId(123L);
    product.setName("Panela");
    product.setPrice(60.35);

    //Nesse exemplo é importante atentar que o repository retorna um Optional, então o mock de findById do repository deve retornar um Optional
    when(productRepository.findById(123L)).thenReturn(Optional.of(product));

    Product foundProduct = productService.findById(123L);

    verify(productRepository).findById(eq(123L));
    assertEquals(product.getId(), foundProduct.getId());
    assertEquals(product.getName(), foundProduct.getName());
    assertEquals(product.getPrice(), foundProduct.getPrice());
  }

  @Test //Teste para verificar se
  public void testProductFindByIdNotFound() {
    //Nesse caso o repository retorna um Optional vazio quando o id não é encontrado, então o mock de findById do repository deve retornar um Optional vazio
    when(productRepository.findById(any())).thenReturn(Optional.empty());
    //No código quando o repository.findById é chamado na service retorna um Optional vazio, o método orElseThrow lança uma exceção do tipo ProductNotFoundException
    assertThrows(ProductNotFoundException.class, () -> productService.findById(987L)); //Verifico se o método lança a exceção na service
    verify(productRepository).findById(eq(987L)); //Verifico se o método findById do repository foi chamado ao testar a exceção
  }
}