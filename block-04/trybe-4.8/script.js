window.onload = function() {
      
  //get items
  let bgColor = localStorage.getItem('backgroundColor');
  let txtColor = localStorage.getItem('textColor');
  let txtSize = localStorage.getItem('textSize');
  let lnSpace = localStorage.getItem('lineSpace');
  let fontF = localStorage.getItem('fontFamily');

  //presets
  function presets() {
    document.querySelectorAll('p').forEach(function(p) {
      p.style.backgroundColor = bgColor;
      p.style.color = txtColor;
      p.style.fontSize = txtSize + 'px';
      p.style.lineHeight = lnSpace + 'px';
      p.style.fontFamily = fontF;
    });
  }
  presets();

  let backgroundPreferences = document.getElementById("bgColorBox");
  backgroundPreferences.addEventListener('change', watchColorPicker);

  function watchColorPicker(event) {
    document.querySelectorAll('p').forEach(function(p) {
      p.style.backgroundColor = event.target.value
    });
    localStorage.setItem('backgroundColor', event.target.value);
  }
  
  let textColorPreferences = document.getElementById("textColor");
  textColorPreferences.addEventListener('change', watchColorPickerText);

  function watchColorPickerText(event) {
    document.querySelectorAll('p').forEach(function(p) {
      p.style.color = event.target.value;
    });
    localStorage.setItem('textColor', event.target.value);
  }
  
  let fontSizeChoice = document.getElementById('textSize');
  fontSizeChoice.addEventListener('change', changeFontSize);

  function changeFontSize(event) {
    let newSize = document.getElementById('textSize').value;
    document.querySelectorAll('p').forEach(function(p) {
      p.style.fontSize = newSize + 'px';
    });
    localStorage.setItem('textSize', event.target.value);
  }

  let lineSpaceChoice = document.getElementById('lineSpace');
  lineSpaceChoice.addEventListener('change', changeLineSpace);

  function changeLineSpace(event) {
    let newSpace = document.getElementById('lineSpace').value;
    document.querySelectorAll('p').forEach(function(p) {
      p.style.lineHeight = newSpace + 'px';
    });
    localStorage.setItem('lineSpace', event.target.value);
  }  
  
  function changeFont(event) {
    document.querySelectorAll('p').forEach(function changeFont(p) {
      let fontFamilyChoice = document.getElementById('textFont').value;
      p.style.fontFamily = fontFamilyChoice;
      localStorage.setItem('fontFamily', fontFamilyChoice);
      console.log(fontFamilyChoice);
    });
  }  
  document.getElementById('textFont').addEventListener('change', changeFont);
  
}