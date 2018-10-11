// function Car(x) {
//   this.x = x;
// }

// ES6에서 도입된 class 문법은 생성자용 함수 선언방법입니다.
class Car {
  constructor(x){
    // 새 객체에 기본 프로퍼티를 추가한다.
    this.x = x;
  }
}

// TypeError: Class constructor Car cannot be invoked without 'new'
// Car();

// 부모 객체가 함수를 갖고 있으면서, 자식 객체가
// 부모의 자원을 사용할 수 있도록 서비스한다.
Car.prototype.print = function () {
  console.log('this.x = ' + this.x);
};

// 함수가 제공하고 싶은 자원을 직접 갖고 있으면서,
// 누구나 이용할 수 있도록 서비스한다.
Car.show = function (obj) {
  console.log('obj.x = ' + obj.x);
};

let c = new Car(1);
console.log(c); // { x: 1 }
c.print(); // this.x = 1
Car.show(c); // obj.x = 1
