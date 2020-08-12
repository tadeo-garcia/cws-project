'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    eventTypeId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    time: DataTypes.TIME,
    userId: DataTypes.INTEGER,
    hostId: DataTypes.INTEGER,
    capacity: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {});
  Event.associate = function(models) {
    Event.belongsToMany(models.User, {
      through: models.UserEvent,
      foriegnKey: 'eventId',
      otherKey: 'userId'
    }),
    Event.belongsTo(models.User, {
      foreignKey: 'hostId'
    }),
    Event.belongsTo(models.EventType, {
      foreignKey: 'eventTypeId'
    })
  };
  return Event;
};