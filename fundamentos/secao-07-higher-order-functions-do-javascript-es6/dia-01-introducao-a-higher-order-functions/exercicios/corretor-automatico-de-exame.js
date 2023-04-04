const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

//como eu faria.
const analyzeExam = (solutions, answers) => {
  const point = answers.reduce((points, response, index) => {
    if (response === solutions[index]) return points + 1;
    if (response === 'N.A') return points;
    return points - 0.5;
  }, 0);
  return `Resultado Final: ${point} pontos.`;
}
console.log(analyzeExam(RIGHT_ANSWERS, STUDENT_ANSWERS));