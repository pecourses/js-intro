// function User(name, surname, age) {
//   this.firstName = name;
//   this.lastName = surname;
//   this.age = age;
// }

// const userProto = new User();

// userProto.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// User.prototype = userProto;

// const user1 = new User('Vasia', 'Testovich', 99);
// // console.dir(user1);

// /********************************* */

// class UserClass {
//   constructor(name, surname, age) {
//     this.firstName = name;
//     this.lastName = surname;
//     this.age = age;
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
//   set age(value) {
//     if (typeof value !== 'number') {
//       throw new TypeError('Age must be a number');
//     }
//     if (value < 0 || value > 130) {
//       throw new RangeError('Age cannot be < 0 or > 130');
//     }
//     this._age = value;
//   }
//   get age() {
//     return this._age;
//   }
//   static isUserClass(obj) {
//     return obj instanceof UserClass;
//   }
// }

// try {
//   const user2 = new UserClass('Test', 'Ivanovich', 3);
//   console.dir(user2);
//   user2.age = 100;
//   console.log('user2.age :>> ', user2.age);
// } catch (e) {
//   console.error(e);
// }
// const user3 = new UserClass('Test', 'Ivanovich', 3);
// const a = 5;
// console.log('UserClass.isUserClass(a) :>> ', UserClass.isUserClass(a));

// /*************************************************** */
// // Описать класс

// class Fuel {
//   constructor(weight) {
//     this.weight = weight;
//   }
// }

// // написать сеттер/геттер для года выпуска
// class Car {
//   constructor(brand1, model, year, weight, fuel1) {
//     this.brand = brand1;
//     this.model = model;
//     this.year = year;
//     this.weight = weight;
//     this.fuel = fuel1;
//   }
//   getFullInfo() {
//     return `${this.brand} ${this.model} ${this.year}`;
//   }
//   getFullWeigth() {
//     // расчитать вес машины с топливом
//     return this.weight + this.fuel.weight;
//   }

//   get fullWeight() {
//     return this.weight + this.fuel.weight;
//   }
//   set year(manufacturedYear) {
//     if (
//       typeof manufacturedYear !== 'number' ||
//       !Number.isSafeInteger(manufacturedYear)
//     ) {
//       throw new TypeError('Year must be an integer number');
//     }
//     const currYear = new Date();
//     if (manufacturedYear < 1886 || manufacturedYear > currYear.getFullYear()) {
//       throw new RangeError('Incorrect manufactured year');
//     }
//     this._year = manufacturedYear;
//   }

//   get year() {
//     return this._year;
//   }
//   static isCar(obj) {
//     return obj instanceof Car;
//   }
// }

// const car1 = new Car('Mercedes', 'C200', 2015, 2000, new Fuel(45)); // {weight: 45}
// car1.year = 2000;
// console.log('car1.year :>> ', car1.year);
// // console.log('Full info :» ', car1.getFullInfo());
// console.log('Full car weight: ', car1.getFullWeigth());
// console.log('Full car weight:', car1.fullWeight);
/******************************************************************************** */
/**
 * НАСЛЕДОВАНИЕ
 */
// базовый класс / родитель
class User {
  constructor(name, surname, age, email, isBanned = false) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.email = email;
    this.isBanned = isBanned;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set age(v) {
    // валидация
    this._age = v;
  }
  get age() {
    return this._age;
  }
}
// Moderator = User + props/methods
// дочерний класс / потомок
class Moderator extends User {
  constructor(name, surname, age, email, permission) {
    super(name, surname, age, email); // вызов конструктора базового класса
    this.permission = permission;
  }

  sendMessage(user, message) {
    // sending message
    console.log('SENDING MESSAGE...');
  }
}

class Administrator extends Moderator {
  constructor(name, surname, age, email, permission) {
    super(name, surname, age, email, permission);
  }
  ban(user) {
    user.isBanned = true;
  }
  unBan(user) {
    user.isBanned = false;
  }
}

//Administrator = Moderator + ban(User) + reBan(User)

// debugger;
// const user1 = new User('nameu', 'surenameu', 22, 'user@gmail.com');
// const moder1 = new Moderator('namem', 'surenamem', 22, 'moder@gmail.com', {});
// console.log('moder1.firstName :>> ', moder1.firstName);
// const message = { body: 'message text' };
// moder1.sendMessage(user1, message);
// console.log(moder1.getFullName());
// const admin1 = new Administrator('namea', 'surenamea', 22, 'a@gmail.com', {});
// console.log(user1);
// admin1.ban(user1);
// console.log(admin1);
/********************************************* */
/**
 * Переопределение
 */
// FlyingSquirrel => Squirrel

class Squirrel {
  constructor(name) {
    this._name = name;
  }
  eat(food) {
    console.log(`Squirrel ${this.name} is eatting ${food}`);
  }
  run() {
    console.log(`Squirrel ${this.name} is running`);
  }
}

// FlyingSquirrel = Suquirrel + fly() + distance
class FlyingSquirrel extends Squirrel {
  constructor(name, distance) {
    super(name);
    this._distance = distance;
  }
  fly() {
    console.log(`${this._name} is flying up to ${this._distance} m!!!`);
  }
  eat() {
    console.log(`Squirrel ${this.name} eat nuts`);
  }
}

const squirrel1 = new FlyingSquirrel('Petr', 15);
squirrel1.fly();
squirrel1.eat();

/********************************************************************************** */
class Figure {
  constructor(name) {
    this._name = name;
  }
  getArea() {
    return null;
  }
}

class Triangle extends Figure {
  constructor(a, b, c) {
    super('triangle');
    this._a = a;
    this._b = b;
    this._c = c;
  }
  getArea() {
    const p = (this._a + this._b + this._c) / 2;
    return Math.sqrt(p * (p - this._a) * (p - this._b) * (p - this._c));
  }
}

class Square extends Figure {
  constructor(a) {
    super('square');
    this._a = a;
  }
  getArea() {
    return this._a * this._a;
  }
}
const t1 = new Triangle(7, 8, 9);

console.log('t1.getArea() :>> ', t1.getArea());

function getFigureArea(figure) {
  if (figure instanceof Figure) {
    return figure.getArea();
  }
  throw new TypeError();
}

// Три кита ООП:
// - инкапсуляция (сокрытие логики)
// - наследование (переиспользование логики и структуры базового класса)
// - полиморфизм (умение работать с объектами разных типов, в жс - полиморфизм подтипов)
