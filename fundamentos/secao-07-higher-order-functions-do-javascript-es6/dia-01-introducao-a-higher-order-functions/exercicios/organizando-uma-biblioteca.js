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

// Adicione o código do exercício aqui:
//1. Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
const authorBornIn = year => {
  const bookResult = books.find(book => book.author.birthYear === year)
  return bookResult.author.name;
};
console.log(authorBornIn(1947));

//2. Retorne o nome do livro com menor número de caracteres (menor nome).
const smallerName = () => {
  let nameBook;
  books.forEach(book => {
    if (!nameBook) {
      nameBook = book.name;
    } else {
      if (nameBook.length > book.name.length) nameBook = book.name;
    }
  });
  return nameBook;
}
console.log(smallerName());

//3. Encontre o primeiro livro cujo nome possua 26 caracteres.
const getNamedBook = characters => books.find(book => book.name.length === characters);
console.log(getNamedBook(26));

//4. Faça uma função que retorne true se todas as pessoas autoras tiverem nascido no século XX, ou false, caso contrário.
function everyoneWasBornOnSecXX() {
  return books.every(book => book.author.birthYear > 1900 && book.author.birthYear < 2001);
}
console.log(everyoneWasBornOnSecXX());

//5. Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
const someBookWasReleaseOnThe80s = year => books.some(book => book.releaseYear >= year);
console.log(someBookWasReleaseOnThe80s(1980));

//6. Faça uma função que retorne true, caso nenhuma pessoa autora tenha nascido no mesmo ano, e false, caso contrário.
const authorUnique = () => books.every(book => !books.some(bookSome => book.author.name !== bookSome.author.name && book.author.birthYear === bookSome.author.birthYear));
console.log(authorUnique());