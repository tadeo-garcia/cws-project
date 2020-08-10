'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('EventTypes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING(50),
        unique: true
      },
      eventBanner: {
        allowNull: false,
        type: Sequelize.STRING
      },
      eventCard: {
        allowNull: false,
        type: Sequelize.STRING
      },
      eventDescription: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      eventSuggestions: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      ageLimit: {
        allowNull: false,
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('EventTypes');
  }
};