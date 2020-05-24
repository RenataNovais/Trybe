// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false, se não for.
// Exemplo de palíndromo: arara.
// verificaPalindrome("arara");
// Retorno esperado: true
// verificaPalindrome("desenvolvimento");
// Retorno esperado: false

//baby-steps
// Criar uma variável string com a palavra teste;
// Criar a função onde o parametro é a palavra;
// A função tem que verificar se a palavra é igual a ela mesmo escrita de tras pra frente;
// Fazer um for que irá percorrer a palavra e reescrever de tras pra frente. Criar variável para armazenar resultado;

let palavra = "arara";
let palavraAoContrario = "";
let conferePalindrome = "";

function verificaPalindrome(palavra) {
  
  
}

for (let i = palavra.length - 1; i >= 0; i-=1) {
  palavraAoContrario += palavra[i];
}
if (palavraAoContrario == palavra) {
  conferePalindrome = "true";
} else {
  conferePalindrome = "false";
}
console.log(conferePalindrome);