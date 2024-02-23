import java.time.Duration;
import java.time.LocalDateTime;

public class IdadeEmDias {
  public long calcularIdadeEmDias(String nascimneto) {
    LocalDateTime hoje = LocalDateTime.now();
    LocalDateTime dataNascimento = LocalDateTime.parse(nascimneto);
    Duration duracao = Duration.between(dataNascimento, hoje);
    return duracao.toDays();
  }
}
