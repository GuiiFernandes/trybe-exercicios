const BASE_URL = 'https://viacep.com.br/ws/';

export const fetchApi = async (cep) => {
  if (!cep) throw new Error('Digite um CEP!');
  return (await fetch(`${BASE_URL}${cep}/json/`)).json();
};
