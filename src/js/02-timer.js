import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
Notify.init({
  position: 'center-top',
});
import '../css/timer.css';

let timerId;
let selectedDate = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (timerId) {
      clearInterval(timerId);
      clearInputValue();
    }
    selectedDate = selectedDates[0];
    checkselectedDate(selectedDates[0]);
  },
};
const inputDatetimePickerEl = document.querySelector('input#datetime-picker');
const startBtnEl = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

flatpickr(inputDatetimePickerEl, options);

startBtnEl.disabled = true;

function checkselectedDate(data) {
  if (data <= Date.now()) {
    Notify.failure('Please choose a date in the future');
    startBtnEl.disabled = true;
  } else {
    startBtnEl.disabled = false;
    startBtnEl.addEventListener('click', onClickStartBtn);
  }
}

function onClickStartBtn() {
  updateInputValue();
  timer();
  startBtnEl.disabled = true;
  startBtnEl.removeEventListener('click', onClickStartBtn);
}

function updateInputValue() {
  let timeTodateMs = selectedDate - Date.now();
  let time = convertMs(timeTodateMs);
  daysEl.textContent = addLeadingZero(time.days);
  hoursEl.textContent = addLeadingZero(time.hours);
  minutesEl.textContent = addLeadingZero(time.minutes);
  secondsEl.textContent = addLeadingZero(time.seconds);
}

function clearInputValue() {
  daysEl.textContent = '00';
  hoursEl.textContent = '00';
  minutesEl.textContent = '00';
  secondsEl.textContent = '00';
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function timer() {
  timerId = setInterval(() => {
    if (selectedDate - Date.now() >= 0) {
      updateInputValue();
    } else {
      clearInterval(timerId);
    }
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
