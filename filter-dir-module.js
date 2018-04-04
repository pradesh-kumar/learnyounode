var fs = require('fs');
var path = require('path');
module.exports = (dirPath, extension, callback) => {
  var files = [];  
  fs.readdir(dirPath, (err, list) => {
    if (err) {
      return callback(err);
    }
    list.forEach((file) => {
      if (path.extname(file) === '.' + extension) {
        files.push(file);
      }
    });
    callback(null, files);
  });
};
