var fs = require('fs');
var path = require('path');
module.exports = function(dirpath, extension, callback) {
	var filteredfiles = [];
	fs.readdir(dirpath, function(err, list){
		if ( err ) return callback(err);
		list.forEach(function(file){
			if ( path.extname(file)=== '.'+ extension){
				filteredfiles.push(file);
			}
		})
		callback(null, filteredfiles);
	})
}