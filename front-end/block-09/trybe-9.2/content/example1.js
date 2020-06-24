const assert = require('assert');

const pushNumber = (list, number) => list.push(number);

let numbers = [];

pushNumber(numbers, 1);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

assert.deepEqual(numbers, [1, 2, 3]);

numbers;

/////// 
const pushNumber2 = (list, number) => list.push(number);

let numbers2 = [];

setTimeout(() => pushNumber2(numbers2, 1), 3000);
pushNumber2(numbers2, 2);
pushNumber2(numbers2, 3);

setTimeout(() => assert.deepEqual(numbers2, [2, 3, 1]), 3000); // essa validação funciona;
setTimeout(() => console.log(numbers2), 3000);
numbers2;
// assert.deepEqual(numbers2, [1, 2, 3]); // essa validação falha, pois numbers2 no momento inicial é [2, 3]
