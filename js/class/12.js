class Square {
  constructor(length = 10){
    this.length = length;
  }
  // Value Property 가 아니라 Access Property를 사용하여
  // 하나의 속성안에서 getter, setter를 배치할 수 있다.
  get area(){
    return this.length * this.length;
  }
  set area(area){
    this.length = Math.sqrt(area, 2);
  }
}

let s = new Square();
console.log(s);
console.log(s.area); // 괄호 없이 사용한다.

s.area = 400;
console.log(s);
