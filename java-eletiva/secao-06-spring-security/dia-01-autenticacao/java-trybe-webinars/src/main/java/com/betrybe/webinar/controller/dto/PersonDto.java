package com.betrybe.webinar.controller.dto;

import com.betrybe.webinar.entity.Person;

/**
 * The type Person dto.
 */
public record PersonDto(
    Long id,
    String fullname,
    String email,
    String username,
    String password) {

  /**
   * From entity person dto.
   *
   * @param person the person
   * @return the person dto
   */
  public static PersonDto fromEntity(Person person) {
    return new PersonDto(
        person.getId(),
        person.getFullname(),
        person.getEmail(),
        // Os atributos username e password são sensíveis e não devem ser expostos.
        // Colocamos para fim didático.
        person.getUsername(),
        person.getPassword()
    );
  }
}
