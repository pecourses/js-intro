// Object creation
const obj1 = {};
const obj2 = Object();
const obj3 = new Object();

const cat1 = {
  name: 'Vasilii',
  color: 'red',
  isMale: true,
  isFurnitureDemage: false,
};

const cat2 = {
  name: 'Myrka',
  color: 'black',
  isMale: false,
  isFurnitureDemage: true,
}

cat1.breed = 'siamiz';
//console.log('cat1 :>> ', cat1);

cat1.name = 'Vas`';
//console.log('cat1 :>> ', cat1);
/**************************************************************************** */

// вычисляемое свойство
// const property = prompt('Input property:')
const property = 'color';
// alert(cat1[property]);

const property1 = 'name';

const cat3 = {
  [property1]: 'Murka',
}
//console.log('cat3 :>> ', cat3);
/************************************************************************************************ */

// Методы
// Описать человека с 5 разнотипными свойствами объектом
const human1 = {
  name: "Andrey",
  firstName: "Stseba",
  isMale: true,
  age: 33,
  massa: 78,
  height: 1.76,
  // bmi: function bmi() {
  //   return this.massa / this.height ** 2;
  // }
  // bmi: function() {
  //   return this.massa / this.height ** 2;
  // }
  bmi() { // method
    return this.massa / this.height ** 2;
  },
  // Дописать метод для выведения полного имени
  fullName() {
    return this.firstName + ' ' + this.name;
  },
};
// alert(human1.bmi())
// alert(human1.fullName())

const human = {
  yearsOld: 26,
  name: 'Ashton',
  isHeMaried: false,
  tatu: {
      firstTatu: 'circle',
      secondTatu: 'mountain'
  },
  sayHiToAll: function () {
      console.log('Hi guys!!')
  }
};
//****************************************************** */
// Функции-конструкторы -- ф-я для создания и инициализации обьекта
// const cat1 = {
//   name: 'Vasilii',
//   color: 'red',
//   isMale: true,
//   isFurnitureDemage: false,
// };

// const cat2 = {
//   name: 'Myrka',
//   color: 'black',
//   isMale: false,
//   isFurnitureDemage: true,
// }

function Cat(catName, color, isMale, isFurnitureDemage) {
  // const this = {};
  this.name = catName;
  this.color = color;
  this.isMale = isMale;
  this.isFurnitureDemage = isFurnitureDemage;
  this.meow = function() {
    console.log('MEOW!!');
  }
  // return this;
}

const cat01 = new Cat('Vasilii', 'red', true, false);
const cat02 = new Cat('Myrka', 'black', false, true);

//Написать функцию-конструктор для создания человека
function Human(name, surname, age, isMale) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.isMale = isMale;
}

const human2 = new Human("Nick", "Nicksurnamne", 54, true);
console.log("human2 :>> ", human2);
const human3 = new Human("Wick", "Wicksurnamne", 32, false);
console.log("human3 :>> ", human3);

const human007 = new Human('Agent', '007', 35, true);
