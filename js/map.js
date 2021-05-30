'use strict';

// словарь (ассоциативный массив)
// данные хранятся как пары КЛЮЧ-ЗНАЧЕНИЕ
// КЛЮЧИ должны быть уникальны

// size
// set(key, value)
// get(key) => value
// has(key) => boolean
// delete(key) => boolean
// clear()
// keys() => MapKeyIterator
// values() => MapValueIterator
// enrties() => MapEntryIterator
// forEach() =>

const map1 = new Map();

map1.set('key1', 'value1');
// console.log('map1.get("key1") :>> ', map1.get('key1'));

const vocabulary = new Map();

vocabulary.set('cat', 'кошка');
vocabulary.set('dog', 'собака');
vocabulary.set('cat', 'кот');
vocabulary.set('run', 'бегать');

const engStr = 'dog run cat'; // => 'собака бегать кошка'

console.log('translator(engStr) :>> ', translator(engStr));

function translator(str) {
  const engWords = engStr.split(' ');
  const rusWords = engWords.map(item => vocabulary.get(item));
  const rusStr = rusWords.join(' ');
  return rusStr;
}

const translator = str =>
  str
    .split(' ')
    .map(item => vocabulary.get(item))
    .join(' ');

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
// console.log("vocabulary.get('dog') :>> ", vocabulary.get('dog'));
// console.log('vocabulary.has("cat") :>> ', vocabulary.has('cat'));

// vocabulary.delete('dog');
// vocabulary.clear();

// // написать ас. массив фамилия - адрес
// // 1 Узнать адрес сотрудника Testovich
// // 2 Определить, имеется ли адрес сотрудника Testovich2

// const map2 = new Map();
// map2.set('Test Testovich', 'Stroiteley 25');
// map2.set('Test Testov', 'Stroiteley 5');
// map2.set('Rest Testovich', 'Stroiteley 95');

// console.log(map2.get('Test Testovich'));
// console.log(map2.has('Test Testovich'));

// for (const currentValue of map2) {
//   console.log('currentValue :>> ', currentValue);
// }

// for (const key of map2.keys()) {
//   console.log('key :>> ', key);
// }

// for (const value of map2.values()) {
//   console.log('value :>> ', value);
// }

// const arrForMap = [
//   [1, 'dfdsf'],
//   [function () {}, {}],
// ];

// const map3 = new Map(arrForMap);

// const arrFromMap = Array.from(map2);

// const arr012 = [...map2];

// const keys = [...map2.keys(), ...map2.values()];

// function forEachCallback(value, key, map) {
//   console.log('value ', value);
//   console.log('key :>> ', key);
// }

// map2.forEach(forEachCallback);
