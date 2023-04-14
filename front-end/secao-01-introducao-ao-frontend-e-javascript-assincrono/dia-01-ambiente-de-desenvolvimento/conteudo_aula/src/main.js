import { nanoid } from 'nanoid';
import './style.css';
import copy from 'clipboard-copy';

const passwordBtn = document.querySelector('button');
const displayPassword = document.querySelector('h2');

passwordBtn.addEventListener('click', () => {
  displayPassword.innerHTML = nanoid();
});

displayPassword.addEventListener('click', () => {
  copy(displayPassword.innerText);
  const copyStatus = document.querySelector('p');
  copyStatus.innerHTML = 'copied';
  displayPassword.style.color = 'rgb(71, 230, 169)';
  const delay = 1300;
  setTimeout(() => {
    copyStatus.innerHTML = '';
    displayPassword.style.color = '#E8A4F0';
  }, delay);
});
