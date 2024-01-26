package com.betrybe.testdevtools;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class OlaDevToolsController {

  @RequestMapping
  public String olaDevTools() {
    return "Olá Dev Tools! C tá bão ou não?";
  }
}
