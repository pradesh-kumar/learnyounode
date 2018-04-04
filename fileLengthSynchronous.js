var fs = require('fs');

var fileName = process.argv[2];

//console.log(fileName);


if(fileName){
var fileContent = fs.readFileSync(fileName+"");

fileContent = fileContent+"";

var fileContentArr = fileContent.split("\n");

console.log(fileContentArr.length-1);	
}
