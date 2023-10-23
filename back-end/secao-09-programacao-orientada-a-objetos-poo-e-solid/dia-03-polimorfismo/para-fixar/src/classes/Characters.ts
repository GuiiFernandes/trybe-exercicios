import { IModel, db, DbCharacter, Character } from "../interfaces/Characters";

export abstract class CharacterClass {
  constructor(protected _name: string, protected _specialMove: string) { }
  abstract talk(): void;

  get name(): string { return this._name; }
  get specialMove(): string { return this._specialMove; }

  getSpecialMove() {
    console.log(`${this.name} used ${this.specialMove}!`);
  }

  static getCharacter(character: CharacterClass) {
    character.talk();
    character.getSpecialMove();
  }
}

export class MeleeCharacter extends CharacterClass {
  talk(): void {
    console.log(`Hi, I'm ${this.name}. I attack at close range.`);
  }
}

export class LongCharacter extends CharacterClass {
  talk(): void {
    console.log(`Hi, I'm ${this.name}. I can attack from a long range.`);
  }
}

export class LocalDbModel implements IModel {
  create(character: Character): Promise<DbCharacter> {
    const newCharacter: DbCharacter = {
      ...character,
      id: db.length ? db[db.length - 1].id + 1 : 0,
    };
    db.push(newCharacter);
    return Promise.resolve(newCharacter);
  }

  update(id: number, character: Character): Promise<DbCharacter> {
    const index = db.findIndex((character) => character.id === id);
    if (index === -1) {
      return Promise.reject(new Error('Character not found'));
    }
    const updatedCharacter: DbCharacter = {
      id,
      name: character.name,
      specialMove: character.specialMove
    };
    db[index] = updatedCharacter;
    return Promise.resolve(updatedCharacter);
  }

  delete(id: number): Promise<boolean> {
    const index = db.findIndex((character) => character.id === id);
    if (index === -1) {
      return Promise.reject(new Error('Character not found'));
    }
    db.splice(index, 1);
    return Promise.resolve(true);
  }

  getAll(): Promise<DbCharacter[]> {
    return Promise.resolve(db);
  }

  getById(id: number): Promise<DbCharacter> {
    const character = db.find((character) => character.id === id);
    if (!character) {
      return Promise.reject(new Error('Character not found'));
    }
    return Promise.resolve(character);
  }
}

export class CharacterService {
  constructor(readonly model: IModel) { }

  async create(character: Character) {
    const newCharacter = this.model.create(character);
    return { status: 201, data: newCharacter };
  }

  async update(id: number, character: Character) {
    const updatedCharacter = this.model.update(id, character);
    return { status: 200, data: updatedCharacter };
  }

  async delete(id: number) {
    const deleted = this.model.delete(id);
    return { status: 204, data: deleted };
  }

  async getAll() {
    const characters = this.model.getAll();
    return { status: 200, data: characters };
  }

  async getById(id: number) {
    const character = this.model.getById(id);
    return { status: 200, data: character };
  }
}

export class mockDbModel implements IModel {
  async create(character: Character): Promise<DbCharacter> {
    console.log('character created');
    return { id: 1, name: 'Peach', specialMove: 'Toad' };
  }

  async update(id: number, character: Character) {
    console.log('character updated');
    return { id: 1, name: 'Yoshi', specialMove: 'Egg Lay' };
  }

  async delete(id: number) {
    console.log('character deleted');
    return true;
  }

  async getAll() {
    return [
      { id: 1, name: 'Samus', specialMove: 'Charge Shot' },
      { id: 2, name: 'Kirby', specialMove: 'Inhale' },
    ];
  }

  async getById(id: number) {
    return { id: 1, name: 'Mario', specialMove: 'Fireball' };
  }
}