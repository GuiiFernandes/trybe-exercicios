package com.betrybe.podcastmanager;


import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

import com.betrybe.podcastmanager.entity.Podcast;
import com.betrybe.podcastmanager.repository.PodcastRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.testcontainers.containers.MySQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;
import org.springframework.http.MediaType;

@SpringBootTest
@AutoConfigureMockMvc
@Testcontainers
public class PodcastIntegrationTest {

  @Autowired
  PodcastRepository podcastRepository;
  @Autowired
  MockMvc mockMvc;

  @Container
  public static MySQLContainer MYSQL_CONTAINER = new MySQLContainer("mysql:8.0.24")
      .withDatabaseName("podcastsdb");

  @DynamicPropertySource
  public static void overrideProperties(DynamicPropertyRegistry registry) {
    registry.add("spring.datasource.url", MYSQL_CONTAINER::getJdbcUrl);
    registry.add("spring.datasource.username", MYSQL_CONTAINER::getUsername);
    registry.add("spring.datasource.password", MYSQL_CONTAINER::getPassword);
  }

  @Test
  public void testPodcastFindById() throws Exception {
    Podcast podcast = new Podcast();
    podcast.setName("Podcast 1");
    podcast.setUrl("https://podcast1.com");

    Podcast savedPodcast = podcastRepository.save(podcast);

    mockMvc.perform(get("/podcasts/%s".formatted(savedPodcast.getId()))
            .accept(MediaType.APPLICATION_JSON))
        .andExpect(jsonPath("$.name").value("Podcast 1"))
        .andExpect(jsonPath("$.url").value("https://podcast1.com"));
  }
}
