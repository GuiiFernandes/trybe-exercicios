export interface Character {
  name: string;
  specialMove: string;
}

export interface DbCharacter extends Character {
  id: number;
}

export interface IModel {
  create(character: Character): Promise<DbCharacter>;
  update(id: number, character: Character): Promise<DbCharacter>;
  delete(id: number): Promise<boolean>;
  getAll(): Promise<DbCharacter[]>;
  getById(id: number): Promise<DbCharacter>;
}

export const db: DbCharacter[] = [];