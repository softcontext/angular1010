const {Counter} = require('./Counter');

let counter = new Counter();
console.log(counter);
// console.log(counter.__proto__.__proto__);

counter.on('start', function () {
  console.log('START');
});

counter.on('count', function (value) {
  console.log('count = ' + value);
});

counter.start();
