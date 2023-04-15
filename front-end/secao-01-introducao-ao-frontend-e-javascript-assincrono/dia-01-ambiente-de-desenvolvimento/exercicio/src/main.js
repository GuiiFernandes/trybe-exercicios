import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import validator from 'validator';

const typeInput = document.getElementById('type');
const button = document.querySelector('button');
const text = document.querySelector('p');
const textInput = document.querySelector('input');

button.addEventListener('click', () => {
  const validates = {
    cpf: validator.isTaxID(textInput.value, 'pt-BR'),
    email: validator.isEmail(textInput.value),
    cellPhone: validator.isMobilePhone(textInput.value, ['pt-BR']),
    cep: validator.isPostalCode(textInput.value, 'BR'),
    url: validator.isURL(textInput.value),
  };
  const isValid = validates[typeInput.value];
  text.innerHTML = `O campo ${textInput.innerText} é ${isValid ? 'válido' : 'inválido'}.`;
});
