// função que une o nome e sobre nome de pessoas
// com for: 
// const persons = [
//   { firstName: "Maria", lastName: "Ferreira" },
//   { firstName: "João", lastName: "Silva" },
//   { firstName: "Antonio", lastName: "Cabral" },
// ];

// const fullNames = [];
// for(let i = 0; i < persons.length; i += 1){
//   fullNames.push(`${persons[i].firstName} ${persons[i].lastName}`);
// }

// console.log(fullNames);
// com map:
const persons = [
  { firstName: "Maria", lastName: "Ferreira" },
  { firstName: "João", lastName: "Silva" },
  { firstName: "Antonio", lastName: "Cabral" },
];

const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

// função que transforma os números de um array em negativos
const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map(number => ((number > 0) ? number * (-1) : number));

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]

// função que reune os produtos e os preços em um unico array
const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => {
  return listProducts.map((product, index) => (
    { [product]: listPrices[index] }
  ));
};

const listProducts = updateProducts(products, prices);
console.log(listProducts); // [ { Arroz: 2.99 }, { Feijao: 3.99 }, { Alface: 1.5 }, { Tomate: 2 } ]

// Exemplo: Mapeando um array de números para um array de raízes quadradas
var num = [1, 4, 9];
var roots = num.map(Math.sqrt);
console.log(roots);// roots é [1, 2, 3],
console.log(num);// num ainda é [1, 4, 9]
