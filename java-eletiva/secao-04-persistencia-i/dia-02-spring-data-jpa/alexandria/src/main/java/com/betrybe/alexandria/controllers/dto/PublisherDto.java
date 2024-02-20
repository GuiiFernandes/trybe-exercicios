package com.betrybe.alexandria.controllers.dto;

import com.betrybe.alexandria.models.entities.Publisher;

/**
 * The type Publisher dto.
 */
public record PublisherDto(Long id, String name, String address) {

  public Publisher toPublisher() {
    return new Publisher(id, name, address);
  }
}
