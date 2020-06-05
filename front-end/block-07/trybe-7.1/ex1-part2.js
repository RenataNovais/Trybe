/* Crie uma função que receba um número e retorne seu fatorial.

Na matemática, o fatorial de um número não negativo N, com a notação N!, 
é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . 
Spoiler: É possível resolver com uma linha.*/

let fatorial = 1;
function factorialF(N) {
  for (let i = 1; i <= N; i += 1) {
    fatorial *= i
  }
  return fatorial;
}

console.log(factorialF(4));
