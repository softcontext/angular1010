// 스코프의 종류
// 1. 글로벌 스코프
// 2. 함수 스코프
// 3. Closure 스코프

// 개발자 A
(function() {
  'use strict';

  let a = 10;

  global.team1 = {};
  global.team1.A = {
    a
  };

}(global));

//-----------------------------------

// 개발자 B
(function() {
  'use strict';

  let a = 20;

  global.team2 = {};
  global.team2.B = {
    a
  };

}());

//-----------------------------------

// 개발자 C
// A의 a 변수와 B의 a 변수를 사용하고 싶다.
console.log(global.team1.A.a);
console.log(global.team2.B.a);
