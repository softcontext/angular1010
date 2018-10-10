// this: Function Context
// 함수를 호출할 때 결정됩니다.

// 1. 함수가 생성자로 사용될 때
function add() {
  this.a = 10; // 새로 만들어지는 객체
}

let adder = new add();
// #1. {} 새 객체 생성
// #2. {__proto__: add.prorotype} // 상속 연결
// #3. {__proto__: add.prorotype, a: 10}
// #4. let adder = {__proto__: add.prorotype, a: 10}
console.log(adder); // { a: 10 }

// 2. 함수가 메소드(객체의 멤버인 함수)로 사용될 때
let obj = {
  add,
  a: 0
};
obj.add();
console.log(obj); // { add: [Function: add], a: 10 }

// 3. 함수 단독으로 사용될 때
global.a = 0;
add();
console.log(global.a); // 10
