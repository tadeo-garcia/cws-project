'use strict';

// const { INTEGER } = require("sequelize/types");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(5, 70)
      },
      hashedPassword: {
        allowNull: false,
        type: Sequelize.STRING.BINARY
      },
      email: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      avatar: {
        type: Sequelize.STRING
      },
      fullName: {
        // allowNull: false,
        type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.TEXT
      },
      interests: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW")
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
