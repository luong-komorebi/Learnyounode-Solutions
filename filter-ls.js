var fs = require('fs');
var path= require ('path');
fs.readdir(process.argv[2], function(err, data){
	if (err) throw err;
	data.forEach(function (filename){
		if (path.extname(filename)=== '.'+process.argv[3]){
			console.log(filename);
		}
	})

})