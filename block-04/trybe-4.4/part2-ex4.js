// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

function biggestName(names) {
  // cria uma variável para armazenar o primeiro valor;
  let biggestWord = names[0];
  for (let index in names) {
    // testa a variável (primeiro nome) em relação ao próximo, e se for menor substitui o valor armazenado para o maior valor.
    if (biggestWord.length < names[index].length) {
      biggestWord = names[index];
    }
  }
  return biggestWord;
}
console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
