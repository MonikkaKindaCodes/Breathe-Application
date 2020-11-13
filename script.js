const container = document.getElementById('container');
const text = document.getElementById('text');

//Breath Calculations - Have to match in the JavaScript and the CSS
const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

function breathAnimation() {
    text.innerText = 'Breathe In!';
    container.className = 'container grow';
    setTimeout(() => {
      text.innerText = 'Hold';
  
      setTimeout(() => {
        text.innerText = 'Breathe Out!';
        container.className = 'container shrink';
      }, holdTime);
    }, breatheTime);
  }
setInterval(breathAnimation, totalTime);
