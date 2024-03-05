package com.betrybe.webinar.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.jpa.repository.config.AuditingBeanDefinitionParser;

/**
 * The type Webinar.
 */
@Entity
@Table(name = "webinars")
@EntityListeners(AuditingBeanDefinitionParser.class)
public class Webinar {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String title;
  private String url;
  private LocalDateTime dateTime;
  @CreatedBy
  private String createdBy;
  @LastModifiedBy
  private String lastModifiedBy;

  /**
   * Instantiates a new Webinar.
   */
  public Webinar() {
  }

  /**
   * Instantiates a new Webinar.
   *
   * @param id       the id
   * @param title    the title
   * @param url      the url
   * @param dateTime the date time
   */
  public Webinar(Long id, String title, String url, LocalDateTime dateTime) {
    this.id = id;
    this.title = title;
    this.url = url;
    this.dateTime = dateTime;
  }

  /**
   * Gets id.
   *
   * @return the id
   */
  public Long getId() {
    return id;
  }

  /**
   * Sets id.
   *
   * @param id the id
   */
  public void setId(Long id) {
    this.id = id;
  }

  /**
   * Gets title.
   *
   * @return the title
   */
  public String getTitle() {
    return title;
  }

  /**
   * Sets title.
   *
   * @param title the title
   */
  public void setTitle(String title) {
    this.title = title;
  }

  /**
   * Gets url.
   *
   * @return the url
   */
  public String getUrl() {
    return url;
  }

  /**
   * Sets url.
   *
   * @param url the url
   */
  public void setUrl(String url) {
    this.url = url;
  }

  /**
   * Gets date time.
   *
   * @return the date time
   */
  public LocalDateTime getDateTime() {
    return dateTime;
  }

  /**
   * Sets date time.
   *
   * @param dateTime the date time
   */
  public void setDateTime(LocalDateTime dateTime) {
    this.dateTime = dateTime;
  }

  public String getCreatedBy() {
    return createdBy;
  }

  public void setCreatedBy(String createdBy) {
    this.createdBy = createdBy;
  }

  public String getLastModifiedBy() {
    return lastModifiedBy;
  }

  public void setLastModifiedBy(String lastModifiedBy) {
    this.lastModifiedBy = lastModifiedBy;
  }
}
