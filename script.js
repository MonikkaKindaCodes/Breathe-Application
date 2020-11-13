const container = document.getElementById('container');
const text = document.getElementById('text');

//Breath Calculations - Have to match in the JavaScript and the CSS
const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();
function breathAnimation() {
    text.innerText = 'Breathe In!';
    

    setTimeout(() => {
        text.innerText = 'Hold';

    setTimeout(() => {
        text.innerText = 'Breathe Out!';
        
        
    }, holdTime);
    }, breatheTime);
}

setInterval(breathAnimation, totalTime);
