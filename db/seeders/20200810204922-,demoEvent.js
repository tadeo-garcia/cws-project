'use strict';

const test = new Date('Sat Nov 01 2013 22:00:00 GMT-0200 (BRST)');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [{
      eventTypeId: '1',
      date: new Date(),
      // time: new Date('2010-08-05 00:00:00Z'),
      time: '08:00PM EST',
      // time: new Date(test+"UTC"),
      userId: 1,
      hostId: 1,
      capacity: 10,
      description: 'Milkshakes with Shaie and Steven'
      // createdAt: Date.now(),
      // updatedAt: Date.now()
    }], { fields: ['eventTypeId', 'date', 'time', 'userId', 'hostId', 'capacity', 'description'] });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});

  }
};
