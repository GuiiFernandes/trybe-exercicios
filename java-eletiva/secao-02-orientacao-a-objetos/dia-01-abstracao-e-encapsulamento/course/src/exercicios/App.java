package exercicios;

public class App {

  public static void main(String[] args) {
    Carro carro = new Carro("Fiat", "Uno", 2020);
    System.out.println(carro.exibirInformacoes());
    System.out.printf("%s %s %d%n", carro.getMarca(), carro.getModelo(), carro.getAno());
    System.out.println(Carro.getContador());
    Carro carro2 = new Carro("BMW", "320i", 2018);
    System.out.println(carro2.exibirInformacoes());
    System.out.printf("%s %s %d%n", carro2.getMarca(), carro2.getModelo(), carro2.getAno());
    System.out.println(Carro.getContador());
  }
}
