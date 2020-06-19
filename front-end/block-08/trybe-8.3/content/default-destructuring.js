// teste que tenta busca propriedade inexistente em objeto
const pessoa = {
  name: "João",
  lastName: "Jr",
  age: 34
}

const { nacionalidade01 } = pessoa
console.log(nacionalidade01);
console.log('---');

// adicionando valor padrão via default-destructuring
// const pessoa = {
  // name: "João",
  // lastName: "Jr",
  // age: 34
// }
// 
const { nacionalidade02 = "Brazilian" } = pessoa
console.log(nacionalidade02) // Brazilian
console.log('---');

// teste com array
const position2d = [1.0, 2.0]
const [x, y, z] = position2d // tenta acessar posição inexistente do array
const [a, b, c=0] = position2d // cria posição com valor definido

console.log(z) // undefined
console.log(c) // 0
console.log('---');

// exemplo prático
const nationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`

const person = {
    firstName: "João",
    lastName: "Jr II"
}

const otherPerson = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
}

console.log(nationality(otherPerson)) // Ivan is Russian
console.log(nationality(person))
