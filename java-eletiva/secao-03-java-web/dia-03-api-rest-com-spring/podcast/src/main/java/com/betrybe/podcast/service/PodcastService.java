package com.betrybe.podcast.service;

import com.betrybe.podcast.model.Podcast;
import com.betrybe.podcast.model.PodcastReq;
import java.util.Random;
import org.springframework.stereotype.Service;

/**
 * The type Podcast service.
 */
@Service
public class PodcastService {

  /**
   * Find podcast by id podcast.
   *
   * @param id the id
   * @return the podcast
   */
  public Podcast findPodcastById(Long id) {
    if (id > 1000) {
      return null;
    }
    return new Podcast(id,
        "Podcast Sobre Java",
        "https://open.spotify.com/show/1q2b3c4d5e6f7g8h9i0j",
        "super-secret-token-123");
  }

  /**
   * Save podcast podcast.
   *
   * @param newPodcast the new podcast
   * @return the podcast
   */
  public Podcast savePodcast(PodcastReq newPodcast) {
    return new Podcast(new Random().nextLong(0, 1000),
        newPodcast.name(),
        newPodcast.url(),
        "super-secret-token-123");
  }
}
