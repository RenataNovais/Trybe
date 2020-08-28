// mutação
const itemPrimario = [1, 2, 3, 4, 5];
let mutacaoTeste = itemPrimario;
mutacaoTeste.push(6);
console.log('mutacaoTeste', mutacaoTeste); // [1, 2, 3, 4, 5, 6]
console.log('itemPrimario', itemPrimario); // [1, 2, 3, 4, 5, 6]

// clonagem
let clonagemTeste = itemPrimario;
const newArr = clonagemTeste.concat(7);
console.log('clonagemTeste', clonagemTeste); // [1, 2, 3, 4, 5, 6]
console.log('itemPrimario', itemPrimario); // [1, 2, 3, 4, 5, 6]
console.log('newArr', newArr);

// metodos como push, splice, sort(), fazem MUTAÇÃO
// metodos como concat, slice, filter() fazem CLONAGEM
