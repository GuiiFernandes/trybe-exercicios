package com.betrybe.alexandria.services;

import com.betrybe.alexandria.models.entities.Author;
import com.betrybe.alexandria.models.repositories.AuthorRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * The type Author service.
 */
@Service
public class AuthorService {

  private final AuthorRepository authorRepository;

  @Autowired
  public AuthorService(AuthorRepository authorRepository) {
    this.authorRepository = authorRepository;
  }

  public Author insert(Author author) {
    return authorRepository.save(author);
  }

  /**
   * Update optional.
   *
   * @param id     the id
   * @param author the book
   * @return the optional
   */
  public Optional<Author> update(Long id, Author author) {
    Optional<Author> authorOptional = authorRepository.findById(id);
    if (authorOptional.isPresent()) {
      Author authorToUpdate = authorOptional.get();
      authorToUpdate.setName(author.getName());
      authorToUpdate.setNationality(author.getNationality());
      Author updatedAuthor = authorRepository.save(authorToUpdate);
      return Optional.of(updatedAuthor);
    }
    return authorOptional;
  }

  /**
   * Remove optional.
   *
   * @param id the id
   * @return the optional
   */
  public Optional<Author> remove(Long id) {
    Optional<Author> authorOptional = authorRepository.findById(id);
    if (authorOptional.isPresent()) {
      authorRepository.deleteById(id);
    }
    return authorOptional;
  }

  /**
   * Gets by id.
   *
   * @param id the id
   * @return the by id
   */
  public Optional<Author> getById(Long id) {
    return authorRepository.findById(id);
  }

  public List<Author> getAll() {
    return authorRepository.findAll();
  }
}
