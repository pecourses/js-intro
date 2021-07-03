//'use strict'; // по дефолту для модулей

// import sum1 from './math.js'; // default
// import PI, { sum, mult } from './math.js';
import * as MyMath from './math.js';

const arr = [1, 2, 3, 4, 5];
console.log(`sum(...arr)`, MyMath.sum(...arr));
console.log(`mult(1,2)`, MyMath.mult(1, 2));
