// if (<condition>) {
//   // инструкции (если condition истина)  
// }

// const isPermissionDenied = true;

// if (isPermissionDenied) {
//   console.log('You have no permission(');
// } else {
//   console.log('You have permission. Have fun)))');
// }

// console.log('next instructions');

// console.log('5<10 =', 5 < 10);
// console.log('5>10 =', 5 > 10);
// console.log('10<=10 =', 10 <= 10);
// console.log('5>=10 =', 5 >= 10);

//const age = prompt("Enter your age:");

// if (age < 18) {
//   //alert("You are not adult");
// } else { // age >= 18
//   //alert("You are adult");
// }

// console.log('5==5 :>> ', 5 == 5);
// console.log('5!=5 :>> ', 5 != 5);
// console.log('5==6 :>> ', 5 == 6);
// console.log('5!=6 :>> ', 5 != 6);

// console.log('5===5 :>> ', 5 === 5);
// console.log('5!==5 :>> ', 5 !== 5);
// console.log('5===6 :>> ', 5 === 6);
// console.log('5!==6 :>> ', 5 !== 6);

// 0==null => 0==0

// console.log('1===true = ', 1 === true);

// Пользователь вводит пароль. 
// Если пароль правильный, то выдать диагностическое сообщение, 
// иначе выдать сообщение об ощибке

// const password = prompt("Enter your password: ");
// if (password === '123') {
//     alert("Welcome!");
// } else {
//     alert("Access Denied. Forget your password? Try again.");
// }

// const isSomethingWrong = 125;
// if (isSomethingWrong) {
//   alert("true");
// } else {
//   alert("false");
// }

// false: Undefined Null false 0 NaN '' 
// boolean      boolean
  //  30 >= 18     30 <= 65
  //  true         true    => true
  //  99 >= 18     99 <= 65
  //  true         false   => false
// age >= 18 && age <= 65
//18 <= age <= 65

// console.group("Таблица истинности &&")
// console.log('true && true :>> ', true && true);
// console.log('true && false :>> ', true && false);
// console.log('false && true :>> ', false && true);
// console.log('false && false :>> ', false && false);
// console.groupEnd()

// age < 18 или age > 65
// age < 18 || age > 65

// console.group("Таблица истинности ||")
// console.log('true || true :>> ', true || true);
// console.log('true || false :>> ', true || false);
// console.log('false || true :>> ', false || true);
// console.log('false || false :>> ', false || false);
// console.groupEnd();

// Пользователь вводит возраст. Ему выдается инфо, может ли он пользоваться льготами
// const age = prompt("Your age:");
// if (18 < age || age > 65) {
//   alert("Иди пешком");
// } else {
//   alert("У тебя льгота");
// }

// Пользователь вводит возраст и наличие документа о льготе.
// Ему выдается инфо (true or false), может ли он пользоваться льготами
// const isHasExemption = true
// const age = prompt("Your age:");
// if ((18 < age || age > 65) && isHasExemption) {
//   alert("Иди пешком");
// } else {
//   alert("У тебя льгота");


//////////////////////////////////////////////////////////
// Условный оператор
//... ? ... : ...

// const a = 22;
// const b = 16;

// let maxValue = null;

// if (a > b) {
//   maxValue = a;
// } else {
//   maxValue = b;
// }
// maxValue = a > b ? isAdult(a) : isAdult(b);
// isAdult(maxValue)

//// switch..case

// const point = 11;

// if (point === 12) {
//   console.log('Pupil got 5+');
// } else if (point === 11) {
//   console.log('Pupil got 5');
// } else if (point === 10) {
//   console.log('Pupil got 5-');
// } else {
//   console.log('Pupil got less then 5-');
// }

// switch (point) {
//   case 12:
//     console.log('Pupil got 5+');
//     break;
//   case 11:
//     console.log('Pupil got 5');
//     break;
//   case 10:
//     console.log('Pupil got 5-');
//     break;
//   default:
//     console.log('Pupil got less then 5-');
// }
