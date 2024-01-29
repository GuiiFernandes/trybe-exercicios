package com.betrybe.product;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class MyComponent {

  public MyComponent(@Value("${my.component.url}") String url) {
  }
}
