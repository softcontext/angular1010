class Square {
  constructor(length = 10){
    this.length = length;
  }
  getArea(){
    return this.length * this.length;
  }
  setArea(area){
    this.length = Math.sqrt(area, 2);
  }
}

let s = new Square();
console.log(s);
console.log(s.getArea());

s.setArea(400);
console.log(s);
