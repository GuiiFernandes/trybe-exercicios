import Data from "./classes/Data";
import Student from "./classes/Students";
import Client from './classes/Client';
import Order from './classes/Order';
import Product from './classes/Product';
import Person from './classes/Person';
import Employee from './Interfaces/Employee';
import Subject from './classes/Subject';
import Teacher from "./classes/Teacher";

console.log('------------- Students -------------');


const student1 = new Student('Guilherme', '1992-07-02');

console.log(student1);


console.log(student1.name, student1.getSum(), student1.getAverage());

student1.setproofNotes(10);

console.log(student1.name, student1.getSum(), student1.getAverage());

try {
  student1.setproofNotes([10, 10]);
  console.log(student1.name, student1.getSum(), student1.getAverage());
} catch (error) {
  const err = error as Error;
  console.log(err.message);
}

try {
  student1.setWorkNotes([10, 10]);
  console.log(student1.name, student1.getSum(), student1.getAverage());
} catch (error) {
  const err = error as Error;
  console.log(err.message);
}

console.log('------------- Order -------------');

const client = new Client('João');

const sandwich = new Product('Sanduíche Natural', 5.00);
const juice = new Product('Suco de Abacaxi', 5.00);
const dessert = new Product('Gelatina de Uva', 2.50);

const order = new Order(client, [sandwich, juice, dessert], 'dinheiro', 0.10);

console.log(order);

console.log('------------- Order -------------');

const testDate = new Data(29, 1, 1989);

console.log(testDate);
console.log('Dia: ', testDate.day);
console.log('Mês: ', testDate.month);
console.log('Mês por extenso: ', testDate.getMonthName());
console.log('Ano: ', testDate.year);
console.log('É ano bissexto: ', testDate.isLeapYear() ? 'Sim' : 'Não');
console.log(testDate.format('dd/mm/aaaa'));
console.log(testDate.format('aaaa-mm-dd'));
console.log(testDate.format('dd de M de aa'));
console.log(testDate.format('dd, M de aaaa'));

const otherDate = new Data(30, 1, 2021);

const compared = testDate.compare(otherDate);

const compareStates = ['anterior', 'igual', 'posterior'];

console.log(`A primeira data é ${compareStates[compared + 1]} a segunda.`);

// data inválida
const invalidDate = new Data(31, 2, 2021);

console.log('Teste data inválida: ', invalidDate);

console.log('------------- Person -------------');


const maria = new Person('Maria da Consolação','1980/01/25');
const luiza = new Person('Luiza Andrade', '2005/10/02');

console.log(maria);
console.log(luiza);

try {
  const invalidPersonName = new Person('An', new Date('2000/06/07'));
} catch (error) {
  const err = error as Error;
  console.log(err.message);
}

try {
  const invalidPersonAge = new Person('Ana Vitória', new Date('1900/06/07'));
} catch (error) {
  const err = error as Error;
  console.log(err.message);
}

try {
  const invalidPersonAge2 = new Person('Plisciliane', new Date('2024/06/07'));
} catch (error) {
  const err = error as Error;
  console.log(err.message);
}

console.log('------------- Interface Employee -------------');

const testInterfaceEmployee: Employee = {
  registration: 'FNC1234567891011',
  salary: 1200.00,
  admissionDate: new Date(),

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `FNC${randomStr}`;
  },
};

console.log(testInterfaceEmployee);

console.log('------------- Subject -------------');

const math = new Subject('Matemática');
const story = new Subject('História');
const philosophy = new Subject('Filosofia');

console.log(math);
console.log(story);
console.log(philosophy);

console.log('------------- Teacher -------------');

const marta = new Teacher('Marta da Silva', '1980/03/30', 2000, math);
const joao = new Teacher('João Antônio da Costa', '1982/04/21', 2000, story);
const lucio = new Teacher('Lucio Teixeira', '1986/01/29', 2000, philosophy);

console.log(marta);
console.log(joao);
console.log(lucio);