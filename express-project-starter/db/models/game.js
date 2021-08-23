'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    name: DataTypes.STRING,
    genre: DataTypes.STRING
  }, {});
  Game.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      foreignKey: 'game_id',
      otherKey: 'user_id',
      through: 'GameList'
    }

    Game.belongsToMany(models.User, columnMapping);
    Game.hasMany(models.Review, { foreignKey: 'game_id' });
  };
  return Game;
};
