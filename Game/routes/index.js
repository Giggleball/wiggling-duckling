// Dependencies
const express	 = require( 'express' )

const bodyParser = require( 'body-parser' )

const session	 = require( 'express-session' )

let router		 = express.Router( )

const bcrypt	 = require( 'bcrypt' )

let seq          = require( __dirname + '/../models/database' )

// Need this to use the middleware & sessions
router.use( bodyParser.urlencoded({ extended: true }))

router.use(session({
secret: 'oh wow very secret much security',
resave: true,
saveUninitialized: false
}))


// { Landing Page }
router.get( '/', ( req, res ) => {
	console.log( 'main' )
	res.render( 'index', {
		user:req.session.user
	})
})


// { Register + login page }
router.get( '/login', ( req, res ) => {
	console.log( 'registration' )
	res.render( 'reg', {
		user:req.session.user
	})
})


// { Signin up }
router.post( '/signup', ( req, res ) => {
	if(req.body.username.length === 0) {
		res.redirect('/')
	}

	if(req.body.name.length === 0) {
		res.redirect('/')
	}

	if(req.body.email.length === 0) {
		res.redirect('/')
	}

	if(req.body.password.length === 0) {
		res.redirect('/')
	}

	// Hash the password & store it in the DB
	bcrypt.hash(req.body.password, 8, function( err, hash ) {
		if( err !== undefined ) {
			console.log(err)
		} else {
			seq.User.create({
				username: req.body.username,
				name: req.body.name,
				email: req.body.email,
				password: hash,
				score: req.body.score
			})
		}
	})
	console.log( 'registered  sucessfully' )
	res.redirect( '/login' )
})


// { Login }
router.post( '/login', bodyParser.urlencoded({extended: true}), ( req, res ) => {
	if(req.body.username.length === 0) {
		res.redirect( '/')
	}

	if(req.body.password.length === 0) {
		res.redirect( '/')
	}

	seq.User.findOne({
		where: {
			username: req.body.username
		}
	}).then( function ( user ) {
		bcrypt.compare(req.body.password, user.password, function ( err, response ) {
			if( user !== null && response == true  ) {
				req.session.user = user
				res.redirect( '/dash' )
			} else {
				res.redirect( '/' )
			}
		}), function (err) {
			res.redirect( '/login/message=' + encodeURIComponent( 'Invalid password or username' ))
		} 
	})
})


// { Dashboard }
router.get( '/dash', ( req, res ) => {
	console.log( 'viewing Dashboard' )
	res.render( 'dash', {
		user:req.session.user
	})
})




// { Game }
router.get( '/game', ( req, res ) => {
	console.log( 'starting game' )
	res.render( 'game', {
		user:req.session.user
	})
})


// { Lougout }
router.get( '/logout', ( req, res ) => {
	req.session.destroy( function (err) {
		if(err) {
			throw err
		}
		res.redirect( '/')
	})
})



module.exports = router









