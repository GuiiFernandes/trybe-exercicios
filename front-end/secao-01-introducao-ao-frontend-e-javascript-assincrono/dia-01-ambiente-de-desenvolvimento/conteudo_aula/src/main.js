import { nanoid } from 'nanoid'

const passwordBtn = document.querySelector('button');
const displayPassword = document.querySelector('h2');

passwordBtn.addEventListener('click', () => {
  displayPassword.innerHTML = nanoid();
});