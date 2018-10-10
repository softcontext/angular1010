console.log(1);

(function() {
  'use strict';
  console.log(2);
})();

if (true) {
  console.log(3);
}

(function() {
  'use strict';
  console.log(4);
}());

console.log(5);
