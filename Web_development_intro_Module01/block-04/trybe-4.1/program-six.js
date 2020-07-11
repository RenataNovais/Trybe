/* Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que
ela faz. Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com
letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras
minúsculas (lower case). Se a peça passada for inválida, o programa deve retornar
uma mensagem de erro. Exemplo: bishop -> diagonals*/

let chessPiece; //defina a peça desejada.
chessPiece = 'king';
switch (chessPiece) {
  case 'pawn':
    console.log('forward vertically and diagonally, one square');
  break;

  case 'bishop':
    console.log('diagonals');
  break;

  case 'knight':
    console.log('L shape');
  break;

  case 'rook':
    console.log('horizontally or vertically');
  break;

  case 'queen':
    console.log('diagonally, horizontally or vertically');
  break;

  case 'king':
    console.log('one square in any direction');
  break;

  default:
    console.log(Error);
}