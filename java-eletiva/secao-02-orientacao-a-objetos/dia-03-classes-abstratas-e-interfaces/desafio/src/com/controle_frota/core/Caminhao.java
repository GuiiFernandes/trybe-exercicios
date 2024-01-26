package com.controle_frota.core;

public class Caminhao extends Veiculo implements ITransportador {

  public Caminhao(String placa, int anoFabricacao) {
    super(placa, anoFabricacao);
    this.setCombustivel("Diesel");
  }
  @Override
  public void abastecer(String local, String motorista, double valor, double litros) {
    this.abastecimentos.add(
        String.format("Local: %s | Motorista: %s | Valor: %.2f | Litros: %.2f", local, motorista, valor, litros)
    );
  }

  @Override
  public String transportar(String origem, String destino) {
    return String.format(
        "Veículo de placa: %s, vai transportar carga" + " de %s para %s", this.getPlaca(), origem, destino
    );
  }
}
