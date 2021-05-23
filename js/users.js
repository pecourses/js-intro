'use strict';

function User(name, surname, age, isMale, email, isSubscribed) {
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

const userProto = new User();

userProto.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

User.prototype = userProto;

const users = [];

for (let i = 0; i < 100; i++) {
  const user = new User(
    `Username${i}`,
    `Usersurname${i}`,
    Math.floor(Math.random() * 90),
    Math.random() > 0.5,
    `useremail${i}@gmail.com`,
    Math.random() > 0.5
  );
  users.push(user);
}

// HW Получить массив полных имен лиц женского пола
// школьного возраста (6 - 18 лет).

const schoolAgeWomenFullNames = users
  .filter(isSchoolAgeWoman)
  .map(getUserFullName);

function isSchoolAgeWoman(user) {
  return user.age >= 6 && user.age <= 18 && !user.isMale;
}
function getUserFullName(user) {
  return user.getFullName();
}

/*************** */
console.group('Error');
const schoolAgeWomenFullNames1 = users.filter(isSchoolAgeWoman1);

function isSchoolAgeWoman1(user) {
  if (user.age >= 6 && user.age <= 18 && !user.isMale) {
    return `${user.firstName} ${user.lastName}`;
  }
}

console.table(schoolAgeWomenFullNames1);
console.groupEnd();

/************* */
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
