const page = document.getElementById('page');

const declension = function (num, form1, form2, form3) {
  return num % 10 == 1 && num % 100 != 11 ? form1 : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? form2 : form3;
};

const addZero = function (num) {
  return num.toString().length === 1 ? '0' + num : num;
};

setInterval(function() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();
  const dayWeek = now.getDay();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  const dayWeeks = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

  const format1 = 'Сегодня ' + dayWeeks[dayWeek] + ', ' + day + ' ' + months[month] + ' ' + year + ' года, ' + hours + ' ' + declension(hours, 'час', 'часа', 'часов') + ' ' + minutes + ' ' + declension(minutes, 'минута', 'минуты', 'минут') + ' ' + seconds + ' ' + declension(seconds, 'секунда', 'секунды', 'секунд');

  const format2 = addZero(day) + '.' + addZero(month + 1) + '.' + year + ' - ' + addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds);

  page.innerHTML = format1 + '<br>' + format2;
}, 1000);
