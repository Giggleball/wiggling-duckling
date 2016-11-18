module.exports = function(sequelize, DataTypes) {
    let Message = seq.define( 'message', {
        title: sequelize.STRING,
        body: sequelize.STRING
    },  {
        classMethods: {
            associate: function( models ) {
                Message.hasMany ( Models.Comment )
                Message.belongsTo( Models.User )
            }
        }
    })
    return Message;
}