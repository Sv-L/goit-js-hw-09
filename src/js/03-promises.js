import { Notify } from 'notiflix/build/notiflix-notify-aio';

const delayEl = document.querySelector('input[name ="delay"]');
const stepEl = document.querySelector('input[name ="step"]');
const amountEl = document.querySelector('input[name ="amount"]');
const submitBtn = document.querySelector('button[type ="submit"]');
const delayValue = delayEl.value;
const amount = amountEl.value;
const step = stepEl.value;

submitBtn.addEventListener('click', onClickSubmitBtn);

function onClickSubmitBtn() {
  for (let i = 1; i <= amount; i++) {
    let delay = delayValue + step * (i - 1);
    createPromise(i, delay);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return (promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
        );
      } else {
        reject(Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
      }
    }, delay);
  }));
}
