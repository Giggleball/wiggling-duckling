module.exports = function(sequelize, DataTypes) {
    let Comment = seq.define( 'comment', {
        body: sequelize.STRING
    },  {
        classMethods: {
            associate: function( models ) {
                Comment.belongsTo( Models.User )
                Comment.belongsTo( Models.Message )
            }
        }
    })
    return Comment;
}