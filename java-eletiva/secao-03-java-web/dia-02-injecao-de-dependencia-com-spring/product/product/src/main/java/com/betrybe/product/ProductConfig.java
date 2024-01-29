package com.betrybe.product;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ProductConfig {

  @Bean
  public Database primaryDatabase() {
    return new Database("localhost");
  }
}
