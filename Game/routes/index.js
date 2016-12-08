// Dependencies
const express	= require( 'express' )

let router		= express.router( )

let data 		= require( 'models/database' )


// Landing Page { Register + login page }
router.get( '/', ( req, res ) => {
	console.log( 'main' )
	res.render( 'index', {
		user:req.session.user
	})
})


// Signin up
router.post( '/register', ( req, res ) => {
	if(req.body.username.length === 0) {
		res.redirect('/')
	}

	if(req.body.name.length === 0) {
		res.render('/')
	}

	if(res.body.email.length === 0) {
		res.render('/')
	}

	if(req.body.password.length === 0) {
		res.redirect('/')
	}

	if(res.body.score.length === 0) {
		res.render('/')
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
	res.redirect( '/dash' )
}


// Login
router.post( '/login', bodyParser.urlendoded({extended: true}), ( req, res ) => {
	if(req.body.username.length === 0) {
		res.redirect( '/')
	}

	if(req.body.password.legth === 0) {
		res.redirect( '/')
	}

	seq.User.findOne({
		where: {
			username: req.body.username
		}
	}).then( function ( user ) {
		bcrypt.compare(req.body.password, userr.password, function (err, res ) {
			if( user ==! && response == true ) {
				req.session.user = user
				res.redirect( '/dash' )
			} else {
				redirect( '/')
			}
		}), function (err) {
			res.redirect( '/message=' + encodeURIComponent('Invalid password or username'))
		} 
	})
})


// Dashboard { Games }
router.get( '/dash', ( req, res ) => {
	console.log( 'viewing Dashboard' )
	res.render( 'dash', {
		user:req.session.user
	})
})




// Game { }
router.get( '/game', ( req, res ) => {
	console.log( 'starting game' )
	res.render( 'game', {
		user:req.session.user
	})
})


// Lougout
router.get( '/logout', ( req, res ) => {
	req.session.destroy( function (err) {
		if(err) {
			throw err
		}
		res.redirect( '/')
	})
})



module.exports = router









