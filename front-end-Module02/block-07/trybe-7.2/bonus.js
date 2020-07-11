const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
  turno: 'manhã'
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign.
// Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. 

const allLessons = {
  lesson1: Object.assign({}, lesson1),
  lesson2: Object.assign({}, lesson2),
  lesson3: Object.assign({}, lesson3)
}

// Bonus - Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
const studentsSubject = (obj, value) => {
  let sumStudents = 0;

  const keys = Object.keys(obj);
  for (let i of keys) {
    if (obj[i]['materia'] === value)
      sumStudents += obj[i]['numeroEstudantes'];
  }
  return sumStudents;
};

console.log(studentsSubject(allLessons, 'Matemática'));

// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, 
// as aulas que ele ou ela ministrou e o número total de estudantes.

const createReport = (obj, teacher) => {
  let report = {professor: '', aulas: [], estudantes: 0};

  const keys = Object.keys(obj);

  for (let i of keys) {
    if (obj[i]['professor'] === teacher) {
      report.professor = teacher;
      report.aulas.push(obj[i].materia);
      report.estudantes += obj[i].numeroEstudantes;
    }
  }
  return report;
};

console.log(createReport(allLessons, 'Maria Clara'));