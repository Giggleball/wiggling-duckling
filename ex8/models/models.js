// Container object
let seq = {
    mod: {}
}


// Set up sql
seq.sequelize  = require( 'sequelize' )

seq.conn       = new sequelize( 'postgres://' + process.env.POSTGRES_USER + '@localhost/soap' );


// Models

// Users
seq.User = db.conn.define( 'user', {
    name: sequelize.STRING,
    email: { type: sequelize.STRING, unique: true },
    password: sequelize.STRING
})


// Messages 
seq.Message = db.conn.define( 'message', {
    title: sequelize.STRING,
    body: sequelize.STRING
})


// Comment
seq.Comment = db.conn.define( 'comment', {
    body: sequelize.STRING
})


/// Declaring the relationships between tables
Comment.belongsTo( Models.User )
Comment.belongsTo( Models.Message )
Message.hasMany( Models.Comment )
Message.belongsTo( Models.User )
User.hasMany( Models.Message )
User.hasMany( Models.Comment )


// Synchronise with database
seq.conn.sync( {'force': true} ).then() {
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


module.exports = db

