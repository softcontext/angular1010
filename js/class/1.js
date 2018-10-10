// 함수의 2가지 역할
// 1. 생성자: 새 객체를 만들어 준다.
// 2. 메소드: 로직 처리결과를 돌려준다.

function car(x) {
  this.x = x;
  return x + 10;
}

// 1. 생성자
let c = new car(1);
console.log(c); // { x: 1 }

// 2. 메소드
let result = car(1);
console.log(result); // 11
