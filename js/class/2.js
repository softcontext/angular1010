function Car(x) {
  this.x = x;
  // 배열, 객체, 함수를 리턴하면 결과가 바뀌지만
  // 다은 경우에는 사용되지 않아서 의미가 없다.
  // return x + 10;
  return {y: x};
}

let c = new Car(1);
console.log(c);
// { x: 1 }
// { y: 1 }

// 생성자 함수를 오용하여 메소드처럼 사용하는 시도를
// 막을 수는 없다.
let result = Car(1);
console.log(result); // { y: 1 }
