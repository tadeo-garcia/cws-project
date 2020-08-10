'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        userName: 'userOne', hashedPassword: bcrypt.hashSync('password', 10), email: 'joseph@smith.com', location: 'dallas', avatar: 'person.jpg', fullName:'Joseph Smith', bio: "I love strangers", interests:'stalking'
      }], { fields: ['userName', 'hashedPassword', 'email', 'location', 'avatar', 'fullName', 'bio', 'interests'] });
    
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Users', null, {});
    
  }
};
