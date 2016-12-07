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



// Register
router.post( '/register', ( req, res ) => {
	if(req.body.username.lenght === 0) {
		res.redirect('/')
	}

	if(req.body.name.lenght === 0) {
		res.render('/')
	}

	if(res.body.email.lenght === 0) {
		res.render('/')
	}

	if(req.body.password.lenght === 0) {
		res.redirect('/')
	}

	if(res.body.score.lenght === 0) {
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

// Signing up


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


module.exports = router