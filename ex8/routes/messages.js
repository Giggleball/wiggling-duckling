const express  	= require( 'express' )

const router	= express.Router ( )


// All messages
router.get( '/messages', ( req, res ) => {
    console.log( 'Viewing messages' ) 
    Message.findAll({
        include: [ {
            model: User,
            attributes: [ 'name' ]
        },
        {
            model: Comment,
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
    User.findOne({
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

module.exports = router