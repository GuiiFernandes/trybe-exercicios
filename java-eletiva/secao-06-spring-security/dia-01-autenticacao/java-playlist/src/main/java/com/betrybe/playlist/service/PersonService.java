package com.betrybe.playlist.service;

import com.betrybe.playlist.entity.Person;
import com.betrybe.playlist.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

/**
 * The type Person service.
 */
@Service
public class PersonService implements UserDetailsService {

  private final PersonRepository personRepository;

  /**
   * Instantiates a new Person service.
   *
   * @param personRepository the person repository
   */
  @Autowired
  public PersonService(PersonRepository personRepository) {
    this.personRepository = personRepository;
  }

  /**
   * Insert person.
   *
   * @param person the person
   * @return the person
   */
  public Person insert(Person person) {
    Person newPerson = new Person(null, person.getUsername(), person.getPassword(),
        person.getRole());
    String hashedPassword = new BCryptPasswordEncoder().encode(newPerson.getPassword());
    newPerson.setPassword(hashedPassword);
    return personRepository.save(newPerson);
  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    return personRepository.findByUsername(username)
        .orElseThrow(() -> new UsernameNotFoundException(username));
  }

}
