// Agora inverta o lado do triângulo, em relação ao exercício 2. 

// Criar a variável n, numero de linhas e numero máximo de asteriscos.
let n = 5;
// Criar a variável asterisco, como uma string vazia
let asterisco = "";

// Criar a repetição for, que irá rodar n vezes, criando a variável espaços e adicionando mais um espaço a cada repetição
for (let i=1; i<=n; i+=1) {
  let espacos = "";
	for (let j = 1; j<=n-i; j+=1) {
		espacos = espacos + " ";
  } 
  // Atribui a variável asterisco o resultado da soma dele com mais um asterisco a cada repetição do for i<=n
	asterisco = asterisco + "*";
	console.log(espacos+asterisco);
}
