package com.betrybe.podcastmanager;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;

import com.betrybe.podcastmanager.entity.Podcast;
import com.betrybe.podcastmanager.exception.PodcastNotFoundException;
import com.betrybe.podcastmanager.service.PodcastService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest
@ActiveProfiles("test")
public class PodcastServiceH2Test {

  @Autowired
  PodcastService podcastService;

  @Test
  public void testPodcastCreation() {
    Podcast podcast = new Podcast();
    podcast.setName("Podcast 1");
    podcast.setUrl("https://podcast1.com");

    Podcast savedPodcast = podcastService.createPodcast(podcast);

    assertNotNull(savedPodcast.getId());
    assertEquals(podcast.getName(), savedPodcast.getName());
    assertEquals(podcast.getUrl(), savedPodcast.getUrl());
  }

  @Test
  public void testPodcastFindById() {
    Podcast podcast = new Podcast();
    podcast.setName("Podcast 1");
    podcast.setUrl("https://podcast1.com");

    Podcast savedPodcast = podcastService.createPodcast(podcast);

    Podcast foundPodcast = podcastService.getPodcast(savedPodcast.getId());

    assertEquals(savedPodcast.getId(), foundPodcast.getId());
    assertEquals(podcast.getName(), foundPodcast.getName());
    assertEquals(podcast.getUrl(), foundPodcast.getUrl());
  }

  @Test
  public void testPodcastFindByIdNotFound() {
    assertThrows(PodcastNotFoundException.class, () -> podcastService.getPodcast(123L));
  }
}
