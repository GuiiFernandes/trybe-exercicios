package com.betrybe.alexandria.controllers;

import com.betrybe.alexandria.controllers.dto.BookDto;
import com.betrybe.alexandria.controllers.dto.PublisherDto;
import com.betrybe.alexandria.controllers.dto.ResponseDto;
import com.betrybe.alexandria.models.entities.Book;
import com.betrybe.alexandria.models.entities.Publisher;
import com.betrybe.alexandria.services.PublisherService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/publishers")
public class PublisherController {

  private final PublisherService publisherService;

  @Autowired
  public PublisherController(PublisherService publisherService) {
    this.publisherService = publisherService;
  }

  /**
   * Create response entity.
   *
   * @param publisherDto the book dto
   * @return the response entity
   */
  @PostMapping()
  public ResponseEntity<ResponseDto<Publisher>> create(@RequestBody PublisherDto publisherDto) {
    Publisher publisher = publisherDto.toPublisher();
    Publisher createdPublisher = publisherService.insert(publisherDto.toPublisher());
    return ResponseEntity.status(HttpStatus.CREATED).body(new ResponseDto<Publisher>(
        "Publisher created successfully",
        createdPublisher
    ));
  }

  /**
   * Update response entity.
   *
   * @param id           the id
   * @param publisherDto the book dto
   * @return the response entity
   */
  @PutMapping("/{id}")
  public ResponseEntity<ResponseDto<Publisher>> update(
      @PathVariable Long id,
      @RequestBody PublisherDto publisherDto
  ) {
    Optional<Publisher> optionalPublisher = publisherService.update(id, publisherDto.toPublisher());
    return optionalPublisher.map(
        publisher -> ResponseEntity.status(HttpStatus.OK).body(new ResponseDto<Publisher>(
            "Publisher updated successfully",
            publisher
        ))).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseDto<>(
        String.format("Publisher with id %d not found", id),
        null
    )));
  }

  /**
   * Remove response entity.
   *
   * @param id the id
   * @return the response entity
   */
  @DeleteMapping("/{id}")
  public ResponseEntity<ResponseDto<Publisher>> remove(@PathVariable Long id) {
    Optional<Publisher> optionalPublisher = publisherService.remove(id);
    return optionalPublisher.map(publisher -> ResponseEntity.ok(new ResponseDto<>(
        "Publisher removed successfully",
        publisher
    ))).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseDto<>(
        String.format("Publisher with id %d not found", id),
        null
    )));
  }

  /**
   * Gets by id.
   *
   * @param id the id
   * @return the by id
   */
  @GetMapping("/{id}")
  public ResponseEntity<ResponseDto<Publisher>> getById(@PathVariable Long id) {
    Optional<Publisher> optionalPublisher = publisherService.getById(id);
    return optionalPublisher.map(publisher -> ResponseEntity.ok(new ResponseDto<>(
        "Publisher found successfully",
        publisher
    ))).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseDto<>(
        String.format("Publisher with id %d not found", id),
        null
    )));
  }

  /**
   * Gets all.
   *
   * @return the all
   */
  @GetMapping()
  public ResponseEntity<ResponseDto<List<Publisher>>> getAll() {
    return ResponseEntity.ok(new ResponseDto<List<Publisher>>(
        "Publishers found successfully",
        publisherService.getAll().stream()
            .map(publisher -> new PublisherDto(
                publisher.getId(),
                publisher.getName(),
                publisher.getAddress()
            ).toPublisher()).toList()
    ));
  }
}
