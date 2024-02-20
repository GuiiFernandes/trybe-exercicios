package com.betrybe.alexandria.services;

import com.betrybe.alexandria.models.entities.Publisher;
import com.betrybe.alexandria.models.repositories.PublisherRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PublisherService {

  private final PublisherRepository publisherRepository;

  @Autowired
  public PublisherService(PublisherRepository publisherRepository) {
    this.publisherRepository = publisherRepository;
  }

  public Publisher insert(Publisher publisher) {
    return publisherRepository.save(publisher);
  }

  /**
   * Update optional.
   *
   * @param id        the id
   * @param publisher the publisher
   * @return the optional
   */
  public Optional<Publisher> update(Long id, Publisher publisher) {
    Optional<Publisher> publisherOptional = publisherRepository.findById(id);
    if (publisherOptional.isPresent()) {
      Publisher publisherToUpdate = publisherOptional.get();
      publisherToUpdate.setName(publisher.getName());
      publisherToUpdate.setAddress(publisher.getAddress());
      return Optional.of(publisherRepository.save(publisherToUpdate));
    }
    return publisherOptional;
  }

  /**
   * Remove optional.
   *
   * @param id the id
   * @return the optional
   */
  public Optional<Publisher> remove(Long id) {
    Optional<Publisher> publisherOptional = publisherRepository.findById(id);
    if (publisherOptional.isPresent()) {
      publisherRepository.deleteById(id);
    }
    return publisherOptional;
  }

  /**
   * Find by id optional.
   *
   * @param id the id
   * @return the optional
   */
  public Optional<Publisher> getById(Long id) {
    return publisherRepository.findById(id);
  }

  public List<Publisher> getAll() {
    return publisherRepository.findAll();
  }
}
