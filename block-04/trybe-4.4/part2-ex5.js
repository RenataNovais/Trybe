// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

function repeatedNumber(num) {
  // variavel que irá armazenar o maior número de repetições
  let repeat = 0;
  // variavel para contar as repetições no momento da verificação
  let numTest = 0;
  // index do número que houve o maior número de repetições.
  let indexRepeatedNum = 0;
  for (let index in num) {
    // variavel para armazenar o valor a ser testado
    let checkNum = num[index];
    for (let indexTwo in num) {
      if (checkNum === num[indexTwo]) {
        numTest++; // adiciona na variável 1 quando o checkNum é igual o numero testado no momento.
      }
    }
    if (numTest > repeat) {
      repeat = numTest; // salva o número de repetições para que possa ser testado novo número. Só altera quando houver mais repetições.
      indexRepeatedNum = index; // salva o indice do numero testado no momento, quando tem mais repetições. 
    }
    numTest = 0;
  }
  return num[indexRepeatedNum];
}
console.log(repeatedNumber([2, 3, 2, 5, 8, 2, 3]));
