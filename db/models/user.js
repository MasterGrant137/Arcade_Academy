'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    hashedPassword: DataTypes.STRING,
    screenName: DataTypes.STRING,
    profileImage: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      foreignKey: 'user_id',
      otherKey: 'game_id',
      through: 'GameList'
    }

    User.belongsToMany(models.Game, columnMapping);
    User.hasMany(models.Review, { foreignKey: 'user_id' });
    User.hasMany(models.Like, { foreignKey: 'user_id' });
  };
  return User;
};
