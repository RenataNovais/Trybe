// Use comments to describe the correct data type of the following variables:

var length = 16;          // number

var lastName = "Johnson"; // string

var x = {
  firstName: "John",
  lastName: "Doe"
};                        // object

let valueOne = "lucas";
let valueTwo = "tunico";
let valueThree = 3.14;
let valueFour = NaN;
let valueFive = false;
let valueSix = undefined;
let valueSeven = function() {};
let valueEight = null;

// Exiba o valor de valueThree
console.log(valueThree);
// Exiba o valor de valueFour
console.log(valueFour);

// Agora vamos fazer a mudança de tipo para ver como funciona a tipagem dinâmica.
// Troque o valor de valueTwo para um number e depois exiba seu novo tipo na linha comentada a baixo.
valueTwo = 24;
console.log(valueTwo);
console.log(typeof(valueTwo));
// Troque o valor de valueEight por um boolean e depois exiba seu novo tipo na linha comentada a baixo.
valueEight = true;
console.log(valueEight);
console.log(typeof(valueEight));

// Operadores matematicos
// Multiply 10 with 5, and alert the result:
console.log(10 * 5);
// Divide 10 by 2 and alert the result;
console.log(10 / 2);
// Alert the remainder when 15 is divided by 9.
console.log(15 % 9);
// Use the correct assignment operator that will result in x being 15 (same as x = x + y).
x = 10;
y = 5;
x += y;
console.log(x)
// Use the correct assignment operator that will result in x being 50 (same as x = x * y).
x *= y;
console.log(x);