package com.controle_frota.main;

import com.controle_frota.core.*;

public class App {

  public static void main(String[] args) {
    Carro c1 = new Carro("ABC-1234", 2018);
    Caminhao c2 = new Caminhao("DEF-5678", 2019);
    Moto m1 = new Moto("GHI-9012", 2020);
    Container c3 = new Container("Container 1", 1000);
    Container c4 = new Container("Container 1", 1000);

    c1.abastecer("Posto 1", "João", 230, 40);
    c1.abastecer("Posto 2", "João", 180, 30);
    c2.abastecer("Base", "Maria", 500, 120);
    c2.abastecer("Posto 2", "Maria", 300, 80);
    m1.abastecer("Posto 2", "José", 60, 10);
    m1.abastecer("Posto 1", "José", 30, 5);

    c1.listaAbastecimentos();
    c2.listaAbastecimentos();
    m1.listaAbastecimentos();

    System.out.println(c2.transportar("São Paulo", "Rio de Janeiro"));
    System.out.println(c3.transportar("São Paulo", "Rio de Janeiro"));
    System.out.println(c4.transportar("São Paulo", "BH"));
  }
}
