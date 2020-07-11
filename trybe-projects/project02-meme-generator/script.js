const textInput = document.getElementById('text-input');
const textInputTop = document.getElementById('text-input-top');
const memeInput = document.getElementById('meme-insert');
const memeText = document.getElementById('meme-text');
const memeTextTop = document.getElementById('meme-text-top');
const memeImage = document.getElementById('meme-image');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const memeContainer = document.getElementById('meme-image-container');
const memeOne = document.getElementById('meme-1');
const memeTwo = document.getElementById('meme-2');
const memeThree = document.getElementById('meme-3');
const memeFour = document.getElementById('meme-4');

function getText() {
  memeText.innerHTML = textInput.value;
  memeTextTop.innerHTML = textInputTop.value;
}
textInput.addEventListener('keyup', getText);
textInputTop.addEventListener('keyup', getText);

memeInput.addEventListener('input', function () {
  memeImage.src = URL.createObjectURL(this.files[0]);
});

function changeBorderF() {
  memeContainer.style.border = '3px dashed red';
}
fireButton.addEventListener('click', changeBorderF);

function changeBorderW() {
  memeContainer.style.border = '5px double blue';
}
waterButton.addEventListener('click', changeBorderW);

function changeBorderE() {
  memeContainer.style.border = '6px groove green';
}
earthButton.addEventListener('click', changeBorderE);

memeOne.addEventListener('click', function () {
  memeImage.src = 'imgs/meme1.png';
});

memeTwo.addEventListener('click', function () {
  memeImage.src = 'imgs/meme2.png';
});

memeThree.addEventListener('click', function () {
  memeImage.src = 'imgs/meme3.png';
});

memeFour.addEventListener('click', function () {
  memeImage.src = 'imgs/meme4.png';
});
