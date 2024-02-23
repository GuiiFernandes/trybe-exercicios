import java.time.Duration;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

public class PontoEletronico {

  public void marcarHoraExtra(String horaSaida) {
    LocalTime horaAtual = LocalTime.now();
    LocalTime fimExpediente = LocalTime.parse("17:00:00");
    LocalTime horaSaidaConvertida = LocalTime.parse(horaSaida);

    if(horaSaidaConvertida.isAfter(fimExpediente)) {
      System.out.println("Pessoa funcionária está fazendo hora extra");
      Duration horasExtras = Duration.between(fimExpediente, horaSaidaConvertida);
      int horas = (int) horasExtras.toHours();
      int minutos = (int) horasExtras.toMinutes() % 60;
      int segundos = (int) horasExtras.getSeconds() % 60;
      LocalTime horasExtrasConvertidas = LocalTime.of(horas, minutos, segundos);
      System.out.printf("Ela fez %s horas extras%n", horasExtrasConvertidas.format(DateTimeFormatter.ofPattern("HH:mm:ss")));
    } else if (horaSaidaConvertida.equals(fimExpediente)) {
      System.out.println("Pessoa funcionária está saindo no horário");
    } else {
      System.out.println("Pessoa funcionária está dentro do expediente de trabalho");
    }
  }

}