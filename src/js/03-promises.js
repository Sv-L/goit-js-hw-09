import { Notify } from 'notiflix/build/notiflix-notify-aio';
Notify.init({
  position: 'center-center',
});

const delayEl = document.querySelector('input[name ="delay"]');
const stepEl = document.querySelector('input[name ="step"]');
const amountEl = document.querySelector('input[name ="amount"]');
const submitBtn = document.querySelector('button[type ="submit"]');

submitBtn.addEventListener('click', onClickSubmitBtn);

function onClickSubmitBtn(e) {
  e.preventDefault();

  const delayValue = Number(delayEl.value);
  const amount = Number(amountEl.value);
  const step = Number(stepEl.value);

  for (let i = 1; i <= amount; i++) {
    let delay = delayValue + step * (i - 1);
    createPromise(i, delay);
  }
}

function createPromise(position, delay) {
  const returnObj = { position: `${position}`, delay: `${delay}` };
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(returnObj);
      } else {
        reject(returnObj);
      }
    }, delay);
  })
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
