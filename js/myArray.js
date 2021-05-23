'use strict';

function MyArray() {
  if (!new.target) {
    return new MyArray();
  }
  this.length = 0;
}
const arr = new Array(1,2,3,4)


const myArrayProto = new MyArray();

myArrayProto.pop = function () {
  if (this.length === 0) {
    return;
  }
  const lastItem = this[this.length - 1];
  delete this[--this.length];
  return lastItem;
};

myArrayProto.push = function (item) {
  this[this.length] = item;
  return ++this.length;
};

myArrayProto.shift = function () {
  if (this.length === 0) {
    return;
  }
  const fistItem = this[0];
  for (let i = 0; i < this.length - 1; i++) {
    this[i] = this[i + 1];
  }
  delete this[--this.length];
  return fistItem;
};

myArrayProto.filter = function (callback) {
  const returningArray = new MyArray();
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      returningArray.push(this[i]);
    }
  }
  return returningArray;
};

MyArray.prototype = myArrayProto;

const myArr1 = new MyArray();
const myArr2 = new MyArray();

function isEven(item, i, arr) {
  return item % 2 === 0;
}

const myArray3 = new MyArray();
myArray3.push(1);
myArray3.push(2);
myArray3.push(4);
myArray3.push(3);

debugger;
const myArr3 = myArray3.filter(isEven);
console.log('myArr3 :>> ', myArr3);
