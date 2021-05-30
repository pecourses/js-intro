'use strict';

/**
 * Итерируемая коллекция уникальных значений
 */

// size
// add()
// has()
// values()
// entries()
// clear()
// forEach()

const set1 = new Set();
set1.add(5);
set1.add(10);
set1.add('good');

console.log('set1.has(6) :>> ', set1.has(6));
const arrFromSet1 = [...set1.values()];
const mapFromSet1 = new Map([...set1.entries()]);

set1.delete(5);

set1.forEach((v1, v2, set) => {
  console.log('v1 :>> ', v1);
  console.log('v2 :>> ', v2);
});

// set1.clear();

const arr1 = [1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 4, 5, 6, 6, 6, 1, 1, 1, 2, 2];
const arr11 = [1, 8, 8, 8, 9];
const set2 = new Set([...arr1, ...arr11]);
const arr2 = [...set2]; //[1,2,3,4,5,6]
