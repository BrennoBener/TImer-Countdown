const newYear = "1 Jan 2023";

const aDay = document.getElementById('days');
const aHour = document.getElementById('hours');
const aMinute = document.getElementById('minutes');
const aSecond = document.getElementById('seconds');

function countdown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();

  const secondsToCount = (newYearDate - currentDate) / 1000;

  const days = Math.floor(secondsToCount / 3600 / 24);
  const hours = Math.floor(secondsToCount / 3600) % 24;
  const minutes = Math.floor(secondsToCount / 60) % 60;
  const seconds = Math.floor(secondsToCount) % 60;

  aDay.innerHTML = timeFormat(days);
  aHour.innerHTML = timeFormat(hours);
  aMinute.innerHTML = timeFormat(minutes);
  aSecond.innerHTML = timeFormat(seconds);
}

function timeFormat (time) {
  return time < 10 ? (`0${time}`) : time;
}

countdown();
setInterval(countdown, 1000);