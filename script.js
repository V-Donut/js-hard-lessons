const trimString = function (str) {
  if (typeof str !== 'string') {
    console.log('В функцию передана не строка!');
    return;
  } 

  str = str.trim();

  if (str.length > 30) {
    return str.slice(0, 29) + '...';
  }
    
  return str;
};

console.log(trimString(20));
console.log(trimString('Тестовое сообщение'));
console.log(trimString('Привет! Я робот. Я могу печатать строчки длиной больше тридцати символов!'));
