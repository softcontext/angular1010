function foo() {
  console.log(this === foo); // true

  setTimeout(function() {
    console.log(this); // Timeout
    console.log(this.a); // undefined
  }, 100);

}

foo.a = 'func';

foo.call(foo);
