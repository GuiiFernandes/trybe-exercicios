package com.betrybe.alexandria.services;

import com.betrybe.alexandria.models.entities.Author;
import com.betrybe.alexandria.models.entities.Book;
import com.betrybe.alexandria.models.entities.BookDetail;
import com.betrybe.alexandria.models.entities.Publisher;
import com.betrybe.alexandria.models.repositories.AuthorRepository;
import com.betrybe.alexandria.models.repositories.BookDetailRepository;
import com.betrybe.alexandria.models.repositories.BookRepository;
import com.betrybe.alexandria.models.repositories.PublisherRepository;
import com.betrybe.alexandria.util.Result;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

/**
 * The type Book service.
 */
@Service
public class BookService {

  private final BookRepository bookRepository;

  private final BookDetailRepository bookDetailRepository;

  private final PublisherRepository publisherRepository;

  private final AuthorRepository authorRepository;

  /**
   * Instantiates a new Book service.
   *
   * @param bookRepository       the book repository
   * @param bookDetailRepository the book detail repository
   * @param publisherRepository  the publisher repository
   */
  @Autowired
  public BookService(
      BookRepository bookRepository,
      BookDetailRepository bookDetailRepository,
      PublisherRepository publisherRepository,
      AuthorRepository authorRepository
  ) {
    this.bookRepository = bookRepository;
    this.bookDetailRepository = bookDetailRepository;
    this.publisherRepository = publisherRepository;
    this.authorRepository = authorRepository;
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

  /**
   * Gets all books.
   *
   * @param pageNumber the page number
   * @param pageSize   the page size
   * @return the all books
   */
  public List<Book> getAllBooks(int pageNumber, int pageSize) {
    Pageable pageable = PageRequest.of(pageNumber, pageSize);
    Page<Book> books = bookRepository.findAll(pageable);
    return books.stream().toList();
  }

  /**
   * Insert book detail.
   *
   * @param bookDetail the book
   * @return the book detail
   */
  public Optional<BookDetail> insertDetail(Long bookId, BookDetail bookDetail) {
    Optional<Book> optionalBook = bookRepository.findById(bookId);
    if (optionalBook.isPresent()) {
      bookDetail.setBook(optionalBook.get());
      return Optional.of(bookDetailRepository.save(bookDetail));
    }
    return Optional.empty();
  }

  /**
   * Update optional.
   *
   * @param bookId     the id
   * @param bookDetail the book
   * @return the optional
   */
  public Optional<BookDetail> updateDetail(Long bookId, BookDetail bookDetail) {
    Optional<Book> optionalBook = bookRepository.findById(bookId);
    if (optionalBook.isPresent()) {
      BookDetail detailToUpdate = optionalBook.get().getDetails();
      detailToUpdate.setSummary(bookDetail.getSummary());
      detailToUpdate.setPageCount(bookDetail.getPageCount());
      detailToUpdate.setYear(bookDetail.getYear());
      detailToUpdate.setIsbn(bookDetail.getIsbn());
      BookDetail updatedDetail = bookDetailRepository.save(detailToUpdate);
      return Optional.of(updatedDetail);
    }
    return Optional.empty();
  }

  /**
   * Remove optional.
   *
   * @param id the id
   * @return the optional
   */
  public Optional<BookDetail> removeDetail(Long id) {
    Optional<Book> optionalBook = bookRepository.findById(id);
    if (optionalBook.isPresent()) {
      Book book = optionalBook.get();
      Optional<BookDetail> detailOptional = bookDetailRepository.findById(
          book.getDetails().getId()
      );
      if (detailOptional.isPresent()) {
        book.setDetails(null);
        bookDetailRepository.deleteById(book.getDetails().getId());
        return detailOptional;
      }
    }
    return Optional.empty();
  }

  /**
   * Sets publisher.
   *
   * @param bookId      the book id
   * @param publisherId the publisher id
   * @return the publisher
   */
  public Optional<Book> setPublisher(Long bookId, Long publisherId) {
    Optional<Book> optionalBook = bookRepository.findById(bookId);
    if (optionalBook.isEmpty()) {
      return Optional.empty();
    }
    Optional<Publisher> optionalPublisher = publisherRepository.findById(publisherId);
    if (optionalPublisher.isEmpty()) {
      return Optional.empty();
    }
    Book book = optionalBook.get();
    book.setPublisher(optionalPublisher.get());
    return Optional.of(bookRepository.save(book));
  }

  /**
   * Remove publisher optional.
   *
   * @param bookId the book id
   * @return the optional
   */
  public Optional<Book> removePublisher(Long bookId) {
    Optional<Book> optionalBook = bookRepository.findById(bookId);
    if (optionalBook.isEmpty()) {
      return Optional.empty();
    }
    Book book = optionalBook.get();
    book.setPublisher(null);
    return Optional.of(bookRepository.save(book));
  }

  private Optional<Result> findBookAndAuthor(Long bookId, Long authorId) {
    Optional<Book> optionalBook = bookRepository.findById(bookId);
    if (optionalBook.isEmpty()) {
      return Optional.empty();
    }
    Optional<Author> optionalAuthor = authorRepository.findById(authorId);
    if (optionalAuthor.isEmpty()) {
      return Optional.empty();
    }
    return Optional.of(new Result(optionalBook.get(), optionalAuthor.get()));
  }

  /**
   * Sets author.
   *
   * @param bookId   the book id
   * @param authorId the author id
   * @return the author
   */
  public Optional<Book> setAuthor(Long bookId, Long authorId) {
    Optional<Result> optionalResult = findBookAndAuthor(bookId, authorId);
    if (optionalResult.isEmpty()) {
      return Optional.empty();
    }
    Book book = optionalResult.get().getBook();
    book.getAuthors().add(optionalResult.get().getAuthor());
    return Optional.of(bookRepository.save(book));
  }

  /**
   * Remove author optional.
   *
   * @param bookId   the book id
   * @param authorId the author id
   * @return the optional
   */
  public Optional<Book> removeAuthor(Long bookId, Long authorId) {
    Optional<Result> optionalResult = findBookAndAuthor(bookId, authorId);
    if (optionalResult.isEmpty()) {
      return Optional.empty();
    }
    Book book = optionalResult.get().getBook();
    book.getAuthors().remove(optionalResult.get().getAuthor());
    return Optional.of(bookRepository.save(book));
  }
}
