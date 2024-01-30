package com.betrybe.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ProductRepository {

  private Database database;

  @Autowired
  public ProductRepository(Database database) {
    this.database = database;
  }

  public String getMessage() {
    return "Mensagem: produto retornado pelo hostname: " + database.hostname();
  }
}