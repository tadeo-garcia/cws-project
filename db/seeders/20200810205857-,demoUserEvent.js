'use strict';

module.exports = {
up: (queryInterface, Sequelize) => {
return queryInterface.bulkInsert('UserEvents', [
// 1 host, 2,3 attend
{ UserId: 3, EventId: 1 },
{ UserId: 2, EventId: 1 },
// 3 host
{ UserId: 2, EventId: 2 },
{ UserId: 1, EventId: 2 },
// 1 host
{ UserId: 2, EventId: 3 },
{ UserId: 3, EventId: 3 },
{ UserId: 4, EventId: 3 },
{ UserId: 5, EventId: 3 },
{ UserId: 6, EventId: 3 },
{ UserId: 7, EventId: 3 },
{ UserId: 8, EventId: 3 },
{ UserId: 9, EventId: 3 },
{ UserId: 10, EventId: 3 },

// event 4 has no participants yet????
{ UserId: 1, EventId: 4 },
{ UserId: 2, EventId: 4 },
{ UserId: 3, EventId: 4 },
{ UserId: 4, EventId: 4 },
{ UserId: 5, EventId: 4 },
{ UserId: 6, EventId: 4 },
{ UserId: 7, EventId: 4 },
{ UserId: 8, EventId: 4 },
// { UserId: 9, EventId: 4 },
// { UserId: 10, EventId: 4 },

// event 5 2 host
{ UserId: 1, EventId: 5 },
{ UserId: 3, EventId: 5 },
//event 6 3 host
], { fields: ['UserId', 'EventId'] });
},

down: (queryInterface, Sequelize) => {
return queryInterface.bulkDelete('UserEvents', null, {});

}
};
