'use strict';
module.exports = (sequelize, DataTypes) => {
  const EventType = sequelize.define('EventType', {
     type: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        len: {
          args: [5, 50],
          msg: 'Event type must be between 5 and 50 characters.'
        }
      }
    },
    eventBanner: DataTypes.STRING,
    eventCard: DataTypes.STRING,
    eventDescription: DataTypes.TEXT,
    eventSuggestions: DataTypes.TEXT,
    ageLimit: DataTypes.BOOLEAN
  }, {});
  EventType.associate = function(models) {
    EventType.hasMany(models.Event, {
      foreignKey: 'eventTypeId'
    })
  };
  return EventType;
};