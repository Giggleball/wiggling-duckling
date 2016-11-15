// Import necessary modules
const express = require( 'express' )

const app = express()

const bodyParser = require( 'body-parser' )

const session = require( 'express-session' )

const sequelize = require( 'sequelize' )

const seq = new sequelize( 'postgres://' + process.env.POSTGRES_USER + '@localhost/soap');


//static will become default and overwrite /home
app.use( express.static( 'static' ) )

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

let Message = seq.define( 'message', {
    title: sequelize.STRING,
    body: sequelize.STRING
})

let Comment = seq.define( 'comments', {
  body: sequelize.STRING
})


// Define relations
User.hasMany( Message )
User.hasMany( Comment )
Message.hasMany ( Comment )
Message.belongsTo( User )
Comment.belongsTo( User )
Comment.belongsTo( Message )


// Set express routes

// Homepage + login screen
app.get( '/index', ( req, res ) => {
	console.log( 'Homepage' )	
	res.render( 'index', {
        user: req.session.user
    })
})


// All messages
app.get( '/comments', ( req, res ) => {
    console.log( 'Viewing messages' ) 
    Message.findAll({
        include: [{
            model: User,
            attributes: [ 'name' ]
        }]
    }).then( ( message )  => {
        // console.log( message )
        res.render( 'comments', { body: message } )
    })
})


// Viewing profile + all your messages
app.get('/profile', function ( req, res ) {
    let User = req.session.user;
    if (User === undefined) {
        res.redirect('/index')
    } else {
        res.render('profile', {
            user: User
        })
    }
})


// Logout button
app.get( '/logout', ( req, res ) => {
    req.session.destroy( function( error ) {
        if( error ) {
            throw error
        }
        res.redirect( '/index' )
    })
});


// Post page
app.get( '/post', ( req, res ) => {
    console.log( 'leaving a post' )
    res.render( 'post', {
        User: req.session.user
    })
})


// Login form + signup form
app.get( '/login', ( req, res ) => {
    console.log( 'logged in' )
    res.render( 'login', {
        User: req.session.user
    })
})


app.post( '/register', ( req, res ) => {
    if(req.body.name.length === 0) {
        res.redirect('/index')
    }

    if(req.body.password.length === 0) {
        res.redirect('/index')
    }

    if(req.body.email.length === 0) {
        res.redirect('/index')
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


app.post('/login', bodyParser.urlencoded({extended: true}), ( req, res ) => {
    if(req.body.email.length === 0) {
        res.redirect('/index')
    }

    if(req.body.password.length === 0) {
        res.redirect('/index')
    }

    User.findOne({
        where: {
            email: req.body.email
        }
    }).then( function ( user ) {
        if ( user !== null && req.body.password === user.password ) {
            req.session.user = user 
            res.redirect('/comments')
        } else {
            res.redirect('/index')
        }
    })
})


// Posting to the messageboard
app.post( '/post', (req, res ) => {

    User.findOne({
        where: { 
            user: req.session.user.id
        }
    }).then( thisUser => {
        thisUser.createMessage({
            title: req.body.title,
            body: req.body.body
        }).then( () => {
            seq.sync().then( () => {
            res.redirect( '/comments' )
            })
        })
    })
})


// Sync database
seq.sync( {force: true} ).then(function () {
    User.create({ // INSERT INTO "people" ("id","name") VALUES (DEFAULT,'bubbles') RETURNING *;
        name: 'Mua',
        email: 'mua@mua',
        password: 'mua'
    }).then( ( user ) => { // INSERT INTO "messages" ("id","body","personId") VALUES (DEFAULT,'i like trains',1) RETURNING *;
        user.createMessage({
            title: 'Ohaiyo!',
            body: 'I saw two bunnies !!!'
        })
    }).then
    User.create({ // INSERT INTO "people" ("id","name") VALUES (DEFAULT,'bubbles') RETURNING *;
        name: 'Cat',
        email: 'miaw@miaw',
        password: 'miaw'
    }).then( ( user ) => { // INSERT INTO "messages" ("id","body","personId") VALUES (DEFAULT,'i like trains',1) RETURNING *;
        user.createMessage({
            title: 'Konbanwa!',
            body: 'I will have peanutbutter today !!!'
        })
    }).then 
            User.create({ // INSERT INTO "people" ("id","name") VALUES (DEFAULT,'bubbles') RETURNING *;
        name: 'Tom',
        email: 'tom@mtom',
        password: 'tom'
    }).then( ( user ) => { // INSERT INTO "messages" ("id","body","personId") VALUES (DEFAULT,'i like trains',1) RETURNING *;
        user.createMessage({
            title: 'Anneyong!',
            body: 'I will do the pho challenge today !!!'
    })
    })
})    


app.listen(8000, () => {
    console.log( 'Server running' )
})





