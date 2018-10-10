function add(x, y) {
  // console.log(arguments);
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

let arr = [10, 20, 30];

console.log(add(...arr)); // 건네줄 때: 펼침 연산자

function calc(a, ...args) { // 받을 때: 나머지 파라미터
  // console.log(Array.isArray(args)); // true
  // console.log(args); // [ 1, 2, 3 ]
  switch (a) {
    case '+':
      return add(...args); // 펼침 연산자
    case '-':
      return subtract(...args); // 펼침 연산자
    default:
      return 0;
  }
}

console.log(calc('+', 1, 2, 3)); // 3
console.log(calc('-', 1, 2, 3)); // -1
