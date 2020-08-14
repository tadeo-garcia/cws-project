'use strict';

module.exports = {
up: (queryInterface, Sequelize) => {
return queryInterface.bulkInsert('UserEvents', [
// 1 host, 2,3 attend
{ userId: 3, eventId: 1 },
{ userId: 2, eventId: 1 },
// 3 host
{ userId: 2, eventId: 2 },
{ userId: 1, eventId: 2 },
// 1 host
{ userId: 2, eventId: 3 },
{ userId: 3, eventId: 3 },
// event 4 has no participants yet????
// event 5 2 host
{ userId: 1, eventId: 5 },
{ userId: 3, eventId: 5 },
//event 6 3 host
], { fields: ['userId', 'eventId'] });
},

down: (queryInterface, Sequelize) => {
return queryInterface.bulkDelete('UserEvents', null, {});

}
};