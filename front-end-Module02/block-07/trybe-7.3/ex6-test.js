/* A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, 
retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, 
retorna o próprio número caso não seja divísivel por 3 ou 5 e retorna false caso num não seja um número
Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado*/

const assert = require('assert');

function myFizzBuzz(num) {
  // verificar se o parametro é numero
  if (typeof(num) != 'number') {
    return false;
  }
  // criar condições utilizando divisor e resto para definir a string de saída.
  if(num % 3 == 0 && num % 5 == 0) {
    return 'fizzbuzz';
  } else if (num % 3 == 0 && num % 5 != 0) {
    return 'fizz';
  } else if (num % 3 != 0 && num % 5 == 0) {
    return 'buzz';
  } else if (num % 3 != 0 && num % 5 != 0) {
    return num;
  } 
}

console.log(myFizzBuzz(15));
console.log(myFizzBuzz(6));
console.log(myFizzBuzz(10));
console.log(myFizzBuzz(7));
console.log(myFizzBuzz('sete'));

// verificar se a função existe
assert.strictEqual(typeof(myFizzBuzz), 'function');
// verifica se a função funciona para um numero divisível por 3 e 5.
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz', "A função não funciona");
// verifica se a função funciona para numero divisivel apenas por 3 retornando fizz;
assert.strictEqual(myFizzBuzz(6), 'fizz', "A função não funciona");
// verifica se a função funciona para numero divisivel apenas por 5 retornando buzz;
assert.strictEqual(myFizzBuzz(10), 'buzz', "A função não funciona");
// verfica se a função funciona para numero não divisivel por 3 e 5 retornando proprio numero;
assert.strictEqual(myFizzBuzz(7), 7, "A função não funciona");
// verifica se a função retorna falso caso o parametro não seja um numero; 
assert.strictEqual(myFizzBuzz('sete'), false, "O parâmetro não é um número");
