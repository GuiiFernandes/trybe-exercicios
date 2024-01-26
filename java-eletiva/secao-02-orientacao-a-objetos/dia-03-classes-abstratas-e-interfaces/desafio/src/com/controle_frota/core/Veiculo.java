package com.controle_frota.core;

import java.util.ArrayList;

public abstract class Veiculo {
  private final String placa;
  private final int anoFabricacao;
  private String combustivel;

  protected ArrayList<String> abastecimentos;

  public Veiculo(String placa, int anoFabricacao) {
    this.placa = placa;
    this.anoFabricacao = anoFabricacao;
    this.abastecimentos = new ArrayList<>(); // Inicializo a lista para não dar erro de null pointer
  }

  public String getPlaca() {
    return placa;
  }

  public int getAnoFabricacao() {
    return anoFabricacao;
  }

  public String getCombustivel() {
    return combustivel;
  }

  public void setCombustivel(String combustivel) {
    this.combustivel = combustivel;
  }

  public void listaAbastecimentos() {
    System.out.println("+-- Abastecimentos do veículo " + this.placa + " --+");
    for (String abastecimento : this.abastecimentos) {
      System.out.println("|" + abastecimento + "\t|");
    }
    System.out.println("+---------------- FIM ----------------+\n");
  }

  public abstract void abastecer(String local, String motorista, double valor, double litros);
}
