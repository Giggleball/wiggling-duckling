const models	= require('../models')

const express  	= require( 'express' )

const router	= express.Router ( )

let bcrypt       = require('bcrypt')


let password = process.argv[2]; // get their password from the user registration form
bcrypt.hash(password, 8, function(err, hash) {
  if (err !== undefined) {
    console.log(err);
  } else {
    fs.writeFile("file.txt", hash); // store it in the database
  }
})


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