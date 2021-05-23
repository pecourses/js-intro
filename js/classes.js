function User(name, surname, age) {
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
}

const userProto = new User();

userProto.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

User.prototype = userProto;

const user1 = new User('Vasia', 'Testovich', 99);
// console.dir(user1);

/********************************* */

class UserClass {
  constructor(name, surname, age) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set age(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Age must be a number');
    }
    if (value < 0 || value > 130) {
      throw new RangeError('Age cannot be < 0 or > 130');
    }
    this._age = value;
  }
  get age() {
    return this._age;
  }
  static isUserClass(obj) {
    return obj instanceof UserClass;
  }
}

try {
  const user2 = new UserClass('Test', 'Ivanovich', 3);
  console.dir(user2);
  user2.age = 100;
  console.log('user2.age :>> ', user2.age);
} catch (e) {
  console.error(e);
}
const user3 = new UserClass('Test', 'Ivanovich', 3);
const a = 5;
console.log('UserClass.isUserClass(a) :>> ', UserClass.isUserClass(a));

/*************************************************** */
// Описать класс

class Fuel {
  constructor(weight) {
    this.weight = weight;
  }
}

// написать сеттер/геттер для года выпуска
class Car {
  constructor(brand1, model, year, weight, fuel1) {
    this.brand = brand1;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.fuel = fuel1;
  }
  getFullInfo() {
    return `${this.brand} ${this.model} ${this.year}`;
  }
  getFullWeigth() {
    // расчитать вес машины с топливом
    return this.weight + this.fuel.weight;
  }

  get fullWeight() {
    return this.weight + this.fuel.weight;
  }
  set year(manufacturedYear) {
    if (
      typeof manufacturedYear !== 'number' ||
      !Number.isSafeInteger(manufacturedYear)
    ) {
      throw new TypeError('Year must be an integer number');
    }
    const currYear = new Date();
    if (manufacturedYear < 1886 || manufacturedYear > currYear.getFullYear()) {
      throw new RangeError('Incorrect manufactured year');
    }
    this._year = manufacturedYear;
  }

  get year() {
    return this._year;
  }
  static isCar(obj) {
    return obj instanceof Car;
  }
}

const car1 = new Car('Mercedes', 'C200', 2015, 2000, new Fuel(45)); // {weight: 45}
car1.year = 2000;
console.log('car1.year :>> ', car1.year);
// console.log('Full info :» ', car1.getFullInfo());
console.log('Full car weight: ', car1.getFullWeigth());
console.log('Full car weight:', car1.fullWeight);
