package com.betrybe.report.controller.dto;

import com.betrybe.report.entity.Product;
import java.time.LocalDate;

/**
 * The type Product creation dto.
 */
public record ProductCreationDto(String name, LocalDate manufactureDate, LocalDate expirationDate) {

  /**
   * To entity product.
   *
   * @return the product
   */
  public Product toEntity() {
    Product product = new Product();
    product.setName(name);
    product.setManufactureDate(manufactureDate);
    product.setExpirationDate(expirationDate);
    return product;
  }
}
