/* Faça um programa que defina três variáveis com os valores dos três ângulos internos de um
triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.*/

let ang1 = 90; ang2 = 45; ang3 = 45;

if (ang1 > 0 && ang2 > 0 && ang3 > 0) {
  console.log();
} else {
  console.log(Error);
}

if (ang1 + ang2 + ang2 == 180) {
  console.log("true");
} else {
  console.log("false");
}