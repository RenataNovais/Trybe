
let posicaoRainhaLinha = 4;
let posicaoRainhaColuna = 4;

let posicaoPecaLinha = 1;
let posicaoPecaColuna = 7;

// Variável que indica o sucesso de ataque
let ataqueBemSucedido = false;

// Verificação do ataque na mesma linha
if (posicaoRainhaLinha === posicaoPecaLinha) {
  ataqueBemSucedido = true;
}

// Verificação do ataque na mesma coluna
if (posicaoRainhaColuna === posicaoPecaColuna) {
  ataqueBemSucedido = true;
}

// Verificação de ataque na diagonal superior direita
for (let i = 1; i < 8; i += 1) {
	// Move a rainha para próxima posição do tabuleiro
	let linhaRainha = posicaoRainhaLinha + i;
	let colunaRainha = posicaoRainhaColuna + i;
	// Verifica se saiu do tubuleiro
	if (linhaRainha > 8 || colunaRainha > 8) {
		break;
	}
// Verifica se a posição da rainha é igual a da peça
	if (posicaoPecaLinha === linhaRainha && posicaoPecaColuna === colunaRainha) {
		ataqueBemSucedido = true;
		break;
	}
}

// Diagonal inferior esquerda
for (let i = 1; i < 8; i += 1) {
	// Move a rainha para posição inferior do tabuleiro
	let linhaRainha = posicaoRainhaLinha - i;
	let colunaRainha = posicaoRainhaColuna - i;
// Verifica se saiu do tubuleiro
	if (linhaRainha < 1 || colunaRainha < 1) {
		break;
	}
// Verifica se a posição da rainha é igual a da peça
	if (posicaoPecaLinha === linhaRainha && posicaoPecaColuna === colunaRainha) {
		ataqueBemSucedido = true;
		break;
	}
}

// Verificação de ataque na diagonal superior esquerda
for (let i = 1; i < 8; i += 1) {
	// Move a rainha para próxima posição do tabuleiro
	let linhaRainha = posicaoRainhaLinha + i;
	let colunaRainha = posicaoRainhaColuna - i;
	// Verifica se saiu do tubuleiro
	if (linhaRainha > 8 || colunaRainha < 1) {
		break;
	}
// Verifica se a posição da rainha é igual a da peça
	if (posicaoPecaLinha === linhaRainha && posicaoPecaColuna === colunaRainha) {
		ataqueBemSucedido = true;
		break;
	}
}

// Verificação de ataque na diagonal inferior direita
for (let i = 1; i < 8; i += 1) {
	// Move a rainha para próxima posição do tabuleiro
	let linhaRainha = posicaoRainhaLinha - i;
	let colunaRainha = posicaoRainhaColuna + i;
	// Verifica se saiu do tubuleiro
	if (linhaRainha < 1 || colunaRainha > 8) {
		break;
	}
// Verifica se a posição da rainha é igual a da peça
	if (posicaoPecaLinha === linhaRainha && posicaoPecaColuna === colunaRainha) {
		ataqueBemSucedido = true;
		break;
	}
}

// Imprime o sucesso ou não do ataque
console.log(ataqueBemSucedido);