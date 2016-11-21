const express   = require( 'express' )

const router    = express.Router ( )


// Display login form + signup form
router.get( '/login', ( req, res ) => {
    console.log( 'logged in' )
    res.render( 'login', {
        user: req.session.user
    })
})


// After Login 
router.post('/login', bodyParser.urlencoded({extended: true}), ( req, res ) => {
    if(req.body.email.length === 0) {
        res.redirect('/')
    }

    if(req.body.password.length === 0) {
        res.redirect('/')
    }

    User.findOne({
        where: {
            email: req.body.email
        }
    }).then( function ( user ) {
        bcrypt.compare(req.body.password, user.password, function (err, response) {
            if ( user !== null &&  response == true ) {
                req.session.user = user 
                res.redirect('/messages')
            } else {
                res.redirect('/')
            }
        }), function (error) {
            res.redirect('/?message=' + encodeURIComponent("Invalid email or password."));
        })
})


module.exports = router