'use strict';

const test = new Date('Sat Nov 01 2013 22:00:00 GMT-0200 (BRST)');

module.exports = {
up: (queryInterface, Sequelize) => {
return queryInterface.bulkInsert('Events', [{
eventTypeId: 3,
date: new Date(),
time: '08:00PM EST',
userId: 3,
hostId: 1,
capacity: 10,
description: "A milkshake, or simply shake, is a drink that is usually made by blending milk, ice cream, and flavorings or sweeteners such as butterscotch, caramel sauce, chocolate syrup, fruit syrup, or whole fruit into a thick, sweet, cold mixture."
},
{
eventTypeId: 2,
date: new Date(),
time: '09:00PM EST',
userId: 2,
hostId: 3,
capacity: 10,
description: "Green tea is a type of tea that is made from Camellia sinensis leaves and buds that have not undergone the same withering and oxidation process used to make oolong teas and black teas. ... Green tea originated in China, but its production and manufacture has spread to other countries in East Asia."
},{
eventTypeId: 4,
date: new Date(),
time: '08:00PM EST',
userId: 2,
hostId: 1,
capacity: 10,
description: "Petting your cat or dog feels good. It can lower your blood pressure, helps your body release a relaxation hormone, and cuts down on levels of a stress hormone. It also soothes your pet, says Alan Beck, ScD, director of the Center for the Human-Animal Bond at Purdue University."
},
{
eventTypeId: 1,
date: new Date(),
time: '03:00PM EST',
userId: null,
hostId: 3,
capacity: 10,
description: 'Let one of our experienced instructors show you the joy of painting while unlocking your own inner-creative nature, in this festive communal sip and paint'
},{
eventTypeId: 5,
date: new Date(),
time: '08:00PM EST',
userId: 3,
hostId: 2,
capacity: 10,
description: "The Oktoberfest is the world's largest Volksfest. Held annually in Munich, Bavaria, Germany, it is a 16- to 18-day folk festival running from mid- or late September to the first Sunday in October, with more than six million people from around the world attending the event every year."
},
{
eventTypeId: 1,
date: new Date(),
time: '03:00PM EST',
userId: 2,
hostId: 3,
capacity: 10,
description: "We had such a fun time doing the first paint event that we're trying to make it a weekly thing! Grab your paintbrush and another glass and let's do it again"
} ], { fields: ['eventTypeId', 'date', 'time', 'userId', 'hostId', 'capacity', 'description'] });

},

down: (queryInterface, Sequelize) => {
return queryInterface.bulkDelete('Events', null, {});

}
};