const bookMock = {
  title: 'O Senhor dos Anéis',
  author: 'J. R. R. Tolkien',
  page_quantity: 1000,
  created_at: '2001-09-28 01:00:00',
  updated_at: '2001-09-28 01:00:00',
  publisher: 'Editora Abril',
};

const booksMock = [{ id: 1, ...bookMock }];

module.exports = { bookMock, booksMock };