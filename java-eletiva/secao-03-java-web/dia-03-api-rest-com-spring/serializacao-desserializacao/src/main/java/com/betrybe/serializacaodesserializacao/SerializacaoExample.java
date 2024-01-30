package com.betrybe.serializacaodesserializacao;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class SerializacaoExample {

  public static void main(String[] args) throws JsonProcessingException {
    Person person = new Person();
    ObjectMapper mapper = new ObjectMapper(); // classe da lib Jackson que faz a serialização/desserialização
    person.setName("Guilherme");
    person.setEmail("guifjj92@gmail.com");
    person.setAge(31); //O @JsonIgnore vai ignorar esse atributo quando eu rodar esse código.
    String json = mapper.writeValueAsString(person); // serializa o objeto person em uma string json
    // Esse método pode gerar uma excessão, então é necessário tratar (escolhi tratar na assinatura do método)
    System.out.println(json); //printa no console a string json do objeto Person
  }
}
