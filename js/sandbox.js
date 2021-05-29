'use strict';

function pow(base, exponent) {
  if (typeof base !== 'number' || typeof exponent !== 'number') {
    throw new TypeError();
  }
  // if (Number.isNaN(base) || Number.isNaN(exponent)) {
  //   // base === NaN
  //   return NaN;
  // }
  if (base === Infinity || exponent === Infinity) {
    return Infinity;
  }
  if (exponent === 0) {
    return 1;
  } else if (exponent < 0) {
    return 1 / pow(base, -exponent);
  }
  return base * pow(base, exponent - 1);
}

try {
  console.log('pow(1,5) :>> ', pow(1, NaN));
} catch (e) {
  console.log('e :>> ', e);
}
