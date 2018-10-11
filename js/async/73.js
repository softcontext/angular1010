var fs = require('fs');

var promise = new Promise(function(resolve, reject) {
  fs.readFile(__dirname + '/data.txt', 'utf-8', function(error, data) {
    if (error) {
      return reject(error);
    }
    resolve(data);
  });
});

promise.then(function(result) { // 성공 콜백
  console.log(result);
}).catch(function(error) { // 실패 콜백
  console.log(error.message);
}).then(function() { // 추가 코드 기동 가능
  console.log('The End');
});
