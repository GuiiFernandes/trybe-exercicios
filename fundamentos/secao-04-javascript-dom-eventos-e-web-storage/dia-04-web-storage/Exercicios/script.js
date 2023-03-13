const content = document.querySelector('.content');
const paragraphs = document.querySelectorAll('.paragraph');

document.addEventListener('click', (event) => {
  const elementClick = event.target;
  if (elementClick.tagName === 'BUTTON') {
    const idAscending = elementClick.parentElement.id;
    const valueButton = elementClick.innerText;
    if (idAscending === 'background-color') {
      content.style[idAscending] = valueButton;
      localStorage.setItem(idAscending, valueButton);
    } else {
      for (let p of paragraphs) {
        p.style[idAscending] = valueButton;
        localStorage.setItem(idAscending, valueButton);
      }
    }
  }
});

window.onload = () => {
  if(localStorage.length > 0) {
    for (let key in localStorage) {
      if (key === 'background-color') {
        content.style[key] = localStorage[key];
      } else {
        for (let p of paragraphs) {
          p.style[key] = localStorage[key];
        }
      }
    }
  }
}