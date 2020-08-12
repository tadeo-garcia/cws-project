'use strict';

const test = new Date('Sat Nov 01 2013 22:00:00 GMT-0200 (BRST)');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [{
      eventTypeId: 3,
      date: new Date(),
      time: '08:00PM EST',
      userId: 1,
      hostId: 1,
      capacity: 10,
      description: 'Milkshakes with Shaie and Steven'
    },
    {
      eventTypeId: 1,
      date: new Date(),
      time: '03:00PM EST',
      userId: 3,
      hostId: 3,
      capacity: 10,
      description: 'Let one of our experienced instructors show you the joy of painting while unlocking your own inner-creative nature, in this festive communal sip and paint'
    } ], { fields: ['eventTypeId', 'date', 'time', 'userId', 'hostId', 'capacity', 'description'] });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});

  }
};
