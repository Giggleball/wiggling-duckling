const models	= require('../models')
const express  	= require( 'express' )
const router	= express.Router ( )


// Register
router.post( '/register', ( req, res ) => {
    if(req.body.name.length === 0) {
        res.redirect('/')
    }

    if(req.body.password.length === 0) {
        res.redirect('/')
    }

    if(req.body.email.length === 0) {
        res.redirect('/')
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then( function () {
        res.render( 'register' )
    })
    console.log( 'registered  sucessfully' )
    res.render( 'register' )
})


module.exports = router