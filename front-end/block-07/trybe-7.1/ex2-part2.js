/* Crie uma função que receba uma frase e retorne qual a maior palavra.
Ex:       longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'*/

function longestWord(phrase) {
  const words = phrase.split(' ');
  console.log(words);
  let longestWord = words[0];

  for ( let i = 0; i < words.length; i += 1) {
    const characters = words[i].length;
    if (characters > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
