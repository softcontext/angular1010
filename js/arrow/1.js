// 함수 선언식
function add(a, b) {
  return a + b;
}

// 함수 표현식
let add2 = function (a, b) {
  return a + b;
};

// 화살표 함수(표현식만 가능)
let add3 = (a, b) => {
  return a + b;
};

console.log(add(2, 3));
console.log(add2(2, 3));
console.log(add3(2, 3));
