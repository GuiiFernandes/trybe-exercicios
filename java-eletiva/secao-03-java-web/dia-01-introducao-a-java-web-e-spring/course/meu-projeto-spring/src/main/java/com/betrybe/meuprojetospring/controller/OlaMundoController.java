package com.betrybe.meuprojetospring.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ola")
public class OlaMundoController {

  @GetMapping
  public String dizOla() {
    return "Olá, Mundo! C tá bão?";
  }
}
