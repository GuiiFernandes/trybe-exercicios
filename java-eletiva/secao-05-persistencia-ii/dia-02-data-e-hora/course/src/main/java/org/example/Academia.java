package org.example;

import java.time.DayOfWeek;
import java.time.LocalDateTime;
import java.time.Month;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.List;

/**
 * The type Academia.
 */
public class Academia {

  /**
   * Verificar dia academia long.
   */
  public void verificarDiaAcademiaLong() {
    LocalDateTime hoje = LocalDateTime.now();
    if (hoje.getDayOfWeek() == DayOfWeek.MONDAY) {
      System.out.println("Hoje é dia de academia!");
    } else if (hoje.getDayOfWeek() == DayOfWeek.WEDNESDAY) {
      System.out.println("Hoje é dia de academia!");
    } else if (hoje.getDayOfWeek() == DayOfWeek.FRIDAY) {
      System.out.println("Hoje é dia de academia!");
    } else {
      System.out.println("Hoje não é dia de academia!");
    }
  }

  /**
   * Verificar dia academia short.
   */
  public void verificarDiaAcademiaShort() {
    List<DayOfWeek> diasDeAcademia = Arrays
        .asList(DayOfWeek.MONDAY, DayOfWeek.WEDNESDAY, DayOfWeek.FRIDAY);
    LocalDateTime hoje = LocalDateTime.now();
    if (diasDeAcademia.contains(hoje.getDayOfWeek())) {
      System.out.println("Hoje é dia de academia!");
    } else {
      System.out.println("Hoje não é dia de academia!");
    }
  }

  /**
   * The entry point of application.
   *
   * @param args the input arguments
   */
  public static void main(String[] args) {
    Academia academia = new Academia();
    academia.verificarDiaAcademiaLong();
    academia.verificarDiaAcademiaShort();

    LocalDateTime dateTime = LocalDateTime.of(2023, 7, 11, 10, 30, 0); // 2023-07-11T10:30:00
    int year = dateTime.getYear();
    Month month = dateTime.getMonth();
    int dayOfMonth = dateTime.getDayOfMonth();
    int hour = dateTime.getHour();
    int minute = dateTime.getMinute();
    int second = dateTime.getSecond();
    System.out.println("Year: " + year);
    System.out.println("Month: " + month);
    System.out.println("Day of Month: " + dayOfMonth);
    System.out.println("Hour: " + hour);
    System.out.println("Minute: " + minute);
    System.out.println("Second: " + second);
    // plusYears(), plusMonths(), plusDays(), etc.: Adiciona um determinado número de anos, meses, dias, horas, minutos, segundos ou frações de segundo a um objeto LocalDateTime.
    // Adiciona 1 ano e retorna um novo objeto LocalDateTime
    LocalDateTime newDateTime = dateTime.plusYears(1); // 2024-07-11T10:30:00
    System.out.println("New Date: " + newDateTime);
    //minusYears(), minusMonths(), minusDays(), etc.: Subtrai um determinado número de anos, meses, dias, horas, minutos, segundos ou frações de segundo de um objeto LocalDateTime.
    newDateTime = dateTime.minusMonths(2); // 2023-05-11T10:30:00
    System.out.println("New Date: " + newDateTime);
    // withYear(), withMonth(), withDayOfMonth(), etc.: Define o valor específico de ano, mês, dia, hora, minuto, segundo ou fração de segundo de um objeto LocalDateTime.
    newDateTime = dateTime.withDayOfMonth(19); // 2024-07-11T10:30:00
    System.out.println("New Date: " + newDateTime);
    // isBefore(), isAfter(), isEqual(): Compara dois objetos LocalDateTime para verificar se um é anterior, posterior ou igual ao outro.
    System.out.println(dateTime.isBefore(newDateTime)); // true
    System.out.println(dateTime.isAfter(newDateTime)); // false
    System.out.println(dateTime.isEqual(newDateTime)); // false
    // format(): Formata um objeto LocalDateTime em uma representação de String usando um DateTimeFormatter.
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
    String formattedDateTime = dateTime.format(formatter); // 11/07/2023 10:30:00
    System.out.println("Formatted Date: " + formattedDateTime);
  }
}