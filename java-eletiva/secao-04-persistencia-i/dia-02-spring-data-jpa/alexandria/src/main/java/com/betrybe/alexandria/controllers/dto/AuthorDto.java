package com.betrybe.alexandria.controllers.dto;

import com.betrybe.alexandria.models.entities.Author;

/**
 * The type Author dto.
 */
public record AuthorDto(Long id, String name, String nationality) {

  public Author toAuthor() {
    return new Author(id, name, nationality);
  }
}
