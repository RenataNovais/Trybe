// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
const assert = require('assert')

// escreva sum abaixo
function sum(...num) {
  if ([...num] == undefined) {
  [...num] == 0
  }; 
  return [...num].reduce(((soma, n) => soma + n), 0);
}

console.log(sum());
console.log(sum(1));
console.log(sum(1, 2));
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));

assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)
