package com.betrybe.podcast.model;

/**
 * The type Podcast.
 */
public class Podcast {

  private long id;
  private String name;
  private String url;

  private String secretToken;

  /**
   * Instantiates a new Podcast.
   *
   * @param id          the id
   * @param name        the name
   * @param url         the url
   * @param secretToken the secret token
   */
  public Podcast(long id, String name, String url, String secretToken) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.secretToken = secretToken;
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }

  public String getSecretToken() {
    return secretToken;
  }

  public void setSecretToken(String secretToken) {
    this.secretToken = secretToken;
  }
}
