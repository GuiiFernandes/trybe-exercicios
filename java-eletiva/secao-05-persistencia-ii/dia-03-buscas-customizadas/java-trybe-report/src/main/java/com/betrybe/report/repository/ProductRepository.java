package com.betrybe.report.repository;

import com.betrybe.report.entity.Product;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * The interface Product repository.
 */
public interface ProductRepository extends JpaRepository<Product, Long> {

  Optional<List<Product>> findByExpirationDateBefore(LocalDate date);

  Optional<List<Product>> findByExpirationDateAfter(LocalDate date);

  Optional<List<Product>> findByExpirationDateBetween(LocalDate startDate, LocalDate endDate);
}
