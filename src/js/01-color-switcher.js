const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let bgColorChangeId = null;

startBtn.addEventListener('click', onClickStartBtn);

function onClickStartBtn() {
  bgColorChange();
  bgColorChangeId = setInterval(bgColorChange, 1000);
  startBtn.disabled = true;
  stopBtn.addEventListener('click', onClickStopBtn);
}

function onClickStopBtn() {
  clearInterval(bgColorChangeId);
  startBtn.disabled = false;
  stopBtn.removeEventListener('click', onClickStopBtn);
}

function bgColorChange() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
