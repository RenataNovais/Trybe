// print
cores = ["Verde", "Amarelo", "Azul", "Branco"];
 
function imprimir(item) {
    console.log(item); 
}
 
cores.forEach(imprimir);
// tabuada de 2
numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
function tabuadaDe2(item) {
    console.log(item*2); 
}
 
numeros.forEach(tabuadaDe2);
// somar numeros array
numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
total = 0;
 
function somar(item) {
    total += item; 
}
 
numeros.forEach(somar);
console.log(total);
// array com marcas que iniciam com F
marcas = ["Fiat", "Chevrolet", "Ford", "Volkswagen"]
marcasIniciadasComF = [];
novoIndice = 0;
 
function selecionarMarcas(item, indice) {
    if (marcas[indice].indexOf("F") == 0) {
        marcasIniciadasComF[novoIndice] = marcas[indice];
        novoIndice++;
    }
}
 
marcas.forEach(selecionarMarcas);
console.log(marcasIniciadasComF);
// mudar para letra maiscula
nomes = ["Alberto", "Alex", "Sandro", "Roberta"];
 
function converterParaMaisculo(item, indice) {
    nomes[indice] = nomes[indice].toUpperCase();
}
 
nomes.forEach(converterParaMaisculo);
console.log(nomes);
// encontrar maior nome

57
58
59
60
61
62
63
64
65
66
67
68
//Valor retornado: Verde Amarelo Azul Branco
cores = ["Verde", "Amarelo", "Azul", "Branco"];
 
function imprimir(item) {
    console.log(item); 
}
 
cores.forEach(imprimir);
 
//Valor retornado: 0 2 4 6 8 10 12 14 16 18 20
numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
function tabuadaDe2(item) {
    console.log(item*2); 
}
 
numeros.forEach(tabuadaDe2);
 
//Valor retornado: 55
numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
total = 0;
 
function somar(item) {
    total += item; 
}
 
numeros.forEach(somar);
console.log(total);
 
//Array retornado: ["Fiat", "Ford"]
marcas = ["Fiat", "Chevrolet", "Ford", "Volkswagen"]
marcasIniciadasComF = [];
novoIndice = 0;
 
function selecionarMarcas(item, indice) {
    if (marcas[indice].indexOf("F") == 0) {
        marcasIniciadasComF[novoIndice] = marcas[indice];
        novoIndice++;
    }
}
 
marcas.forEach(selecionarMarcas);
console.log(marcasIniciadasComF);  
 
//Array retornado: ["ALBERTO", "ALEX", "SANDRO", "ROBERTA"]
nomes = ["Alberto", "Alex", "Sandro", "Roberta"];
 
function converterParaMaisculo(item, indice) {
    nomes[indice] = nomes[indice].toUpperCase();
}
 
nomes.forEach(converterParaMaisculo);
console.log(nomes);  
 
//Valor retornado: Ana Roberta
nomes = ["Alberto", "Alex", "Sandro", "Ana Roberta"];
tamanhoNome = 0;
nome = "";
 
function maiorNome(item, indice) {
    if (nomes[indice].length > tamanhoNome) {
        nome = nomes[indice];
        tamanhoNome = nomes[indice].length;
    }
}
 
nomes.forEach(maiorNome);
console.log(nome);
