// hello();
// hello();
// hello();
// hello();

// function declaration
function hello() {
  alert("Hello, world!");
}

/******************************************** */
// передача параметров в функцию
const person1 = "Grut";

helloTo(person1);
helloTo("Macquin");
helloTo(undefined);
helloTo(1)

function helloTo(name) {
  // alert("Hello, " + name);
}

/********************************************* */
// возврат значения из функции
const sumAB = sum(1, 2);
console.log('sumAB :>> ', sumAB);

function sum(a, b) {
  //const result = a + b;
  //return result;
  return a + b;
}

// Написать функцию для возведения числа в 4 степень

const d = deg4(2);

const v = deg4()
console.log('d :>> ', d);

/**
 * 
 * @param {number} value - число, возводимое в 4 степень
 * @returns {number} число в 4 степени
 */
function deg4(value) {
  return value ** 4;
}

// Написать функцию для вычисления корней кв. уравнения
//return [x1, x2]
//const roots = solveSquareEquation(1,2,3);

console.log('squareEquation(1, 5, 10) :>> ', squareEquation(1, 5, 10));

// JSDoc
function squareEquation (a, b, c) {
  const D = b*b - 4*a*c;
  let x1 = 0;
  let x2 = 0;
  if (D > 0) {
      x1 = (-b - Math.sqrt(D)) / (2*a);
      x2 = (-b + Math.sqrt(D)) / (2*a);
      return [x1, x2];
  } else if (D === 0) {
      x1 = -b / (2*a);
      return [x1];
  } else {
      return "No rational roots";       
  }
}

// Чистая функция -- это 1)детермированная ф-я 2)без побочных эффектов.
// 1) при одних и тех же значениях входных параметров возвращает один и тот же результат
// 2) "не взаимодействует с внешним миром"

/********************************************************************* */

// const catName = 'Vasia';
// const catColor = 'red';

// function aboutMyCat (catName, catColor);

// const catName2 = 'Murka';
// const catColor2 = 'black';
// const catMale2 = 'female';
/********************************************************** */

function f() {
  return 5;
}

const newFunction = f;
// function expression
const sum2 = function(a, b) {
  return a + b;
}

console.log('sum2(5,6); :>> ', sum2(5,6));

// переписать deg4 в нотации function expression
const deg04 = function (a) {
  return a ** 4;
};
console.log("deg04(5) :» ", deg04(5));