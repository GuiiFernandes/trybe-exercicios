package com.betrybe.alexandria.controllers;

import com.betrybe.alexandria.controllers.dto.BookDto;
import com.betrybe.alexandria.controllers.dto.DetailDto;
import com.betrybe.alexandria.controllers.dto.ResponseDto;
import com.betrybe.alexandria.models.entities.Book;
import com.betrybe.alexandria.models.entities.BookDetail;
import com.betrybe.alexandria.services.BookService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * The type Book controller.
 */
@RestController
@RequestMapping("/books")
public class BookController {

  private final BookService bookService;

  @Autowired
  public BookController(BookService bookService) {
    this.bookService = bookService;
  }

  /**
   * Create response entity.
   *
   * @param bookDto the book dto
   * @return the response entity
   */
  @PostMapping()
  public ResponseEntity<ResponseDto<Book>> createBook(@RequestBody BookDto bookDto) {
    Book createdBook = bookService.insertBook(bookDto.toBook());
    return ResponseEntity.status(HttpStatus.CREATED).body(new ResponseDto<Book>(
        "Book created successfully",
        createdBook
    ));
  }

  /**
   * Update response entity.
   *
   * @param id      the id
   * @param bookDto the book dto
   * @return the response entity
   */
  @PutMapping("/{id}")
  public ResponseEntity<ResponseDto<Book>> updateBook(
      @PathVariable Long id,
      @RequestBody BookDto bookDto
  ) {
    Optional<Book> optionalBook = bookService.updateBook(id, bookDto.toBook());
    return optionalBook.map(book -> ResponseEntity.status(HttpStatus.OK).body(new ResponseDto<Book>(
        "Book updated successfully",
        book
    ))).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseDto<>(
        String.format("Book with id %d not found", id),
        null
    )));
  }

  /**
   * Remove response entity.
   *
   * @param id the id
   * @return the response entity
   */
  @DeleteMapping("/{id}")
  public ResponseEntity<ResponseDto<Book>> removeBook(@PathVariable Long id) {
    Optional<Book> optionalBook = bookService.removeBook(id);
    return optionalBook.map(book -> ResponseEntity.ok(new ResponseDto<>(
        "Book removed successfully",
        book
    ))).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseDto<>(
        String.format("Book with id %d not found", id),
        null
    )));
  }

  /**
   * Gets by id.
   *
   * @param id the id
   * @return the by id
   */
  @GetMapping("/{id}")
  public ResponseEntity<ResponseDto<Book>> getBookById(@PathVariable Long id) {
    Optional<Book> optionalBook = bookService.getBookById(id);
    return optionalBook.map(book -> ResponseEntity.ok(new ResponseDto<>(
        "Book found successfully",
        book
    ))).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseDto<>(
        String.format("Book with id %d not found", id),
        null
    )));
  }

  /**
   * Gets all.
   *
   * @return the all
   */
  @GetMapping()
  public ResponseEntity<ResponseDto<List<Book>>> getAllBooks(
      @RequestParam(required = false, defaultValue = "0") int pageNumber,
      @RequestParam(required = false, defaultValue = "10") int pageSize
  ) {
    return ResponseEntity.ok(new ResponseDto<List<Book>>(
        "Books found successfully",
        bookService.getAllBooks(pageNumber, pageSize).stream()
            .map(book -> new BookDto(
                book.getId(),
                book.getTitle(),
                book.getGenre(),
                book.getDetails(),
                book.getPublisher(),
                book.getAuthors()
            ).toBook()).toList()
    ));
  }

  /**
   * Create book response entity.
   *
   * @param detailDto the detail dto
   * @return the response entity
   */
  @PostMapping("/{id}/detail")
  public ResponseEntity<ResponseDto<BookDetail>> createDetail(
      @PathVariable Long id,
      @RequestBody DetailDto detailDto
  ) {
    Optional<BookDetail> optionalDetail = bookService.insertDetail(id, detailDto.toBookDetail());
    return optionalDetail.map(
        detail -> ResponseEntity.status(HttpStatus.CREATED).body(new ResponseDto<BookDetail>(
            "Book detail created successfully",
            detail
        ))).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseDto<>(
        String.format("Book with id %d not found", id),
        null
    )));
  }

  /**
   * Update response entity.
   *
   * @param id        the id
   * @param detailDto the book dto
   * @return the response entity
   */
  @PutMapping("/{id}/detail")
  public ResponseEntity<ResponseDto<BookDetail>> updateDetail(
      @PathVariable Long id,
      @RequestBody DetailDto detailDto
  ) {
    Optional<BookDetail> optionalDetail = bookService.updateDetail(
        id,
        detailDto.toBookDetail()
    );
    return optionalDetail.map(
        detail -> ResponseEntity.status(HttpStatus.OK).body(new ResponseDto<BookDetail>(
            "Book detail updated successfully",
            detail
        ))).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseDto<>(
        String.format("Book detail with id %d not found", id),
        null
    )));
  }

  /**
   * Remove response entity.
   *
   * @param id the id
   * @return the response entity
   */
  @DeleteMapping("/{id}/detail")
  public ResponseEntity<ResponseDto<BookDetail>> removeDetail(@PathVariable Long id) {
    Optional<BookDetail> optionalDetail = bookService.removeDetail(id);
    return optionalDetail.map(detail -> ResponseEntity.ok(new ResponseDto<>(
        "Book detail removed successfully",
        detail
    ))).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseDto<>(
        String.format("Book detail with id %d not found", id),
        null
    )));
  }

  /**
   * Sets publisher from book.
   *
   * @param bookId      the book id
   * @param publisherId the publisher id
   * @return the publisher from book
   */
  @PutMapping("/{bookId}/publisher/{publisherId}")
  public ResponseEntity<ResponseDto<Book>> setPublisherFromBook(@PathVariable Long bookId,
      @PathVariable Long publisherId) {
    Optional<Book> optionalBook = bookService.setPublisher(bookId, publisherId);
    return optionalBook.map(book -> ResponseEntity.ok(new ResponseDto<>(
        "Publisher set successfully",
        book
    ))).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseDto<>(
        String.format("Book with id %d or Publisher with id %d not found", bookId, publisherId),
        null
    )));
  }

  /**
   * Remove publisher from book response entity.
   *
   * @param bookId the book id
   * @return the response entity
   */
  @DeleteMapping("/{bookId}/publisher")
  public ResponseEntity<ResponseDto<Book>> removePublisherFromBook(@PathVariable Long bookId) {
    Optional<Book> optionalBook = bookService.removePublisher(bookId);
    return optionalBook.map(book -> ResponseEntity.ok(new ResponseDto<>(
        "Publisher removed successfully",
        book
    ))).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseDto<>(
        String.format("Book with id %d not found", bookId),
        null
    )));
  }

  /**
   * Sets author from book.
   *
   * @param bookId   the book id
   * @param authorId the author id
   * @return the author from book
   */
  @PutMapping("/{bookId}/author/{authorId}")
  public ResponseEntity<ResponseDto<Book>> setAuthorFromBook(
      @PathVariable Long bookId,
      @PathVariable Long authorId
  ) {
    Optional<Book> optionalBook = bookService.setAuthor(bookId, authorId);
    return optionalBook.map(book -> ResponseEntity.ok(new ResponseDto<>(
        "Author set successfully",
        book
    ))).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseDto<>(
        String.format("Book with id %d or Author with id %d not found", bookId, authorId),
        null
    )));
  }

  /**
   * Remove publisher from book response entity.
   *
   * @param bookId the book id
   * @return the response entity
   */
  @DeleteMapping("/{bookId}/author/{authorId}")
  public ResponseEntity<ResponseDto<Book>> removeAuthorFromBook(
      @PathVariable Long bookId,
      @PathVariable Long authorId
  ) {
    Optional<Book> optionalBook = bookService.removeAuthor(bookId, authorId);
    return optionalBook.map(book -> ResponseEntity.ok(new ResponseDto<>(
        "Author removed successfully",
        book
    ))).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseDto<>(
        String.format("Book with id %d not found", bookId),
        null
    )));
  }
}
