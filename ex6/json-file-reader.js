// Create the module for the other file
var fs = require( 'fs' );

// A function which reads & parses the file
var toll = function(filename, callback) {
	fs.readFile(__dirname + '/countries.json', 'utf-8', function( err, data ) {
		if ( err ) {
			console.log( 'an error occured: ${err}');
			throw err;
		}
		var dataObject = JSON.parse( data )
		callback(dataObject) 
	})
}

// Exporting the file
module.exports = toll




