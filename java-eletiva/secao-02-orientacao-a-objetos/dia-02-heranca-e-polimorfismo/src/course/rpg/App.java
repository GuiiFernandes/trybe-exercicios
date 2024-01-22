package course.rpg;

import course.rpg.Characters.Barbarian;
import course.rpg.Characters.Warrior;
import course.rpg.Characters.Mage;
import course.rpg.Characters.Cleric;
import course.rpg.Characters.PlayableCharacter;

public class App {

  public static void main(String[] args) {
    Warrior warrior = new Warrior();
    warrior.setName("Aragorn");
    warrior.setRace("Humano");
    warrior.setWeapon("Espada");

    Mage mage = new Mage();
    mage.setName("Gandalf");
    mage.setRace("Humano");
    Cleric cleric = new Cleric();
    cleric.setName("Elrond");
    cleric.setRace("Elfo");
    Barbarian barbarian = new Barbarian();
    barbarian.setName("Gimli");

    barbarian.move();

    System.out.println(warrior.getName() + " é da raça " + warrior.getRace() + " e utiliza "
        + warrior.getWeapon());
    warrior.specialAttack();

    moveAndAttack(warrior);
    moveAndAttack(mage);
    moveAndAttack(cleric);

    cleric.heal();                       // Cura básica
    cleric.heal("Poção de Vida");        // Cura com a Poção de Vida
    cleric.heal("Feitiço de Luz", 7);    // Cura com o Feitiço de Luz com poder 7
  }

  public static void moveAndAttack(PlayableCharacter character) {
    character.move();
    character.attack();
  }
}
