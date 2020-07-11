// Crie uma função que receba um array de inteiros e retorne o índice do maior valor. 
// Array de teste: [2, 3, 6, 7, 10, 1];. Valor esperado no retorno da função: 4

function indexOfHigher(num) {
  let indexHigher = 0;
  for (let index in num) {
    if (num[indexHigher] < num[index]) {
      indexHigher = index;
    }
  }
  return indexHigher;
}

console.log(indexOfHigher([2, 3, 6, 7, 10, 1]));
