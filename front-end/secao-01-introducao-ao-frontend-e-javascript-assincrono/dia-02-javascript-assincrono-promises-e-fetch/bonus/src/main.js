import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const img = document.querySelector('img');

const baseUrls = [
  'https://api.thecatapi.com/v1/images/search',
  'https://dog.ceo/api/breeds/image/random',
];
const baseProperties = ['url', 'message'];

const getData = (num) => fetch(baseUrls[num])
  .then((response) => response.json())
  .then((data) => {
    img.setAttribute('src', (num
      ? data[baseProperties[num]]
      : data[0][baseProperties[num]]));
  })
  .catch((error) => {
    console.error(error);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `Erro: ${error.message}`,
      color: '#FFF',
      background: '#1e1e1e',
    });
  });

document.addEventListener('click', (event) => {
  const button = event.target;
  if (button.id === 'cat') getData(0);
  if (button.id === 'dog') getData(1);
  if (button.id === 'surprise') {
    const parameter = Math.round(Math.random());
    getData(parameter);
  }
});
