module.exports = function(sequelize, DataTypes) {
    let User = seq.define('user', {
        name: sequelize.STRING,
        email: { type: sequelize.STRING, unique: true },
        password: sequelize.STRING
    },  {
        classMethods: {
            associate: function( models ) {
                User.hasMany( Models.Message )
                User.hasMany( Models.Comment )
            }
        }
    })
    return User;
}