const GRADE_DICT = {
  0.9: 'A',
  0.8: 'B',
  0.7: 'C',
  0.6: 'D',
  0.1: 'E',
};

const gradeKeys = Object.keys(GRADE_DICT);

/* Função menor para remover o uso excessivo de `if{}else`s */
const getGradeLetter = (gradeNumber) => {
  let letterGrade = 'F';

  for (let i = 0; i < gradeKeys.length; i += 1) {
    if (gradeNumber >= gradeKeys[i]) {
      letterGrade = GRADE_DICT[gradeKeys[i]];
      break;
    }
  }

  return letterGrade;
};

/* Coletar notas */
const getLetterGrades = ({ name, grade }) => ({
  name,
  grade,
  letterGrade: getGradeLetter(grade) });

/* "Converter" */
const percentageGradesIntoLetters = ({ name, disciplines, school }) => ({
  name,
  school,
  disciplines: disciplines.map(getLetterGrades) });

/* Exemplo de execução */
// ...

/*
  Não se esqueça que é necessário exportar ao final as
  funções para que você possa testa-las de forma unitária
*/
module.exports = {
  percentageGradesIntoLetters,
  getGradeLetter,
  getLetterGrades,
};