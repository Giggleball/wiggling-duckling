const models	= require('../models')
const express  	= require( 'express' )
const router	= express.Router ( )


// View current user + their messages and comments ^_^
router.get('/profile', function ( req, res ) {
    let user = req.session.user;
    if (user === undefined) {
        res.redirect('/')
    } else {
        console.log(user)
        Promise.all([
            User.findOne({
                where: {
                    id: user.id
                }
            }),
            Message.findAll({
                include: [{
                    model: User,
                },
                {
                    model: Comment,
                    include: [User]
                }]
            })
            ]).then( ( result )  => {
                // you want to show only the messages of the current user
                result[0].getMessages({
                    include: [
                        {model: User},
                        {model: Comment, include: [User]}
                    ]
                }).then((messages) => {
                    console.log(messages)
                    res.render( 'profile', { body: messages, user: user } )
                })
        })       
    }
})


module.exports = router