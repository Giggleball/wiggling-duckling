// Import necessary modules
const express    = require( 'express' )

const app        = express( )

const bodyParser = require( 'body-parser' )

const session    = require( 'express-session' )

const sequelize  = require( 'sequelize' )

var validator = require( 'validator' )

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


// Models
let model        = require( __dirname + '/models/database' )

// Routes
let routes       = require( __dirname + '/routes/index' )


app.use( '/', routes )


// App will listen on 8000
app.listen(8000, () => {
    console.log( 'Server running' )
})








// Define database structure

// Define models
// let User = seq.define( 'user', {
//     name: sequelize.STRING,
//     email: { type: sequelize.STRING, unique: true },
//     password: sequelize.STRING
// })

// let Message = seq.define( 'message', {
//     title: sequelize.STRING,
//     body: sequelize.STRING
// })

// let Comment = seq.define( 'comment', {
//   body: sequelize.STRING
// })


// // Define relations
// User.hasMany( Message )
// User.hasMany( Comment )
// Message.hasMany ( Comment )
// Message.belongsTo( User )
// Comment.belongsTo( User )
// Comment.belongsTo( Message )


// Set express routes

// // Homepage + login screen
// app.get( '/', ( req, res ) => {
// 	console.log( 'Homepage' )	
// 	res.render( 'index', {
//         user: req.session.user
//     })
// })


// // All messages
// app.get( '/messages', ( req, res ) => {
//     console.log( 'Viewing messages' ) 
//     Message.findAll({
//         include: [ {
//             model: User,
//             attributes: [ 'name' ]
//         },
//         {
//             model: Comment,
//             attributes: [ 'body' ]
//         } ]
//     }).then( ( message )  => {
//         // console.log( message )
//         res.render( 'messages', { body: message, user: req.session.user} )
//     })
// })


// // View current user + their messages and comments ^_^
// app.get('/profile', function ( req, res ) {
//     let user = req.session.user;
//     if (user === undefined) {
//         res.redirect('/')
//     } else {
//         console.log(user)
//         Promise.all([
//             User.findOne({
//                 where: {
//                     id: user.id
//                 }
//             }),
//             Message.findAll({
//                 include: [{
//                     model: User,
//                 },
//                 {
//                     model: Comment,
//                     include: [User]
//                 }]
//             })
//             ]).then( ( result )  => {
//                 // you want to show only the messages of the current user
//                 result[0].getMessages({
//                     include: [
//                         {model: User},
//                         {model: Comment, include: [User]}
//                     ]
//                 }).then((messages) => {
//                     console.log(messages)
//                     res.render( 'profile', { body: messages, user: user } )
//                 })
//         })       
//     }
// })


// // Logout button
// app.get( '/logout', ( req, res ) => {
//     req.session.destroy( function( error ) {
//         if( error ) {
//             throw error
//         }
//         res.redirect( '/' )
//     })
// });


// // Post page
// app.get( '/post', ( req, res ) => {
//     console.log( 'leaving a post' )
//     res.render( 'post', {
//         user: req.session.user
//     })
// })


// // Display login form + signup form
// app.get( '/login', ( req, res ) => {
//     console.log( 'logged in' )
//     res.render( 'login', {
//         user: req.session.user
//     })
// })


// // Register
// app.post( '/register', ( req, res ) => {
//     if(req.body.name.length === 0) {
//         res.redirect('/')
//     }

//     if(req.body.password.length === 0) {
//         res.redirect('/')
//     }

//     if(req.body.email.length === 0) {
//         res.redirect('/')
//     }
//     User.create({
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password
//     }).then( function () {
//         res.render( 'register' )
//     })
//     console.log( 'registered  sucessfully' )
//     res.render( 'register' )
// })

// // After Login 
// app.post('/login', bodyParser.urlencoded({extended: true}), ( req, res ) => {
//     if(req.body.email.length === 0) {
//         res.redirect('/')
//     }

//     if(req.body.password.length === 0) {
//         res.redirect('/')
//     }

//     User.findOne({
//         where: {
//             email: req.body.email
//         }
//     }).then( function ( user ) {
//         if ( user !== null && req.body.password === user.password ) {
//             req.session.user = user 
//             res.redirect('/messages')
//         } else {
//             res.redirect('/')
//         }
//     })
// })


// // Posting to the messageboard
// app.post( '/post', ( req, res ) => {
//     console.log(req.session.user)
//     User.findOne({
//         where: { name: req.session.user.name },
//         order: '"createdAt" DESC'
//     }).then( ( thisuser ) => {
//         console.log(thisuser)
//         thisuser.createMessage({
//             title: req.body.title,
//             body: req.body.body
//         }).then( () => {
//             res.redirect( '/messages' )
//         })
//     })
// })


// // Commenting to the messageboard
// app.post( '/messages', ( req, res ) => {
//     console.log(req.session.user)
//     User.findOne({
//         where: { name: req.session.user.name },
//         order: '"createdAt" DESC'
//     }).then( (thisuser) => {
//         console.log(thisuser)
//         thisuser.createComment({
//             body: req.body.body,
//             messageId: req.body.post_id
//         }).then( () => {
//             res.redirect( '/messages' )
//         })
//     })
// })


// Sync database
// seq.sync( {force: true} ).then(function () {
//     User.create({ // INSERT INTO "people" ("id","name") VALUES (DEFAULT,'bubbles') RETURNING *;
//         name: 'Mua',
//         email: 'mua@mua',
//         password: 'mua'
//     }).then( ( user ) => { // INSERT INTO "messages" ("id","body","personId") VALUES (DEFAULT,'i like trains',1) RETURNING *;
//     user.createMessage({
//         title: 'Ohaiyo!',
//         body: 'I saw two bunnies !!!'
//     })
// }).then
//     User.create({ // INSERT INTO "people" ("id","name") VALUES (DEFAULT,'bubbles') RETURNING *;
//         name: 'Cat',
//         email: 'miaw@miaw',
//         password: 'miaw'
//     }).then( ( user ) => { // INSERT INTO "messages" ("id","body","personId") VALUES (DEFAULT,'i like trains',1) RETURNING *;
//     user.createMessage({
//         title: 'Konbanwa!',
//         body: 'I will have peanutbutter today !!!'
//     })
// }).then 
//     User.create({ // INSERT INTO "people" ("id","name") VALUES (DEFAULT,'bubbles') RETURNING *;
//         name: 'Tom',
//         email: 'tom@mtom',
//         password: 'tom'
//     }).then( ( user ) => { // INSERT INTO "messages" ("id","body","personId") VALUES (DEFAULT,'i like trains',1) RETURNING *;
//     user.createMessage({
//         title: 'Anneyong!',
//         body: 'I will do the pho challenge today !!!'
//     })
// })
// })    








