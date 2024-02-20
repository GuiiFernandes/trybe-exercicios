package com.betrybe.alexandria.controllers.dto;

import com.betrybe.alexandria.models.entities.Author;
import com.betrybe.alexandria.models.entities.Book;
import com.betrybe.alexandria.models.entities.BookDetail;
import com.betrybe.alexandria.models.entities.Publisher;
import java.util.List;

/**
 * The type Book dto.
 */
public record BookDto(Long id, String title, String genre, BookDetail details,
                      Publisher publisher, List<Author> authors) {

  public Book toBook() {
    return new Book(id, title, genre, details, publisher, authors);
  }
}
