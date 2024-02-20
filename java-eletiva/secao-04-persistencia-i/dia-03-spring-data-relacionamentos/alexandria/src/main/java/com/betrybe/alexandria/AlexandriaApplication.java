package com.betrybe.alexandria;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * The type Alexandria application.
 */
@SpringBootApplication
@EntityScan("com.betrybe.alexandria.models.entities")
@EnableJpaRepositories("com.betrybe.alexandria.models.repositories")
public class AlexandriaApplication {

  public static void main(String[] args) {
    SpringApplication.run(AlexandriaApplication.class, args);
  }

}
