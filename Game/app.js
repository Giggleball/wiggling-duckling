// Dependencies
const express		= require( 'express' )

const app			= express( )

const bodyparser	= require( 'body-parser' )

const bcrypt		= require( 'bcrypt' )

const session		= require( 'express-session' )

cosnt sequelize		= require( 'sequelize' )


// Requiring models
let data 			= require( 'models/database')

// Public files {media/css/js}
app.use( express.static( '/public' ) )


// Middleware for storing sessions & bodyparser
// { will only parse objects and arrays }
app.use( bodyParser.urlencoded({ extended: true } ) )

app.use( session ({
	secret: 'oh wow very secret much secuirty',
	resave: true,
	saveUninitialized: false
} ) )


// Visual template { I'll be using pug }
app.set( 'view engine', 'pug' )

app.set( 'views', __dirname + '/views' )


// Models
let models			= require( __dirname + '/models/database' )


// Routes
let routes 			= require( __dirname + '/routes/index' )

app.use( '/', routes )


// Server will be listen on...
app.listen( 8880, () => {
	console.log( 'We are up and running!' )
})


