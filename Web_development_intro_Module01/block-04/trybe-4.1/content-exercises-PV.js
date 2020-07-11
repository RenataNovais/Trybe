// Exercícios de Condicionais
// Fix the if statement to alert "Hello World" if x is greater than y.
// Fix the if statement to alert "Hello World" if x is greater than y, otherwise alert "Goodbye".
let x = 6;
let y = 20;

if (x > y) {
  console.log("Hello World");
} else {
  console.log("Goodbye");
}

// Create a switch statement that will alert "Hello" if fruits is "banana", and "Welcome" if fruits is "apple".
// Add a section that will alert("Neither") if fruits is neither "banana" nor "apple".

let fruits = "Banana";

switch(fruits) {
  case "Banana":
    console.log("Hello");
  break;

  case "Apple":
    console.log("Welcome");
  break;

  default:
    console.log("Neither");
}