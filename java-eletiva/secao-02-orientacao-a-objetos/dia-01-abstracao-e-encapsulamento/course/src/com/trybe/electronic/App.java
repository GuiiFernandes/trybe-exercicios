package com.trybe.electronic;

import com.trybe.electronic.Television;

public class App {

  public static void main(String[] args) {
    Television television = new Television("Phillips", "LCD", 32);

    television.changeOn();
    System.out.println("Televisão está ligada? " + television.isOn());
    television.changeOn();
    System.out.println("Televisão está ligada? " + television.isOn());
    television.changeOn();
    System.out.println(television.info());

    System.out.println("Aumentando volume...");
    television.changeVolume(1);
    System.out.println(television.getVolume());
    System.out.println("Abaixando volume...");
    television.changeVolume(-1);
    System.out.println(television.getVolume());

    System.out.println(television.getSystemVersion());
    television.setSystemVersion("2.0.1");
    System.out.println(television.getSystemVersion());
    television.changeOn();
    System.out.printf("Tamanho é: %.2fcm2", Television.sizeInCm(49));
  }
}
