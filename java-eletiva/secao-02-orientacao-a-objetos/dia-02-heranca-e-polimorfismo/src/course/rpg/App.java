package course.rpg;

import course.rpg.Characters.Warrior;

public class App {

  public static void main(String[] args) {
    Warrior warrior = new Warrior();
    warrior.setName("Aragorn");
    warrior.setRace("Humano");
    warrior.setWeapon("Espada");

    System.out.println(warrior.getName() + " é da raça " + warrior.getRace() + " e utiliza " + warrior.getWeapon());
    warrior.specialAttack();
  }
}
