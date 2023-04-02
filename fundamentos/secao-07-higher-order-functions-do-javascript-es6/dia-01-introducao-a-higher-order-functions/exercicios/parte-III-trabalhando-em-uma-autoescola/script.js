const studentRegister = (name, age) => {
  try {
    const numAge = Number(age);
    if (!name || !numAge) throw new Error('Todas as informações são necessárias');
    if (numAge < 18) throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
    return `${name}, seja bem-vindo(a) à AuTrybe!`;
  } catch (error) {
    return error.message;
  }
}

console.log(studentRegister('Guilherme', '19'));