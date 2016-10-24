// including the necessary modules
const express = require( 'express' )
const fs = require( 'fs' )
const app = express()
// in order to use bodyParser, you need to install and require it first
const bodyParser = require('body-parser')

//static will become default and overwrite /home
app.use( express.static( 'static') )

// which visual template you'll be using 
app.set( 'view engine', 'pug' )
app.set( 'views', __dirname + '/views' )

// Need this to use the middleware .body
app.use( bodyParser.urlencoded({ extended: true }))

// when home is requested, show the following
app.get( '/', ( request, response ) => {
	console.log( 'About to render index.pug' )
	fs.readFile( __dirname + '/users.json', ( error, data ) => {
		if ( error ) throw error
			let parsedData = JSON.parse( data )
		console.log( parsedData )
		response.render( 'index', { data: parsedData } )
	})
})

// The search page
app.get( '/search', ( request, response ) => {
	console.log( 'search for user' )
	response.render( 'search' )
})

// The page where you add users
app.get( '/addUser', ( request, response ) => {
	console.log( 'adding user' )
	response.render( 'addUser' )
})

// will be redirected to this page when searching for a user
app.post('/users', ( request, response ) => {
	let name = request.body.searchString
	console.log( name ) // equal to the name you want to search
	//find out if searchname is equal to a name in users.json

	//fs readfile
	fs.readFile( __dirname + '/users.json', ( error, data ) => {
		if ( error ) throw error

		// within readfile: parse the data
	let dataObject = JSON.parse( data )
	let searchResults = []
		// loop through parseddata & check if name == 1st name || last name
		for ( i = 0; i < dataObject.length; i++) {
			if ( dataObject[i].firstname == name || dataObject[i].lastname == name ){
				console.log( "Firstname: " + dataObject[i].firstname )
				console.log( "Lastname: " + dataObject[i].lastname )
				// you want to iterate and push your data into the empty array
				searchResults.push(dataObject[i])
			}
		}
		// the data is stored in the empty array, so you put that as the value for the key
		response.render( 'users', { results: searchResults } )
		
		// if thats the case, we want to render a new page, showing all the data of the user we found
	})
})

// will be redirected to this page after adding a user
app.post('/request', ( request, response ) => {
	// var add = request.body.addString
	console.log( "user added" ) 

	fs.readFile( __dirname + '/users.json', ( error, data ) => {
		if ( error ) throw error

		// Create a javascript object with the array in it
		let newUser = { 
			firstname: request.body.firstname, 
			lastname: request.body.lastname, 
			email: request.body.email
		}
		// a var where we want to store the new data in
		let newFile = JSON.parse( data )

		// Add some data to 
		newFile.push( newUser )

		// use fs to write the file to disk
		fs.writeFile( 'users.json', JSON.stringify( newFile ), 'utf8', ( err, result ) => {
			console.log('file written')
		} ); 
	})
	response.render( 'request' )
})

app.listen(8000, () => {
	console.log( 'Server running' )
})





