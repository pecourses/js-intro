'use strict';

const obj = {
  length: 15,
  isMale: true,
  getLength() {
    return this.length;
  },
};
// JSON умеет хранить в себе:
// объекты, массивы, строки, number, true/false, null
const serializedObj = JSON.stringify(obj); // сериализация
const deserializedObj = JSON.parse(serializedObj); // десериализация

// Создать объект: значения типов Boolean, undefined, null,
// 1 метод, число, строка, {}, []
// со свойством Symbol и значением строка

// Сериализовать и десериализовать объект

const newObj = {
  isObj: true,
  type: undefined,
  phone: 132654,
  city: null,
  name: 'Matvey',
  something: {
    one: 1,
    two: 2,
  },
  array: [1, 2, 3, 4],
  getSomething() {
    return this.something;
  },
  [Symbol()]: 'string',
};

const serNewObj = JSON.stringify(newObj);
const desNewObj = JSON.parse(serNewObj);
