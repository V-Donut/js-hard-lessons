'use strict';

const request = ({ url, data = {}, method = 'GET' }) => {
  const params = {
    method: method,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  };

  if (method === 'POST') {
    params.body = data;
  }

  return fetch(url, params).then(response => response.json());
};

const getData = (url) => {
  return request({ url });
};

const sendData = (url, data) => {
  let xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
  xhr.send(data);

  xhr.onload = () => {
    if (xhr.readyState === 4) {
      if (xhr.status != 200 && xhr.status != 201) {
        console.log(`Ошибка ${xhr.status}`);
      } else {
        console.log('Данные отправлены');
      }
    }
  };
};

getData('db.json')
  .then(data => {
    sendData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(data));
  })
  .catch(error => {
    console.log(error);
  });
