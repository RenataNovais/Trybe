// encontrar número maior que 10
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found); // expected output: 12

// Encontrar um objeto em um array por uma de suas propriedades
const inventory = [
  {name: 'maças', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cerejas', quantity: 5}
];

function isCherries(fruit) { 
  return fruit.name === 'cerejas';
}

console.log(inventory.find(isCherries)); // { name: 'cerejas', quantity: 5 }

// Encontrar um número primo em uma array
function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5

// encontrar número par
const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // 30
