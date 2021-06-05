'use strict';

class Subject {
  constructor(length, width, height) {
    this.dimensions = {
      length: length,
      width: width,
      height: height,
    };
  }
}

const s1 = new Subject(1, 2, 3);
/**************************** */

class Subject {
  constructor(dimensions) {
    this.dimensions = dimensions;
  }
}

const s2 = new Subject({ length: 1, width: 2, height: 3 });
