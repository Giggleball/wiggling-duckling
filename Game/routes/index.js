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
				password: hash
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
	let user = req.session.user
	if (user === undefined) {
        res.redirect('/')
    } else {
		console.log( 'viewing Dashboard' )
		res.render( 'dash', {
			user:req.session.user
		})
	}
})



// { Game }
router.get( '/game', ( req, res ) => {
	console.log( 'starting game' )
	res.render( 'game', {
		user:req.session.user
	})
})


router.get( '/game1', ( req, res ) => {
	console.log( 'starting game' )
	res.render( 'game_sa', {
		user:req.session.user
	})
})


router.get( '/game2', ( req, res ) => {
	console.log( 'starting game' )
	res.render( 'game_ha', {
		user:req.session.user
	})
})


router.get( '/game3', ( req, res ) => {
	console.log( 'starting game' )
	res.render( 'game_ma', {
		user:req.session.user
	})
})


router.get( '/game4', ( req, res ) => {
	console.log( 'starting game' )
	res.render( 'game_ra', {
		user:req.session.user
	})
})


// { Settings }
router.get( '/settings', ( req, res ) =>  {
	console.log( 'viewing settings' )
	console.log(req.session.user)
	res.render( 'setting', {
		user:req.session.user
	})
})

// { Update Pasword }
router.post( '/settings', ( req, res ) => {
	seq.User.findOne({
        where: { id: req.session.user.id }
    }).then( ( thisuser ) => {
    	console.log( thisuser.password )
    	console.log( req.body.password ) 
        bcrypt.compare(req.body.password, thisuser.password, ( err, data ) => {
        	if (err !== undefined) {
    			console.log(err);
	    	} else {
			    // store it in the database
			    bcrypt.hash( req.body.newpassword, 8, function ( err, hash ) {	
    				thisuser.updateAttributes ({
			 	    	password: hash
			        })
			    }) 
			}
        console.log( 'Password updated!' )
        res.redirect( '/dash' )
    	})
    })
})


// { Change email adress }
router.post( '/settings' , ( req, res ) => {
	// Find current user by email
	seq.User.findOne({
		where: { id: req.session.user.email }
	}).then( ( thisuser ) => {
		// Update current user's email with new input
		thisuser.updateAttributes ({
			email: req.body.newemail
		})
	})	
	console.log( req.body.newemail )
	res.redirect( '/dash' )
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









