function foo() {
  console.log(this === foo); // true

  // setTimeout(function() {
  //   console.log(this.a); // func
  // }.bind(this), 100);

  // 화살표 함수의 도입 이유
  // this가 자동으로 가장 가까운 스코프에 바인딩 되는 함수 선언법
  // this는 고정이면 불변이다.
  setTimeout(() => {
    console.log(this.a); // func
  }, 100);
}

foo.a = 'func';

foo.call(foo);
