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
  public ResponseEntity<ResponseDto<List<Book>>> getAllBooks() {
    return ResponseEntity.ok(new ResponseDto<List<Book>>(
        "Books found successfully",
        bookService.getAllBooks().stream()
            .map(book -> new BookDto(book.getId(), book.getTitle(), book.getGenre()).toBook())
            .toList()
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
    BookDetail createdDetail = bookService.insertDetail(detailDto.toBookDetail());
    return ResponseEntity.status(HttpStatus.CREATED).body(new ResponseDto<BookDetail>(
        "Book detail created successfully",
        createdDetail
    ));
  }

  /**
   * Update response entity.
   *
   * @param id        the id
   * @param detailId  the detail id
   * @param detailDto the book dto
   * @return the response entity
   */
  @PutMapping("/{id}/detail/{detailId}")
  public ResponseEntity<ResponseDto<BookDetail>> updateDetail(
      @PathVariable Long id,
      @PathVariable Long detailId,
      @RequestBody DetailDto detailDto
  ) {
    Optional<BookDetail> optionalDetail = bookService.updateDetail(detailId,
        detailDto.toBookDetail());
    return optionalDetail.map(
        detail -> ResponseEntity.status(HttpStatus.OK).body(new ResponseDto<BookDetail>(
            "Book detail updated successfully",
            detail
        ))).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseDto<>(
        String.format("Book detail with id %d not found", detailId),
        null
    )));
  }

  /**
   * Remove response entity.
   *
   * @param id the id
   * @return the response entity
   */
  @DeleteMapping("/{id}/detail/{detailId}")
  public ResponseEntity<ResponseDto<BookDetail>> removeDetail(
      @PathVariable Long id,
      @PathVariable Long detailId
  ) {
    Optional<BookDetail> optionalDetail = bookService.removeDetail(detailId);
    return optionalDetail.map(detail -> ResponseEntity.ok(new ResponseDto<>(
        "Book detail removed successfully",
        detail
    ))).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseDto<>(
        String.format("Book detail with id %d not found", detailId),
        null
    )));
  }

  /**
   * Gets by id.
   *
   * @param id the id
   * @return the by id
   */
  @GetMapping("/{id}/detail/{detailId}")
  public ResponseEntity<ResponseDto<BookDetail>> getDetailById(
      @PathVariable Long id,
      @PathVariable Long detailId
  ) {
    Optional<BookDetail> optionalDetail = bookService.getDetailById(detailId);
    return optionalDetail.map(detail -> ResponseEntity.ok(new ResponseDto<>(
        "Book detail found successfully",
        detail
    ))).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseDto<>(
        String.format("Book detail with id %d not found", detailId),
        null
    )));
  }
}
