'use strict';

const page = document.getElementById('page');

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const date = new Date();
let dayWeek = date.getDay() - 1;
if (dayWeek === -1) {
  dayWeek = 6;
}

let output = '';
for (let i = 0; i < week.length; i++) {
  if (i > 4 && i == dayWeek) {
    output += '<b><i>' + week[i] + '</i></b>' + '<br>';
  } else if (i > 4) {
    output += '<i>' + week[i] + '</i>' + '<br>';
  } else if (i == dayWeek) {
    output += '<b>' + week[i] + '</b>' + '<br>';
  } else {
    output += week[i] + '<br>';
  }
}

page.innerHTML = output;
