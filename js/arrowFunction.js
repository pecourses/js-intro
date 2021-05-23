'use strict';

function sum(a, b) {
  return a + b;
}

const sum2 = (a, b) => a + b;

const factorial = n => (n === 0 ? 1 : n * factorial(n - 1));

const numbers = [1, 2, 3, 4, 5];

// function isEven(item) {
//   return item % 2 === 0;
// }

// const evenNumbers = numbers.filter(isEven);

const evenNumbers = numbers.filter(item => item % 2 === 0);

const square = n => n * n;

const b = square(3);
console.log('b :>> ', b);

const obj = {
  name: 'Vasia',
  age: 25,
  getName() {
    console.log('this.name :>> ', this.name);
    console.log('this getName :>> ', this);
  },
  getAge: () => {},
};

obj.getName();
// debugger;
obj.getAge();

console.log('this global :>> ', this);

function f() {
  console.log('this f :>> ', this);
}
f();

const arrFunc = () => {
  console.log('this arrow :>> ', this);
  console.log('arguments :>> ', arguments);
};

arrFunc();

// debugger;

function sumInfArgs() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}
// console.log('sumInfArgs(); :>> ', sumInfArgs(1, 2, 3, 4, 5, 8));
