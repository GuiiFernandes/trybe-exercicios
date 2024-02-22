package com.betrybe.serializacaodesserializacao;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * The type Person.
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class Person {

  private String name;
  private String email;
  @JsonIgnore //Vai ignorar na criação do objeto atributos que não queira que apareça
  private int age;

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public int getAge() {
    return age;
  }

  public void setAge(int age) {
    this.age = age;
  }
}
