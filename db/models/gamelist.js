'use strict';
module.exports = (sequelize, DataTypes) => {
  const GameList = sequelize.define('GameList', {
    user_id: DataTypes.INTEGER,
    game_id: DataTypes.INTEGER,
    have_played: DataTypes.BOOLEAN
  }, {});
  GameList.associate = function(models) {
    // associations can be defined here
    GameList.belongsTo(models.Game, { foreignKey: 'game_id'})
  };
  return GameList;
};
