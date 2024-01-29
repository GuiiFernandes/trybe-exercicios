package com.betrybe.product;

import org.springframework.stereotype.Service;

@Service
public class ProductService {

  private final ProductRepository productRepository;

  public ProductService(ProductRepository productRepository) {
    this.productRepository = productRepository;
  }

  public String getMessage() {
    return productRepository.getMessage();
  }
}
