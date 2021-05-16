// Прописать ф/конструктор для Car 
// Общую логику вынести в прототип (вывод инфо о модели и марке)

function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

const carProto = new Car();

carProto.showInfo = function() {
  console.log(`Model: ${this.model}, brand: ${this.brand}`);
}

Car.prototype = carProto;

const car1 = new Car('Tesla', 'S');

//car1.showInfo();

/**************************************************** */

const parrot = {
  name: 'Kesha',
  color: 'multicolor',
  speak(phrase) {
    console.log(`${this.name} says ${phrase}`);
  }
}

const parrotWavy = Object.create(parrot);
parrotWavy.name = 'Kesha J';
parrotWavy.wavy = true;

// определить объект пассажирский транспорт на основе объекта ТС

const TS = {
  model: 'qq',
  color: 'yellow',
  year: 2010,
  regNum: 'AA 2323 DD',
  getInfo () {
      return `TS is :>> ${this.model} manufactured ${this.year} and registration ${this.regNum}`;    
  },
  changeRegNum (newNum) {
      this.regNum = newNum;
  }

}

const passTS = Object.create(TS);
passTS.model = 'Sprinter';
passTS.color = 'white';
passTS.regNum = 'EE 3434 FF';
passTS.passCount = 18;
passTS.addPassPlace = function (addPass) {
  this.passCount = this.passCount + addPass;
}

console.log('TS.getInfo(); :>> ', TS.getInfo());
console.log('passTS.getInfo(); :>> ', passTS.getInfo());
