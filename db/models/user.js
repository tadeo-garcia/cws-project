'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        len: {
          args: [5, 70],
          msg: 'Username must be between 5 and 70 characters.'
        }
      }
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    location: DataTypes.STRING,
    avatar: DataTypes.STRING,
    fullName: DataTypes.STRING,
    bio: DataTypes.TEXT,
    interests: DataTypes.TEXT
  }, {});
  User.associate = function (models) {
    User.belongsToMany(models.Events, {
      through: models.UserEvent,
      foreignKey: 'userId',
      otherKey: 'eventId'
    }),
    User.hasMany(models.Events, {
      foreignKey: 'hostId'
    })
  };
  return User;
};