package com.betrybe.alexandria.services;

import com.betrybe.alexandria.models.entities.Book;
import com.betrybe.alexandria.models.entities.BookDetail;
import com.betrybe.alexandria.models.repositories.BookDetailRepository;
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

  private final BookDetailRepository bookDetailRepository;

  @Autowired
  public BookService(
      BookRepository bookRepository,
      BookDetailRepository bookDetailRepository
  ) {
    this.bookRepository = bookRepository;
    this.bookDetailRepository = bookDetailRepository;
  }

  public Book insertBook(Book book) {
    return bookRepository.save(book);
  }

  /**
   * Update optional.
   *
   * @param id   the id
   * @param book the book
   * @return the optional
   */
  public Optional<Book> updateBook(Long id, Book book) {
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
  public Optional<Book> removeBook(Long id) {
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
  public Optional<Book> getBookById(Long id) {
    return bookRepository.findById(id);
  }

  public List<Book> getAllBooks() {
    return bookRepository.findAll();
  }

  /**
   * Insert book detail.
   *
   * @param bookDetail the book
   * @return the book detail
   */
  public BookDetail insertDetail(BookDetail bookDetail) {
    return bookDetailRepository.save(bookDetail);
  }

  /**
   * Update optional.
   *
   * @param id         the id
   * @param bookDetail the book
   * @return the optional
   */
  public Optional<BookDetail> updateDetail(Long id, BookDetail bookDetail) {
    Optional<BookDetail> detailOptional = bookDetailRepository.findById(id);
    if (detailOptional.isPresent()) {
      BookDetail detailToUpdate = detailOptional.get();
      detailToUpdate.setSummary(bookDetail.getSummary());
      detailToUpdate.setPageCount(bookDetail.getPageCount());
      detailToUpdate.setYear(bookDetail.getYear());
      detailToUpdate.setIsbn(bookDetail.getIsbn());
      BookDetail updatedDetail = bookDetailRepository.save(detailToUpdate);
      return Optional.of(updatedDetail);
    }
    return detailOptional;
  }

  /**
   * Remove optional.
   *
   * @param id the id
   * @return the optional
   */
  public Optional<BookDetail> removeDetail(Long id) {
    Optional<BookDetail> detailOptional = bookDetailRepository.findById(id);
    if (detailOptional.isPresent()) {
      bookDetailRepository.deleteById(id);
    }
    return detailOptional;
  }

  /**
   * Gets by id.
   *
   * @param id the id
   * @return the by id
   */
  public Optional<BookDetail> getDetailById(Long id) {
    return bookDetailRepository.findById(id);
  }
}
