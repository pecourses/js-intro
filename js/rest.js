'use strict';

// arguments - псевдомассив
// в него попадают все параметры

function sum(a) {
  console.log('a :>> ', a);
  console.log('arguments :>> ', arguments);
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}
// debugger;
console.log('sum(1, 2, 3, 4) :>> ', sum(1, 2, 3, 4));

// args - Array,
// в него попадают явно не принятые параметры
function sumRest(first, ...args) {
  return args.reduce((accum, item) => accum + item, first);

  // let result = first;
  // for (let i = 0; i < args.length; i++) {
  //   result += args[i];
  // }
  // return result;
}

console.log('sumRest(1, 2, 3, 4) :>> ', sumRest(1, 2, 3, 4));
