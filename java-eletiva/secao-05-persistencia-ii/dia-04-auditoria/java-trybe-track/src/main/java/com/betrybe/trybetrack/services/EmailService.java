package com.betrybe.trybetrack.services;

import java.util.Properties;
import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

/**
 * The type Email service.
 */
@Service
public class EmailService {

  @Value("${EMAIL_USER}")
  private String username;

  @Value("${EMAIL_PASS}")
  private String password;

  /**
   * Send email.
   *
   * @param to      the to
   * @param subject the subject
   * @param message the message
   * @throws MessagingException the messaging exception
   */
  public void sendEmail(String to, String subject, String message) throws MessagingException {
    Properties props = new Properties();
    props.put("mail.smtp.auth", true);
    props.put("mail.smtp.starttls.enable", true);
    props.put("mail.smtp.host", "smtp.gmail.com");
    props.put("mail.smtp.port", 587);

    Session session = Session.getInstance(props,
        new Authenticator() {
          @Override
          protected PasswordAuthentication getPasswordAuthentication() {
            return new PasswordAuthentication(username, password);
          }
        });

    Message mimeMessage = new MimeMessage(session);
    mimeMessage.setFrom(new InternetAddress(username));
    mimeMessage.setRecipients(Message.RecipientType.TO, InternetAddress.parse(to));
    mimeMessage.setSubject(subject);
    mimeMessage.setText(message);

    Transport.send(mimeMessage);
    System.out.println("Email enviado com sucesso!");
  }

}
