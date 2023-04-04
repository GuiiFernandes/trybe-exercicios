const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = (dragon) => Math.round(Math.random() * (dragon.strength - 15) + 15);
const warriorDamage = (warrior) => Math.round(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + warrior.strength);
const mageDamage = (mage) => {
  if (mage.mana < 15) return 'Não possui mana suficiente';
  mage.mana -= 15;
  return { damage: Math.round(Math.random() * ((mage.intelligence * 2) - mage.intelligence) + mage.intelligence), mana: 15 }
};

const gameActions = {
  turnWarrior(warrior, dragon, warriorAttack) {
    const damage = warriorAttack(warrior);
    warrior.damage = damage;
    dragon.healthPoints -= damage;
  },
  turnMage(mage,dragon, mageAttack) {
    const damage = mageAttack(mage);
    mage.damage = damage;
    dragon.healthPoints -= damage.damage;
  },
  turnDragon(dragon, mage, warrior, dragonAttack) {
    const damage = dragonAttack(dragon);
    dragon.damage = damage;
    mage.healthPoints -= damage;
    warrior.healthPoints -= damage;
  },
  turn() {
    this.turnWarrior(battleMembers.warrior, battleMembers.dragon, warriorDamage);
    this.turnMage(battleMembers.mage, battleMembers.dragon, mageDamage);
    this.turnDragon(battleMembers.dragon, battleMembers.mage, battleMembers.warrior, dragonDamage);
    console.log(battleMembers);
  },
};
gameActions.turn();
