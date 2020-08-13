'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
up: async (queryInterface, Sequelize) => {
return queryInterface.bulkInsert('Users', [{
userName: 'userOne', 
hashedPassword: await bcrypt.hash('password', 10), 
email: 'joseph@smith.com', 
location: 'dallas', 
avatar: 'person.jpg', 
fullName:'Joseph Smith', 
bio: "I love strangers", 
interests:'stalking'
},
{
userName: 'userTwo', 
hashedPassword: await bcrypt.hash('password', 10), 
email: 'leeory@jenkins.com', 
location: 'Azeroth', 
avatar: 'person2.jpg', 
fullName:'Leeroy Jenkins', 
bio: "I love chicken", 
interests:'charging'
},
{
userName: 'userThree', 
hashedPassword: await bcrypt.hash('password', 10), 
email: 'mary@smith.com', 
location: 'Springfield', 
avatar: 'person3.jpg', 
fullName:'Mary Smith', 
bio: "I love facebook", 
interests:'painting by wine'
}], { fields: ['userName', 'hashedPassword', 'email', 'location', 'avatar', 'fullName', 'bio', 'interests'] });
},

down: async (queryInterface, Sequelize) => {
return queryInterface.bulkDelete('Users', null, {});
}
};