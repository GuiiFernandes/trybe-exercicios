package com.controle_frota.core;

public class Moto extends Veiculo {
  public Moto(String placa, int anoFabricacao) {
    super(placa, anoFabricacao);
    this.setCombustivel("Gasolina");
  }

  @Override
  public void abastecer(String local, String motorista, double valor, double litros) {
    this.abastecimentos.add(
        String.format("Local: %s | Motorista: %s | Valor: %.2f | Litros: %.2f", local, motorista, valor, litros)
    );
  }
}
