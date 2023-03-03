let lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

let lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

let lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//1.
function adicionaTurno (lesson, turno) {
  lesson['turno'] = turno;
}

adicionaTurno(lesson2, 'noite');
console.log(lesson2);

//2.
function listaKeys (object) {
  return Object.keys(object);
}
console.log(listaKeys(lesson1));

//3.
function tamanhoObjeto (object) {
  return listaKeys(object).length;
}
console.log(tamanhoObjeto(lesson3));