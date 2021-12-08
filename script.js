'use strict';

const hourElem = document.querySelector('.clockHour');
const minuteElem = document.querySelector('.clockMinute');
const shiftElem = document.querySelector('.shift');

const runTheClock = function () {
  const now = new Date();
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;

  let hourTime = now.getHours();
  let ampm = hourTime > 12 ? 'PM' : 'AM';
  hourTime = hourTime % 12;
  hourTime = hourTime < 10 ? '0' + hourTime : hourTime;
  let minuteTime = now.getMinutes();
  minuteTime = minuteTime < 10 ? '0' + minuteTime : minuteTime;

  hourElem.textContent = hourTime ? hourTime : 12;
  minuteElem.textContent = minuteTime;
  shiftElem.textContent = ampm;
};

setInterval(runTheClock, 1000);
