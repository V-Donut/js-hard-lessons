'use strict';

const circle = document.querySelector('.circle');
const start = document.getElementById('start');
const reset = document.getElementById('reset');

let idInterval;
let countLeft = 0;
let countTop = 0;
let active = true;

const animate = () => {
  idInterval = requestAnimationFrame(animate);

  if (countLeft < 200) {
    countLeft++;
    circle.style.left = countLeft + 'px';
  } else if (countTop < 200) {
    countTop++;
    circle.style.top = countTop + 'px';
  } else if (countLeft < 400) {
    countLeft++;
    circle.style.left = countLeft + 'px';
  } else if (countTop < 400) {
    countTop++;
    circle.style.top = countTop + 'px';
  } else {
    cancelAnimationFrame(idInterval);
  }
};
animate();

start.addEventListener('click', () => {
  if (active) {
    cancelAnimationFrame(idInterval);
    active = false;
  } else {
    idInterval = requestAnimationFrame(animate);
    active = true;
  }
});

reset.addEventListener('click', () => {
  cancelAnimationFrame(idInterval);
  countLeft = 0;
  countTop = 0;
  circle.style.top = 0;
  circle.style.left = 0;
});