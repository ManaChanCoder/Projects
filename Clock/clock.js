const hoursElem = document.querySelector('.hours');
const minutesElem = document.querySelector('.minutes');
const secondsElem = document.querySelector('.seconds');
const ampmElem = document.querySelector('.am-pm');


clock = () => {
  let hour = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let ampmValue = 'AM';

  if (hour > 12) {
    hour -= 12;
    ampmValue = 'PM';
  }

  if (hour < 10) {
    hour = '0' + hour;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  hoursElem.innerText = hour;
  minutesElem.innerText = minutes;
  secondsElem.innerText = seconds;
  ampmElem.innerText = ampmValue;
  setTimeout(() => {
    clock();
  }, 1000)
}
clock();