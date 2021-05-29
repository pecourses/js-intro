'use strict';

function counter(startValue) {
  let count = startValue;
  return function () {
    return count++;
  };
}

// debugger;
const a = counter(-5);
console.log('a() :>> ', a());
console.log('a() :>> ', a());
console.log('a() :>> ', a());
console.log('a() :>> ', a());
console.log('a() :>> ', a());
console.log('a() :>> ', a());
console.log('a() :>> ', a());
console.log('a() :>> ', a());

const b = counter(10);
console.log('b() :>> ', b());
console.log('b() :>> ', b());
console.log('b() :>> ', b());
