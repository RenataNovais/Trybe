// Escreva uma função filterPeople que, dada uma lista de pessoas, 
// retorna todas as pessoas australianas que nasceram no século 20:

const assert = require('assert')

const people = [
  {
    name: "Nicole",
    bornIn: 1992,
    nationality: "Australian"
  },
  {
    name: "Harry",
    bornIn: 2008,
    nationality: "Australian"
  },
  {
    name: "Toby",
    bornIn: 1901,
    nationality: "Australian"
  },
  {
    name: "Frida",
    bornIn: 1960,
    nationality: "Dannish"
  },
  {
    name: "Fernando",
    bornIn: 2001,
    nationality: "Brazilian"
  }
]

// escreva filterPeople abaixo

// solução com filter
const filterPeople = people.filter(({nationality, bornIn}) => nationality == "Australian" && bornIn < 2000);

// solução com array destructuring
// const filteredPeople = filterP(people) {
//   const aus = people.filter((person) => person.nationality == "Australian");
//   const [{name, nationality}] = aus
//   return aus;
// };

assert.deepEqual(filterPeople[0], { name: "Nicole", bornIn: 1992, nationality: "Australian" })
assert.deepEqual(filterPeople[1], { name: "Toby", bornIn: 1901, nationality: "Australian" })

// assert.deepEqual(filteredPeople[0], { name: "Nicole", bornIn: 1992, nationality: "Australian" })
// assert.deepEqual(filteredPeople[1], { name: "Toby", bornIn: 1901, nationality: "Australian" })
