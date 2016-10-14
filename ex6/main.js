// Part 1
// ~ step 1
var fs = require( 'fs' );
fs.readFile(__dirname + '/countries.json', 'utf-8', function( err, data ) {
	if ( err ) {
		console.log( 'an error occured: ${err}');
		throw err;
	}
	// console.log( JSON.parse( data ) )
    // ~ step 2

    var dataObject = JSON.parse( data )
    for ( i = 0; i < dataObject.length; i++) {
    	if ( dataObject[i].name == process.argv[2] ){
    		console.log( "Country name: " + dataObject[i].name )
    		console.log( "Top Level Domain: " + dataObject[i].topLevelDomain )
    	}
    }
})

