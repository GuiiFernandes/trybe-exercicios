const { encode, decode } = require('./script');


describe ('Testando encode e decode', () => {
  it('encode e decode são funções?', () => {
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
  });
  it('encode e decode está convertendo corretamente?', () => {
    expect(encode('ana, ele, xixi, ovo, nuvem')).toEqual('1n1, 2l2, x3x3, 4v4, n5v2m');
    expect(decode('1n1, 2l2, x3x3, 4v4, n5v2m')).toEqual('ana, ele, xixi, ovo, nuvem');
  });
  it('As demais letras não são convertidas?', () => {
    expect(encode('bcdfghjklmnpqrstvwyxz')).toEqual('bcdfghjklmnpqrstvwyxz');
    expect(decode('bcdfghjklmnpqrstvwyxz')).toEqual('bcdfghjklmnpqrstvwyxz');
  });
  it('Tem o mesmo número de caracteres?', () => {
    expect(encode('Guilherme').length).toBe(9);
  });
});