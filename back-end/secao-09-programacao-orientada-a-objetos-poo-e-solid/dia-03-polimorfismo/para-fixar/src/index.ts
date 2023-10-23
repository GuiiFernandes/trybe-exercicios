import { LongCharacter, MeleeCharacter, CharacterClass, CharacterService, LocalDbModel, mockDbModel } from "./classes/Characters";

const yoshi = new MeleeCharacter('Yoshi', 'Super dragon');
const samus = new LongCharacter('Samus', 'Zero Laser');

CharacterClass.getCharacter(yoshi);
CharacterClass.getCharacter(samus);

const A = new CharacterService(new LocalDbModel());
A.getAll().then(console.log);

A.create(yoshi).then(console.log);

const B = new CharacterService(new mockDbModel());
B.getAll().then(console.log);