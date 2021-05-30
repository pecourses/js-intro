'use strict';

/**
 * Iterable
 */

/**
 * 1 ОБХОД КОЛЛЕКЦИИ
 * for..of - коллекция должна быть итерируемая (Symbol.iterator)
 * collectionName[Symbol.iterator]() => collectionIterator
 * collectionIterator.next() =>{value:..., done: ...}
 */

const arr = [1, 2, 3, 4];

for (const item of arr) {
  console.log('item :>> ', item);
}

const map2 = new Map();
map2.set('Test Testovich', 'Stroiteley 25');
map2.set('Test Testov', 'Stroiteley 5');
map2.set('Rest Testovich', 'Stroiteley 95');

for (const currentValue of map2) {
  console.log('currentValue :>> ', currentValue);
}

const obj = {
  name: 'Ira',
  age: 20,
};

// for (const item of obj) {
//   console.log('item :>> ', item);
// }

for (const key of map2.keys()) {
  console.log('key :>> ', key);
}
// values()
for (const value of map2.values()) {
  console.log('value :>> ', value);
}

const arrForMap = [
  [1, 'dfdsf'],
  [function () {}, {}],
];
const map3 = new Map(arrForMap);

const arrFromMap = Array.from(map2);

/**
 * Iterator
 */
// [1,5] => 1 2 3 4 5
// [10,13] => 10 11 12 13
class Range {
  constructor(from, to) {
    this._from = from;
    this._to = to;
  }
  [Symbol.iterator]() {
    let currentValue = this._from;
    return {
      next: () => {
        if (currentValue > this._to) {
          return {
            value: undefined,
            done: true,
          };
        }
        return {
          value: currentValue++,
          done: false,
        };
      },
    };
  }
}

const range1 = new Range(3, 5);
for (const item of range1) {
  console.log('item :>> ', item);
}
const arr008 = Array.from(range1);

/**
 * 2 Оператор распределения (spread operator) ...
 * ...rest - собирает набор элементов в массив
 * spread-operator - применим к итерируемым кол-м
 * spread-operator - разбирает коллекцию
 */

const arr009 = [1, 2, 3, 4, 5, 6];

const arr010 = [...[arr009]];
const arr011 = [...'qwerty'];
const arr012 = [...map2];

const arr013 = [9, 8, 7, 6, 5, 4];

const arr014 = [...arr009, ...arr013]; /// [1, 2, 3, 4, 5, 6, 9,8,7,6,5,4]
const keys = [...map2.keys(), ...map2.values()];
