package com.betrybe.serializacaodesserializacao;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class DesserializacaoExample {

  public static void main(String[] args) throws JsonProcessingException {
    String json = "{\"name\": \"Pli\", \"email\": \"plisciliane@gmail.com\", \"age\": 30, \"city\": \"Lavras\"}"; //Exemplo de json em string.
    //city não existe na minha classe, então pra não chegar erro tenho que chamar a annotation @JsonIgnoreProperties(ignoreUnknown = true) na classe Person
    //assim os campos inexistentes são ignorados.
    ObjectMapper mapper = new ObjectMapper(); // classe da lib Jackson que faz a serialização/desserialização
    Person person = mapper.readValue(json,
        Person.class); // desserializa a string json em um objeto Person

    System.out.println(person.getName());
    System.out.println(person.getEmail());
    System.out.println(person.getAge());
  }
}
