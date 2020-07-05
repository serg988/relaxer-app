const container = document.getElementById('container');
const text = document.getElementById('text');
const input = document.querySelector('input');
const pointer = document.querySelector('.pointer-container');
const start = document.getElementById('start');
let timer;
let breathTimer;
let holdTimer

function initApp(){
  start.classList.add('hide')
  document.querySelector('.range-wrap').classList.add('show')
  startApp(7)
}
function startApp(input){

  let totalTime = input * 1000
  resetAnimation();
  timer = setInterval(breathAnimation, totalTime);

  document.documentElement.style.setProperty('--animationTime', `${totalTime/1000}s`);
  document.documentElement.style.setProperty('--transTime', `${totalTime/3000}s`);
  const breatheTime = (totalTime / 5) * 2;
  const holdTime = totalTime / 5;

  breathAnimation();

  function breathAnimation() {
    clearTimeout(breathTimer);
    clearTimeout(holdTimer);
    text.innerText = 'Breathe In!';
    container.className = 'container grow';
    console.log(holdTime)

    breathTimer = setTimeout(() => {
      text.innerText = 'Hold';

      holdTimer = setTimeout(() => {
        text.innerText = 'Breathe Out!';
        container.className = 'container shrink';
      }, holdTime);
    }, breatheTime);
  }
}

function resetAnimation () {
  clearInterval(timer);

  pointer.classList.remove('rotate')
  void pointer.offsetWidth;
  pointer.classList.add('rotate')

  container.classList.remove('grow')
  void pointer.offsetWidth;
  container.classList.add('grow')

  container.classList.remove('shrink')
  void pointer.offsetWidth;
}

input.addEventListener('change', (e) => {
  const input = e.target.value;
  console.log(input)
  startApp(input)
})

start.addEventListener('mousedown', initApp)
