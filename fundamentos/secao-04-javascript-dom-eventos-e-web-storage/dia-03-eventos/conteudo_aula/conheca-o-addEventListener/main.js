const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// - Copie esse arquivo e edite apenas ele;
//1. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
//Pq ela é a unica li que possui a classe tech, que no css arrasta a caixa 20 pixels pra cima no eixo vertical (Y)

//2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
const changeTech = (event) => {
  boxs = document.querySelectorAll('.container li');
  const elementTech = document.querySelector('.tech')
  elementTech.classList.remove('tech');
  event.target.className = 'tech';
  console.log(event);
  if (event.id === 'first-li') {
    input.value = '';
    input.placeholder = 'Alterar a primeira tecnologia';
  } else if (event.id === 'second-li') {
    input.value = '';
    input.placeholder = 'Alterar a segunda tecnologia';
  } else {
    input.value = '';
    input.placeholder = 'Alterar a terceira tecnologia';
  };
}
firstLi.addEventListener('click', changeTech);
secondLi.addEventListener('click', changeTech);
thirdLi.addEventListener('click', changeTech);

//3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';
const changeText = (event) => {
  const box = document.querySelector('.tech');
  box.innerText = event.target.value;
  input.value = '';
}
input.addEventListener('change', changeText);

//4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página; (Que tal redirecionar para seu portfólio?)
const openPage = (event) => {
  window.open('https://guiifernandes.github.io/', '_blank');
}
myWebpage.addEventListener('dblclick', openPage);

//5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;
const styleSubTitle = (event) => {
  if(event.target.style.color === 'orange') {
    event.target.style.color = 'white';
  } else {
    event.target.style.color = 'orange';
  };
  event.target.style.cursor = 'pointer';
}
myWebpage.addEventListener('mouseover', styleSubTitle);
myWebpage.addEventListener('mouseleave', styleSubTitle);

// Segue abaixo um exemplo do uso de event.target:


const resetText = (event) => {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.