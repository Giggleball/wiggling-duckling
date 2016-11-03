// including the necessary modules
const express = require( 'express' )

const app = express()

const pg = require( 'pg' )

const bodyParser = require( 'body-parser' )

const connectionString = 'postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD

//static will become default and overwrite /home
app.use( express.static( 'static') )

// which visual template you'll be using 
app.set( 'view engine', 'pug' )
app.set( 'views', __dirname + '/views' )

// Need this to use the middleware .body
app.use( bodyParser.urlencoded({ extended: true }))


// when home is requested, show the following
app.get( '/index', ( request, response ) => {
	console.log( 'Homepage' )	
	response.render( 'index' )
})


// when messages is requested, show the following
app.get( '/messages', ( request, response ) => {
	console.log( 'Viewing messages' )	
	pg.connect(connectionString, ( error, client, done ) => {
  		console.log( 'connected with db' )
  		if ( error ) {
  			throw error
  		}
  		client.query( 'SELECT * FROM msg',  ( error, result ) => {
  			console.log( 'reading msgs' )
  			if ( error ) {
  				throw error
  			}
  			console.log(result.rows)
  			done()
  			pg.end()
  			response.render( 'posts', { body: result.rows } )
  		})
	})
})



// will be redirected to this page after adding a msg
app.post( '/messages', ( request, response ) => {
	// var add = request.body.addString
	console.log( "message added" ) 

  	pg.connect(connectionString, ( error, client, done ) => {
  		console.log( 'connected with db' )
  		if ( error ) {
  			throw error
  		}
		//SQL Query > Insert Data
		client.query( "INSERT INTO msg( title, body ) values ($1, $2)", [request.body.title, request.body.body], ( err, results ) => {
			console.log( 'making query' )
			if ( error ) {
				throw error
			}	
			
			response.redirect( '/messages')


			done()
	   		pg.end()
		
  		})
  	})
})


app.listen(8000, () => {
	console.log( 'Server running' )
})




