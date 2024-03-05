package com.betrybe.webinar.controller.dto;

import com.betrybe.webinar.entity.Webinar;
import java.time.LocalDateTime;

/**
 * The type Webinar dto.
 */
public record WebinarDto(
    Long id,
    String title,
    String url,
    LocalDateTime dateTime,
    String createdBy,
    String lastModifiedBy) {

  /**
   * From entity webinar dto.
   *
   * @param webinar the webinar
   * @return the webinar dto
   */
  public static WebinarDto fromEntity(Webinar webinar) {
    return new WebinarDto(
        webinar.getId(),
        webinar.getTitle(),
        webinar.getUrl(),
        webinar.getDateTime(),
        webinar.getCreatedBy(),
        webinar.getLastModifiedBy()
    );
  }
}
