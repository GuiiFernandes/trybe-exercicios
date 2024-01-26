package com.betrybe.Java.Web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/javaweb")
public class JavaWebCotroller {

  @GetMapping
  public String get() {
    return "Estou aprendendo a criar aplicações Java para a Web! Java é top!";
  }
}
