const models	= require('__dirname + /models')
const express  	= require( 'express' )
const router	= express.Router ( )


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
    User.findOne({
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


module.exports = router