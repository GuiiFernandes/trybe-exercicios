package com.betrybe.trybrecho.repository;

import com.betrybe.trybrecho.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.history.RevisionRepository;
import org.springframework.stereotype.Repository;

/**
 * The interface Product repository.
 */
@Repository
public interface ProductRepository extends JpaRepository<Product, Long>,
    RevisionRepository<Product, Long, Long> {

}
