// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5.
// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

/*let N = 5;
let sumTotal = 0;
function sum() {
  for (let index = 1; index <= N; index += 1) {
    sumTotal = sumTotal + index;
  }
  return sumTotal;
}
console.log(sum());*/

let N = 5;
let sumTotal = 0;
function sum() {
  for (let index = N; index >= 1; index -= 1) {
    sumTotal = sumTotal + index;
  }
  return sumTotal;
}
console.log(sum());
