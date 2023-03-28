const myRemove = require('./script');

describe('Testa se myRemove remove corretamente os números do array', () => {
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
    expect([1, 2, 3, 4]).not.toEqual(myRemove([1, 2, 3, 4], 3));
    expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 5));
  });
});