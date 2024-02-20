package com.betrybe.alexandria.controllers;

import com.betrybe.alexandria.controllers.dto.AuthorDto;
import com.betrybe.alexandria.controllers.dto.BookDto;
import com.betrybe.alexandria.controllers.dto.ResponseDto;
import com.betrybe.alexandria.models.entities.Author;
import com.betrybe.alexandria.models.entities.Book;
import com.betrybe.alexandria.services.AuthorService;
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
 * The type Author controller.
 */
@RestController
@RequestMapping("/authors")
public class AuthorController {

  private final AuthorService authorService;

  @Autowired
  public AuthorController(AuthorService authorService) {
    this.authorService = authorService;
  }

  /**
   * Create response entity.
   *
   * @param authorDto the author dto
   * @return the response entity
   */
  @PostMapping()
  public ResponseEntity<ResponseDto<Author>> create(@RequestBody AuthorDto authorDto) {
    Author author = authorDto.toAuthor();
    Author createdAuthor = authorService.insert(author);
    return ResponseEntity.status(HttpStatus.CREATED).body(new ResponseDto<Author>(
        "Author created successfully",
        createdAuthor
    ));
  }

  /**
   * Update response entity.
   *
   * @param id        the id
   * @param authorDto the author dto
   * @return the response entity
   */
  @PutMapping("/{id}")
  public ResponseEntity<ResponseDto<Author>> update(
      @PathVariable Long id,
      @RequestBody AuthorDto authorDto
  ) {
    Optional<Author> optionalAuthor = authorService.update(id, authorDto.toAuthor());
    return optionalAuthor.map(author -> ResponseEntity.ok().body(new ResponseDto<>(
        "Author updated successfully",
        author
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
  public ResponseEntity<ResponseDto<Author>> remove(@PathVariable Long id) {
    Optional<Author> optionalAuthor = authorService.remove(id);
    return optionalAuthor.map(author -> ResponseEntity.ok(new ResponseDto<>(
        "Author removed successfully",
        author
    ))).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseDto<>(
        String.format("Author with id %d not found", id),
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
  public ResponseEntity<ResponseDto<Author>> getById(@PathVariable Long id) {
    Optional<Author> optionalAuthor = authorService.getById(id);
    return optionalAuthor.map(author -> ResponseEntity.ok(new ResponseDto<>(
        "Author found successfully",
        author
    ))).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseDto<>(
        String.format("Author with id %d not found", id),
        null
    )));
  }

  /**
   * Gets all.
   *
   * @return the all
   */
  @GetMapping()
  public ResponseEntity<ResponseDto<List<Author>>> getAll() {
    return ResponseEntity.ok(new ResponseDto<>(
        "Authors found successfully",
        authorService.getAll().stream()
            .map(author -> new AuthorDto(
                author.getId(),
                author.getName(),
                author.getNationality(),
                author.getBooks()
            ).toAuthor()).toList()
    ));
  }
}
