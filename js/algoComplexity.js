const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // O(n)

function search(value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

//console.log('search(0) :>> ', search(10));
/************************************************* */
function multTable(n) {
  // O(n**2)
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
}

// multTable(2);
/****************************************************** */
// O(exponent) - по времени
// O(1) - по памяти
function powLoop(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

console.log('powLoop(2,3) :>> ', powLoop(2, 3));

// O(exponent) - по времени
// O(exponent) - по памяти
// debugger;
function powRec(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * powRec(base, exponent - 1);
}

console.log('powRec(2,10) :>> ', powRec(2, 10));
/************************************************************* */
// O(log n)

function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length - 1;
  do {
    let middle = Math.ceil((start + end) / 2);
    if (value === arr[middle]) {
      return middle;
    }
    if (value < arr[middle]) {
      end = middle - 1;
    }
    if (value > arr[middle]) {
      start = middle + 1;
    }
  } while (start <= end);
  return -1;
}
const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('binarySearch(arr1, 6) :>> ', binarySearch(arr1, 0));
