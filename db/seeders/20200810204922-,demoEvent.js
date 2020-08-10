'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Events', [{
        eventTypeId:'1', date:'', time:'', userId:'', hostId:'', capacity:'', description:''
      }], {fields:['eventTypeId']});
    
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Events', null, {});
    
  }
};
