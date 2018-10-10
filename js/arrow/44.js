function foo() {
  console.log(this === foo); // true
  let self = this;

  setTimeout(function() {
    console.log(self.a); // func
  }, 100);
}

foo.a = 'func';

foo.call(foo);
