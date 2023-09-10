// Get elements
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

// Get date
const date = new Date();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getMilliseconds() * 1000;

function getTime() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  hours.textContent = String(hour).padStart(2, 0);
  minutes.textContent = String(minute).padStart(2, 0);
  seconds.textContent = String(second).padStart(2, 0);
}

// Initial function
setInterval(getTime, 1000);
