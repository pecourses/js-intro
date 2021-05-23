// const obj1 = {
//   'q w': 456,
// };
// const obj2 = new Object();

// const arr1 = [1, true, 3, 4, 5];

// const arr2 = new Array();

// /**
//  * 0 => 'father'
//  * 1 => 'mother' 
//  */

// /**
//  * 0 => 55
//  * 1 => 666
//  * 2 => 6565
//  */

// const myArray = {
//   0: 1,
//   1: 2,
//   2: 3,
//   3: 4,
//   4: 5,
//   length: 5,
//   pop() {
//     if(this.length === 0) {
//       return;
//     }
//     const lastItem = this[this.length-1]
//     delete this[--this.length];
//     return lastItem;
//   },
//   push(item) {
//     this[this.length] = item;
//     return ++this.length;
//   },
//   shift() {
//     if ( this.length === 0 ) {
//       return;
//     }
//     const fistItem = this[0];
//     for(let i = 0; i < this.length - 1; i++) {
//       this[i] = this[i+1];
//     }
//     delete this[--this.length];
//     return fistItem
//   }
// }

// const myArray2 = {
//   0: 2,
//   1: 3,
//   length: 2,
// }

// myArray2.pop = myArray.pop;
// myArray2.push = myArray.push;
// myArray2.shift = myArray.shift;

// const arr3 = [1, 22, 345354, 4, 5573245, 14534]
// // a[0] + a[1] + a[2] + ...
// //   0  +   1  +   2 + ...

// let sum = 0;
// for( let i = 0; i < arr3.length; i++) {
//   sum += arr3[i];
// }

// // методы массивов

// // Работа с элементами массива
// // pop
// // arr3.pop();
// // push
// // arr3.push(item)
// // shift
// // arr3.shift()

// // Методы перебора массивов
// const arr4 = [1, 2, 3, 4, 5];

// arr4.forEach(showItem);

// function showItem(currentItem, index, array){
//   console.log(`arr4[${index}] = ${currentItem}`);
// }

// const arr5 = [{}, {}, {}, {}];

// arr5.forEach(f);

// function f(currentItem, index, array) {
//   currentItem.property = 'qwerty';
//   currentItem.property1 = 'qwerty1';
// }

// const arr6 = [2, 7, 6];

// console.log('arr6.some(isEven) :>> ', arr6.some(isEven));

// function isEven(element, index) {
//   //console.log('index :>> ', index);
//   return element % 2 === 0;
// }

// function isOdd(element) {
//   return element % 2 !== 0;
// }

// console.log('arr6.every(isEven) :>> ', arr6.every(isEven));

// const arrEvenItem = arr6.filter(isEven);
// const arrOddItem = arr6.filter(isOdd);

const pets = ['cat', 'dog', 'parrot'];

console.log(`I have ${pets.join(', ')}`);

const arr = [1, 2, 3, 4, 5];

const result = arr.reduce(sum);

function sum(accumulator, item) {
  return accumulator + item
}

console.log('result :>> ', result);

const multResult = arr.reduce(mult);

function mult(accumulator, item) {
  return accumulator * item;
}

console.log('multResult :>> ', multResult);

const resultStr = pets.reduce(arrStr);

function arrStr(accumulator, item) {
  return accumulator + ', ' + item;
}
console.log('result join from reduce :>> ', resultStr);

const a = 2;
console.log('Array.isArray(arr) :>> ', Array.isArray(arr));

const arr1 = [1, 2, 4, 8];
const arr2 = arr1.slice(0); //ctrl + c, ctrl + v

console.log('arr1 :>> ', arr1);// ctrl + c
console.log('arr2 :>> ', arr2);// ctrl + v

const arr3 = arr1.splice(0);// ctrl + x, ctrl + v

console.log('arr1 :>> ', arr1);//ctrl + x
console.log('arr3 :>> ', arr3);//ctrl + v
