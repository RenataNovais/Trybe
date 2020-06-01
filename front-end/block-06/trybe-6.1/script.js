const dia = document.getElementById('dia-teste');
const mes = document.getElementById('mes-teste');
const ano = document.getElementById('ano-teste');
const curriculoResult = document.getElementById('curriculo-preenchido');

dia.addEventListener('change', function() {
  if  (dia.value < 1 || dia.value > 31) {
    alert('This is not a valid day. Please write something between 1 and 31');
  }
});

mes.addEventListener('change', function () {
  if (mes.value < 1 || mes.value > 12) {
    alert('This is not a valid month. Please write something between 1 and 12');
  } 
});

ano.addEventListener('change', function () {
  if (ano.value < 0) {
    alert('This is not a valid year.');
  }
});
//não entendi direito como funciona esse preventDefault()
function stopDefAction(evt) {
  evt.preventDefault();
}
  
document.getElementById('botao-enviar').addEventListener(
  'click', stopDefAction, false
);
//encerra aqui o preventDefault(). O que faz o false?
const name = document.getElementById('name');
const email = document.getElementById('email');
const cpf = document.getElementById('cpf');
const endereco = document.getElementById('endereco');
const cidade = document.getElementById('cidade');
const estado = document.getElementById('estado');
const cargo = document.getElementById('cargo');
const descricaoCargo = document.getElementById('descricao-cargo');
const data = document.getElementById('data-inicio');

let nomePerfil = document.getElementById('nome-perfil');
let emailPerfil = document.getElementById('email-perfil');
let cpfPerfil = document.getElementById('cpf-perfil');
let enderecoPerfil = document.getElementById('endereco-perfil');
let cidadePerfil = document.getElementById('cidade-perfil');
let cargoPerfil = document.getElementById('cargo-perfil');
let descricaoCargoPerfil = document.getElementById('descricao-cargo-perfil');
let dataPerfil = document.getElementById('data-inicio-perfil');


const botaoEnviar = document.getElementById('botao-enviar');
botaoEnviar.addEventListener('click', function() {
  nomePerfil.innerHTML = name.value;
  emailPerfil.innerHTML = email.value;
  cpfPerfil.innerHTML = cpf.value;
  enderecoPerfil.innerHTML = endereco.value;
  cidadePerfil.innerHTML = cidade.value + "/" + estado.value;
  cargoPerfil.innerHTML = cargo.value;
  descricaoCargoPerfil = descricaoCargo.value;
  dataPerfil = data.value;
});