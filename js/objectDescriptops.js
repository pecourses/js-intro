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
});
Object.defineProperty(a, 'prop2', {
  value: 1000,
  writable: true,
  enumerable: true,
  configurable: false,
});
//--------------------------------------------------
//writable: false - нельзя изменять значение,
a.prop2 = 2000;

//---------------------------------------------------
// enumerable: false - не видно в for..in,
for (const key in a) {
  console.log('key :>> ', key);
}

const arr = [1, 2, 3, 4, 5, 6];
for (const index in arr) {
  console.log('index :>> ', index);
}
// Получить дескрипторы всех свойств
console.log(
  'Object.getOwnPropertyDescriptors(arr) :>> ',
  Object.getOwnPropertyDescriptors(arr)
);

//-------------------------------------------------------
// configurable: false - нельзя менять настройки и удалять,

delete a.prop2;

// Сконфигурировать новое свойство у объекта
// Прогнать свойства через for..in
