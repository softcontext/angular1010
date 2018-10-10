function add(x, y) {
  console.log(this.a + x + y);
}

let obj = {
  a: 100
}

// 4. call, apply
add.call(obj, 1, 2); // 103
add.apply(obj, [1, 2]); // 103

// 5. bind
// 함수안에 this를 고정시킨 새로우 함수를 리턴합니다.
let adder = add.bind(obj);

adder(1, 2); // 103

// 6. 지역함수 호출 시에도 같은 룰이 적용됩니다.
obj.show = function () {
  console.log(this === obj); // true

  function print() {
    console.log(this === global); // true
  }
  print();
};

obj.show();
