/* Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.*/

let nota; //Informe a nota em porcentagem//
nota = 10;
switch (true) {
  case (nota <= 100 && nota >= 90):
    console.log('A');
  break;

  case (nota < 90 && nota >= 80):
    console.log('B');
  break;

  case (nota < 80 && nota >= 70):
    console.log('C');
  break;

  case (nota < 70 && nota >= 60):
    console.log('D');
  break;

  case (nota < 60 && nota >= 50):
    console.log('E');
  break;

  case (nota < 50 && nota > 0):
    console.log('F');
  break;

  default:
    console.log(Error)
}