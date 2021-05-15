const obj1 = {
  'q w': 456,
};
const obj2 = new Object();

const arr1 = [1, true, 3, 4, 5];

const arr2 = new Array();

/**
 * 0 => 'father'
 * 1 => 'mother' 
 */

/**
 * 0 => 55
 * 1 => 666
 * 2 => 6565
 */

const myArray = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  4: 5,
  length: 5,
  pop() {
    if(this.length === 0) {
      return;
    }
    const lastItem = this[this.length-1]
    delete this[--this.length];
    return lastItem;
  },
  push(item) {
    this[this.length] = item;
    return ++this.length;
  },
  shift() {
    if ( this.length === 0 ) {
      return;
    }
    const fistItem = this[0];
    for(let i = 0; i < this.length - 1; i++) {
      this[i] = this[i+1];
    }
    delete this[--this.length];
    return fistItem
  }
}

const myArray2 = {
  0: 2,
  1: 3,
  length: 2,
}

myArray2.pop = myArray.pop;
myArray2.push = myArray.push;
myArray2.shift = myArray.shift;

const arr3 = [1, 22, 345354, 4, 5573245, 14534]
// a[0] + a[1] + a[2] + ...
//   0  +   1  +   2 + ...

let sum = 0;
for( let i = 0; i < arr3.length; i++) {
  sum += arr3[i];
}

// методы массивов
// pop
// arr3.pop();
// push
// arr3.push(item)
