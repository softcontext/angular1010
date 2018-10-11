var fs = require('fs');

var promise = new Promise(function(resolve, reject) {

  fs.readFile(__dirname + '/data.txt', 'utf-8', function(error, data) {
    if (error) {
      return reject(error); // 실패
    }
    resolve(data); // 성공
  });

});

promise
.then(function(result) { // 성공 콜백
  console.log(result);
}, function(error) { // 실패 콜백
  console.log(error.message);
});
