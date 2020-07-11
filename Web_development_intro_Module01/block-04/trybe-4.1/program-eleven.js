/*Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS 
e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, 
use as seguintes referências:
INSS
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

IR
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.*/

let salarioBruto = 3000;
let salarioSemInss = 0;
let salarioLiquido = 0;
let inss = 0;
let ir = 0;

calculoSemInss();
function calculoSemInss() {
  if (salarioBruto > 5189.82) {
    inss = 570.88;
  } else if (salarioBruto <= 5189.82 && salarioBruto >= 2594.93) {
    inss = 0.11 * salarioBruto;
  } else if (salarioBruto <= 2594.92 && salarioBruto >= 1556.95) {
    inss = 0.09 * salarioBruto;
  } else if (salarioBruto > 0 && salarioBruto <= 1556.94) {
    inss = 0;
  }
  salarioSemInss = salarioBruto - inss;
}

calculoSemIR();
function calculoSemIR() {
  if (salarioSemInss <= 1903.98) {
    ir = 0;
  } else if (salarioSemInss >= 1903.99 && salarioSemInss <= 2826.65) {
    ir = (salarioSemInss * 0.075) - 142.80;
  } else if (salarioSemInss >= 2826.66 && salarioSemInss <= 3751.05) {
    ir = (salarioSemInss * 0.15) - 354.80;
  } else if (salarioSemInss >= 3751.06 && salarioSemInss <= 4664.68) {
    ir = (salarioSemInss * 0.225) - 636.13;
  } else if (salarioSemInss > 4664.68) {
    ir = (salarioSemInss * 0.275) - 869.36;
  }
  salarioLiquido = salarioSemInss - ir;
  console.log(salarioLiquido);
}
