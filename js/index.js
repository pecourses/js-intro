// Однострочный комментарий
/*
  Многострочный комментарий
*/

let value2 = 5;
value2 = 10;
// Имя переменной: 1:     a-zA-Z $ _
//                 2-...: a-zA-Z $ _ 0-9

const value3 = 10;
// value3 = 114;

let numberValue1; // Объявление переменной
//console.log('numberValue1 :>> ', numberValue1);
numberValue1 = 2; // Инициализация
//*********************************************************/
// Типы данных
// (примитивных 6 + object)

// number (1.1, -55, 0, -0, NaN, Infinity, -Infinity)
let numberValue = 10;
console.log(numberValue);
console.log('typeof numberValue :>> ', typeof numberValue);

// string
let stringValue = 'Hello, world!';
console.log('stringValue =', stringValue);
console.log('typeof stringValue :>> ', typeof stringValue);

// boolean (true, false)
let booleanValue = true;
console.log('booleanValue =', booleanValue);
console.log('typeof booleanValue :>> ', typeof booleanValue);

// undefined (ОБЪЯВЛЕНОб но не проинициализировано)
let undefinedValue = undefined;
console.log('undefinedValue :>> ', undefinedValue);
console.log('typeof undefinedValue :>> ', typeof undefinedValue);

// null (object)
let nullValue = null;
console.log('nullValue :>> ', nullValue);
console.log('typeof nullValue :>> ', typeof nullValue);

// symbol
let symbolValue = Symbol();
console.log('symbolValue :>> ', symbolValue);
console.log('typeof symbolValue :>> ', typeof symbolValue);

//********************************************************** */
// ВВод/вывод
//alert("Hello, world!"); //вывод - всплывающее модальное окно
//alert(nullValue);

//let age = prompt("ВВедите ваш возраст:"); // ввод - всплывающее модальное окно
//alert("Your age:" + age);

// Ввести имя
// вывести :"Привет, Имя!"
//let yourName = prompt("Enter your name:");
//alert("Your name is " + yourName)
let myValue = 3 - 'fjjdskfhjk';
console.log('myValue :>> ', myValue);
console.log('typeof myValue :>> ', typeof myValue);

//********************************************************* */
// Операции и их приоритет
let appleNumber = 4;
// постфиксный инкремент (декремент)
console.log('appleNumber-- :>> ', appleNumber--);
console.log('appleNumber :>> ', appleNumber);

let grapeNumber = 4;
// префиксный инкремент (декремент)
console.log('--grapeNumber :>> ', --grapeNumber);
console.log('grapeNumber :>> ', grapeNumber);
//appleNumber = appleNumber + 1;
// appleNumber++;

let peopleNumber = 2;

console.log('11 + 2 =', 11 + 2);
console.log('11 - 2 =', 11 - 2);
console.log('11 * 2 =', 11 * 2);
console.log('11 / 2 =', 11 / 2);
console.log('5 * 11 % 2 =', 11 % 2);
// Операции: унарные, бинарные, тернарные

// Приведение типов
// Ввести число и вывести число на единицу больше
let myValue2 = prompt('Input Number:');
let newMyValue2 = Number(myValue2);
newMyValue2++;
alert('New number is ' + newMyValue2);

console.log('5 + "qwerty" = ', 5 + 'qwerty');
console.log('5 + null = ', 5 + null);
console.log('5 + undefined = ', 5 + undefined);
console.log('5 + true = ', 5 + true);
//console.log('5 + Symbol() = ', 5 + Symbol());

console.log('"qwerty" + "qwerty" = ', 'qwerty' + 'qwerty');
console.log('"qwerty" + null = ', 'qwerty' + null);
console.log('"qwerty" + undefined = ', 'qwerty' + undefined);
console.log('"qwerty" + true = ', 'qwerty' + true);
// console.log('"qwerty" + Symbol() = ', "qwerty" + Symbol());

// Неявное преобразование типа
const myAge = prompt('Enter your age:');
const myAgeNumber = +myAge;
alert('You age' + myAgeNumber);
