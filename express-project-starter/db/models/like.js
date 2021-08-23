'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    user_id: DataTypes.INTEGER,
    review_id: DataTypes.INTEGER,
    like: DataTypes.BOOLEAN
  }, {});
  Like.associate = function(models) {
    // associations can be defined here
    Like.belongsTo(models.User, { foreignKey: 'user_id' });
    Like.belongsTo(models.Review, { foreignKey: 'review_id' });
  };
  return Like;
};
