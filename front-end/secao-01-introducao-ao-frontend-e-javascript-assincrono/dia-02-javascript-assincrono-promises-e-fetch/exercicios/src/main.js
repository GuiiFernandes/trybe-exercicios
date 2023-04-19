import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Swal from 'sweetalert2'

const baseUrl = 'https://akabab.github.io/superhero-api/api';
const button = document.querySelector('.btn');
const elements = document.querySelectorAll('.modifiable');

const data = await fetch(`${baseUrl}/all.json`)
  .then((response) => response.json())
  .then((data) => data)
  .catch((error) => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `Erro: ${error.message}`,
      color: '#fff',
      background: '#24212e'
    })
  });

button.addEventListener('click', () => {
  const randomId = Math.round(Math.random() * (data.length - 1) + 1);
  const { name, images } = data[randomId];
  elements[0].setAttribute('src', images.lg);
  elements[1].innerHTML = name;
});