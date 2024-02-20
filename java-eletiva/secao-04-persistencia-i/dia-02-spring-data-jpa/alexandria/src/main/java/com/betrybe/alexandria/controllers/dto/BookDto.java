package com.betrybe.alexandria.controllers.dto;

import com.betrybe.alexandria.models.entities.Book;

/**
 * The type Book dto.
 */
public record BookDto(Long id, String title, String genre) {
  public Book toBook() {
    return new Book(id, title, genre);
  }
}
