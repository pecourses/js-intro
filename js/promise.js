'use strict';

fetch('./../dbUser.json')
  .then(response => response.json())
  .then(data => {
    console.log('data :>> ', data);
  })
  .catch(err => {
    console.log('error:');
    console.error(err);
  })
  .finally(() => {
    console.log('in finally');
  });

// new Promise(executor).then().catch();

// function executor(resolve, reject) {
//   //resolve(data);
//   //reject(error);
// }

// Промисифицировать setTimeout()
// setTimeout(callback, 1000)
delay(5000).then(() => {
  console.log('Hi after 5s');
});

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

// console.log('fetch :>> ', fetch('./../dbUser.json'));
// fetch('./../dbUser.json')
//   .then(response => response.json())
//   .then(data => console.log('data :>> ', data))
//   .catch(e => console.error(e));

//fetch(url, callback);

const isEnoughMoney = false;

const promiseCar = new Promise((resolve, reject) => {
  if (isEnoughMoney) {
    const newCar = { brand: 'BMW', model: 'M3' };
    resolve(newCar);
  } else {
    reject(new Error('You have not enough money('));
  }
});
promiseCar
  .then(data => {
    console.log('data :>> ', data);
  })
  .catch(err => {
    console.log('err :>> ', err);
  });

// Написать промис, который в зависимости от рандомного значения
// <=0.5 завершается успешно
// > 0.5 завершается ошибкой

const rand = Math.random();
console.log(rand);

const promiseRand = new Promise((resolve, reject) => {
  if (rand <= 0.5) {
    resolve('Success');
  } else {
    reject(new Error('Wrong'));
  }
});

promiseRand
  .then(string => {
    console.log(string);
  })
  .catch(err => {
    console.log(err);
  });
