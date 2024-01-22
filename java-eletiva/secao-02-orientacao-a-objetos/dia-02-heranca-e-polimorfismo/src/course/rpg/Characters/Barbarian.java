package course.rpg.Characters;

public class Barbarian extends PlayableCharacter {

  @Override
  public void move() {
    System.out.print("Pega impulso e ");
    super.move();
  }
}
