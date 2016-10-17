var fs = require( 'fs' );

fs.readdir( 'yep', function( err, files)  {
	if ( err ) {
		console.log( "Error reading files: ", err );
	} else {
		console.log( files )
		var remaining = files.length;

		// if ( remaining == 0 ) {
		// 	console.log ( "done reading files" );
		// }

		for ( var i = 0; i < files.length; i++ ) {
			fs.readFile( "yep/" + files[i], 'utf8', function( err, data ) {
				if (err) {
					throw err
				}
				console.log( data );
			});
		}
	}
});













