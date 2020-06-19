// criando um array de variáveis:
var [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo); // 1
console.log(bar); // 2
console.log(baz); // 3
console.log('---');

// pulando itens do array
var [,,third] = ["foo", "bar", "baz"];
console.log(third); // "baz"
console.log('---');

// pegando os ultimos itens do array, usando o REST
var [head, ...tail] = [1, 2, 3, 4];
console.log(tail); // [2, 3, 4]

// One key difference between the spread operator and array destructuring 
// is that the spread operator unpacks all contents of an array into a comma-separated list.
// Consequently, you cannot pick or choose which elements you want to assign to variables.

// Destructuring an array lets us do exactly that:

// const [a, b] = [1, 2, 3, 4, 5, 6];
// console.log(a, b); // 1, 2
// The variable a is assigned the first value of the array, and b is assigned the second value of the array. We can also access the value at any index in an array with destructuring by using commas to reach the desired index:

// const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, c); // 1, 2, 5

// Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.
let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a];

// Use destructuring assignment with the rest parameter to perform an effective 
// Array.prototype.slice() so that arr is a sub-array of the original array source with the first two elements omitted.
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // Only change code below this line
  // codigo óriginal: const arr = list // Change this line
  const [a, b, ...arr] = list; // minha resposta
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
