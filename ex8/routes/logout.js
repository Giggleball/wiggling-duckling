const models	= require('../models')

const express  	= require( 'express' )

const router	= express.Router ( )


// Logout button
router.get( '/logout', ( req, res ) => {
    req.session.destroy( function( error ) {
        if( error ) {
            throw error
        }
        res.redirect( '/' )
    })
})


module.exports = router