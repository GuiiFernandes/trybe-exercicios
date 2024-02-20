package com.betrybe.alexandria.controllers.dto;

import com.betrybe.alexandria.models.entities.Book;
import com.betrybe.alexandria.models.entities.BookDetail;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * The type Detail dto.
 */
public record DetailDto(
    Long id,
    String summary,
    @JsonProperty("page_count") // Transforma o nome do atributo em snake_case
    Integer pageCount,
    String year,
    String isbn,
    Book book
) {

  public BookDetail toBookDetail() {
    return new BookDetail(id, summary, pageCount, year, isbn, book);
  }
}
