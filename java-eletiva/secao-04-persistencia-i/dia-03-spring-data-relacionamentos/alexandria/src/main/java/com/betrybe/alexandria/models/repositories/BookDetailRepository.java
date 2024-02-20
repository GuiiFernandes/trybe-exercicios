package com.betrybe.alexandria.models.repositories;

import com.betrybe.alexandria.models.entities.BookDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * The interface Book detail repository.
 */
@Repository
public interface BookDetailRepository extends JpaRepository<BookDetail, Long> {

}
