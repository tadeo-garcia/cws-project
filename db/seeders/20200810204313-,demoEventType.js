'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('EventTypes', [{
    type: 'Paint and Wine', 
    eventBanner:'wineBanner.img', 
    eventCard:'wineCard.img', 
    eventDescription:'Paint while being a wine-o', 
    eventSuggestions:'wine, paint', 
    ageLimit: true
      }], 
      { fields: [ 
        'type', 
        'eventBanner', 
        'eventCard', 
        'eventDescription', 
        'eventSuggestions', 
        'ageLimit' ]})
  },
  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('EventTypes', null, {});
  
  }
};
