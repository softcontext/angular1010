class Car {
  constructor(color = 'Red'){
    this.color = color;
  }
}

let c = new Car();
console.log(c);

class Bus extends Car {
  constructor(color, doors = 4){
    // ReferenceError:
    // Must call super constructor in derived class
    // before accessing 'this'
    // or returning from derived constructor
    super(color);
    this.doors = doors;
  }
}

let b = new Bus('Blue', 5);
console.log(b);
