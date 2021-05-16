'use strict';

function User(name, surname, age, isMale, email, isSubscribed) {
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

const users = [];

for(let i = 0; i < 100; i++) {
  const user = new User(
    `Username${i}`, 
    `Usersurname${i}`,
    Math.floor(Math.random() * 90),
    Math.random() > 0.5,
    `useremail${i}@gmail.com`,
    Math.random() > 0.5,
  );
  users.push(user);
}

// Получить только женщин
const womanUsers = users.filter(isWoman);

function isWoman(user) {
  return !user.isMale;
}

console.table(womanUsers);

// Получить совершеннолетних неподписанных мужчин
const adultUnsubMen = users.filter(isAdultUnsubMan);

function isAdultUnsubMan(user) {
  return user.isMale && user.age >= 18 && !user.isSubscribed;
}

console.table(adultUnsubMen);

// Получить массив имейлов пользователей
const userEmails = users.map(getEmail);

function getEmail(user) {
  return user.email;
}

console.table(userEmails);

// Получить массив имейлов только женщин
const womanEmails = users.filter(isWoman).map(getEmail);
console.table(womanEmails);