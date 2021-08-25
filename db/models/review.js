'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    content: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    game_id: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, { foreignKey: 'user_id' });
    Review.hasMany(models.Like, { foreignKey: 'review_id' });
    Review.belongsTo(models.Game, { foreignKey: 'game_id' });
  };
  return Review;
};
