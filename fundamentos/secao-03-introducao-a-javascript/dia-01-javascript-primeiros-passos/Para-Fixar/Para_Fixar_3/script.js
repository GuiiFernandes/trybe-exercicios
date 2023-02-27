let grade = -5;

if (grade >= 80 && grade <= 100) {
  console.log("Parabéns, você faz parte do grupo de pessoas aprovadas!");
}
else if (grade >= 60 && grade < 80) {
  console.log("Você está na nossa lista de espera.");
}
else if (grade >= 1 && grade < 60) {
  console.log("Infelizmente, você reprovou.");
}
else {
  console.log("Nota inválida!");
}