package com.betrybe.webinar.controller.dto;

import com.betrybe.webinar.entity.Person;

/**
 * The type Person creation dto.
 */
public record PersonCreationDto(
    String fullname,
    String email,
    String username,
    String password,
    String role,
    int age) {

  public Person toEntity() {
    return new Person(null, fullname, email, username, password, role, age);
  }
}
