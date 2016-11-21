const router	= express.Router ( )

let bcrypt       = require('bcrypt')


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
// get their password from the user registration form
bcrypt.hash(req.body.password, 8, function(err, hash) {
  if (err !== undefined) {
    console.log(err);
} else {
    // store it in the database
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: hash
    })
    }.then( function () {
        res.render( 'register' )
    })
    console.log( 'registered  sucessfully' )
    res.render( 'register' )
})


module.exports = router