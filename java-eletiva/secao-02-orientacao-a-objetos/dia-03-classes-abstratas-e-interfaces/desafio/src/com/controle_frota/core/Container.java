package com.controle_frota.core;

public class Container implements ITransportador {
  private String modelo;
  private double capacidade;
  private static int NextCodigo = 1;

  private final int codigo = NextCodigo;

  public Container(String modelo, double capacidade) {
    this.modelo = modelo;
    this.capacidade = capacidade;
    NextCodigo++;
  }

  public String getModelo() {
    return modelo;
  }

  public void setModelo(String modelo) {
    this.modelo = modelo;
  }

  public double getCapacidade() {
    return capacidade;
  }

  public void setCapacidade(double capacidade) {
    this.capacidade = capacidade;
  }

  @Override
  public String transportar(String origem, String destino) {
    return String.format(
        "Container de código: %s, vai transportar carga" + " de %s para %s", this.codigo, origem, destino
    );
  }
}
