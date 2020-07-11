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


// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const totalEstudantes = obj => {
  let soma = 0;
  const chaves = Object.keys(obj)

  for( i of chaves ) {
    soma += allLessons[i]['numeroEstudantes'];
  }
  return soma;
}

console.log(totalEstudantes(allLessons));

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

const getValueByNumber = (obj, position) => {
  
  const key = Object.keys(obj)[position];

  return obj[key];
}

console.log(getValueByNumber(lesson1, 0));

// Crie uma função que verifique se o par (chave / valor) existe na função.
// Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

const parChaveValor = (obj, key, value) => {
  if (obj[key] === value) return true;
  return false;
}

console.log(parChaveValor(lesson3, 'turno', 'noite')); // Output: true,
console.log(parChaveValor(lesson3, 'materia', 'Maria Clara')); // Output: false
