const btnEnter = document.getElementById('button-login');
const inputEmail = document.getElementById('user-email-phone');

btnEnter.addEventListener('click', function () {
  alert(inputEmail.value);
});
