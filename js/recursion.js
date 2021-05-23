'use strict';

// function f() {
//   f();
// }

// 1! = 1
// 2! = 2 * 1 = 2 * 1!
// 3! = 3 * 2 * 1 = 3 * 2!

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const a = factorial(5);

function numberLogger(n) {
  if (n === 0) {
    return;
  }
  numberLogger(n - 1);
  console.log(n);
}

// debugger;
numberLogger(10);

// bracketWrapper(3); // => '((()))'
// bracketWrapper2(3); // => ['(', '(', '(', ')', ')', ')']
// bracketWrapper3(3); // => сразу в консоль

function bracketWrapper(n) {
  if (n === 1) {
    return '()';
  }
  return `(${bracketWrapper(n - 1)})`;
  //return n === 1 ? '()' : `(${bracketWrapper(n - 1)})`;
}

console.log('bracketWrapper(5) :>> ', bracketWrapper(5));

function bracketWrapper2(n) {
  const brackets = [];
  bracketWrapperRec(n);

  function bracketWrapperRec(n) {
    if (n === 0) {
      return;
    }
    brackets.unshift('(');
    brackets.push(')');
    bracketWrapperRec(n - 1);
  }

  return brackets;
}

bracketWrapper2(3);
const brackets2 = bracketWrapper2(2);
console.log('brackets2 :>> ', brackets2.join(''));
