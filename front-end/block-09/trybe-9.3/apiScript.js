const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

// send to HMTL
const htmlSec = document.getElementById('jokeContainer');
const sendJoke = (data) => {
  htmlSec.innerText = data.joke;
}

const fetchJoke = () => {
  // Adicionar lógica aqui!  
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => sendJoke(data));
};

window.onload = () => fetchJoke();