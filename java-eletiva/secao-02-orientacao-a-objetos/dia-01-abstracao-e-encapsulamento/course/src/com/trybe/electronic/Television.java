package com.trybe.electronic;

public class Television {

  private final String brand;
  private final String model;
  private final int size;

  private String systemVersion = "1.0.0";

  public String getSystemVersion() {
    return systemVersion;
  }

  public void setSystemVersion(String systemVersion) {
    this.systemVersion = systemVersion;
  }

  private boolean isOn = false;

  private static double INCH_TO_CM = 2.54;

  private int volume = 10;

  public String getBrand() {
    return brand;
  }

  public String getModel() {
    return model;
  }

  public int getSize() {
    return size;
  }

  public boolean isOn() {
    return isOn;
  }

  public int getVolume() {
    return volume;
  }

  public Television(String brand, String model, int size) {
    this.brand = brand;
    this.model = model;
    this.size = size;
  }

  public void changeOn() {
    System.out.println(this.isOn ? "Desligando televisão..." : "Ligando televisão...");
    this.isOn = !this.isOn;
  }

  private void verifyOn() {
    if (!this.isOn) {
      throw new IllegalStateException("Televisão desligada.");
    }
  }

  public String info() {
    verifyOn();
    return "Marca: %s, Modelo: %s, Tamanho: %d, System Version: %s".formatted(
        getBrand(), getModel(), getSize(), getSystemVersion()
    );
  }

  /**
   * Change volume.
   *
   * @param multiplier passe +1 para aumentar o volume e -1 para diminuir.
   */
  public void changeVolume(int multiplier) {
    verifyOn();
    if (multiplier != 1 && multiplier != -1) {
      throw new IllegalArgumentException("Multiplier must be 1 or -1");
    }
    int MAX_VOLUME = 50;
    if (volume >= 0 && volume <= MAX_VOLUME) {
      volume += multiplier;
    }
  }

  public static double sizeInCm(double inches) {
    return inches * INCH_TO_CM;
  }
}
