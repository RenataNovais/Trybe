/* Crie uma função que receba uma string word, e outra, uma string ending. 
Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
Valor de teste: "trybe" e "be"
Valor esperado no retorno da função: true
verificaFimPalavra("trybe", "be");
Retorno esperado: true
verificaFimPalavra("joaofernando", "fernan");
Retorno esperado: false */

function verificaFimPalavra(palavra, fim) {
  palavra = palavra.split("");
  fim = fim.split("");
  controle = true;
  for (let i = 0; i < fim.length; i++) {
    if (palavra[palavra.length-fim.length+i] != fim[i]) {
      controle = false;
    }
  }
  return controle;
}

console.log(verificaFimPalavra("trybe", "be")); //true
console.log(verificaFimPalavra("joaofernando", "fernan")); //false
