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

  return fetch(url, params)
    .then(response => response.json());
};

const getData = (url) => {
  return request({ url });
};

const sendData = (url, data) => {
  return request({ url, data, method: 'POST' });
};

getData('db.json')
  .then(data => {
    sendData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(data))
      .then(response => {
        console.log(response);
      })
      .catch(errorMessage => {
        console.log(errorMessage);
      });
  })
  .catch(error => {
    console.log(error);
  });
