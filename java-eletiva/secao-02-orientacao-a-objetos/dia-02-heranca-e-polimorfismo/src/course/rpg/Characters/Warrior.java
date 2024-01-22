package course.rpg.Characters;

public class Warrior extends PlayableCharacter {

  private String weapon;

  public String getWeapon() {
    return weapon;
  }

  public void setWeapon(String weapon) {
    this.weapon = weapon;
  }

  @Override
  public void attack() {
    System.out.println(this.getName() + " ataca com sua arma.");
  }

  public void specialAttack() {
    if (!isAlive) {
      System.out.println(this.getName() + " morreu e não pode usar seu ataque especial.");
      return;
    }

    System.out.println(this.getName() + " está usando seu ataque especial!");
  }
}
