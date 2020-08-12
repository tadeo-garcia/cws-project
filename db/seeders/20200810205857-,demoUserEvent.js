'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserEvents', [{
      userId: 1, eventId: 1
    }], {fields: ['userId', 'eventId']});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserEvents', null, {});

  }
};
