// Import necessary modules
const express = require( 'express' )

const app = express()

const pg = require( 'pg' )

const bodyParser = require( 'body-parser' )

const session = require('express-session')

const sequelize = require('sequelize')

const seq = new sequelize( 'postgres://' + process.env.POSTGRES_USER + '@localhost/soap');

// The new method doesn't seem to work in EV mode `_`
// const seq = new sequelize('soap', 'process.env.POSTGRES_USER', 'process.env.POSTGRES_PASSWORD', {
//   server: 'localhost',
//   dialect: 'postgres'
// });


//static will become default and overwrite /home
app.use( express.static( 'static') )

// Need this to use the middleware & sessions
app.use( bodyParser.urlencoded({ extended: true }))

app.use(session({
    secret: 'oh wow very secret much security',
    resave: true,
    saveUninitialized: false
}));


// which visual template you'll be using 
app.set( 'view engine', 'pug' )
app.set( 'views', __dirname + '/views' )


// Define database structure

// Define models

let User = seq.define('user', {
    name: sequelize.STRING,
    email: { type: sequelize.STRING, unique: true },
    password: sequelize.STRING
})

let Messages = seq.define( 'messages', {
    title: sequelize.STRING
    body: sequelize.STRING
})

let Comments = seq.define( 'comments', {
  body: sequelize.STRING,
})


// Define relations

User.hasMany( Messages )
User.hasMany( Comments )
Messages.hasMany ( Comments )
Messages.belongsTo( User )
Comments.belongsTo( User )
Comments.belongsTo( Messages )


// Set express routes

// Homepage + login screen

// Query Msg on Homepage
app.get( '/index', ( req, res ) => {
	console.log( 'Homepage' )	
	res.render( 'index', {
        message: req.query.message,
        user: req.session.user
    })
})

// Profile request
app.get('/profile', function ( req, res ) {
    let user = req.session.user;
    if (user === undefined) {
        res.redirect('/index/?message=' + encodeURIComponent("Please log in to view your profile."));
    } else {
        res.render('profile', {
            user: user
        })
    }
})


// Messageboard request
app.get( '/messages', ( request, response ) => {
    console.log( 'Viewing messages' ) 
        Messages.findAll( {
            include: [ {
                model: User,
                attributes: [ 'name' ]
            } ]
        } ).then( messages  => {
            res.redirect( '/messages')
        })
})


// Logout button

app.get( '/logout', ( req, res ) => {
    req.session.destroy( function( error ) {
        if( error ) {
            throw error;
        }
        res.redirect( '/index' );
    })
});


// Login form + signup form
app.post('/login', bodyParser.urlencoded({extended: true}), ( req, res ) => {
    if(req.body.email.length === 0) {
        res.redirect('/index/?message=' + encodeURIComponent("Please fill out your email address."));
        return;
    }

    if(req.body.password.length === 0) {
        res.redirect('/index/?message=' + encodeURIComponent("Please fill out your password."));
        return;
    }

    User.findOne({
        where: {
            email: req.body.email
        }
    }).then( function ( user ) {
        if ( user !== null && req.body.password === user.password ) {
            req.session.user = user;
            res.redirect('/profile');
        } else {
            res.redirect('/index/?message=' + encodeURIComponent("Invalid email or password."));
        }
    }, function (error) {
        res.redirect('/index/?message=' + encodeURIComponent("Invalid email or password."));
    });
    User.create({
            name: req.body.username,
            email: req.body.email,
            password: req.body.password
        }).then(function () {
        res.redirect( '/index/?message=' + encodeURIComponent("You can now log in to view your profile."))
      })
   
})


// Posting to the messageboard
app.post( '/login', (req, res ) => {
    User.createMessage ({
            title: req.body.body,
            body: req.body.body
        }).then(function () {
        res.redirect( '/messages')
      })
    })
})

  
// // Profile page of the user with all their posts & comments

app.post( '/profile', (req, res) => {
  User.findAll( {
    attributes: [ 'name' ],
    include: [ Messages ],
    include: [ Comments ]
  }).then( users => {
    res.redirect( '/profile' )
  })
})


// Create users

seq.sync( {force: false} ).then( seq => {
  console.log( 'Synced' )
})

//   User.create({
//         name: "Kei",
//         email: "mo@ru",
//         password: "boem"
//     }).then(function () {
//         var server = app.listen(8000, function () {
//             console.log('Example app listening on port: ' + server.address().port);
//         });
//     });

// }, function (error) {
//     console.log('sync failed: ');
//     console.log(error);
// })

// Server responding 

app.listen(8000, () => {
	console.log( 'Server running' )
})



// Will be redirected to this page after signing up


// why doesn't this work??????????????????


// // API's?? Post page containing all messages with the user names
