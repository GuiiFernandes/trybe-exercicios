import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.example.Calculadora;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

@DisplayName("Testes da classe Calculadora")
public class CalculadoraTest {

  @Test
  @DisplayName("Testa o método somar")
  public void testSomar() {
    Calculadora calc = new Calculadora();
    assertEquals(19, calc.somar(10, 9));
  }

  @Test
  @DisplayName("Testa o método subtrair")
  public void testSubtrair() {
    Calculadora calc = new Calculadora();
    assertEquals(1, calc.subtrair(10, 9));
  }

  @Test
  @DisplayName("Testa o método dividir")
  public void testDividir() {
    Calculadora calc = new Calculadora();
    assertEquals(4, calc.dividir(8, 2));
  }

  @Test
  @DisplayName("Testa a exceção de divisão por zero")
  public void testDividirPorZero() {
    Calculadora calc = new Calculadora();
    assertThrows(ArithmeticException.class, () -> {
      calc.dividir(3, 0);
    });
  }
}
