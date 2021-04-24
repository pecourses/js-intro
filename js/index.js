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
let stringValue = "Hello, world!";
console.log('stringValue =', stringValue);
console.log('typeof stringValue :>> ', typeof stringValue);

// Boolean (true, false)
let booleanValue = true;
console.log("booleanValue =", booleanValue);
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
let myValue = 3-"fjjdskfhjk";
console.log('myValue :>> ', myValue);
console.log('typeof myValue :>> ', typeof myValue);