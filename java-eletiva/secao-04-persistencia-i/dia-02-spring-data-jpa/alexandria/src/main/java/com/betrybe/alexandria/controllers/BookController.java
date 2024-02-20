package com.betrybe.alexandria.controllers;

import com.betrybe.alexandria.controllers.dto.BookDto;
import com.betrybe.alexandria.controllers.dto.ResponseDto;
import com.betrybe.alexandria.models.entities.Book;
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
  public ResponseEntity<ResponseDto<Book>> create(@RequestBody BookDto bookDto) {
    Book book = bookDto.toBook();
    Book createdBook = bookService.insert(bookDto.toBook());
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
  public ResponseEntity<ResponseDto<Book>> update(
      @PathVariable Long id,
      @RequestBody BookDto bookDto
  ) {
    Optional<Book> optionalBook = bookService.update(id, bookDto.toBook());
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
  public ResponseEntity<ResponseDto<Book>> remove(@PathVariable Long id) {
    Optional<Book> optionalBook = bookService.remove(id);
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
  public ResponseEntity<ResponseDto<Book>> getById(@PathVariable Long id) {
    Optional<Book> optionalBook = bookService.getById(id);
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
  public ResponseEntity<ResponseDto<List<Book>>> getAll() {
    return ResponseEntity.ok(new ResponseDto<List<Book>>(
        "Books found successfully",
        bookService.getAll().stream()
            .map(book -> new BookDto(book.getId(), book.getTitle(), book.getGenre()).toBook())
            .toList()
    ));
  }
}
