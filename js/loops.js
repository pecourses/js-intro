console.group("Алгоритм Как пройти квадрат")
console.log('Пройти прямо 10 шагов');
console.log('Поверни направо на 90 градусов');
console.log('Пройти прямо 10 шагов');
console.log('Поверни направо на 90 градусов');
console.log('Пройти прямо 10 шагов');
console.log('Поверни направо на 90 градусов');
console.log('Пройти прямо 10 шагов');
console.log('Поверни направо на 90 градусов');
console.groupEnd();


// while (<condition>) {
//   // тело цикла
// }

// while (true) {
//   alert("Hello")
// }

const stepsCount = 4;
let stepNumber = 0;
while (stepNumber < stepsCount) {
  console.log('Пройти прямо 10 шагов');
  console.log('Поверни направо на 90 градусов'); 
  stepNumber++;
}

// Дано число страниц в книге. Вывести номера страниц по порядку.
// const pages = 10;
// let firstPage=1;
// while (firstPage < pages){
//     console.log('pages number :>> ', firstPage);
//     ++firstPage;
// }
// const pages = 25;
// let print = 1;
// while (print <= pages) {
//   console.log(print);
//   print++;
// }


// Найти произведение чисел от 1 до 6 (1*2*3*4*5*6=6!)

// let i = 1;
// let result = 1;

// while (i <= 6) {
//   result = result * i;
//   i++;
// }
// console.log('result :>> ', result);

// Найти сумму от 5 до 10 5+6+7+8+9+10=45
// let i = 5;
// let result = 5;

// while (i++ <= 10) {
//   result = result + i;
// }
// 5+6+7+8+98+10 === 0+5+6+7+8+9+10
// let i = 5;
// let result = 0;
// while (i <= 10) {
//   result = result + i; // = 0 + 5 +6 +7 +8 +9 +10
//   i++;
// }
// console.log('result :>> ', result);

// i - счетчик
//(let i = startValue; Continue_Condition; Change_i)
for (let i = 5; i <= 10; i++) {
  console.log('i :>> ', i);
}

// вывести четные числа от 2 до 10
for (let i = 2; i <= 10; i = i + 2) {
  console.log('i :>> ', i);
}

// вывести нечетные числа от 7 до 15
for (let i = 7; i <= 15; i++) {
  if (i % 2 == 1) {
      console.log('i = ', i);
  }
}

for (let i = 7; i <= 15; i = i + 2) {
  console.log("i :>> ", i);
}

// Вывести числа от 10 до 0 i = i--
 for (let i = 10; i >= 0; i--) {
    console.log('i :>> ', i); 
 }

let result = 0;

for (let i = 5; i <= 10; i++) {
  result += i;//  result = result + i;
}

console.log('result :>> ', result);
// q = q - 55;  q -= 55
// q = q * 220; q *= 220
// result = result % 2;
// result %= 2;


//********************************************** */

// Запрашивать у пользователя число от 1 до 10, пока не угодает

const wantedValue = 7;
let value;

do {
  value = Number(prompt("Enter value:"));
} while (value !== wantedValue)

console.log('You are lucky! \u{1F600}');

let i = 11;
let result1 = 0;
do {
  //console.log('i :>> ', i);
  result1 += i;
  i++;
} while (i <= 10)


console.log('result :>> ', result1);



// const isSomething = true;
// if (!isSomethingHappend) {

// }
// !true => false
// !false => true