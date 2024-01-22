package course.rpg.Characters;

public class Cleric extends PlayableCharacter {

  private String magic;

  public String getMagic() {
    return magic;
  }

  public void setMagic(String magic) {
    this.magic = magic;
  }

  @Override
  public void attack() {
    System.out.println(this.getName() + " lança uma magia.");
  }

  public void heal() {
    System.out.println(this.getName() + " está curando com uma habilidade básica.");
  }

  public void heal(String potion) {
    System.out.println(this.getName() + " está curando com a poção " + potion + ".");
  }

  public void heal(String spell, int power) {
    System.out.println(
        this.getName() + " está usando o feitiço " + spell + " com um poder de " + power + ".");
  }
}
