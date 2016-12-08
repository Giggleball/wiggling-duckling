const express    = require( 'express' )

const bcrypt     = require('bcrypt')

const session    = require( 'express-session' )

const router     = express.Router ( )

const bodyParser = require( 'body-parser' )

const sequelize  = require( 'sequelize' )



// Models
let seq        = require( __dirname + '/../models/database' )


// Need this to use the middleware & sessions
router.use( bodyParser.urlencoded({ extended: true }))

router.use(session({
secret: 'oh wow very secret much security',
resave: true,
saveUninitialized: false
}))



// Homepage + login screen
router.get( '/', ( req, res ) => {
	console.log( 'Homepage' )	
	res.render( 'index', {
        user: req.session.user
    })
})


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

    seq.User.findOne({
        where: {
            email: req.body.email
        }
    }).then( function ( user ) {
        bcrypt.compare(req.body.password, user.password, function (err, response) {
            if ( user !== null && response == true ) {
                req.session.user = user 
                res.redirect('/messages')
            } else {
                res.redirect('/')
            }
        }), function (error) {
            res.redirect('/?message=' + encodeURIComponent("Invalid email or password."));
        }
    })
})


// Logout button
router.get( '/logout', ( req, res ) => {
    req.session.destroy( function( error ) {
        if( error ) {
            throw error
        }
        res.redirect( '/' )
    })
})


// All messages
router.get( '/messages', ( req, res ) => {
    console.log( 'Viewing messages' )
    console.log(seq.User) 
    seq.Message.findAll({
        include: [ {
            model: seq.User,
            attributes: [ 'name' ]
        },
        {
            model: seq.Comment,
            attributes: [ 'body' ]
        } ]
    }).then( ( message )  => {
        // console.log( message )
        res.render( 'messages', { body: message, user: req.session.user} )
    })
})

// Commenting to the messageboard
router.post( '/messages', ( req, res ) => {
    console.log(req.session.user)
    seq.User.findOne({
        where: { name: req.session.user.name },
        order: '"createdAt" DESC'
    }).then( (thisuser) => {
        console.log(thisuser)
        thisuser.createComment({
            body: req.body.body,
            messageId: req.body.post_id
        }).then( () => {
            res.redirect( '/messages' )
        })
    })
})


// Post page
router.get( '/post', ( req, res ) => {
    console.log( 'leaving a post' )
    res.render( 'post', {
        user: req.session.user
    })
})


// Posting to the messageboard
router.post( '/post', ( req, res ) => {
    console.log(req.session.user)
    seq.User.findOne({
        where: { name: req.session.user.name },
        order: '"createdAt" DESC'
    }).then( ( thisuser ) => {
        console.log(thisuser)
        thisuser.createMessage({
            title: req.body.title,
            body: req.body.body
        }).then( () => {
            res.redirect( '/messages' )
        })
    })
})


// View current user + their messages and comments ^_^
router.get('/profile', function ( req, res ) {
    let user = req.session.user;
    if (user === undefined) {
        res.redirect('/')
    } else {
        console.log(user)
        Promise.all([
            seq.User.findOne({
                where: {
                    id: user.id
                }
            }),
            seq.Message.findAll({
                include: [{
                    model: seq.User,
                },
                {
                    model: seq.Comment,
                    include: [seq.User]
                }]
            })
            ]).then( ( result )  => {
                // you want to show only the messages of the current user
                result[0].getMessages({
                    include: [
                        {model: seq.User},
                        {model: seq.Comment, include: [ seq.User ]}
                    ]
                }).then((messages) => {
                    console.log(messages)
                    res.render( 'profile', { body: messages, user: user } )
                })
        })       
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
// get their password from the user registration form
bcrypt.hash(req.body.password, 8, function(err, hash) {
  if (err !== undefined) {
    console.log(err);
    } else {
        // store it in the database
        seq.User.create({
            name: req.body.name,
            email: req.body.email,
            password: hash
            })
        }
    })
    console.log( 'registered  sucessfully' )
    res.render( 'register' )
})




module.exports = router

















