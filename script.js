'use strict';

const books = document.querySelectorAll('.book');
books[1].after(books[0]);
books[5].after(books[2]);
books[4].after(books[3]);

const body = document.getElementsByTagName('body')[0];
body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

const bookTitle = books[4].querySelector('h2 a');
bookTitle.innerHTML = 'Книга 3. this и <span style="color: black">Прототипы</span> Объектов';

const adv = document.querySelector('.adv');
adv.remove();

const chapter3 = books[0].querySelectorAll('li');
chapter3[9].after(chapter3[2]);
chapter3[8].after(chapter3[7]);
chapter3[8].after(chapter3[4]);
chapter3[4].after(chapter3[5]);

const chapter5 = books[5].querySelectorAll('li');
chapter5[1].after(chapter5[9]);
chapter5[8].before(chapter5[5]);
chapter5[6].before(chapter5[2]);

const lastBook = document.querySelectorAll('.book ul')[5];
const newElem = document.createElement('li');
newElem.textContent = 'Глава 8: За пределами ES6';
lastBook.append(newElem);
const chapter6 = books[2].querySelectorAll('li');
chapter6[9].before(chapter6[10]);
