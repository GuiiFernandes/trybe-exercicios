package com.trybe.electronic;

public class Television {

  String brand;
  String model;
  int size;
  boolean isOn = false;

  public Television(String brand, String model, int size) {
    this.brand = brand;
    this.model = model;
    this.size = size;
  }

  public static void main(String[] args) {
    System.out.println("Iniciando sistema...");

    Television television = new Television("Phillips", "LCD", 32);

    television.turnOn();
    System.out.println(television.info());
    television.turnOff();
    System.out.println(television.info());
    System.out.println("Finalizando sistema...");
  }

  public void turnOn() {
    System.out.println("Ligando televisão...");
    this.isOn = true;
  }

  public void turnOff() {
    System.out.println("Desligando televisão...");
    this.isOn = false;
  }

  public String info() {
    if (!this.isOn) {
      return "Televisão desligada.";
    }
    return "Marca: %s, Modelo: %s, Tamanho: %d, Ligada: %b".formatted(
        brand, model, size, isOn
    );
  }
}
