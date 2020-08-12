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
      },
      {
    type: 'High Tea', 
    eventBanner:'eaBanner.img',
    eventCard:'teaCard.img', 
    eventDescription:'Have a nice cup of tea and a crumpet', 
    eventSuggestions:'tea, crumpets', 
    ageLimit: false
      }],
      {
    type: 'Milkshakes', 
    eventBanner:'milkshakeBanner.img', 
    eventCard:'milkshakeCard.img', 
    eventDescription:'Enjoy a calorie bomb with others', 
    eventSuggestions:'milkshakes', 
    ageLimit: false
      }, 
      {
    type: 'Share your pets', 
    eventBanner:'petsBanner.img', 
    eventCard:'petsCard.img', 
    eventDescription:'Share your pets with some stalkers!', 
    eventSuggestions:'doggos and cats', 
    ageLimit: false
      },
      { fields: [ 
        'type', 
        'eventBanner', 
        'eventCard', 
        'eventDescription', 
        'eventSuggestions', 
        'ageLimit' ]},
        )
  },
  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('EventTypes', null, {});
  
  }
};
