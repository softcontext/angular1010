let b = 20;

let obj = {
  a: 10,
  b,
  c: 30
};

console.log(obj);

// let x = obj.a;
// let y = obj.b;
// console.log(x + y);

let {a, c} = obj;
// let a = obj.a;
// let c = obj.c;

console.log(a + c);
