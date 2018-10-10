const a = 10;

const obj = {
  a,
  print () {
    console.log('this.a = ' + this.a);
  }
};

obj.print();
