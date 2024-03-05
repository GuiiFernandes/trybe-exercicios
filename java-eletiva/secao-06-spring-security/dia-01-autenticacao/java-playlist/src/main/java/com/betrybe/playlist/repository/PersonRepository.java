package com.betrybe.playlist.repository;

import com.betrybe.playlist.entity.Person;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

/**
 * The interface Person repository.
 */
public interface PersonRepository extends JpaRepository<Person, Long> {

  /**
   * Find by username optional.
   *
   * @param username the username
   * @return the optional
   */
  Optional<Person> findByUsername(String username);
}
