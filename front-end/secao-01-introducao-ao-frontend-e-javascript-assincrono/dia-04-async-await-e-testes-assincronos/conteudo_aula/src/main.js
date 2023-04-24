import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { fetchApi } from './services/API';
import { showErro } from './services/error';

const cep = document.getElementById('cep');
const button = document.getElementById('button');
const result = document.getElementById('result');

const renderData = (data) => {
  result.innerHTML = '<h2>DADOS:</h2>';
  Object.entries(data).forEach(([key, value]) => {
    result.innerHTML += `<p><span class="key">
      ${key.toLocaleUpperCase()}:</span> ${value}</p>`;
  });
  cep.value = '';
};

button.addEventListener('click', async (event) => {
  event.preventDefault();
  try {
    const data = await fetchApi(cep.value);
    if (data.erro) throw new Error('CEP inexistente!');
    renderData(data);
  } catch (error) {
    result.innerHTML = '';
    showErro(error);
  }
});
