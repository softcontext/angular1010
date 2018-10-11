class Car {
  constructor(color = 'Red'){
    this.color = color;
  }
  print () {
    console.log('Car # this.color = ' + this.color);
  }
}

let c = new Car();
console.log(c);

class Bus extends Car {
  // constructor(color, doors = 4){
  //   super(color);
  //   this.doors = doors;
  // }
  print () {
    super.print();
    console.log('Bus # this.color = ' + this.color);
  }
}

let b = new Bus('Blue', 5);
console.log(b);
b.print();
