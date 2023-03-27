const arrayNotas = [10, 15, 50, 21];

const verificaNota = (arrayNotas) => {
  for (let nota of arrayNotas) {
    if (typeof nota !== 'number') throw new Error(`Nota ${nota}, tem valor inválido!`);
  }
};

const media = (arrayNotas) => {
  try {
    verificaNota(arrayNotas);
    let soma = 0
    for (let nota of arrayNotas) {
      soma += nota;
    }
    return soma/arrayNotas.length
  } catch (error) {
    return error.message;
  }
}

console.log(media(arrayNotas));
