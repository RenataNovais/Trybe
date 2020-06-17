// ordena em ordem alfabética e crescente
var fruit = ['cherries', 'apples', 'bananas'];
fruit.sort(); // ['apples', 'bananas', 'cherries']

// ordena sem função de comparação, separando números que iniciam por 1 dos que iniciam por 2 e não ordem.
var scores = [1, 10, 2, 21]; 
scores.sort(); // [1, 10, 2, 21]
// Observe que 10 vem antes do 2,
// porque '10' vem antes de '2' em ponto de código Unicode.

// ordena as palavras que tem números primeiro e depois sem número, por não ter função de comparação
var things = ['word', 'Word', '1 Word', '2 Words'];
things.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// Em Unicode, números vêem antes de letras maiúsculas,
// as quais vêem antes das minúsculas.

// ordenando objeto com função de comparação dos valores
var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic' },
  { name: 'Zeros', value: 37 }
];
items.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a must be equal to b
  return 0;
}); 
// valor de retorno
// [
//   { name: 'And', value: 45 },
//   { name: 'Edward', value: 21 },
//   { name: 'Magnetic' },
//   { name: 'Sharpe', value: 37 },
//   { name: 'The', value: -12 },
//   { name: 'Zeros', value: 37 }
// ]

// ordenando strings - ordem alfabética e crescente
const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

// ordenando números com função de comparação padrão
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){ return a - b });
console.log(points); // [1, 5, 10, 25, 40, 100]
