//2 ways to solve this - using bl or concatstream

/*var http= require ('http');
var concat = require('concat-stream');
var links = process.argv.slice(2);
var results = [];
	resultsCount = 0;
links.forEach(function(link,i){
	http.get(link, function(response){
		response.setEncoding('utf-8');
		response.pipe(concat(function(data){
			results[i]=data;
			resultsCount++;
			if ( resultsCount === links.length){
				results.forEach(function(result){
					console.log(result);
				})
			}
		}))
	})
})*/
var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults() {
	for (var i = 0; i < 3; i++)
		console.log(results[i])
}

function httpGet(index) {
	http.get(process.argv[2 + index], function(response) {
		response.pipe(bl(function(err, data) {
			if (err)
				return console.error(err)

			results[index] = data.toString()
			count++

			if (count == 3)
				printResults()
		}))
	})
}

for (var i = 0; i < 3; i++)
	httpGet(i)