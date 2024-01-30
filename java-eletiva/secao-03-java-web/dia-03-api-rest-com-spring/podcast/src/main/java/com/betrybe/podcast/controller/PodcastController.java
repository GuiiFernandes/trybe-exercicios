package com.betrybe.podcast.controller;

import com.betrybe.podcast.model.Podcast;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class PodcastController {

  @GetMapping("/")
  public String getRoot() {
    return "Yay podcasts!";
  }

  @GetMapping("/podcasts/{id}")
  public ResponseEntity<Podcast> getPodcast(@PathVariable Long id) {
    if (id > 1000) {
      return ResponseEntity.notFound().build();
    }
    Podcast podcast = new Podcast(id, "Podcast Sobre Java",
        "https://open.spotify.com/show/1q2b3c4d5e6f7g8h9i0j");
    return ResponseEntity.ok(podcast);
  }

  @GetMapping("/search") // http://localhost:8080/search?title=Podcast%20Sobre%20Java
  public String searchByNamePodcast(@RequestParam String title) {
    return "Você buscou por Podcasts com o título: %s".formatted(title);
  }
}