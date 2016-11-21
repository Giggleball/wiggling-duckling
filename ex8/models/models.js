// Container object
var db = {
    mod: {}
}


// Set up sql
db.sequelize  = require( 'sequelize' )

db.conn       = new sequelize( 'postgres://' + process.env.POSTGRES_USER + '@localhost/soap' );


// Models

// Users
db.User = db.conn.define( 'user', {
    name: sequelize.STRING,
    email: { type: sequelize.STRING, unique: true },
    password: sequelize.STRING
})


// Messages 
db.Message = db.conn.define( 'message', {
    title: sequelize.STRING,
    body: sequelize.STRING
})


// Comment
db.Comment = db.conn.define( 'comment', {
    body: sequelize.STRING
})

/// Declaring the relationships between tables
Comment.belongsTo( Models.User )
Comment.belongsTo( Models.Message )
Message.hasMany ( Models.Comment )
Message.belongsTo( Models.User )
User.hasMany( Models.Message )
User.hasMany( Models.Comment )


// Synchronise with database
db.conn.sync( {'force': false} ).then( 
    () => { 
        console.log ( 'Sync succeeded' )
    },
    ( err ) => { console.log('sync failed: ' + err) } 
    )

module.exports = db

