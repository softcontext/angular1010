global.a = 'global';

// 함수는 선언 즉시 객체로 취급됩니다.
// 함수는 객체이면서 추가로 함수로직을 별도록 갖습니다.
function foo() {
  console.log(this.a);
}

// 함수객체에 프로퍼티를 추가합니다.
foo.a = 'func';

foo(); // global

// call, apply 함수를 사용하면서 해당 함수를 호출하면
// 함수안에 Function Context 인 this 는
// 파라미터로 넘겨주는 것을 사용하게 됩니다.
foo.call(foo); // func
