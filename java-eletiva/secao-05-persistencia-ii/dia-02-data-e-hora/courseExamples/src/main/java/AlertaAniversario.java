import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class AlertaAniversario {
  public void checarAniversario(String date) {
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
    LocalDate hoje = LocalDate.now();
    LocalDate aniversario = LocalDate.parse(date, formatter);
    if (hoje.getMonth() == aniversario.getMonth()) {
      if (hoje.getDayOfMonth() == aniversario.getDayOfMonth()) {
        System.out.println("Feliz aniversário!");
      } else if (hoje.getDayOfMonth() < aniversario.getDayOfMonth()) {
        System.out.println("Seu aniversário está próximo!");
      }else {
        System.out.println("Seu aniversário já passou!");
      }
    } else {
      System.out.println("Hoje não é seu aniversário!");
    }
  }
}
