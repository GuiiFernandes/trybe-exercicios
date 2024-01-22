package exercicios;

public class Carro {

  private String marca;

  private String modelo;

  private int ano;

  private static int contador = 0;

  public String getMarca() {
    return marca;
  }

  public void setMarca(String marca) {
    this.marca = marca;
  }

  public String getModelo() {
    return modelo;
  }

  public void setModelo(String modelo) {
    this.modelo = modelo;
  }

  public int getAno() {
    return ano;
  }

  public static int getContador() {
    return contador;
  }

  public void setAno(int ano) {
    this.ano = ano;
  }

  public Carro(String marca, String modelo, int ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    contador++;
  }

  public String exibirInformacoes() {
    return String.format("Marca: %s, Modelo: %s, Ano: %d", this.marca, this.modelo, this.ano);
  }
}
