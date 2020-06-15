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
// limpar os campos do forms
const forms = document.getElementById('forms');
const clearAllButton = document.getElementById('clear-forms');

clearAllButton.addEventListener('click', function () {
  forms.reset(); 
});
