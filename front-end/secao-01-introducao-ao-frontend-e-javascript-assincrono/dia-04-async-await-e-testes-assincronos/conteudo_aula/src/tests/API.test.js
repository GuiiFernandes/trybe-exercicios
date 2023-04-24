import { fetchApi } from '../services/API';

describe('Quando a requisição é bem sucedida, ela deverá retornar os dados esperados', () => {
  test('deve retornar os dados quando passamos um cep válido', async () => {
    const address = await fetchApi('30130010');
    expect(address.cep).toBe('30130-010');
    expect(address.logradouro).toBe('Praça Sete de Setembro');
    expect(address.bairro).toBe('Centro');
    expect(address.uf).toBe('MG');
  });

  test('deve aceitar ceps com hífen ou sem hífen', async () => {
    let address = await fetchApi('30130010');
    expect(address.cep).toBe('30130-010');

    address = await fetchApi('30130-010');
    expect(address.cep).toBe('30130-010');
  });
});

describe('Quando a requisição é rejeitada, ela deverá retornar erro', () => {
  test('Deve lançar erro "Digite um CEP!" quando passar cep vazio', async () => {
    const emptyCep = '';

    await expect(fetchApi(emptyCep)).rejects.toThrow(
      new Error('Digite um CEP!'),
    );
  });

  test('Deve lançar erro quando passar cep inválido', async () => {
    const invalidCep = 'XXXXX-XXX';
    const invalidCepLessDigits = '00000-00';
    const invalidCepMoreDigits = '00000-0000';

    await expect(fetchApi(invalidCep)).rejects.toThrow();
    await expect(fetchApi(invalidCepLessDigits)).rejects.toThrow();
    await expect(fetchApi(invalidCepMoreDigits)).rejects.toThrow();
  });
});
