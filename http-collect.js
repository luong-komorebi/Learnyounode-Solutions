// using concat stream
var concat= require('concat-stream');
var http = require('http');
var link = process.argv[2];
http.get(link, function(response) {
	response.setEncoding('utf-8');
	response.pipe(concat(function(data){
		console.log(data.length);
		console.log(data);
	}));
});
