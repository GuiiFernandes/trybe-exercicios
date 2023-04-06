//Todos os exercícios devem ser realizados utilizando reduce e, se necessário, use outra HOF. A informação será citada no enunciado.

//1 - Dada uma matriz, transforme em um array.
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten3 = () => arrays.flat();
const flatten2 = () => arrays.reduce((array, element) => array.concat(element));
const flatten = () => arrays.flatMap((element) => element);
console.log(flatten());
console.log(flatten2());
console.log(flatten3());

// Para os próximos exercícios, considere o seguinte array:
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//2 - Crie uma string com os nomes de todas as pessoas autoras.
const reduceNames = () => books.reduce((names, book, index) => `${names}${index !== 0 ? ', ' : ''}${book.author.name}`, '');
console.log(reduceNames());
const reduceNames2 = () => books.map((book) => book.author.name).join(', ');
console.log(reduceNames2());

//3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
const averageAge = () => books
  .map((book) => book.releaseYear - book.author.birthYear)
  .reduce((sum, age) => sum + age) / books.length;
console.log(averageAge());

//4 - Encontre o livro com o maior nome.
const longestNamedBook = () => books.reduce((biggerName, book) =>
  book.name.length > biggerName.name.length ? book : biggerName);
console.log(longestNamedBook());