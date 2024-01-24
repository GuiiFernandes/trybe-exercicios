package com.trybe.tech;

public class App {

  public static void main(String[] args) {
    Laptop laptop = new Laptop("Samsung", 100, 14);
    Desktop desktop = new Desktop("Dell", 500);
    PowerBank powerBank = new PowerBank();
    ComputerDevice genericDevice = new Laptop("Apple", 256.0, 13.3);

    Laptop specificLaptop;
    if (genericDevice instanceof Laptop) {
      specificLaptop = (Laptop) genericDevice; // downcasting seguro
      checkDevice(specificLaptop);
    }

    ComputerDevice inUseDevice = laptop; // upcasting
    checkDevice(inUseDevice);
    inUseDevice = desktop;
    checkDevice(inUseDevice);

    checkDevice(laptop);
    checkDevice(desktop);
    plugDevice(laptop);
    plugDevice(powerBank);
  }

  public static void plugDevice(Chargeable chargeable) {
    System.out.println("A bateria atual é " + chargeable.getBatteryLevel());
    chargeable.charge();
  }

  public static void checkDevice(ComputerDevice device) {
    System.out.println("Verificando dispositivo de marca " + device.getBrand());
    device.bootUp();
  }
}
