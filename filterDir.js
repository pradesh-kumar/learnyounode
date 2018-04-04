var fs = require(fs);
var path = require(path);
fs.readdir(process.argv[2],'utf8', function(err, fileNames){
	if(err){
		console.log(err);
	}
	else{
		fileNames.forEach((filename) => {
			if (path.extname(filename) === '.' + process.argv[3]) {
				console.log(filename);
			}
		});
	}
});