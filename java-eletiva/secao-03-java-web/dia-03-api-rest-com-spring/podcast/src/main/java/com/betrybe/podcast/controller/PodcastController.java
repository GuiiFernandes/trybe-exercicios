package com.betrybe.podcast.controller;

import com.betrybe.podcast.model.Podcast;
import com.betrybe.podcast.model.PodcastReq;
import com.betrybe.podcast.model.PodcastRes;
import com.betrybe.podcast.service.PodcastService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * The type Podcast controller.
 */
@RestController
@RequestMapping("/")
public class PodcastController {

  private final PodcastService service;

  @Autowired
  public PodcastController(PodcastService service) {
    this.service = service;
  }

  @GetMapping("/")
  public String getRoot() {
    return "Yay podcasts!";
  }

  /**
   * Gets podcast.
   *
   * @param id the id
   * @return the podcast
   */
  @GetMapping("/podcasts/{id}")
  public ResponseEntity<PodcastRes> getPodcast(@PathVariable Long id) {
    Podcast result = service.findPodcastById(id);
    if (result == null) {
      return ResponseEntity.notFound().build();
    }
    PodcastRes podcastRes = new PodcastRes(result.getId(), result.getName(), result.getUrl());
    return ResponseEntity.ok(podcastRes);
  }

  @GetMapping("/search") // http://localhost:8080/search?title=Podcast%20Sobre%20Java
  public String searchByNamePodcast(@RequestParam String title) {
    return "Você buscou por Podcasts com o título: %s".formatted(title);
  }

  @PostMapping("/podcasts")
  public ResponseEntity<PodcastRes> createPodcast(@RequestBody PodcastReq newPodcast) {
    Podcast result = service.savePodcast(newPodcast);
    PodcastRes podcastRes = new PodcastRes(result.getId(), result.getName(), result.getUrl());
    return ResponseEntity.status(HttpStatus.CREATED).body(podcastRes);
  }
}
