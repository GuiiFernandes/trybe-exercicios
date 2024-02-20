package com.betrybe.alexandria.controllers.dto;

import com.betrybe.alexandria.models.entities.Author;
import com.betrybe.alexandria.models.entities.Book;
import java.util.List;

/**
 * The type Author dto.
 */
public record AuthorDto(Long id, String name, String nationality, List<Book> books) {

  public Author toAuthor() {
    return new Author(id, name, nationality, books);
  }
}
