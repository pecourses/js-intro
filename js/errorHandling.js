'use strict';

function f(n) {
  return n * f(n - 1);
}
// debugger;
console.log('BEFORE TRY');
try {
  // потенциально опасный блок кода
  console.log('IN TRY BEFORE ERROR');
  f(10);
  console.log('IN TRY AFTER ERROR');
} catch (error) {
  // перехват ошибка
  console.dir(error);
} finally {
}

console.log('AFTER TRY');

/******************************************* */

function f(n) {
  if (typeof n !== 'number') {
    throw new TypeError('The argument must be number value');
  }
  if (!Number.isFinite(n)) {
    throw new RangeError('The argument must be a finite value');
  }
  if (!Number.isSafeInteger(n) || n < 0) {
    throw new RangeError('The argument must be non negative integer value');
  }
  if (n === 0) {
    return 1;
  }
  return n * f(n - 1);
}

try {
  f(Infinity);
} catch (e) {
  console.error(e);
}

console.log('AFTER f');
/********************************************************* */
//v - number, v>=0, v=<150
function validateValue(v) {
  // проверить v на соответствие критериям и выбросить ошибку в случае несоответствия
  if (typeof v !== 'number') {
    throw new TypeError('Input value is not a number');
  }
  if (v < 0 || v > 150) {
    throw new RangeError('Input value is out of range');
  }
  return v;
}

const inputValue = '200';
try {
  const value = validateValue(inputValue);
} catch (e) {
  if (e instanceof TypeError) {
    alert('Input a number value please');
  }
  if (e instanceof RangeError) {
    alert('Input value between 0 and 150 please');
  }
  // if (e instanceof Error) {
  //   alert('Try again later please')
  // }
  throw e;
}
