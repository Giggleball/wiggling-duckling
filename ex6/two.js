// Reading the file
var file = require(__dirname + '/json-file-reader.js');

// Calling the function
file ( file, function (dataObject) {
	for ( i = 0; i < dataObject.length; i++) {
		if ( dataObject[i].name == process.argv[2] ){
			console.log( "Country name: " + dataObject[i].name )
			console.log( "Top Level Domain: " + dataObject[i].topLevelDomain )
		} 
	}
})



