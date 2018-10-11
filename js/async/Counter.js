const {EventEmitter} = require('events');

function Counter() {
  this.max = 10;
  this.count = 0;

  this.start = function () {
    this.emit('start');
    let self = this;

    let intervalId = setInterval(function () {
      self.count++;
      self.emit('count', self.count);
      if (self.count >= self.max) {
        clearInterval(intervalId);
      }
    }, 1000);
  };
}

Counter.prototype.__proto__ = EventEmitter.prototype;

module.exports = {
  Counter
}
