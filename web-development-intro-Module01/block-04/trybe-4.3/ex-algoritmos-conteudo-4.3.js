//Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. 
//Caso seja igual ou menor que 15, imprima a mensagem: “valor menor que 16”:

let fruits = [3, 4, 10, 1, 12];
let fruitsQuanty = 0;

for (let i = 0; i < fruits.length; i += 1) {
    fruitsQuanty += fruits[i]; 
}

if (fruitsQuanty > 15) {
    console.log(fruitsQuanty);
} else {
    console.log("Valor menor que 16");
}