// const models	= require('../models')

const express  	= require( 'express' )

const router	= express.Router ( )


// Homepage + login screen
router.get( '/', ( req, res ) => {
	console.log( 'Homepage' )	
	res.render( 'index', {
        user: req.session.user
    })
})


module.exports = router