// free Code Camp
// ES6: Use the Rest Parameter with Function Parameters
// In order to help us create more flexible functions,
// ES6 introduces the rest parameter for function parameters. 
// With the rest parameter, you can create functions that take a variable number of arguments.
// These arguments are stored in an array that can be accessed later from inside the function.
// The rest parameter eliminates the need to check the args array and allows us to 
// apply map(), filter() and reduce() on the parameters array.

// Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.
// function to be modified:
// const sum = (x, y, z) => {
//   const args = [x, y, z];
//   return args.reduce((a, b) => a + b, 0);
// }

// answer:
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(0, 1, 2)); // returns 3
console.log(sum(1, 2, 3, 4)); // returns 10
console.log(sum(5)); // returns 5
console.log(sum()); // returns 0