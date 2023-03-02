let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
//1.
console.log(`Bem-Vinda, ${info.personagem}!`);

//2.
info['recorrente'] = 'Sim';
console.log(info);

//3.
for (let key in info) {
  console.log(key);
}

//4.
for (let key in info) {
  console.log(info[key]);
}

//5.
const info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};
for (let key in info2) {
  if (key === 'recorrente' && info[key] === 'Sim' && info2[key] === 'Sim') {
    console.log(`Ambos recorrentes`);
  } else if (key === 'recorrente' && info[key] === 'Sim' && info2[key] === 'Não') {
    console.log(`Só ${info['personagem']} recorrente`);
  } else if (key === 'recorrente' && info[key] === 'Não' && info2[key] === 'Sim') {
    console.log(`Só ${info2['personagem']} recorrente`);
  } else if (key === 'recorrente' && info[key] === 'Não' && info2[key] === 'Não') {
    console.log(`Nenhum é recorrente`);
  } else {
    console.log(`${info[key]} e ${info2[key]}`);
  }
}

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

//6.
console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama '${leitor.livrosFavoritos[0].titulo}'`);

//7.
leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
});