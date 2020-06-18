// passando valor para não retornar UNDEFINED
// sem default-param (com condicional ternário)
// function hello (name) {
//   name = typeof name !== 'undefined' ? name : 'World';
//   console.log('Hello ' + name);
// }

// hello('People'); // > Hello People
// hello(); // > Hello World

// com DEFAULT-PARAMS
function hello (name = 'World') {
  console.log(`Hello ${name}`);
}

hello('People'); // > Hello People
hello(); // > Hello World
console.log('------------');

// test com undefined
function say (message = 'Hello', name = 'World') {
  console.log(`${message} ${name}`);
}

say('Hey', 'People'); // > Hey People
say(undefined, 'People'); // > Hello People
say('Hi', undefined); // > Hi World
say(undefined, undefined); // > Hello World
say(); // > Hello World
say('Hey'); // Hey World (say(, 'People) --> não funciona - erro)
console.log('------------');

// free code camp
// Check out this code:

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous
// The default parameter kicks in when the argument is not specified (it is undefined).
// As you can see in the example above, the parameter name will receive
// its default value "Anonymous" when you do not provide a value for the parameter.
// You can add default values for as many parameters as you want.

// Modify the function increment by adding default parameters so 
// that it will add 1 to number if value is not specified.
// original: const increment = (number, value) => number + value;
const increment = (number, value = 1) => number + value;
console.log(increment()); // returns NaN porque number não foi definido
console.log(increment(5, 2)); // retorna 7
console.log(increment(5)); // retorna 6
