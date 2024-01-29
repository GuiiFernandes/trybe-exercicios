package com.betrybe.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class ProductController {

  // @Autowired
  // private ProductService productService;
  // injeção de dependência por atributo - não recomendado / Só utilizar nos testes unitários
  // aumenta o acoplamento no nosso sistema, dificulta a manutenção, e até reduzi o desempenho.
  private ProductService productService;

  @Autowired
  public ProductController(ProductService productService) {
    this.productService = productService;
  }

  // @Autowired
  // public void setProductService(ProductService productService) {
  //   this.productService = productService;
  // }
  //  injeção de dependência por setter ou qualquer outro método - usado com dependências opcionais

  @GetMapping("/product")
  public String getMessage() {
    return productService.getMessage();
  }

  @GetMapping("/status")
  public String helloWorld() {
    return "API funcionando!";
  }
}
