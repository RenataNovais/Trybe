const dia = document.getElementById('dia-teste');
const mes = document.getElementById('mes-teste');
const ano = document.getElementById('ano-teste');

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