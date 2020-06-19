//  função que encontra maior valor do array
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
console.log(maximus) // returns 89

// função que copia um array e acrescenta valor no final
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1, 'JUN'];  // Change this line

console.log(arr2);

// teste adicionando inicio e fim, com arrays;
const array1 = ['FEV', 'MAR'];
const array2 = ['ABR'];
let array3;

array3 = ['JAN', ...array1, ...array2];
console.log(array3);