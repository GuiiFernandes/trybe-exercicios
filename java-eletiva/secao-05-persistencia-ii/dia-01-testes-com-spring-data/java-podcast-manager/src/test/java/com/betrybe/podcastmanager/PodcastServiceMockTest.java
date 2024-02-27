package com.betrybe.podcastmanager;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.any;
import static org.junit.jupiter.api.Assertions.assertEquals;

import com.betrybe.podcastmanager.entity.Podcast;
import com.betrybe.podcastmanager.exception.PodcastNotFoundException;
import com.betrybe.podcastmanager.repository.PodcastRepository;
import com.betrybe.podcastmanager.service.PodcastService;
import java.util.Optional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest
@ActiveProfiles("test")
public class PodcastServiceMockTest {

  @Autowired
  PodcastService podcastService;
  @MockBean
  PodcastRepository podcastRepository;

  @Test
  public void testPodcastCreation() {
    Podcast podcast = new Podcast();
    podcast.setName("Podcast 1");
    podcast.setUrl("https://podcast1.com");

    Podcast podcastToReturn = new Podcast();
    podcastToReturn.setId(123L);
    podcastToReturn.setName(podcast.getName());
    podcastToReturn.setUrl(podcast.getUrl());

    when(podcastRepository.save(podcast)).thenReturn(podcastToReturn);

    Podcast savedPodcast = podcastService.createPodcast(podcast);

    verify(podcastRepository).save(any());
    assertEquals(123L, savedPodcast.getId());
    assertEquals(podcast.getName(), savedPodcast.getName());
    assertEquals(podcast.getUrl(), savedPodcast.getUrl());
  }

  @Test
  public void testPodcastFindById() {
    Podcast podcast = new Podcast();
    podcast.setId(123L);
    podcast.setName("Podcast 1");
    podcast.setUrl("https://podcast1.com");

    when(podcastRepository.findById(123L)).thenReturn(Optional.of(podcast));

    Podcast foundPodcast = podcastService.getPodcast(123L);

    verify(podcastRepository).findById(eq(123L));
    assertEquals(123L, foundPodcast.getId());
    assertEquals(podcast.getName(), foundPodcast.getName());
    assertEquals(podcast.getUrl(), foundPodcast.getUrl());
  }

  @Test
  public void testPodcastNotFound() {
    when(podcastRepository.findById(any())).thenReturn(Optional.empty());

    assertThrows(PodcastNotFoundException.class, () -> podcastService.getPodcast(123L));
    verify(podcastRepository).findById(eq(123L));
  }
}