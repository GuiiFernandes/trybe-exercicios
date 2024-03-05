package com.betrybe.webinar.controller;

import com.betrybe.webinar.controller.dto.PersonCreationDto;
import com.betrybe.webinar.controller.dto.PersonDto;
import com.betrybe.webinar.entity.Person;
import com.betrybe.webinar.service.PersonService;
import com.betrybe.webinar.service.exception.PersonNotFoundException;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 * The type Person controller.
 */
@RestController
@RequestMapping("/persons")
public class PersonController {

  private final PersonService personService;

  /**
   * Instantiates a new Person controller.
   *
   * @param personService the person service
   */
  @Autowired
  public PersonController(PersonService personService) {
    this.personService = personService;
  }

  /**
   * Gets all persons.
   *
   * @return the all persons
   */
  @GetMapping
  public List<PersonDto> getAllPersons() {
    return personService.getAll().stream()
        .map(PersonDto::fromEntity)
        .collect(Collectors.toList());
  }

  /**
   * Gets person by id.
   *
   * @param id the id
   * @return the person by id
   * @throws PersonNotFoundException the person not found exception
   */
  @GetMapping("/{id}")
  public PersonDto getPersonById(@PathVariable Long id) throws PersonNotFoundException {
    return PersonDto.fromEntity(
        personService.getById(id)
    );
  }

  /**
   * Create person person dto.
   *
   * @param personDto the person dto
   * @return the person dto
   */
  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public PersonDto createPerson(@RequestBody PersonCreationDto personDto) {
    Person savedPerson = personService.create(
        personDto.toEntity()
    );

    return PersonDto.fromEntity(savedPerson);
  }

  /**
   * Delete person person dto.
   *
   * @param id the id
   * @return the person dto
   * @throws PersonNotFoundException the person not found exception
   */
  @DeleteMapping("/{id}")
  public PersonDto deletePerson(@PathVariable Long id) throws PersonNotFoundException {
    return PersonDto.fromEntity(
        personService.deleteById(id)
    );
  }
}
