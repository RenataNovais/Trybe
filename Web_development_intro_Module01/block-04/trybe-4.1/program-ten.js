/* Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto
e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado 
o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada
seja menor que zero.*/

let cost = 10; //valor de custo = 10.000
let sell = 30; //valor de venda = 30.000
let tax = 0.2; //valor de imposto = 2.000

function profit() {
  let profitValue = sell * 1000 - (cost*(1+tax)*1000);
  console.log(profitValue);
}
profit()

if (cost < 0 || sell < 0 || tax < 0) {
  console.log(Error);
}
