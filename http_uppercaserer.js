// POST request 
//first argument -> port number

var map = require('through2-map');
var http = require('http');

var portNum = process.argv[2];

http.createServer(function(req, res){
	if (req.method === 'POST') {
		req.pipe(map(function(chunk){
			return chunk.toString().toUpperCase();
		})).pipe(res);
	}
}).listen(portNum);