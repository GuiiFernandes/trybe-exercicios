package com.betrybe.trybetrack.models.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import java.time.LocalDate;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import java.util.List;
import org.hibernate.envers.Audited;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

/**
 * The type Bus line.
 */
@Entity
@Table(name = "bus_lines")
@EntityListeners(AuditingEntityListener.class)
@Audited
public class BusLine {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String code;

  private String name;

  @OneToMany(mappedBy = "busLine", fetch = FetchType.LAZY)
  private List<Schedule> schedules;

  @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  @JoinTable(
      name = "station_bus_lines",
      joinColumns = @JoinColumn(name = "bus_line_id"),
      inverseJoinColumns = @JoinColumn(name = "station_id")
  )
  private List<Station> stations;

  @CreatedDate
  @JsonProperty("created_date")
  private LocalDate createdDate;

  @LastModifiedDate
  @JsonProperty("last_modified_date")
  private LocalDate lastModifiedDate;

  /**
   * Instantiates a new Bus line.
   */
  public BusLine() {
  }

  /**
   * Instantiates a new Bus line.
   *
   * @param id        the id
   * @param code      the code
   * @param name      the name
   * @param schedules the schedules
   * @param stations  the stations
   */
  public BusLine(Long id, String code, String name, List<Schedule> schedules,
      List<Station> stations) {
    this.id = id;
    this.code = code;
    this.name = name;
    this.schedules = schedules;
    this.stations = stations;
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
   * Gets code.
   *
   * @return the code
   */
  public String getCode() {
    return code;
  }

  /**
   * Sets code.
   *
   * @param code the code
   */
  public void setCode(String code) {
    this.code = code;
  }

  /**
   * Gets name.
   *
   * @return the name
   */
  public String getName() {
    return name;
  }

  /**
   * Sets name.
   *
   * @param name the name
   */
  public void setName(String name) {
    this.name = name;
  }

  /**
   * Gets schedules.
   *
   * @return the schedules
   */
  public List<Schedule> getSchedules() {
    return schedules;
  }

  /**
   * Gets stations.
   *
   * @return the stations
   */
  public List<Station> getStations() {
    return stations;
  }

  public LocalDate getCreatedDate() {
    return createdDate;
  }

  public void setCreatedDate(LocalDate createdDate) {
    this.createdDate = createdDate;
  }

  public LocalDate getLastModifiedDate() {
    return lastModifiedDate;
  }

  public void setLastModifiedDate(LocalDate lastModifiedDate) {
    this.lastModifiedDate = lastModifiedDate;
  }
}
