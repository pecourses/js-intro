// const a = prompt();
// const b = prompt();

// const sum = Number(a) + Number(b);

// alert(a + ' + ' + b + ' = ' + sum);
// alert(`${a} + ${b} = ${sum}`);

// const s1 = 'sfdsfds';
// const s2 = "sdfdsgd";
// const s3 = `fgdfgdf`;

// const firstName = 'Vasilii';
// const lastName = 'Alexandrovich';

// alert('Fullname is ' + firstName + ' ' + lastName);
// alert(`Full name is ${firstName} ${lastName}`);
/*************************************************************** */
// Пользователь имеет 3 попытки ввести пароль 
// Если пароль верен, то вывести "Пароль верен"
// Иначе "Пароль неверен"

const PASSWORD = '123';
const TRY_LIMIT = 3;

let currentTry = 1;
let isPasswordCorrect = false;

do {
  isPasswordCorrect = prompt('Input parol') === PASSWORD;
  if (isPasswordCorrect) {
    break;
  }
}
while(++currentTry <= TRY_LIMIT)

alert(`Password is ${isPasswordCorrect ? 'correct' : 'not correct'}`);
/********************************************* */
const truePassword = '123';
for (i = 2; i >= 0; i--) {
    let password = prompt('Say your password');
    password === truePassword 
    ? ( i = 0, alert('Password is correct')) 
    : i > 1 
      ? alert (`У вас осталось ${i} попытки `) 
      : i == 1 
        ? alert (`Это последняя попытка`) 
        : alert("Доступ запрещен");
}
