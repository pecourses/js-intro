'use strict';

function f({ length, width, height }) {
  // const length = dimensions.length;
  // const width = dimensions.width;
  // const height = dimensions.height;

  // Деструктурирующее присваивание
  //const { length, width, height } = dimensions; //{ length: 1, width: 2, height: 3,}
  console.log('length :>> ', length);
  console.log('width :>> ', width);
  console.log('height :>> ', height);
}

const dim = {
  length: 1,
  width: 2,
  height: 3,
};

f(dim);
/*********************************************** */
const agent007 = {
  firstName: 'James',
  lastName: 'Bond',
};

nameLogger(agent007);
// Переименование стандартных имен
function nameLogger({ firstName: name, lastName: surname }) {
  console.log(`${name} ${surname}`);
}
/*********************************************************/
// Объекты более сложной структуры
const book = {
  title: 'Title1',
  author: 'AuthorName',
  price: {
    count: 15,
    currency: 'UAH',
  },
};

const {
  title,
  author,
  price: { count, currency },
} = book;
console.log('count :>> ', count);
/************************************* */

const arr = [0, 1, 2, 3, 4, 5];
// const arr0 = arr[0];
// const arr1 = arr[1];

//const [arr0, arr1] = arr; //  [0, 1, 2, 3, 4, 5]
//console.log('arr1 :>> ', arr1);

const [, first, , third, , fifth] = arr;
console.log('fifth :>> ', fifth);

const arr1 = [1, 5, { length: 5, name: { firstName: 'fn1', lastName: 'ln1' } }];

//firstName => userFirstName
const [
  ,
  ,
  {
    name: { firstName: userFirstName },
  },
] = arr1;
console.log('userFirstName :>> ', userFirstName);
/**************************************************** */

// op1 || op2
// if (Boolean(op1) === true)  {op1 || op2 => op1}
// if (Boolean(op1) === false) {op1 || op2 => op2}

// const port = process.ENV.PORT || 5000;

// op1 && op2
// if (Boolean(op1) === true)  {op1 && op2 => op2}
// if (Boolean(op1) === false) {op1 && op2 => op1}

//const isError = false;
// if (isError) {
//   console.log('ERROR ');
// }

//isError && console.log('ERROR');

//const port = process.ENV.PORT || 5000; // null undefined

// op1 ?? op2
// if (op1 === null || undefined) {op1 ?? op2 => op2}
// else                           {op1 ?? op2 => op1}
