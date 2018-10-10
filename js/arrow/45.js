function foo() {
  console.log(this === foo); // true

  setTimeout(function() {
    console.log(this.a); // func
  }.bind(this), 100);
}

foo.a = 'func';

foo.call(foo);
