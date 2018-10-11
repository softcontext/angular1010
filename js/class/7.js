class Car {
  constructor(x){
    // 새 객체에 기본 프로퍼티를 추가한다.
    this.x = x;
  }
  // 부모 객체가 함수를 갖고 있으면서, 자식 객체가
  // 부모의 자원을 사용할 수 있도록 서비스한다.
  // Car.prototype 객체에 함수가 추가됩니다.
  print () {
    console.log('this.x = ' + this.x);
  }
  // 함수가 제공하고 싶은 자원을 직접 갖고 있으면서,
  // 누구나 이용할 수 있도록 서비스한다.
  static show (obj) {
    console.log('obj.x = ' + obj.x);
  }
}

let c = new Car(1);
console.log(c); // { x: 1 }
c.print(); // this.x = 1
Car.show(c); // obj.x = 1
