'use strict';

// function Car(brand) {
//   // new: this = {};
//   if (!new.target) {
//     return new Car(brand);
//   }
//   // console.log('new.target :>> ', new.target);
//   this.brand = brand;
//   // new: return this
// }

// const car1 = Car('Tesla');
// // new - переводит ф-ю в режим конструктора

// // const o = Object();

// function sayHello(callback, phrase) {
//   if(typeof callback === 'function') {
//     callback(phrase);
//   }
// }

// sayHello(console.log, 'Hello, Jack!');
// sayHello(alert,  'Hello, Jack!');
// sayHello('Hello, Jack!',  'Hello, Jack!');

// (function(){console.log('a')})();