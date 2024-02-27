package com.betrybe.report.controller;

import com.betrybe.report.controller.dto.ProductCreationDto;
import com.betrybe.report.entity.Product;
import com.betrybe.report.service.ProductService;
import java.time.LocalDate;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 * The type Product controller.
 */
@RestController
@RequestMapping("/products")
public class ProductController {

  private final ProductService productService;

  /**
   * Instantiates a new Product controller.
   *
   * @param productService the product service
   */
  @Autowired
  public ProductController(ProductService productService) {
    this.productService = productService;
  }

  /**
   * Create product.
   *
   * @param dto the dto
   * @return the product
   */
  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public Product create(@RequestBody ProductCreationDto dto) {
    return productService.create(dto.toEntity());
  }

  /**
   * Find all list.
   *
   * @return the list
   */
  @GetMapping
  public List<Product> findAll() {
    return productService.findAll();
  }

  /**
   * Find by id product.
   *
   * @param productId the product id
   * @return the product
   */
  @GetMapping("/{productId}")
  public Product findById(@PathVariable long productId) {
    return productService.findById(productId);
  }

  /**
   * Update product.
   *
   * @param productId the product id
   * @param dto       the dto
   * @return the product
   */
  @PatchMapping("/{productId}")
  public Product update(@PathVariable long productId, @RequestBody ProductCreationDto dto) {
    return productService.update(productId, dto.toEntity());
  }

  /**
   * Delete.
   *
   * @param productId the product id
   */
  @DeleteMapping("/{productId}")
  public void delete(@PathVariable long productId) {
    productService.delete(productId);
  }

  /**
   * Expired products list.
   *
   * @return the list
   */
  @GetMapping("/expired")
  public List<Product> expiredProducts() {
    return productService.findExpiredProducts();
  }

  /**
   * Non expired products list.
   *
   * @return the list
   */
  @GetMapping("/non-expired")
  public List<Product> nonExpiredProducts() {
    return productService.findNonExpiredProducts();
  }

  /**
   * Expires at products list.
   *
   * @param start the start
   * @param end   the end
   * @return the list
   */
  @GetMapping("/expires-at")
  public List<Product> expiresAtProducts(@RequestParam LocalDate start,
      @RequestParam LocalDate end) {
    return productService.findExpiresAtProducts(start, end);
  }

}
