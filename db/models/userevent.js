'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserEvent = sequelize.define('UserEvent', {
    UserId: DataTypes.INTEGER,
    EventId: DataTypes.INTEGER

  }, {});
  UserEvent.associate = function(models) {
    // associations can be defined here
  };
  return UserEvent;
};
