package com.betrybe.trybetrack.models.repositories;

import com.betrybe.trybetrack.models.entities.BusLine;
import com.betrybe.trybetrack.models.entities.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.history.RevisionRepository;
import org.springframework.stereotype.Repository;

/**
 * The interface Schedule repository.
 */
@Repository
public interface ScheduleRepository extends JpaRepository<Schedule, Long>,
    RevisionRepository<Schedule, Long, Long> {

}
