class Car {
  color;

  constructor(color = 'Red', private doors = 4){
    this.color = color;
  }
}

let c = new Car();
console.log(c)
