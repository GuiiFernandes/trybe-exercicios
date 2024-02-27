package com.betrybe.trybetrack.listeners;

import com.betrybe.trybetrack.models.entities.Schedule;
import com.betrybe.trybetrack.services.EmailService;
import jakarta.persistence.PostUpdate;
import javax.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

/**
 * The type Schedule listener.
 */
@Component
public class ScheduleListener {

  private final EmailService emailService;

  @Value("${TO_EMAIL}")
  private String toEmail;

  @Autowired
  public ScheduleListener(EmailService emailService) {
    this.emailService = emailService;
  }

  /**
   * Post update.
   *
   * @param schedule the schedule
   */
  @PostUpdate
  public void postUpdate(Schedule schedule) throws MessagingException {
    String message = String.format("O horário da linha %s foi alterada para %s às %s",
        schedule.getBusLine().getCode(),
        schedule.getDepartureDate().toString(),
        schedule.getDepartureTime().toString());

    emailService.sendEmail(toEmail, "Alteração de data", message);
  }
}
