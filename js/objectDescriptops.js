'use strict';

const a = {};
a.prop = 555;
// Object.defineProperty(a, 'prop', {
//   value: 555,
//   writable: true,
//   enumerable: true,
//   configurable: true,
// });

Object.defineProperty(a, 'prop2', {
  value: 1000,
  writable: true,
  enumerable: true,
  configurable: false,
});
//writable: true,
a.prop2 = 2000;
// enumerable: false,
for (const key in a) {
  console.log('key :>> ', key);
}

const arr = [1, 2, 3, 4, 5, 6];
for (const index in arr) {
  console.log('index :>> ', index);
}

console.log(
  'Object.getOwnPropertyDescriptors(arr) :>> ',
  Object.getOwnPropertyDescriptors(arr)
);

// configurable: true,

delete a.prop2;

// Сконфигурировать новое свойство у объекта
// Прогнать свойства через for..in
