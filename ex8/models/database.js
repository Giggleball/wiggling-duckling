// Set up database
const sequelize  = require( 'sequelize' )


// Container object
let seq = {
    mod: { }
}


seq.conn         = new sequelize( 'postgres://' + process.env.POSTGRES_USER + '@localhost/soap' );


// Models

// Users
seq.User = seq.conn.define( 'user', {
    name: { type: sequelize.STRING, unique: true, allowNull: false },
    email: { type: sequelize.STRING, unique: true, allowNull: false },
    password: { type: sequelize.STRING, min: 8 }
})


// Messages 
seq.Message = seq.conn.define( 'message', {
    title: sequelize.STRING,
    body: sequelize.STRING
})


// Comment
seq.Comment = seq.conn.define( 'comment', {
    body: sequelize.STRING
})


/// Declaring the relationships between tables
seq.Comment.belongsTo( seq.User )
seq.Comment.belongsTo( seq.Message )
seq.Message.hasMany( seq.Comment )
seq.Message.belongsTo( seq.User )
seq.User.hasMany( seq.Message )
seq.User.hasMany( seq.Comment )


// Synchronise with database
seq.conn.sync( { 'force': true} ).then( ( ) => {
    seq.User.create({ // INSERT INTO "people" ("id","name") VALUES (DEFAULT,'bubbles') RETURNING *;
        name: 'Mua',
        email: 'mua@mua',
        password: 'mua'
    }).then( ( user ) => { // INSERT INTO "messages" ("id","body","personId") VALUES (DEFAULT,'i like trains',1) RETURNING *;
        user.createMessage({
            title: 'Ohaiyo!',
            body: 'I saw two bunnies !!!'
        })
    }).then
    seq.User.create({ // INSERT INTO "people" ("id","name") VALUES (DEFAULT,'bubbles') RETURNING *;
        name: 'Cat',
        email: 'miaw@miaw',
        password: 'miaw'
    }).then( ( user ) => { // INSERT INTO "messages" ("id","body","personId") VALUES (DEFAULT,'i like trains',1) RETURNING *;
        user.createMessage({
            title: 'Konbanwa!',
            body: 'I will have peanutbutter today !!!'
        })
    }).then 
    seq.User.create({ // INSERT INTO "people" ("id","name") VALUES (DEFAULT,'bubbles') RETURNING *;
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


module.exports = seq

