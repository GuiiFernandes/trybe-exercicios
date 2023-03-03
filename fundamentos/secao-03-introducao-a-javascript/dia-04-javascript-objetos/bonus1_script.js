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

//4.
function listaValores (object) {
  return Object.values(object);
}
console.log(listaValores(lesson2));

//5.
let allLessons = Object.assign({}, {
    lesson1: lesson1,
    lesson2: lesson2,
    lesson3: lesson3
  });
console.log(allLessons);

//6.
function totalEstudantes (object) {
  let sum = 0;
  for(let key in object) {
    sum += allLessons[key].numeroEstudantes;
  }
  return sum;
}
console.log(totalEstudantes(allLessons));

//7.
function obtemValor (object, number) {
  return Object.values(object)[number];
}
console.log(obtemValor(lesson1, 0));

//8.
function verifyPair(object, key, value) {
  for(let secondKey in object) {
    if (key === secondKey && object[secondKey] === value) return true;
  }
  return false;
}
console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));