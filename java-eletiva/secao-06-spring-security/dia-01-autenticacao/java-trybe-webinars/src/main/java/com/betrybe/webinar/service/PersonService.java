package com.betrybe.webinar.service;

import com.betrybe.webinar.entity.Person;
import com.betrybe.webinar.repository.PersonRepository;
import com.betrybe.webinar.service.exception.PersonNotFoundException;
import java.util.List;
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
// implementamos a interface UserDetailsService,
// que exige a implementação do método loadUserByUsername
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
   * Create person.
   *
   * @param person the person
   * @return the person
   */
  public Person create(Person person) {
    // Criptografa a senha antes de salvar no banco
    String hashedPassword = new BCryptPasswordEncoder()
        .encode(person.getPassword());
    person.setPassword(hashedPassword); // Substitui a senha original pela senha criptografada
    // É aconselhável criar um novo objeto com a senha criptografada e salvá-lo no banco.
    return personRepository.save(person);
  }

  /**
   * Delete by id person.
   *
   * @param id the id
   * @return the person
   * @throws PersonNotFoundException the person not found exception
   */
  public Person deleteById(Long id) throws PersonNotFoundException {
    Person person = getById(id);

    personRepository.delete(person);

    return person;
  }

  /**
   * Gets by id.
   *
   * @param id the id
   * @return the by id
   * @throws PersonNotFoundException the person not found exception
   */
  public Person getById(Long id) throws PersonNotFoundException {
    return personRepository.findById(id)
        .orElseThrow(PersonNotFoundException::new);
  }

  /**
   * Gets all.
   *
   * @return the all
   */
  public List<Person> getAll() {
    return personRepository.findAll();
  }

  // Método que busca uma pessoa pelo username
  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    return personRepository.findByUsername(username)
        .orElseThrow(() -> new UsernameNotFoundException(username));
  }
}
