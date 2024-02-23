import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class HoraRefeicao {
  public void calcularHoraRefeicao() {
    String[] contagens = {"Segunda", "Terceira", "Quarta", "Quinta", "Sexta"};
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm");
    LocalDateTime horaPrimeira = LocalDateTime.now();
    System.out.println("Data: " + horaPrimeira.toLocalDate().format(DateTimeFormatter.ofPattern("dd/MM/yyyy")));
    System.out.println("Primeira refeição foi às: " + horaPrimeira.format(formatter));
    for (int i = 0;  i < contagens.length; i++) {
        System.out.println(contagens[i] + " refeição deve ser às: " + horaPrimeira.plusHours(3 * (i + 1)).format(formatter));
    }
  }
}
