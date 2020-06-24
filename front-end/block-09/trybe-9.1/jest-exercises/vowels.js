// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let numVowels = 0;
  let arrayOfLetters = str.toLowerCase().split('');
  arrayOfLetters.forEach(letter => {
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
      numVowels += 1;
    }
  });
  return numVowels;
}

module.exports = vowels;