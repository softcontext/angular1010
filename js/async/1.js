console.log(1);

// setTimeout 함수에게 건네준 콜백함수가 기동하기 위한 조건
// 1. 시간이 만족
// 2. 콜백함수는 개발자가 작성한 로직이므로 메인스레드가 처리할 수
// 있는 상태여야 함
setTimeout(function () {
  console.log(2);

  setTimeout(function () {
    console.log(3);
    setTimeout(function () {
      console.log(4);
    }, 0);
    console.log(5);
  }, 0);

  console.log(6);

}, 0);

console.log(7);

// 1 7 2 6 3 5 4
