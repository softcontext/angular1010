console.log(this === module.exports); // true

(function() {
  console.log(this === global); // true

  let add2 = function (a, b) {
    console.log(arguments);
    return a + b;
  };

  let add3 = (a, b) => {
    console.log(arguments); // 없다.
    return a + b;
  };

  console.log(add2(2, 3));
  console.log(add3(2, 3));

}());
