const BASE_URL = 'https://viacep.com.br/ws/';

export const fetchApi = async (cep) => (await fetch(`${BASE_URL}${cep}/json/`)).json();
