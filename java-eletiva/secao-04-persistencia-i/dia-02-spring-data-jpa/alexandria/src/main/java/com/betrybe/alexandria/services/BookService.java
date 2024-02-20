package com.betrybe.alexandria.services;

import com.betrybe.alexandria.models.entities.Book;
import com.betrybe.alexandria.models.repositories.BookRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * The type Book service.
 */
@Service
public class BookService {

  private final BookRepository bookRepository;

  @Autowired
  public BookService(BookRepository bookRepository) {
    this.bookRepository = bookRepository;
  }

  public Book insert(Book book) {
    return bookRepository.save(book);
  }

  /**
   * Update optional.
   *
   * @param id   the id
   * @param book the book
   * @return the optional
   */
  public Optional<Book> update(Long id, Book book) {
    Optional<Book> bookOptional = bookRepository.findById(id);
    if (bookOptional.isPresent()) {
      Book bookToUpdate = bookOptional.get();
      bookToUpdate.setTitle(book.getTitle());
      bookToUpdate.setGenre(book.getGenre());
      Book updatedBook = bookRepository.save(bookToUpdate);
      return Optional.of(updatedBook);
    }
    return bookOptional;
  }

  /**
   * Remove optional.
   *
   * @param id the id
   * @return the optional
   */
  public Optional<Book> remove(Long id) {
    Optional<Book> bookOptional = bookRepository.findById(id);
    if (bookOptional.isPresent()) {
      bookRepository.deleteById(id);
    }
    return bookOptional;
  }

  /**
   * Gets by id.
   *
   * @param id the id
   * @return the by id
   */
  public Optional<Book> getById(Long id) {
    return bookRepository.findById(id);
  }

  public List<Book> getAll() {
    return bookRepository.findAll();
  }
}
