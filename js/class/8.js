class Car {
  constructor(color = 'Red'){
    this.color = color;
  }
}

let c = new Car();
console.log(c);
console.log(c.__proto__ === Car.prototype);

class Bus extends Car {
  // constructor 생략하면 자동으로 넣어준다.
}

let b = new Bus();
console.log(b);
console.log(b.__proto__ === Bus.prototype);
console.log(Bus.prototype.__proto__ === Car.prototype);
