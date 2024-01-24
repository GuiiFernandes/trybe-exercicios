package com.trybe.tech;

public abstract class ComputerDevice {

  private final String brand;
  private final double storageCapacity;

  public ComputerDevice(String brand, double storageCapacity) {
    this.brand = brand;
    this.storageCapacity = storageCapacity;
  }

  public String getBrand() {
    return brand;
  }

  public double getStorageCapacity() {
    return storageCapacity;
  }

  // Método abstrato, sem implementação
  public abstract void bootUp();

  public final void shutDown() {
    System.out.println("Desligando o dispositivo...");
  }
}