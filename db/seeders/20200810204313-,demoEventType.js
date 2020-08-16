'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('EventTypes', [{
      type: 'Paint by Wine',
      eventBanner: '/public/pics/paint-by-wine/nacho-dominguez-argenta-F_ilCik66Hg-unsplash.jpg',
      eventCard: "/public/pics/paint-by-wine/bill-williams-eq5O0oPSEZE-unsplash.jpg",
      eventDescription: 'Grab your paintbrush and a glass of wine',
      eventSuggestions: 'wine, paint',
      ageLimit: true
    },
    {
      type: 'Green Tea',
      eventBanner: '/public/pics/tea-event/oriento-_Ycnch2Ez5o-unsplash.jpg',
      eventCard: '/public/pics/tea-event/manki-kim-L82-kkEBOd0-unsplash.jpg',
      eventDescription: 'Enjoy a relaxing cup of green tea',
      eventSuggestions: 'green tea, relaxing music',
      ageLimit: false
    },
    {
      type: 'Milkshakes',
      eventBanner: '/public/pics/milkshake-event/IMG_0851.JPG.jpeg',
      eventCard: "/public/pics/milkshake-event/jonathan-borba-7TeR1A1MUpM-unsplash.jpg",
      eventDescription: 'Enjoy a calorie bomb with others',
      eventSuggestions: 'milkshakes',
      ageLimit: false
    },
    {
      type: 'Pet Party!',
      eventBanner: '/public/pics/share-your-pet/patrick-hendry-1MO9VGUC138-unsplash.jpg',
      eventCard: '/public/pics/share-your-pet/eric-ward-ISg37AI2A-s-unsplash.jpg',
      eventDescription: 'Talk about your pets for awhile!',
      eventSuggestions: 'doggos and cats',
      ageLimit: false
    },
    {
      type: 'Oktoberfest',
      eventBanner: '/public/pics/oktoberfest/louis-hansel-shotsoflouis-WCm4dFvZnMM-unsplash.jpg',
      eventCard: '/public/pics/oktoberfest/amie-johnson-VJXLzQi5TlE-unsplash.jpg',
      eventDescription: 'Grab your favorite beer stein and a cold beer',
      eventSuggestions: 'chilled glass, beer',
      ageLimit: true
    }],
      {
        fields: [
          'type',
          'eventBanner',
          'eventCard',
          'eventDescription',
          'eventSuggestions',
          'ageLimit']
      },
    )
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('EventTypes', null, {});

  }
};
