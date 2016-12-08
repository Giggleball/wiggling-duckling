// Set up DB
const sequelize	= require( 'sequelize' )


// Container object
let seq 		= {
	mod: { }
}

seq.conn 		= new sequelize( 'game', process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
	server: 'localhost',
	dialect: 'postgres'
})


///////////// ------ If I add chat feature, look up 'buffer' so msg aren't pushed as fast ------ /////////////


// Models
seq.User = seq.conn.define( 'user', {
	username: {
		type: sequelize.STRING,
		unique: true,
		allowNull: false,
		validate: {
			len: {
				args: 3,
				msg: 'Username must be at least 3 characters'
			}
		}
	},
	name: {
	type: sequelize.STRING,
		unique: false,
		allowNull: false,
		validate: {
			len: {
				args: 2,
				msg: 'Name must be at least 2 characters'
			}
		}
	},
	email: {
		type: sequelize.STRING,
		unique: true,
		allowNull: false,
		validate: {
			len: {
				args: 1,
				msg: 'Email must be filled in'
			}
		}
	},
	password: {
		type: sequelize.STRING,
		unique: false,
		allowNull: false,
		validate: {
			len: {
				args: 4,
				msg: 'Password must be at least 4 characters long'
			}
		}
	},
	score: {
		type: sequelize.STRING,
		unique: false,
		allowNull: false,
	}
})


// User
seq.User = seq.conn.define( 'user', {
	username: sequelize.STRING,
	name: sequelize.STRING,
	email: sequelize.STRING,
	password: sequelize.STRING,
	score: sequelize.STRING
})


// Sync with DB
seq.conn.sync( { 'force': true} ).then( 
	( ) => {
		console.log( 'db has been updated' )
	})


module.exports = seq








