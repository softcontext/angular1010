var fs = require("fs");
console.log(__dirname);
var sourceFile = __dirname + '/why-use-var-count.js';
var targetFile = __dirname + '/new-file-copyed.js';

// 콜백의 과도한 중첩: Callback's Hell, 가독성이 현전히 떨어진다.
fs.chmod(sourceFile, 777, function(err) {
  if (err) {
    console.log(err.message);
  }
  console.log('1');
  fs.rename(sourceFile, targetFile, function(err) {
    if (err) {
      console.log(err.message);
    }
    console.log('2');
    fs.stat(targetFile, function(err, stats) {
      console.log('3');
      console.log(stats);
    });
    console.log('4');
  });
  console.log('5');
});
