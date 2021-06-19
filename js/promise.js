'use strict';
console.log('fetch :>> ', fetch('./../dbUser.json'));
fetch('./../dbUser.json')
  .then(response => response.json())
  .then(data => console.log('data :>> ', data))
  .catch(e => console.error(e));

const isEnoughMoney = false;

const promiseCar = new Promise((resolve, reject) => {
  if (isEnoughMoney) {
    const newCar = { brand: 'BMW', model: 'M3' };
    resolve(newCar);
  } else {
    reject(new Error('You have not enough money('));
  }
});
