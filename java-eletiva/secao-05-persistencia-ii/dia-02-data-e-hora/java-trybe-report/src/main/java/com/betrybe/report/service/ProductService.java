package com.betrybe.report.service;

import com.betrybe.report.entity.Product;
import com.betrybe.report.repository.ProductRepository;
import com.betrybe.report.service.exception.InvalidDateException;
import com.betrybe.report.service.exception.ProductNotFoundException;
import com.betrybe.report.util.PropertyMapper;
import java.time.LocalDate;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * The type Product service.
 */
@Service
public class ProductService {

  private final ProductRepository productRepository;

  /**
   * Instantiates a new Product service.
   *
   * @param productRepository the product repository
   */
  @Autowired
  public ProductService(ProductRepository productRepository) {
    this.productRepository = productRepository;
  }

  /**
   * Find all list.
   *
   * @return the list
   */
  public List<Product> findAll() {
    return productRepository.findAll();
  }

  /**
   * Create product.
   *
   * @param product the product
   * @return the product
   */
  public Product create(Product product) {
    if (product.getExpirationDate().isBefore(product.getManufactureDate())) {
      throw new InvalidDateException();
    }
    return productRepository.save(product);
  }

  /**
   * Find by id product.
   *
   * @param id the id
   * @return the product
   */
  public Product findById(long id) {
    return productRepository.findById(id).orElseThrow(ProductNotFoundException::new);
  }

  /**
   * Delete.
   *
   * @param id the id
   */
  public void delete(long id) {
    productRepository.deleteById(id);
  }

  /**
   * Update product.
   *
   * @param id      the id
   * @param product the product
   * @return the product
   */
  public Product update(long id, Product product) {
    Product productDb = findById(id);
    PropertyMapper.copyNonNullProperties(product, productDb);
    return productRepository.save(productDb);
  }

  /**
   * Find expired products list.
   *
   * @return the list
   */
  public List<Product> findExpiredProducts() {
    LocalDate today = LocalDate.now();
    List<Product> products = productRepository.findAll();
    return products.stream()
        .filter(product -> product.getExpirationDate().isBefore(today))
        .toList();
  }

  /**
   * Find non expired products list.
   *
   * @return the list
   */
  public List<Product> findNonExpiredProducts() {
    LocalDate today = LocalDate.now();
    List<Product> products = productRepository.findAll();
    return products.stream()
        .filter(product -> product.getExpirationDate().isAfter(today))
        .toList();
  }

  /**
   * Find expires at products list.
   *
   * @param start the start
   * @param end   the end
   * @return the list
   */
  public List<Product> findExpiresAtProducts(LocalDate start, LocalDate end) {
    List<Product> products = productRepository.findAll();
    return products.stream()
        .filter(product -> product.getExpirationDate().isAfter(start)
            && product.getExpirationDate().isBefore(end))
        .toList();
  }
}
