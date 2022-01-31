'use strict';

const daysWeekRu = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
const daysWeekEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

let lang = prompt('Выберите язык: ru или en');

if (lang === 'ru') {
   console.log(daysWeekRu);
} else if (lang === 'en') {
   console.log(daysWeekEn);
} else {
   console.log('Что-то пошло не так!');
}

switch (lang) {
  case 'ru':
    console.log(daysWeekRu);
    break;
  case 'en':
    console.log(daysWeekEn);
    break;
  default:
    console.log('Что-то пошло не так!');
    break;
}

const arr = {'ru': ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'], 'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']};
console.log(arr[lang]);


let namePerson = prompt('Как Вас зовут?');
let position = (namePerson === 'Артем') ? 'директор' : (namePerson === 'Александр') ? 'преподаватель' : 'студент';
console.log(position);
